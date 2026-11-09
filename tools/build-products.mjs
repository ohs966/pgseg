// Builds one static, crawlable HTML page per product (English + Arabic) from the live Palm OS catalogue.
// Runs in GitHub Actions (.github/workflows/products.yml) every night and on demand. No dependencies, Node 20+.
// Output (repo root): product-<slug>.html, product-<slug>-ar.html, updated sitemap.xml, product links in
// other pages rewritten to the static URLs, tools/product-pages.json (manifest), IndexNow ping for changes.
import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";

const ROOT = process.argv[2] || ".";
const SITE = "https://www.pgseg.com/";
const OFFLINE = process.env.OFFLINE_DIR || ""; // local test: folder holding cat.json, deps.json
const rd = (f) => fs.readFileSync(path.join(ROOT, f), "utf8");
const wr = (f, s) => fs.writeFileSync(path.join(ROOT, f), s);

// ---------- data ----------
const siteJs = rd("site.js");
const SUPA = siteJs.match(/supabaseUrl:\s*"([^"]+)"/)[1];
const KEY = siteJs.match(/supabaseAnonKey:\s*"([^"]+)"/)[1];
async function restAll(q) {
  const out = [];
  for (let off = 0; off < 50000; off += 1000) {
    const r = await fetch(`${SUPA}/rest/v1/${q}${q.includes("?") ? "&" : "?"}limit=1000&offset=${off}`, { headers: { apikey: KEY, Authorization: "Bearer " + KEY } });
    if (!r.ok) throw new Error(q + " " + r.status + " " + (await r.text()));
    const page = await r.json(); out.push(...page); if (page.length < 1000) break;
  }
  return out;
}
let deps, rows, opts;
if (OFFLINE) {
  deps = JSON.parse(fs.readFileSync(path.join(OFFLINE, "deps.json"), "utf8"));
  rows = JSON.parse(fs.readFileSync(path.join(OFFLINE, "cat.json"), "utf8"));
  opts = fs.existsSync(path.join(OFFLINE, "opts.json")) ? JSON.parse(fs.readFileSync(path.join(OFFLINE, "opts.json"), "utf8")) : [];
} else {
  deps = await restAll("public_departments?select=*&order=sort_order");
  rows = await restAll("public_catalogue?select=*&order=sector_sort,category_sort,name_en");
  opts = await restAll("public_product_options?select=*&order=attribute_sort,option_sort").catch(() => []);
}
const codes = new Set(deps.map((d) => d.code));
rows = rows.filter((r) => codes.has(r.sector_code));
if (rows.length < 50) throw new Error("Catalogue looks empty (" + rows.length + " rows), refusing to rebuild");

// photos: own, else category's, else department's (same rule as site.js)
const ph = { dep: {}, cat: {} };
for (const d of deps) if (d.image_url) ph.dep[d.code] = d.image_url;
for (const r of rows) { const im = r.images && r.images[0]; if (!im) continue; ph.cat[r.category_id] ??= im; ph.dep[r.sector_code] ??= im; }
const photo = (p) => (p.images && p.images[0]) || ph.cat[p.category_id] || ph.dep[p.sector_code] || "";

// options grouped per product: [{name_en, name_ar, values:[{en, ar}]}]
const optBy = {};
for (const o of opts) {
  const a = ((optBy[o.product_id] ??= {})[o.attribute_id || o.attribute_en] ??= { en: o.attribute_en, ar: o.attribute_ar, values: [] });
  if (!a.values.some((v) => v.en === o.option_en)) a.values.push({ en: o.option_en, ar: o.option_ar });
}

// ---------- helpers (slug must match Site.purl in site.js) ----------
const slug = (p) => (String(p.name_en || "item").toLowerCase().normalize("NFKD").replace(/[\u0300-\u036f]/g, "").replace(/&/g, " and ").replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "").slice(0, 60).replace(/-+$/, "") || "item") + "-" + p.id.slice(0, 8);
const file = (p, l) => "product-" + slug(p) + (l === "ar" ? "-ar" : "") + ".html";
const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const UNIT_AR = { box: "علبة", piece: "قطعة", pair: "زوج", set: "طقم", pack: "عبوة", roll: "رول", can: "جركن", carton: "كرتونة", bundle: "ربطة", metre: "متر" };
const T = {
  en: { home: "Home", all: "All Products", sku: "Item", unit: "Unit", specs: "Specifications", more: "More", brand: "Palm General Supply", add: "Add to quote list", req: "Request quotation now", wa: "WhatsApp us" },
  ar: { home: "الرئيسية", all: "كل المنتجات", sku: "الصنف", unit: "الوحدة", specs: "المواصفات", more: "المزيد من", brand: "بالم للتوريدات العامة", add: "أضف لقائمة العرض", req: "اطلب عرض سعر الآن", wa: "راسلنا واتساب" },
};
const pk = (r, b, l) => (r && (l === "ar" ? r[b + "_ar"] || r[b + "_en"] : r[b + "_en"] || r[b + "_ar"])) || "";
const clip = (s, n) => { s = String(s).replace(/\s+/g, " ").trim(); return s.length <= n ? s : s.slice(0, n - 1).replace(/\s+\S*$/, "") + "…"; };

