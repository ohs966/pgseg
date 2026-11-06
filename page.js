/* Renders a content page from PAGES[document.body.dataset.page] */
(function () {
  let P; const S = window.Site;
  const tx = (o) => (o ? o[S.lang] || o.en : "");
  let wa; const _wa = () => PALM.phone;
  const selTxt = () => (S.lang === "ar" ? "اخترت هذا" : "You selected this");
  const picker = (list) => `<nav class="picker" aria-label="${S.lang === "ar" ? "اختر" : "Jump to"}">${list.map((x) => `<a class="pick" href="#${x.id}" data-id="${x.id}">${x.img ? `<span class="pick-img"><img src="${S.esc(S.thumb(x.img, 500))}" alt="" loading="lazy" /></span>` : ""}<span class="pick-ico">${icon(x.icon, 18)}</span><b>${S.esc(tx(x.h))}</b></a>`).join("")}</nav>`;
  /** Seasonal ranges shown in Offers: the ranges whose season is running now or starts soon */
  function seasons(now) {
    now = now || new Date(); const m = now.getMonth() + 1; const out = [];
    const W = { n: { en: "Winter workwear and heating", ar: "ملابس العمل الشتوية والتدفئة" }, k: /\b(winter|rain suit|rain coat|fleece|beanie|room heater|hoodie|gum boots|water heater|thermal insulation)/i };
    const R = { n: { en: "Ramadan hospitality", ar: "ضيافة رمضان" }, k: /\b(buffet|banquet|beverage dispenser|soup kettle|serving utensils|tea|coffee|dates|disposable cutlery|paper cups|room service tray|chair cover|electric kettle)/i };
    const B = { n: { en: "Back to school", ar: "العودة للمدارس" }, k: /\b(notebook|ballpoint|pens and pencils|highlighters|whiteboard|school|teacher desk|box file|stapler)/i };
    const H = { n: { en: "Summer cooling and hydration", ar: "التبريد ومياه الشرب صيفا" }, k: /\b(fans?\b|exhaust fan|industrial pedestal fan|evaporative air cooler|water dispenser|drinking water fountain|ice maker|sun loungers|water tank)/i };
    const ram = [new Date("2027-02-08"), new Date("2028-01-28"), new Date("2029-01-16"), new Date("2030-01-05")];
    if (ram.some((d) => now >= new Date(d.getTime() - 75 * 864e5) && now <= new Date(d.getTime() + 32 * 864e5))) out.push(R);
    if (m >= 10 || m <= 2) out.push(W);
    if (m >= 3 && m <= 8) out.push(H);
    if (m >= 7 && m <= 10) out.push(B);
    return out.length ? out : [W];
  }
  let ft;
  function focusTarget(id, smooth) {
    const t = document.getElementById(id); if (!t || !t.classList.contains("pg-sec")) { if (t) t.scrollIntoView({ block: "start" }); return; }
    if (t.hidden) { const all = document.querySelector('.gfilter .chip[data-gd=""]'); if (all) all.click(); }
    document.querySelectorAll(".pg-sec.is-target").forEach((e) => e.classList.remove("is-target"));
    document.querySelectorAll(".pick").forEach((a) => a.classList.toggle("on", a.dataset.id === id));
    t.classList.add("is-target"); const wrap = t.parentElement; wrap.classList.add("focusing");
    clearTimeout(ft); ft = setTimeout(() => wrap.classList.remove("focusing"), 2600);
    t.setAttribute("tabindex", "-1"); t.focus({ preventScroll: true });
    const reduce = window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches;
    t.scrollIntoView({ behavior: smooth && !reduce ? "smooth" : "auto", block: "start" });
  }
  function bindPicker() { document.querySelectorAll(".pick").forEach((a) => a.onclick = (e) => { e.preventDefault(); history.replaceState(null, "", "#" + a.dataset.id); focusTarget(a.dataset.id, true); }); }
  window.addEventListener("hashchange", () => focusTarget(decodeURIComponent(location.hash.slice(1)), true));
  function render() {
    wa = _wa().replace(/[^\d]/g, "");
    P = window.PAGES[document.body.dataset.page]; if (!P) return;
    const el = document.getElementById("page"); document.title = tx(P.title) + (S.lang === "ar" ? " | بالم للتوريدات العامة" : " | Palm General Supply");
    let h = `<div class="wrap">${S.crumbs([{ label: tx(P.title) }])}</div><section class="pg-hero"><div class="wrap"><h1>${S.esc(tx(P.title))}</h1><p>${S.esc(tx(P.lead))}</p></div></section><div class="wrap pg-body">`;
    if (P.sections) {
      const imgd = P.sections.some((x) => x.img);
      if (imgd) h += picker(P.sections);
      else if (P.sections.length > 3 && P.sections[0].icon) h += `<nav class="pg-toc" aria-label="On this page">${P.sections.map((x) => `<a href="#${x.id}">${x.icon ? icon(x.icon, 20) : ""}<span>${S.esc(tx(x.h))}</span></a>`).join("")}</nav>`;
      h += `<div class="pg-secs ${P.sections[0].icon ? "" : "plain"} ${imgd ? "imgd" : ""}">` + P.sections.map((x) => x.img ? `<section class="pg-sec has-img" id="${x.id}" data-sel="${S.esc(selTxt())}"><div class="sec-img"><img src="${S.esc(x.img)}" alt="" loading="lazy" /><span class="sec-badge">${icon(x.icon, 26)}</span></div><div class="sec-body"><h2>${S.esc(tx(x.h))}</h2><p>${S.esc(tx(x.p))}</p>${x.b ? `<ul class="ticks">${x.b.map((b) => `<li>${S.esc(tx(b))}</li>`).join("")}</ul>` : ""}<a class="btn sm sec-cta" href="contact.html?about=${encodeURIComponent(tx(x.h))}">${S.lang === "ar" ? "اسأل عن هذا" : "Ask us about this"} ›</a></div></section>` : `<section class="pg-sec" id="${x.id}" data-sel="${S.esc(selTxt())}">${x.icon ? `<div class="pg-ico">${icon(x.icon, 34)}</div>` : ""}<div><h2>${S.esc(tx(x.h))}</h2><p>${S.esc(tx(x.p))}</p>${x.b ? `<ul class="ticks">${x.b.map((b) => `<li>${S.esc(tx(b))}</li>`).join("")}</ul>` : ""}</div></section>`).join("") + `</div>`;
    }
    if (P.industries) h += picker(P.industries) + `<div class="ind-grid pg-secs imgd">` + P.industries.map((x) => `<article class="ind pg-sec has-img" id="${x.id}" data-sel="${S.esc(selTxt())}"><div class="sec-img">${x.img ? `<img src="${S.esc(x.img)}" alt="" loading="lazy" />` : ""}<span class="sec-badge">${icon(x.icon, 26)}</span></div><div class="sec-body"><h2>${S.esc(tx(x.h))}</h2><p>${S.esc(tx(x.p))}</p><span class="ind-lbl">${S.lang === "ar" ? "الأقسام الأكثر طلبا" : "Most ordered departments"}</span><div class="ind-deps" data-deps="${x.d.join(",")}"></div><a class="btn sm sec-cta" href="rfq.html?type=RFQ&about=${encodeURIComponent(tx(x.h))}">${S.lang === "ar" ? "اطلب عرض سعر لهذا القطاع" : "Request a quotation for this sector"} ›</a></div></article>`).join("") + `</div>`;
    if (P.guideList) {
      const G = window.GUIDES || []; const codes = [...new Set(G.map((g) => g.d))];
      h += `<div class="gfilter" role="group" aria-label="${S.lang === "ar" ? "تصفية حسب القسم" : "Filter by department"}"><button class="chip on" data-gd="">${S.lang === "ar" ? "كل الأدلة" : "All guides"} <span>${G.length}</span></button>${codes.map((c) => `<button class="chip" data-gd="${c}"><span class="dn" data-dn="${c}">${c.replace(/_/g, " ")}</span> <span>${G.filter((g) => g.d === c).length}</span></button>`).join("")}</div>`;
      h += `<div class="pg-secs imgd guides">` + G.map((x) => `<section class="pg-sec has-img guide" id="${x.id}" data-d="${x.d}" data-sel="${S.esc(selTxt())}"><div class="sec-img"><img data-dimg="${x.d}" alt="" loading="lazy" /><span class="sec-badge">${icon(x.icon, 26)}</span><span class="sec-dep" data-dn="${x.d}"></span></div><div class="sec-body"><h2>${S.esc(tx(x.h))}</h2><p>${S.esc(tx(x.p))}</p>${x.b ? `<ul class="ticks">${x.b.map((b) => `<li>${S.esc(tx(b))}</li>`).join("")}</ul>` : ""}<a class="btn sm" href="catalog.html?d=${x.d}">${S.lang === "ar" ? "تسوق القسم" : "Shop this department"} ›</a></div></section>`).join("") + `</div>`;
    }
    if (P.faq) h += `<div class="faq">` + P.faq.map(([q, a]) => `<details><summary>${S.esc(tx(q))}</summary><p>${S.esc(tx(a))}</p></details>`).join("") + `</div>`;
    if (P.contact) h += `<div class="ct-grid"><div class="ct-cards">
        <a class="ct-card" href="tel:${PALM.phone.replace(/\s/g, "")}">${icon("chat", 28)}<span>${S.t("c_call")}</span><b dir="ltr">${PALM.phone}</b></a>
        <a class="ct-card" href="tel:${PALM.phone2.replace(/\s/g, "")}">${icon("chat", 28)}<span>${S.lang === "ar" ? "موبايل" : "Mobile"}</span><b dir="ltr">${PALM.phone2}</b></a>
        <a class="ct-card" href="https://wa.me/${wa}">${icon("chat", 28)}<span>WhatsApp</span><b dir="ltr">${PALM.phone}</b></a>
        <a class="ct-card" href="mailto:${PALM.email}">${icon("paper", 28)}<span>${S.t("c_mail")}</span><b>${PALM.email}</b></a>
        <div class="ct-card">${icon("truck", 28)}<span>${S.lang === "ar" ? "مواعيد العمل" : "Working hours"}</span><b>${S.lang === "ar" ? "الأحد إلى الخميس، 9 ص إلى 6 م" : "Sunday to Thursday, 9 am to 6 pm"}</b></div>
        <a class="ct-card ct-rfx" href="rfq.html">${icon("quote", 28)}<span>${S.lang === "ar" ? "للشركات والجهات" : "For companies and entities"}</span><b>${S.lang === "ar" ? "أرسل RFQ أو RFP أو RFI ›" : "Send an RFQ, RFP or RFI ›"}</b></a>
      </div><form id="cform" class="form ct-form"><h2>${S.lang === "ar" ? "أرسل رسالة" : "Send a message"}</h2>
        <label><span data-t="fm_company"></span><input name="company" autocomplete="organization" /></label>
        <label><span data-t="fm_name"></span><input name="name" required autocomplete="name" /></label>
        <label><span data-t="fm_phone"></span><input name="phone" required dir="ltr" inputmode="tel" autocomplete="tel" /></label>
        <label><span data-t="fm_email"></span><input name="email" type="email" dir="ltr" autocomplete="email" /></label>
        <label><span>${S.lang === "ar" ? "رسالتك" : "Your message"}</span><textarea name="notes" rows="4" required></textarea></label>
        <button class="btn dark big" type="submit" data-t="fm_send"></button><p class="msg" id="cmsg" role="status"></p></form></div>`;
    if (P.rfx) { const tp = (S.q("type") || "RFQ").toUpperCase(); const ar = S.lang === "ar";
      const types = [["RFQ", ar ? "طلب عرض سعر (RFQ)" : "Request for Quotation (RFQ)", ar ? "أسعار لقائمة أصناف وكميات محددة" : "Prices for a defined list of items and quantities"], ["RFP", ar ? "طلب مقترح (RFP)" : "Request for Proposal (RFP)", ar ? "حل توريد أو خدمة متكامل مع عرض فني ومالي" : "A full supply or service solution with technical and commercial offer"], ["RFI", ar ? "طلب معلومات (RFI)" : "Request for Information (RFI)", ar ? "تأهيل مورد: بيانات الشركة والقدرات والمستندات" : "Supplier qualification: company profile, capabilities and documents"]];
      h += `<form id="rform" class="form ct-form rfx"><fieldset class="rfx-types"><legend>${ar ? "نوع الطلب" : "Request type"}</legend>${types.map(([v, l, d]) => `<label class="opt-card"><input type="radio" name="rtype" value="${v}" ${v === tp ? "checked" : ""} /><b>${l}</b><small>${d}</small></label>`).join("")}</fieldset>
        <div class="rfx-grid"><label><span>${ar ? "اسم الشركة أو الجهة" : "Company or entity"}</span><input name="company" required autocomplete="organization" /></label>
        <label><span>${ar ? "اسم المسؤول" : "Contact person"}</span><input name="name" required autocomplete="name" /></label>
        <label><span>${ar ? "المسمى الوظيفي" : "Job title"}</span><input name="title" autocomplete="organization-title" /></label>
        <label><span>${ar ? "الموبايل / واتساب" : "Mobile / WhatsApp"}</span><input name="phone" required dir="ltr" inputmode="tel" autocomplete="tel" /></label>
        <label><span>${ar ? "البريد الإلكتروني" : "Email"}</span><input name="email" type="email" required dir="ltr" autocomplete="email" /></label>
        <label><span>${ar ? "رقم المرجع أو المناقصة (إن وجد)" : "Your reference or tender number (optional)"}</span><input name="ref" dir="ltr" /></label>
        <label><span>${ar ? "مكان التسليم (المدينة / المحافظة)" : "Delivery location (city / governorate)"}</span><input name="city" /></label>
        <label><span>${ar ? "آخر موعد لتقديم العرض" : "Submission deadline"}</span><input name="deadline" type="date" dir="ltr" /></label></div>
        <label><span>${ar ? "عنوان الطلب" : "Subject"}</span><input name="subject" required placeholder="${ar ? "مثال: توريد مهمات وقاية لموقع إنشاءات في العاصمة الإدارية" : "e.g. PPE supply for a construction site in the New Capital"}" /></label>
        <label><span>${ar ? "النطاق والأصناف والكميات والمواصفات" : "Scope, items, quantities and specifications"}</span><textarea name="scope" rows="7" required placeholder="${ar ? "اكتب الأصناف والكميات والمواصفات، أو الصق جدول الكميات (BOQ)" : "List items, quantities and specs, or paste your bill of quantities (BOQ)"}"></textarea></label>
        <label><span>${ar ? "رابط المستندات (Google Drive أو Dropbox أو WeTransfer)" : "Link to documents (Google Drive, Dropbox or WeTransfer)"}</span><input name="docs" type="url" dir="ltr" placeholder="https://" /></label>
        <p class="muted small">${ar ? "يمكنك أيضا إرسال كراسة الشروط والملفات على " : "You can also email the tender documents and files to "}<a href="mailto:${PALM.email}?subject=RFQ">${PALM.email}</a>${ar ? " مع ذكر عنوان الطلب." : " quoting the subject."}</p>
        <button class="btn dark big" type="submit">${ar ? "إرسال الطلب" : "Send request"}</button><p class="msg" id="rmsg" role="status"></p></form>`; }
    if (P.featured) h += `<section><div class="sec-head"><h2>${S.lang === "ar" ? "منتجات المواسم الحالية" : "Featured: seasonal ranges"} <small class="muted" id="seasonlbl"></small></h2><a class="more" href="catalog.html">${S.t("shop_all")} ›</a></div><div class="pgrid" id="feat"><div class="empty">${S.t("loading")}</div></div></section>`;
    if (P.track) h += `<form id="tform" class="form ct-form track"><label><span>${S.lang === "ar" ? "رقم عرض السعر أو الطلب" : "Quotation or order number"}</span><input name="ref" required dir="ltr" placeholder="Q-2026-0001" /></label><label><span data-t="fm_phone"></span><input name="phone" dir="ltr" inputmode="tel" /></label><button class="btn dark big" type="submit">${S.lang === "ar" ? "اسأل عن الحالة على الواتساب" : "Ask for status on WhatsApp"}</button></form>`;
    if (P.form) h += `<form id="gform" class="form ct-form"><h2>${S.lang === "ar" ? "أرسل بياناتك" : "Send your details"}</h2>${P.form.fields.map((k) => `<label><span data-t="fm_${k}"></span><input name="${k}" ${k === "name" || k === "phone" ? "required" : ""} ${k === "phone" || k === "email" ? 'dir="ltr"' : ""} ${k === "email" ? 'type="email"' : ""} /></label>`).join("")}<label><span>${S.esc(tx(P.form.msg))}</span><textarea name="notes" rows="4" required></textarea></label><button class="btn dark big" type="submit" data-t="fm_send"></button><p class="msg" id="gmsg" role="status"></p></form>`;
    if (P.blog) h += `<div class="bgrid">${(window.POSTS || []).map((p) => S.postCard(p)).join("")}</div><p class="muted">${S.lang === "ar" ? "مقالات جديدة كل أسبوع. اشترك في النشرة أسفل الصفحة." : "New articles every week. Sign up to the newsletter at the bottom of the page."}</p>`;
    if (P.cta) h += `<div class="pg-cta"><h2>${S.esc(tx(P.cta))}</h2><div><a class="btn dark" href="quote.html" data-t="request_quote"></a> <a class="btn wa" href="https://wa.me/${wa}">WhatsApp</a></div></div>`;
    h += `</div>`;
    el.innerHTML = h; S.apply();
    bindPicker();
    el.querySelectorAll(".pg-secs.imgd > .pg-sec").forEach((sec) => { sec.classList.add("clickable"); sec.onclick = (e) => { if (e.target.closest("a,button,summary,input,textarea,select")) return; history.replaceState(null, "", "#" + sec.id); focusTarget(sec.id, true); }; });
    const about = S.q("about"); if (about) { const ta = el.querySelector("#cform textarea, #rform textarea[name=scope]"); if (ta && !ta.value) ta.value = (S.lang === "ar" ? "أرغب في معرفة المزيد عن: " : "I would like to know more about: ") + about + "\n"; }
    if (location.hash) setTimeout(() => focusTarget(decodeURIComponent(location.hash.slice(1)), false), 80);
    if (P.guideList) {
      const box = el.querySelector(".pg-secs.guides");
      el.querySelectorAll(".gfilter .chip").forEach((b) => b.onclick = () => { el.querySelectorAll(".gfilter .chip").forEach((x) => x.classList.toggle("on", x === b)); const d = b.dataset.gd; box.querySelectorAll(".guide").forEach((g) => { g.hidden = !!d && g.dataset.d !== d; });
        const first = box.querySelector(".guide:not([hidden])"); if (d && first) { history.replaceState(null, "", "#" + first.id); focusTarget(first.id, true); } else { box.querySelectorAll(".is-target").forEach((x) => x.classList.remove("is-target")); box.scrollIntoView({ behavior: "smooth", block: "start" }); } });
      S.departments().then((deps) => { const ph = (c) => S.depPhoto ? S.depPhoto(c) : ""; el.querySelectorAll("[data-dn]").forEach((n) => { const d = deps.find((x) => x.code === n.dataset.dn); if (d) n.textContent = S.pick(d, "name"); }); S.catalogue().then((rows) => { const used = new Set(); const byDep = {}; rows.forEach((r) => { const im = r.images && r.images[0]; if (im) (byDep[r.sector_code] = byDep[r.sector_code] || []).push(im); });
          const all = rows.map((r) => r.images && r.images[0]).filter(Boolean);
          el.querySelectorAll("img[data-dimg]").forEach((im) => { const c = im.dataset.dimg; const pool = [ph(c)].concat(byDep[c] || []).filter(Boolean); let u = pool.find((x) => !used.has(x)) || all.find((x) => !used.has(x)); if (u) { used.add(u); im.src = S.thumb(u, 700); } else im.closest(".sec-img").classList.add("noimg"); }); }).catch(() => {}); }).catch(() => {});
    }
    if (P.industries) S.departments().then((deps) => document.querySelectorAll(".ind-deps").forEach((box) => { box.innerHTML = box.dataset.deps.split(",").map((c) => deps.find((d) => d.code === c)).filter(Boolean).map((d) => `<a href="catalog.html?d=${d.code}">${S.esc(S.pick(d, "name"))}</a>`).join(""); })).catch(() => {});
    if (P.featured) S.catalogue().then((rows) => { const ss = seasons(); const lbl = document.getElementById("seasonlbl"); if (lbl) lbl.textContent = ss.map((x) => tx(x.n)).join(" · ");
      const txt = (x) => (x.name_en || "").toLowerCase();
      const hit = (x) => ss.some((z) => z.k.test(txt(x)));
      const pool = rows.filter(hit); const f = pool.filter((x) => x.images && x.images.length).concat(pool.filter((x) => !(x.images && x.images.length))).slice(0, 12);
      const box = document.getElementById("feat"); box.innerHTML = f.length ? f.map((x) => S.card(x)).join("") : `<div class="empty">${S.lang === "ar" ? "منتجات الموسم القادم تضاف قريبا." : "Next season's range is being added."}</div>`; S.bindAdd(box, f); }).catch(() => {});
    const tf = document.getElementById("tform");
    if (tf) tf.onsubmit = (e) => { e.preventDefault(); const ref = tf.ref.value.trim(); const msg = (S.lang === "ar" ? "مرحبا، أريد معرفة حالة الطلب رقم " : "Hello, I would like the status of order ") + ref; window.open("https://wa.me/" + wa + "?text=" + encodeURIComponent(msg), "_blank"); };
    const gf = document.getElementById("gform");
    if (gf) gf.onsubmit = async (e) => { e.preventDefault(); const b = gf.querySelector("button"); b.disabled = true; const m = document.getElementById("gmsg"); const d = Object.fromEntries(new FormData(gf));
      try { await S.lead(P.form.source, d, d.notes); gf.reset(); m.textContent = S.lang === "ar" ? "تم الإرسال. سنتواصل معك قريبا." : "Sent. We will get back to you shortly."; m.className = "msg ok"; }
      catch (err) { m.textContent = S.lang === "ar" ? "تعذر الإرسال، راسلنا على الواتساب." : "Could not send. Please message us on WhatsApp."; m.className = "msg bad"; }
      b.disabled = false; };
    const rf = document.getElementById("rform");
    if (rf) rf.onsubmit = async (e) => { e.preventDefault(); const b = rf.querySelector("button[type=submit]"); b.disabled = true; const m = document.getElementById("rmsg"); const d = Object.fromEntries(new FormData(rf));
      const msg = `${d.rtype}: ${d.subject}\nCompany: ${d.company}\nContact: ${d.name}${d.title ? " (" + d.title + ")" : ""}\nReference: ${d.ref || "-"}\nDelivery: ${d.city || "-"}\nDeadline: ${d.deadline || "-"}\nDocuments: ${d.docs || "-"}\n\n${d.scope}`;
      try { await S.lead("rfx-" + String(d.rtype).toLowerCase(), d, msg); rf.reset(); m.textContent = S.lang === "ar" ? "تم استلام طلبك. سنؤكد الاستلام خلال يوم عمل ونرسل ردنا قبل الموعد المحدد." : "Request received. We will acknowledge it within one working day and respond before your deadline."; m.className = "msg ok"; }
      catch (err) { m.textContent = S.lang === "ar" ? "تعذر الإرسال. أرسل الطلب على " + PALM.email : "Could not send. Please email it to " + PALM.email; m.className = "msg bad"; }
      b.disabled = false; };
    const f = document.getElementById("cform");
    if (f) f.onsubmit = async (e) => { e.preventDefault(); const b = f.querySelector("button"); b.disabled = true; const msg = document.getElementById("cmsg");
      try { await S.submitRequest(Object.fromEntries(new FormData(f)), []); f.reset(); msg.textContent = S.lang === "ar" ? "تم الإرسال. سنتواصل معك قريبا." : "Sent. We will get back to you shortly."; msg.className = "msg ok"; }
      catch (err) { msg.textContent = S.lang === "ar" ? "تعذر الإرسال، راسلنا على الواتساب." : "Could not send. Please message us on WhatsApp."; msg.className = "msg bad"; }
      b.disabled = false; };
  }
  document.addEventListener("DOMContentLoaded", render); document.addEventListener("langchange", render);
})();