// ---------- template from product.html ----------
const tpl = rd("product.html");
const headRest = tpl.match(/<head>([\s\S]*?)<\/head>/)[1]
  .replace(/<meta charset[^>]*>\s*/, "").replace(/<!--seo-->[\s\S]*?<!--\/seo-->\s*/, "")
  .replace(/<title>[\s\S]*?<\/title>\s*/, "").replace(/<meta name="description"[^>]*>\s*/, "")
  .replace(/<link rel="(canonical|alternate)"[^>]*>\s*/g, "").replace(/\n{3,}/g, "\n");
const script = tpl.match(/<\/main>\s*(<script>[\s\S]*?<\/script>)/)[1];
const extraTail = tpl.slice(tpl.indexOf(script) + script.length).replace(/<\/body>[\s\S]*$/, ""); // anything else after the page script

const byCat = {};
for (const r of rows) (byCat[r.category_id] ??= []).push(r);
const depOf = Object.fromEntries(deps.map((d) => [d.code, d]));

function page(p, l) {
  const t = T[l], ar = l === "ar", name = pk(p, "name", l), cat = pk(p, "category", l), dep = depOf[p.sector_code], depName = pk(dep, "name", l) || pk(p, "sector", l);
  const en = SITE + file(p, "en"), arU = SITE + file(p, "ar"), url = ar ? arU : en;
  const desc0 = pk(p, "description", l);
  const unit = ar ? UNIT_AR[p.unit] || p.unit || "" : p.unit || "";
  const meta = clip(desc0 ? `${name}: ${desc0}` : (ar ? `${name} من ${cat}. اطلب عرض سعر من بالم للتوريدات العامة مع التوصيل لكل محافظات مصر.` : `${name}, ${cat}. Request a quotation from Palm General Supply, delivered anywhere in Egypt.`), 158);
  const title = clip(ar ? `${name} | ${cat} | بالم للتوريدات العامة` : `${name} | ${cat} | Palm General Supply`, 90);
  const img = photo(p), sku = "PGS-" + p.id.slice(0, 8).toUpperCase();
  const attrs = Object.values(optBy[p.id] || {});
  const specRows = (p.specs || []).map((s) => [ar ? s.k_ar : s.k_en, ar ? s.v_ar : s.v_en]).concat(attrs.map((a) => [ar ? a.ar : a.en, a.values.map((v) => (ar ? v.ar : v.en)).join(ar ? "، " : ", ")]));
  const catHref = "catalog" + (ar ? "-ar" : "") + ".html";
  const rel = (byCat[p.category_id] || []).filter((x) => x.id !== p.id);
  const i0 = Math.max(0, rel.findIndex((x) => x.id > p.id)); // stable, varied neighbours
  const related = rel.slice(i0, i0 + 12).concat(rel.slice(0, Math.max(0, 12 - (rel.length - i0)))).slice(0, 12);
  const optsTxt = attrs.length ? attrs.map((a) => (ar ? a.ar : a.en)).join(ar ? " و" : ", ") : "";
  const ld = [
    { "@context": "https://schema.org", "@type": "Product", name: ar ? p.name_ar || p.name_en : p.name_en, alternateName: ar ? p.name_en : p.name_ar, description: meta, inLanguage: ar ? "ar-EG" : "en", sku, category: `${p.sector_en} > ${p.category_en}`, url, brand: { "@type": "Brand", name: p.brand || "Palm General Supply" }, ...(p.mpn ? { mpn: p.mpn } : {}), ...(img ? { image: img } : {}), ...(specRows.length ? { additionalProperty: specRows.map(([k, v]) => ({ "@type": "PropertyValue", name: k, value: v })) } : {}) },
    { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [[t.home, SITE + (ar ? "index-ar.html" : "")], [t.all, SITE + catHref], [depName, SITE + catHref + "?d=" + p.sector_code], [cat, SITE + catHref + "?d=" + p.sector_code + "&c=" + p.category_id], [name, url]].map(([n, u], i) => ({ "@type": "ListItem", position: i + 1, name: n, item: u })) },
  ];
  const about = ar
    ? `<h2>توريد ${esc(name)} في مصر</h2><p>توفر بالم للتوريدات العامة (PGS) ${esc(name)} ضمن مجموعة ${esc(cat)} في قسم ${esc(depName)}. نورد للشركات والمصانع والفنادق والمستشفيات والمدارس والمقاولين في القاهرة والجيزة والإسكندرية وكل محافظات مصر.</p><p>أرسل لنا الكمية${optsTxt ? " و" + esc(optsTxt) + " المطلوبة" : ""} ومدينة التوصيل، وسنرسل لك عرض سعر مكتوب. يمكنك الطلب بال${esc(unit || "قطعة")} وجمع هذا الصنف مع أصناف أخرى في عرض سعر واحد.</p>
<h3>هل توصلون ${esc(name)} خارج القاهرة؟</h3><p>نعم، نوصل لكل محافظات مصر، والتكلفة والموعد يظهران في عرض السعر.</p>
<h3>كيف أحصل على سعر ${esc(name)}؟</h3><p>أضف الصنف لقائمة العرض أو أرسله لنا على واتساب مع الكمية والمواصفات، والسعر يعتمد على الكمية والمواصفات والتوصيل.</p>`
    : `<h2>Buying ${esc(name)} in Egypt</h2><p>Palm General Supply (PGS) supplies ${esc(name)} as part of its ${esc(cat)} range in the ${esc(depName)} department. We supply companies, factories, hotels, hospitals, schools and contractors in Cairo, Giza, Alexandria and every governorate of Egypt.</p><p>Send us the quantity${optsTxt ? ", the " + esc(optsTxt) + " you need" : ""} and your delivery city and we will send a written quotation. You can order by the ${esc(unit || "piece")} and combine this item with others on one quotation.</p>
<h3>Do you deliver ${esc(name)} outside Cairo?</h3><p>Yes. PGS delivers to all governorates of Egypt; cost and timing are shown on your quotation.</p>
<h3>How do I get a price for ${esc(name)}?</h3><p>Add it to your quote list or send it to us on WhatsApp with the quantity and options. Prices depend on quantity, options and delivery.</p>`;
  const relHtml = related.length ? `<h2>${ar ? "المزيد من " + esc(cat) : "More " + esc(cat)}</h2><ul class="plinks">${related.map((r) => `<li><a href="${file(r, l)}">${esc(pk(r, "name", l))}</a></li>`).join("")}</ul>` : "";
  const crumbs = `<nav class="crumbs" aria-label="Breadcrumb"><a href="${ar ? "index-ar.html" : "index.html"}">${t.home}</a><span aria-hidden="true">›</span><a href="${catHref}">${t.all}</a><span aria-hidden="true">›</span><a href="${catHref}?d=${p.sector_code}">${esc(depName)}</a><span aria-hidden="true">›</span><a href="${catHref}?d=${p.sector_code}&amp;c=${p.category_id}">${esc(cat)}</a><span aria-hidden="true">›</span><span>${esc(name)}</span></nav>`;
  const body = `${crumbs}<div class="prod"><div class="prod-media">${img ? `<img src="${esc(img)}" alt="${esc(name)}" />` : ""}</div><div class="prod-info"><div class="pc-cat">${esc(cat)}</div><h1>${esc(name)}</h1><p class="muted small">${t.sku}: ${sku} · ${t.unit}: ${esc(unit)}</p><p class="desc">${esc(desc0)}</p><div class="buy"><a class="btn big" href="${ar ? "quote-ar.html" : "quote.html"}">${t.req}</a></div></div></div>${specRows.length ? `<section class="specs"><h2>${t.specs}</h2><table>${specRows.map(([k, v]) => `<tr><th>${esc(k)}</th><td>${esc(v)}</td></tr>`).join("")}</table></section>` : ""}`;
  const og = `<meta property="og:type" content="product" />
<meta property="og:site_name" content="Palm General Supply" />
<meta property="og:title" content="${esc(title)}" />
<meta property="og:description" content="${esc(meta)}" />
<meta property="og:url" content="${url}" />
<meta property="og:image" content="${esc(img || SITE + "img/og-pgs-v2.jpg")}" />
<meta property="og:locale" content="${ar ? "ar_EG" : "en_US"}" />
<meta property="og:locale:alternate" content="${ar ? "en_US" : "ar_EG"}" />
<meta name="twitter:card" content="summary_large_image" />`;
  return `<!doctype html>
<html lang="${l}"${ar ? ' dir="rtl"' : ""} data-force-lang="${l}" data-alt-${ar ? "en" : "ar"}="${file(p, ar ? "en" : "ar")}">
<head>
<meta charset="utf-8" />
<title>${esc(title)}</title>
<meta name="description" content="${esc(meta)}" />
<link rel="canonical" href="${url}" />
<link rel="alternate" hreflang="en" href="${en}" />
<link rel="alternate" hreflang="ar" href="${arU}" />
<link rel="alternate" hreflang="x-default" href="${en}" />
${og}
<script id="pld" type="application/ld+json">${JSON.stringify(ld[0]).replace(/</g, "\\u003c")}</script>
<script type="application/ld+json">${JSON.stringify(ld[1]).replace(/</g, "\\u003c")}</script>
<style>.pextra h3{font-size:1.05em;margin:1.2em 0 .3em}.pextra p{max-width:75ch}ul.plinks{list-style:none;padding:0;columns:2;column-gap:2em}ul.plinks li{margin:.35em 0;break-inside:avoid}@media(max-width:640px){ul.plinks{columns:1}}</style>
${headRest.trim()}
</head>
<body>

<main id="main" class="wrap prod-page">${body}<section class="sec pextra" id="pextra">${about}${relHtml}</section></main>
<script>window.PID = "${p.id}";</script>
${script}
${extraTail.trim()}
</body>
</html>
`;
}

// ---------- write pages ----------
const today = new Date().toISOString().slice(0, 10);
const manPath = "tools/product-pages.json";
const old = fs.existsSync(path.join(ROOT, manPath)) ? JSON.parse(rd(manPath)) : { pages: {} };
const pages = {}; const changed = [];
for (const p of rows) for (const l of ["en", "ar"]) {
  const f = file(p, l), html = page(p, l), h = crypto.createHash("sha1").update(html).digest("hex").slice(0, 12);
  const prev = old.pages[f];
  if (!prev || prev.h !== h || !fs.existsSync(path.join(ROOT, f))) { wr(f, html); changed.push(SITE + f); }
  pages[f] = { id: p.id, l, h, d: prev && prev.h === h ? prev.d : today };
}
let removed = 0;
for (const f of Object.keys(old.pages)) if (!pages[f] && fs.existsSync(path.join(ROOT, f))) { fs.unlinkSync(path.join(ROOT, f)); removed++; }
fs.mkdirSync(path.join(ROOT, "tools"), { recursive: true });
wr(manPath, JSON.stringify({ built: new Date().toISOString(), count: rows.length, pages }, null, 0));

// ---------- sitemap ----------
let sm = rd("sitemap.xml").replace(/<url>(?:(?!<\/url>)[\s\S])*?(?:product\.html\?id=|\/product-[a-z0-9-]+\.html)(?:(?!<\/url>)[\s\S])*?<\/url>\s*/g, "");
const smNew = rows.map((p) => { const en = SITE + file(p, "en"), ar = SITE + file(p, "ar"); const alt = `<xhtml:link rel="alternate" hreflang="en" href="${en}"/><xhtml:link rel="alternate" hreflang="ar" href="${ar}"/><xhtml:link rel="alternate" hreflang="x-default" href="${en}"/>`;
  return `<url><loc>${en}</loc><lastmod>${pages[file(p, "en")].d}</lastmod>${alt}</url>\n<url><loc>${ar}</loc><lastmod>${pages[file(p, "ar")].d}</lastmod>${alt}</url>\n`; }).join("");
sm = sm.replace(/<\/urlset>\s*$/, smNew + "</urlset>\n");
wr("sitemap.xml", sm);

// ---------- rewrite legacy product links in other files ----------
const byId = Object.fromEntries(rows.map((p) => [p.id, p]));
let relinked = 0;
for (const f of fs.readdirSync(ROOT)) {
  if (!/\.(html|txt)$/.test(f) || /^product(-|\.html)/.test(f)) continue;
  const src = rd(f); const isAr = /-ar\.html$/.test(f);
  const out = src.replace(/(https:\/\/www\.pgseg\.com\/)?product\.html\?id=([0-9a-f-]{36})((?:&amp;|&)lang=(ar|en))?/g, (m, abs, id, _q, lg) => {
    const p = byId[id]; if (!p) return m; relinked++; return (abs || "") + file(p, lg ? lg : isAr ? "ar" : "en"); });
  if (out !== src) wr(f, out);
}

// ---------- IndexNow (Bing, Yandex, Seznam; Google ignores it) ----------
const keyFile = fs.readdirSync(ROOT).find((f) => /^[0-9a-f]{32}\.txt$/.test(f));
if (keyFile && changed.length && !OFFLINE) {
  const key = keyFile.slice(0, 32);
  for (let i = 0; i < changed.length; i += 9000) {
    const r = await fetch("https://api.indexnow.org/indexnow", { method: "POST", headers: { "content-type": "application/json; charset=utf-8" }, body: JSON.stringify({ host: "www.pgseg.com", key, keyLocation: SITE + keyFile, urlList: changed.slice(i, i + 9000) }) }).catch((e) => ({ status: String(e) }));
    console.log("IndexNow", r.status);
  }
}
console.log(`products ${rows.length}, pages written ${changed.length}, removed ${removed}, links rewritten ${relinked}`);
