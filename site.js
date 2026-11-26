/* Palm General Supply storefront. Reads the live catalogue from Palm OS (Supabase, read only),
   keeps a quote list in the browser and sends quotation requests into Palm OS as leads. */
window.PALM = {
  supabaseUrl: "https://gsgniarlokepcsagvvmq.supabase.co",
  supabaseAnonKey: "sb_publishable_bI8glK6s6T_UX5IWrvhJHQ_ThWSOp1j",
  phone: "+20 111 373 6556",
  phone2: "+20 101 394 8606",
  email: "Sales@pgseg.com",
  linkedin: "https://www.linkedin.com/company/pgseg", instagram: "https://www.instagram.com/pgs.egypt/", facebook: "https://www.facebook.com/palmgeneralsupply.egypt", // paste profile links here and the icons appear in the footer
  partners: ["img/partners/1.png", "img/partners/2.png", "img/partners/3.png"],
};

const DICT = {
  en: {
    up_t: "Have a tender or RFQ document?", up_p: "Upload your procurement list, BOQ, tender or RFQ file and we will price every line. PDF, Word, Excel, CSV or photos, up to 5 files of 15 MB each.", up_btn: "Choose files", up_hint: "or drag and drop them here", up_bad: "This file type or size is not accepted:", up_sending: "Uploading your documents...",
    ft1_eye: "Services", ft1_h: "When the catalogue is not enough", ft1_p: "Custom parts, branded workwear, stock managed on your site or a product brought in from abroad. Our team handles the work around the product too.", ft1_card: "See how we can help",
    ft2_eye: "Specialists", ft2_h: "Talk to someone who knows your sector", ft2_p: "Safety, hospitality, construction and public sector buyers each have their own rules. We match you with a specialist who speaks your language.", ft2_card: "Choose your specialist",
    lang: "العربية", all_products: "All Products", search_ph: "Search products, sizes or standards (e.g. M10 bolt, nitrile gloves)", search_btn: "Search",
    quote_list: "Quote list", request_quote: "Request a quotation", home: "Home", departments: "Departments", shop_all: "Shop all",
    hero_t: "Everything your business runs on, supplied.", hero_p: "Fasteners, safety, cleaning, electrical, tools, uniforms and more. Build a list, send it, and get a full quotation within 24 hours.",
    hero_k1: "Products in stock range", hero_k2: "Departments", hero_k3: "Quotation turnaround", hero_k3v: "24 h",
    shop_by: "Shop by department", on_request: "On request", products: "products", items: "items", categories: "Categories",
    how_t: "How ordering works", how1t: "Build your list", how1p: "Add products with the exact size, finish and quantity you need. We supply in bulk, so each item has a minimum order.", how2t: "Send one request", how2p: "Your whole list arrives with our team in one message.", how3t: "Get your quotation", how3p: "Priced, itemised and delivered to you within 24 hours.",
    partners: "Clients and partners", cant_find: "Can't find it?", cant_find_p: "We source beyond this catalogue. Tell us what you need and we will quote it.", tell_us: "Tell us what you need",
    filters: "Filters", search_within: "Search within", clear: "Clear all", results: "results", sort: "Sort", sort_name: "Name A to Z", sort_options: "Most options",
    grid: "Grid", list: "List", view: "View", add_quote: "Add to quote", moq_rule: "We supply in bulk only. Every item has a minimum order quantity (MOQ) shown on its page, and quantities below it are raised to the minimum.", moq_low: "Raised to the minimum order", added: "Added", details: "Details", options: "options", no_results: "No products match. Try fewer filters or a different word.",
    specs: "Specifications", choose: "Choose options", qty: "Quantity", unit: "Unit", add_to_list: "Add to quote list", request_now: "Request quotation now", whatsapp: "WhatsApp us",
    related: "More in this category", price_note: "We supply in bulk only, so every item has a minimum order quantity. Prices depend on quantity, options and delivery. You will receive a full quotation within 24 hours.", sku: "Item", description: "Description",
    q_title: "Request a quotation", q_p: "Send your list, or upload your tender or RFQ document, and we will reply with a priced quotation within 24 hours.", q_empty: "Your quote list is empty.", q_browse: "Browse products",
    q_items: "Items in your list", remove: "Remove", fm_company: "Company", fm_name: "Your name", fm_phone: "Phone / WhatsApp", fm_email: "Email", fm_notes: "Anything else we should know (delivery city, deadline, branding)",
    fm_send: "Send request", fm_ok: "Thank you. Your request has reached our team and you will hear from us within 24 hours.", fm_bad: "Something went wrong. Please try again or call us.",
    c_call: "Call", c_wa: "WhatsApp", c_mail: "Email", loading: "Loading...", f_pages: "Shop", f_contact: "Contact", f_more: "Company",
    f_tag: "General Supplies | Procurement | Import & Export", other_item: "Add an item that is not listed", other_ph: "Describe the item, size and quantity", add: "Add",
  },
  ar: {
    up_t: "لديك كراسة شروط أو طلب تسعير؟", up_p: "ارفع قائمة المشتريات أو المقايسة أو كراسة المناقصة أو طلب التسعير وسنسعر كل بند. PDF أو Word أو Excel أو CSV أو صور، حتى 5 ملفات بحد 15 ميجا للملف.", up_btn: "اختر الملفات", up_hint: "أو اسحبها وأفلتها هنا", up_bad: "نوع أو حجم هذا الملف غير مقبول:", up_sending: "جار رفع المستندات...",
    ft1_eye: "الخدمات", ft1_h: "عندما لا يكفي الكتالوج", ft1_p: "قطع حسب الطلب، وزي عمل بشعارك، ومخزون ندير توفره في موقعك، أو منتج نستورده من الخارج. فريقنا يتولى العمل المحيط بالمنتج أيضا.", ft1_card: "اعرف كيف نساعدك",
    ft2_eye: "المتخصصون", ft2_h: "تحدث مع من يعرف قطاعك", ft2_p: "مشترو السلامة والفنادق والمقاولات والجهات الحكومية لكل منهم قواعده. نربطك بمتخصص يفهم احتياجك.", ft2_card: "اختر المتخصص",
    lang: "English", all_products: "كل المنتجات", search_ph: "ابحث عن منتج أو مقاس أو مواصفة (مثال: مسمار M10، جوانتي نيتريل)", search_btn: "بحث",
    quote_list: "قائمة العرض", request_quote: "اطلب عرض سعر", home: "الرئيسية", departments: "الأقسام", shop_all: "عرض الكل",
    hero_t: "كل ما يحتاجه عملك، نوفره لك.", hero_p: "مسامير، سلامة، نظافة، كهرباء، عدد، زي موحد والمزيد. جهز قائمتك وأرسلها واستلم عرض سعر كامل خلال 24 ساعة.",
    hero_k1: "منتج في الكتالوج", hero_k2: "قسم", hero_k3: "وقت تجهيز العرض", hero_k3v: "٢٤ ساعة",
    shop_by: "تسوق حسب القسم", on_request: "حسب الطلب", products: "منتج", items: "صنف", categories: "الفئات",
    how_t: "كيف تطلب", how1t: "جهز قائمتك", how1p: "أضف المنتجات بالمقاس والتشطيب والكمية المطلوبة بالضبط. بنورد بالجملة، فلكل صنف حد أدنى للطلب.", how2t: "أرسل طلبا واحدا", how2p: "تصل قائمتك كاملة لفريقنا في رسالة واحدة.", how3t: "استلم عرض السعر", how3p: "مسعر ومفصل لكل بند خلال 24 ساعة.",
    partners: "عملاؤنا وشركاؤنا", cant_find: "لم تجد ما تبحث عنه؟", cant_find_p: "نوفر ما هو أبعد من هذا الكتالوج. أخبرنا بما تحتاجه وسنسعره لك.", tell_us: "أخبرنا بما تحتاجه",
    filters: "التصفية", search_within: "ابحث في النتائج", clear: "مسح الكل", results: "نتيجة", sort: "الترتيب", sort_name: "الاسم أ إلى ي", sort_options: "الأكثر خيارات",
    grid: "شبكة", list: "قائمة", view: "العرض", add_quote: "أضف للعرض", moq_rule: "نورد بالجملة فقط. لكل صنف حد أدنى للطلب موضح في صفحته، وأي كمية أقل منه بتترفع للحد الأدنى تلقائيا.", moq_low: "اترفعت للحد الأدنى للطلب", added: "تمت الإضافة", details: "التفاصيل", options: "خيارات", no_results: "لا توجد منتجات مطابقة. جرب تصفية أقل أو كلمة أخرى.",
    specs: "المواصفات", choose: "اختر المواصفات", qty: "الكمية", unit: "الوحدة", add_to_list: "أضف لقائمة العرض", request_now: "اطلب عرض سعر الآن", whatsapp: "راسلنا واتساب",
    related: "المزيد في هذه الفئة", price_note: "نورد بالجملة فقط، فلكل صنف حد أدنى للطلب. الأسعار تعتمد على الكمية والمواصفات والتوصيل. ستستلم عرض سعر كامل خلال 24 ساعة.", sku: "الصنف", description: "الوصف",
    q_title: "اطلب عرض سعر", q_p: "أرسل قائمتك أو ارفع كراسة الشروط أو طلب التسعير، وسنرد بعرض سعر مفصل خلال 24 ساعة.", q_empty: "قائمة العرض فارغة.", q_browse: "تصفح المنتجات",
    q_items: "الأصناف في قائمتك", remove: "حذف", fm_company: "الشركة", fm_name: "الاسم", fm_phone: "الهاتف / واتساب", fm_email: "البريد الإلكتروني", fm_notes: "أي تفاصيل أخرى (مدينة التوصيل، الموعد، الشعار)",
    fm_send: "أرسل الطلب", fm_ok: "شكرا لك. وصل طلبك لفريقنا وسنتواصل معك خلال 24 ساعة.", fm_bad: "حدث خطأ. حاول مرة أخرى أو اتصل بنا.",
    c_call: "اتصل", c_wa: "واتساب", c_mail: "البريد", loading: "جار التحميل...", f_pages: "التسوق", f_contact: "تواصل معنا", f_more: "الشركة",
    f_tag: "توريدات عامة | مشتريات | استيراد وتصدير", other_item: "أضف صنفا غير موجود", other_ph: "اكتب الصنف والمقاس والكمية", add: "أضف",
  },
};

const Site = {
  lang: (function () {
    const h = document.documentElement; const f = h.getAttribute("data-force-lang");
    let qp = null; try { qp = new URLSearchParams(location.search).get("lang"); } catch (e) {}
    let stored = null; try { stored = localStorage.getItem("pt_lang"); } catch (e) {}
    // an Arabic reader who lands on an English URL goes to its Arabic twin
    if (f === "en" && !qp && stored === "ar" && h.getAttribute("data-alt-ar") && !/bot|crawl|spider|lighthouse/i.test(navigator.userAgent)) { location.replace(h.getAttribute("data-alt-ar") + location.search + location.hash); }
    const l = f || (qp === "ar" || qp === "en" ? qp : null) || stored || "en";
    try { localStorage.setItem("pt_lang", l); } catch (e) {}
    return l;
  })(),
  /** pages that have an Arabic twin at <name>-ar.html */
  AR: ["index", "catalog", "offers", "services", "industries", "guides", "import-export", "about", "help", "rfq", "contact", "terms", "privacy", "coverage", "suppliers", "documents", "careers", "accessibility", "blog", "quote", "products"],
  /** turn an internal link into the current language version */
  L(href) {
    if (!href || /^(https?:|mailto:|tel:|#|javascript:)/i.test(href)) return href;
    const m = href.match(/^([a-z0-9-]+)\.html(.*)$/i); if (!m) return href;
    let [, name, rest] = m; const isAr = /-ar$/.test(name) && this.AR.includes(name.slice(0, -3)); const base = isAr ? name.slice(0, -3) : name;
    if (this.lang === "ar") {
      if (this.AR.includes(base)) return base + "-ar.html" + rest;
      if (base === "product" && !/[?&]lang=/.test(rest)) return "product.html" + (rest.startsWith("?") ? rest + "&lang=ar" : "?lang=ar" + rest);
      return href;
    }
    if (isAr) return base + ".html" + rest;
    if (base === "product") return "product.html" + rest.replace(/([?&])lang=ar&?/, "$1").replace(/[?&]$/, "");
    return href;
  },
  fixLinks(root) { (root || document).querySelectorAll("a[href]").forEach((a) => { const h = a.getAttribute("href"); const n = this.L(h); if (n !== h) a.setAttribute("href", n); }); (root || document).querySelectorAll("form[action]").forEach((f) => { const h = f.getAttribute("action"); const n = this.L(h); if (n !== h) f.setAttribute("action", n); }); },
  brandHtml() { return this.lang === "ar" ? "بالم<b>للتوريدات العامة</b>" : "PALM<b>GENERAL SUPPLY</b>"; },
  t(k) { return (DICT[this.lang] && DICT[this.lang][k]) || DICT.en[k] || k; },
  pick(row, base) { if (!row) return ""; return (this.lang === "ar" ? row[base + "_ar"] : row[base + "_en"]) || row[base + "_en"] || row[base + "_ar"] || ""; },
  esc(s) { return String(s == null ? "" : s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c])); },
  q(k) { return new URLSearchParams(location.search).get(k); },
  /** static product page URL; must match tools/build-products.mjs */
  purl(p, l) { const s = (String(p.name_en || "item").toLowerCase().normalize("NFKD").replace(/[\u0300-\u036f]/g, "").replace(/&/g, " and ").replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "").slice(0, 60).replace(/-+$/, "") || "item") + "-" + p.id.slice(0, 8); return "product-" + s + ((l || this.lang) === "ar" ? "-ar" : "") + ".html"; },
  setLang(l) { try { localStorage.setItem("pt_lang", l); } catch (e) {} const alt = document.documentElement.getAttribute("data-alt-" + l); if (alt) { location.href = alt + (/blog-/.test(alt) ? "" : location.search + location.hash); return; } if (/[?&]lang=/.test(location.search) || /product\.html$/.test(location.pathname)) { const u = new URL(location.href); u.searchParams.set("lang", l); location.href = u.toString(); return; } this.lang = l; this.apply(); document.dispatchEvent(new Event("langchange")); },
  apply() {
    document.documentElement.lang = this.lang; document.documentElement.dir = this.lang === "ar" ? "rtl" : "ltr";
    document.querySelectorAll("[data-t]").forEach((el) => { el.textContent = this.t(el.dataset.t); });
    document.querySelectorAll("[data-t-ph]").forEach((el) => { el.placeholder = this.t(el.dataset.tPh); });
    const bt = document.getElementById("brandtxt"); if (bt) bt.innerHTML = this.brandHtml();
    this.renderHeaderDynamic();
  },
  unit(u) { const ar = { box: "علبة", piece: "قطعة", pair: "زوج", set: "طقم", pack: "عبوة", roll: "رول", can: "جركن", carton: "كرتونة", bundle: "ربطة", metre: "متر", meter: "متر", m: "متر", kg: "كجم", sqm: "م²", m2: "م²", m3: "م³", ton: "طن", drum: "برميل", bag: "شيكارة", sheet: "لوح", coil: "لفة", spool: "بكرة", length: "عود", pallet: "بالتة", dozen: "دستة", kit: "طقم", pail: "جردل", cylinder: "أسطوانة", liter: "لتر", litre: "لتر", meal: "وجبة", trip: "نقلة", day: "يوم", service: "خدمة", visit: "زيارة", shipment: "شحنة", order: "طلب", person: "فرد", seat: "مقعد", bay: "وحدة", core: "شعرة" }; return this.lang === "ar" ? (ar[u] || u || "") : (u || ""); },
  /** unit for a quantity: "100 pieces", "500 m", "50 boxes" */
  unitN(u, n) { if (this.lang === "ar" || n === 1) return this.unit(u); u = u || "piece"; if (/^(m|m2|m3|sqm|kg|ton|metre|meter|liter|litre)$/.test(u)) return u === "metre" || u === "meter" ? "metres" : u === "liter" || u === "litre" ? "litres" : u === "ton" ? "tons" : u; return /(x|s|ch|sh)$/.test(u) ? u + "es" : u + "s"; },
  /** label shown next to every product: minimum order quantity */
  moqText(p) { const q = this.moq(p); return this.lang === "ar" ? "الحد الأدنى للطلب: " + this.num(q) + " " + this.unitN(p.unit, q) : "Minimum order: " + this.num(q) + " " + this.unitN(p.unit, q); },
  moqShort(p) { const q = this.moq(p); return this.lang === "ar" ? "أقل طلب " + this.num(q) + " " + this.unitN(p.unit, q) : "Min. " + this.num(q) + " " + this.unitN(p.unit, q); },
  /* MOQ_START: PGS supplies in bulk only. One rule for the whole site (also used by tools/build-products.mjs) */
  moq: function(p) {
    if (!p) return 1;
    const u = String(p.unit || "piece").toLowerCase(), n = String(p.name_en || "").toLowerCase(), t = n + " " + String(p.category_en || "").toLowerCase(), s = p.sector_code || "";
    const has = (re) => re.test(n), hasC = (re) => re.test(t);
    if (/^(service|trip|shipment|day|visit|order|person|bay|seat)$/.test(u)) return 1;
    if (u === "meal") return 200;
    const UNIT = { ton: 5, m3: 10, kg: 500, liter: 1000, litre: 1000, drum: 10, pail: 20, can: 50, cylinder: 10, bag: 100, sheet: 50, sqm: 200, m2: 200, meter: 500, metre: 500, m: 500, roll: 50, coil: 10, spool: 20, length: 50, bundle: 20, pallet: 5, carton: 20, box: 50, pack: 50, dozen: 50, pair: 100, kit: 20, core: 24 };
    if (u in UNIT) {
      if (u === "bag" && hasC(/cement|sand|aggregate|gypsum|plaster|tile adhesive/)) return 200;
      if (u === "sqm" || u === "m2") return hasC(/glass|glazing|curtain wall|partition|false ceiling/) ? 100 : 200;
      if (/^(meter|metre|m)$/.test(u)) return hasC(/speed bump|kerb|curb|guardrail|barrier|fence|gutter|handrail/) ? 50 : hasC(/hose|belt|chain|rope|fiber|fibre/) ? 200 : 500;
      if (u === "box" && hasC(/glove|mask|wipe|tissue|napkin|cable tie|screw|bolt|nut|washer|anchor|rivet|nail|pin|clip|electrode|insert/)) return 100;
      return UNIT[u];
    }
    const tool = has(/\bbits?\b|blade|disc|wheel|insert|cutter|brush|squeegee|cloth|mop|kit\b|frame|seal|board|hose|filter|belt|valve|toner|cartridge|accessor/);
    if (!tool && has(/generator|combi oven|convection oven|dishwasher|refrigerator|freezer|chiller|cold room|forklift|stacker|reach truck|scissor lift|air compressor|piston air|screw air|crane|transformer|switchgear|autoclave|boiler|\bups\b|gym machine|gate motor|barrier gate|elevator|storage tank|water tank|kiosk|shelter|booster pump|pump set|lathe|milling|drill press|welder|plasma cutter|concrete mixer|ultrasound|x-ray|defibrillator|projector|gas range|deep fryer|coffee machine|ice machine|washing machine|tumble dryer|ironer|carpet extractor|scrubber|sweeper|steriliz|incubator|centrifuge|fume hood|analytical balance|spectro|chromatograph|solar inverter|battery bank|dock leveller|checkout counter|dosing system|reverse osmosis|water softener|air handling|package unit|cooling tower|fire fighting pump|fire pump/)) return 2;
    if (s === "machinery") return 2;
    if (!has(/valve|scaffold|dispenser|maker|whiteboard|respirator|measuring|calculator|stapler|bathrobe|holder|stand\b|rack/) && has(/\bpens?\b|pencil|glove|\bmasks?\b|ear plug|earplug|bouffant|beard cover|shoe cover|\bcups?\b|straw|napkin|tissue|toothbrush|amenit|shampoo|\bsoap\b|slipper|cable tie|\bmarkers?\b|sticky note|envelope|folder|paper clip|\blabels?\b|\btags?\b|lanyard|badge|wristband|flyer|brochure|business card|bottled water|juice|snack|sachet|prep pad|swab|syringe|needle|bandage|gauze|spoon|fork|cutlery|plates\b|polybag|courier bag|garbage bag|bin liner|light bulb|led bulb|batteries|alkaline|fuse|t-shirt|tote|\bmugs?\b|notebook|duct tape|masking tape|packing tape|double sided tape|marking tape/)) return 500;
    const SEC = { fasteners: 200, safety: 200, cleaning: 100, electrical: 100, lighting: 100, tools: 50, abrasives: 200, adhesives: 200, material_handling: 20, packaging: 500, plumbing: 100, lubricants: 50, office: 100, uniforms: 100, hospitality: 200, kitchen_equipment: 20, security: 20, construction: 50, welding: 50, cutting_tools: 50, hydraulics: 50, pneumatics: 50, pumps: 5, motors: 5, power_transmission: 50, electronics: 50, automotive: 50, hardware: 100, paint: 100, sealing: 200, test_measurement: 10, raw_materials: 50, outdoor: 20, oil_gas: 20, pharma: 100, education: 30, marine: 20, chemicals: 50, telecom: 50, furniture: 20, appliances: 10, camp: 10, promo: 500, retail: 10, glazing: 50, roads_municipal: 20, agriculture: 100, sports: 10, building_finishes: 100, housekeeping_buffet: 50, medical: 50, solar: 20 };
    let q = SEC[s] || 50;
    if (!tool && !has(/sheet|protector|jacket|tap\b|taps|toner|accessor|cover|pillow|towel|linen/) && has(/cordless|grinder|\bdrill\b|drill driver|impact|circular saw|jigsaw|breaker|vacuum|pressure washer|multimeter|clamp meter|tester|analyser|analyzer|camera|nvr|dvr|terminal|printer|scanner|laptop|computer|monitor|\btv\b|screen|router|access point|phone|radio|scale|balance|microwave|blender|\bmixer\b|oven|fryer|grill|kettle|toaster|dispenser|trolley|cart\b|ladder|scaffold|\bjacks?\b|hoist|winch|pallet truck|hand truck|\bsafe\b|\blockers?\b|cabinet|desk\b|table|chair|sofa|\bbeds?\b|mattress\b|wardrobe|whiteboard|motor|pump|actuator|\bfan\b|heater|air cooler|air conditioner|charger|inverter|controller|distribution board|panel|bollard|microscope|treadmill|dumbbell|kettlebell|weight plate|machine|shelving|racking|vibrator|compactor|meter\b|caliper|gauge/)) q = Math.min(q, s === "electrical" || s === "lighting" ? 20 : 10);
    if (u === "set") q = q <= 10 ? Math.max(2, Math.round(q / 2)) : Math.round(q / 2);
    return q;
  },
  /* MOQ_END */
  num(n) { return new Intl.NumberFormat(this.lang === "ar" ? "ar-EG" : "en-US").format(n); },

  /* ---------- data ---------- */
  async rest(path, opts) {
    const r = await fetch(PALM.supabaseUrl + "/rest/v1/" + path, Object.assign({}, opts || {}, { headers: { apikey: PALM.supabaseAnonKey, Authorization: "Bearer " + PALM.supabaseAnonKey, "Content-Type": "application/json", Prefer: "return=minimal" } }));
    if (!r.ok) throw new Error(r.status + " " + (await r.text()));
    const txt = await r.text(); return txt ? JSON.parse(txt) : null;
  },
  /** PostgREST hands out at most 1000 rows per request, so read big lists page by page */
  async restAll(path) {
    const out = []; const size = 1000;
    for (let off = 0; off < 20000; off += size) {
      const page = await this.rest(path + (path.includes("?") ? "&" : "?") + "limit=" + size + "&offset=" + off);
      if (!page || !page.length) break; out.push(...page); if (page.length < size) break;
    }
    return out;
  },
  _cache: {},
  async cached(key, path) {
    if (this._cache[key]) return this._cache[key];
    try { const s = JSON.parse(sessionStorage.getItem("pgs2_" + key) || "null"); if (s && Date.now() - s.t < 10 * 60 * 1000) return (this._cache[key] = s.d); } catch (e) {}
    const d = await this.restAll(path); this._cache[key] = d;
    try { sessionStorage.setItem("pgs2_" + key, JSON.stringify({ t: Date.now(), d })); } catch (e) {}
    return d;
  },
  departments() { return this.cached("deps", "public_departments?select=*&order=sort_order"); },
  async catalogue() { const deps = await this.departments(); const codes = new Set(deps.map((d) => d.code)); const rows = (await this.cached("cat", "public_catalogue?select=*&order=sector_sort,category_sort,name_en")).filter((r) => codes.has(r.sector_code));
    const ph = { dep: {}, cat: {} }; for (const d of deps) if (d.image_url) ph.dep[d.code] = d.image_url; for (const r of rows) { const im = r.images && r.images[0]; if (!im) continue; if (!ph.cat[r.category_id]) ph.cat[r.category_id] = im; if (!ph.dep[r.sector_code]) ph.dep[r.sector_code] = im; }
    this._ph = ph; return rows; },
  /** photo for a product: its own, else its category's, else its department's */
  photo(p) { const ph = this._ph || { dep: {}, cat: {} }; return (p.images && p.images[0]) || ph.cat[p.category_id] || ph.dep[p.sector_code] || ""; },
  thumb(u, w) { w = w || 400; return /images\.unsplash\.com/.test(u) ? u.replace(/([?&])w=\d+/, "$1w=" + w) : u; },
  depPhoto(code) { return ((this._ph || {}).dep || {})[code] || ""; },
  catPhoto(id) { return ((this._ph || {}).cat || {})[id] || ""; },
  options(ids) { return this.rest("public_product_options?select=*&order=attribute_sort,option_sort" + (ids ? "&product_id=in.(" + ids.join(",") + ")" : "")); },
  groupOptions(rows, pid) {
    const m = new Map(); (rows || []).filter((r) => r.product_id === pid).forEach((r) => { if (!m.has(r.attribute_id)) m.set(r.attribute_id, { id: r.attribute_id, row: r, options: [] }); m.get(r.attribute_id).options.push(r); });
    return [...m.values()];
  },

  /* ---------- quote list (kept in this browser) ---------- */
  list() { try { return JSON.parse(localStorage.getItem("pgs_quote") || "[]"); } catch (e) { return []; } },
  saveList(l) { try { localStorage.setItem("pgs_quote", JSON.stringify(l)); } catch (e) {} this.renderHeaderDynamic(); document.dispatchEvent(new Event("listchange")); },
  addToList(item) {
    const l = this.list(); const key = item.id + "|" + (item.opts || []).join("|");
    const m = Math.max(1, Number(item.moq) || 1); item.moq = m; item.qty = Math.max(m, Number(item.qty) || m);
    const ex = l.find((x) => x.key === key); if (ex) { ex.moq = m; ex.qty = Math.max(m, Number(ex.qty) + item.qty); } else l.push(Object.assign({ key }, item));
    this.saveList(l); this.toast(this.t("added") + ": " + (this.lang === "ar" ? item.name_ar : item.name_en));
  },
  toast(msg) { let el = document.getElementById("toast"); if (!el) { el = document.createElement("div"); el.id = "toast"; el.className = "toast"; el.setAttribute("role", "status"); document.body.appendChild(el); } el.textContent = msg; el.classList.add("on"); clearTimeout(this._tt); this._tt = setTimeout(() => el.classList.remove("on"), 2400); },

  /* ---------- quotation request -> Palm OS lead ---------- */
  async uploadDoc(file) {
    const safe = file.name.normalize("NFKD").replace(/[^\w.\-]+/g, "_").slice(-80) || "document";
    const path = "incoming/" + crypto.randomUUID() + "/" + safe;
    const r = await fetch(PALM.supabaseUrl + "/storage/v1/object/rfq-docs/" + path, { method: "POST", headers: { apikey: PALM.supabaseAnonKey, Authorization: "Bearer " + PALM.supabaseAnonKey, "content-type": file.type || "application/octet-stream", "x-upsert": "false" }, body: file });
    if (!r.ok) throw new Error("upload failed");
    return { path, name: file.name, size: file.size, type: file.type };
  },
  async submitRequest(f, items, attachments) {
    attachments = attachments || [];
    const pid = crypto.randomUUID();
    items = items.map((x) => Object.assign({}, x, { qty: Math.max(Number(x.moq) || 1, Number(x.qty) || 1) }));
    const lines = items.map((x, i) => (i + 1) + ". " + x.name_en + (x.opts_text_en ? " (" + x.opts_text_en + ")" : "") + " x " + x.qty + " " + (x.unit || "") + (x.moq > 1 ? " [MOQ " + x.moq + "]" : "")).join("\n");
    const need = (lines ? lines + "\n\n" : "") + (f.notes || "");
    await this.rest("parties", { method: "POST", body: JSON.stringify({ id: pid, name_ar: f.company || f.name, name_en: f.company || f.name, status: "draft", sector: [], preferred_language: this.lang, notes: need }) });
    await this.rest("party_roles", { method: "POST", body: JSON.stringify({ party_id: pid, role: "client" }) });
    await this.rest("contacts", { method: "POST", body: JSON.stringify({ party_id: pid, name: f.name, phone: f.phone, whatsapp: f.phone, email: f.email || null, language: this.lang, is_primary: true }) });
    await this.rest("leads", { method: "POST", body: JSON.stringify({ party_id: pid, contact_name: f.name, company_name: f.company || null, phone: f.phone, email: f.email || null, source: "website", stage: "new", need_description: need + (attachments.length ? "\n\nAttached documents: " + attachments.map((a) => a.name).join(", ") : ""), estimated_qty: items.length ? items.length + " items" : null, attachments }) });
  },

  async lead(source, f, message) {
    await this.rest("leads", { method: "POST", body: JSON.stringify({ contact_name: f.name || f.email || null, company_name: f.company || null, phone: f.phone || null, email: f.email || null, source, stage: "new", need_description: message || null }) });
  },
  tx(o) { return o ? o[this.lang] || o.en : ""; },
  /* ---------- layout ---------- */
  header() {
    return `<a class="skip" href="#main">Skip to content</a>
    <header class="top" id="top"><div class="top-in">
      <a class="logo" href="index.html" aria-label="Palm General Supply"><img src="img/pgs-logo-white.png" alt="PGS" width="40" height="40" /><span id="brandtxt">${this.brandHtml()}</span></a>
      <button class="allbtn" id="allbtn" aria-expanded="false" aria-controls="mega"><span class="burger" aria-hidden="true"><i></i><i></i><i></i></span><span data-t="all_products"></span></button>
      <form class="search" id="searchform" role="search" action="catalog.html"><input id="q" name="q" type="search" data-t-ph="search_ph" autocomplete="off" aria-label="Search" /><button type="submit" aria-label="Search">${icon("search", 20)}</button></form>
      <nav class="tools">
        <button class="lang" data-lang-toggle data-t="lang"></button>
        <a class="qlink" href="quote.html">${icon("quote", 22)}<span class="lbl" data-t="quote_list"></span><span class="count" id="qcount">0</span></a>
      </nav>
    </div>
    <nav class="subnav" aria-label="Company"><div class="subnav-in" id="subnav">${this.subnav()}</div></nav>
    <div class="mega" id="mega" hidden><div class="mega-in"><ul class="mega-deps" id="megadeps"></ul><div class="mega-cats" id="megacats"></div></div></div>
    </header>`;
  },
  subnav() {
    const P = window.PAGES || {}; const cur = document.body ? document.body.dataset.page : "";
    const dd = (k, items) => `<div class="dd"><a href="${k}.html" class="${cur === k ? "on" : ""}" aria-haspopup="true">${this.esc(this.tx(P[k] && P[k].title))}<svg width="10" height="10" viewBox="0 0 10 10" aria-hidden="true"><path d="M2 3.5l3 3 3-3" fill="none" stroke="currentColor" stroke-width="1.5"/></svg></a><div class="dd-menu">${items.map(([id, l]) => `<a href="${k}.html#${id}">${this.esc(this.tx(l))}</a>`).join("")}</div></div>`;
    const links = (window.NAV_PAGES || []).map(([k, l]) => k === "services" ? dd("services", window.NAV_SERVICES || []) : k === "industries" ? dd("industries", ((P.industries && P.industries.industries) || []).map((x) => [x.id, x.h])) : `<a href="${k}.html" class="${cur === k ? "on" : ""}">${this.esc(this.tx(l))}</a>`).join("");
    const tools = `<span class="sn-tools"><a href="coverage.html">${icon("truck", 18)}<span>${this.lang === "ar" ? "مناطق التوصيل" : "Delivery areas"}</span></a><a href="orders.html">${icon("box", 18)}<span>${this.lang === "ar" ? "تتبع طلب" : "Track order"}</span></a></span>`;
    return links + tools;
  },
  blogStrip() {
    const posts = (window.POSTS || []).slice(0, 3); if (!posts.length || (document.body && /^blog/.test(document.body.dataset.page || ""))) return "";
    return `<section class="blogstrip"><div class="wrap"><div class="sec-head"><h2>${this.lang === "ar" ? "من المدونة" : "From the blog"}</h2><a class="more" href="blog.html">${this.lang === "ar" ? "كل المقالات" : "All articles"} ›</a></div><div class="bgrid">${posts.map((p) => this.postCard(p)).join("")}</div></div></section>`;
  },
  postCard(p) {
    const d = new Date(p.date + "T00:00:00").toLocaleDateString(this.lang === "ar" ? "ar-EG" : "en-GB", { day: "numeric", month: "long", year: "numeric" });
    return `<article class="bcard"><a class="bcard-img" href="blog-${p.slug}${this.lang === "ar" ? "-ar" : ""}.html" tabindex="-1" aria-hidden="true"><img src="${p.img}" alt="" loading="lazy" /></a><div class="bcard-body"><time datetime="${p.date}">${d}</time><h3><a href="blog-${p.slug}${this.lang === "ar" ? "-ar" : ""}.html">${this.esc(this.tx(p.title))}</a></h3><p>${this.esc(this.tx(p.excerpt))}</p></div></article>`;
  },
  crumbs(items) { return `<nav class="crumbs" aria-label="Breadcrumb"><a href="index.html">${this.t("home")}</a>${items.map((x) => `<span aria-hidden="true">›</span>${x.href ? `<a href="${x.href}">${this.esc(x.label)}</a>` : `<span>${this.esc(x.label)}</span>`}`).join("")}</nav>`; },
  footer() {
    const wa = PALM.phone.replace(/[^\d]/g, ""); const ar = this.lang === "ar";
    const P = window.PAGES || {};
    const cols = (window.FOOT || []).map(([h, ls]) => `<div><h3>${this.esc(this.tx(h))}</h3>${ls.map(([k, l]) => `<a href="${k}.html">${this.esc(this.tx(l))}</a>`).join("")}</div>`).join("");
    const soc = [["LinkedIn", PALM.linkedin, '<path d="M6 9h4v12H6zM8 3a2 2 0 110 4 2 2 0 010-4zM13 9h4v2c1-1.5 2.5-2.3 4.5-2.3 3 0 4.5 2 4.5 5.8V21h-4v-6c0-1.8-.6-3-2.2-3-1.5 0-2.8 1-2.8 3v6h-4z" transform="scale(.9)"/>'], ["Instagram", PALM.instagram, '<rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="17.5" cy="6.5" r="1.2"/>'], ["Facebook", PALM.facebook, '<path d="M14 8h3V4h-3c-2.8 0-4 1.8-4 4.3V11H7v4h3v8h4v-8h3l1-4h-4V8.6c0-.4.3-.6.6-.6z"/>'], ["WhatsApp", "https://wa.me/" + wa, '<path d="M12 3a9 9 0 00-7.8 13.5L3 21l4.6-1.2A9 9 0 1012 3zm4.7 12.6c-.2.6-1.2 1.1-1.7 1.2-.5.1-1 .1-1.6-.1-.4-.1-.9-.3-1.5-.6-2.6-1.1-4.3-3.8-4.4-4-.1-.2-1-1.4-1-2.6s.6-1.8.9-2.1c.2-.2.5-.3.6-.3h.5c.1 0 .4 0 .6.4l.8 1.9c.1.1.1.3 0 .5l-.3.5-.4.4c-.1.1-.3.3-.1.6.2.3.7 1.2 1.6 1.9 1.1 1 2 1.3 2.3 1.4.3.1.4.1.6-.1l.8-1c.2-.3.4-.2.6-.1l1.8.9c.3.1.4.2.5.3.1.2.1.7-.1 1.3z"/>']].filter((x) => x[1]).map(([n, u, d]) => `<a href="${u}" aria-label="${n}" rel="noopener"><svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">${d}</svg></a>`).join("");
    return `${this.blogStrip()}<section class="help"><div class="wrap help-in"><div><h2 data-t="cant_find"></h2><p data-t="cant_find_p"></p></div><div class="help-act"><a class="btn dark" href="quote.html#other" data-t="tell_us"></a><a class="btn wa" href="https://wa.me/${wa}">WhatsApp</a></div></div></section>
    <footer class="foot"><div class="wrap foot-in">
      <div class="fbrand"><img src="img/pgs-logo-white.png" alt="PGS" width="44" height="44" /><span>${ar ? "بالم للتوريدات العامة" : "PALM GENERAL SUPPLY"}</span><p data-t="f_tag"></p>
        <form class="news" id="newsform"><label for="newsemail">${ar ? "اشترك في النشرة لتصلك العروض والمقالات الجديدة" : "Get new offers and articles by email"}</label><div class="news-row"><input id="newsemail" name="email" type="email" required dir="ltr" placeholder="name@company.com" /><button class="btn light sm" type="submit">${ar ? "اشترك" : "Sign up"}</button></div><p class="news-msg" id="newsmsg" role="status"></p></form>
        <div class="social">${soc}</div>
        <p class="fcontact"><a href="tel:${PALM.phone.replace(/\s/g, "")}" dir="ltr">${PALM.phone}</a> · <a href="tel:${PALM.phone2.replace(/\s/g, "")}" dir="ltr">${PALM.phone2}</a> · <a href="mailto:${PALM.email}">${PALM.email}</a></p><p class="fcontact"><a class="frfx" href="rfq.html">${ar ? "أرسل طلب عرض سعر أو مقترح أو معلومات (RFQ / RFP / RFI)" : "Send an RFQ, RFP or RFI"} ›</a> · <a class="frfx" href="products.html">${ar ? "دليل كل المنتجات" : "All products A to Z"} ›</a></p></div>
      <div><h3 data-t="f_pages"></h3><div id="footdeps"></div><a href="catalog.html">${ar ? "كل المنتجات" : "All products"} ›</a></div>
      ${cols}
    </div><div class="wrap foot-bot"><span>© ${new Date().getFullYear()} Palm General Supply</span><span>${(window.NAV_PAGES || []).slice(0, 2).map(([k, l]) => `<a href="${k}.html">${this.esc(this.tx(l))}</a>`).join(" · ")}</span></div></footer>`;
  },
  async renderHeaderDynamic() {
    const c = document.getElementById("qcount"); if (c) { const n = this.list().length; c.textContent = n; c.hidden = !n; }
    let deps; try { deps = await this.departments(); } catch (e) { return; }
    try { await this.catalogue(); } catch (e) {}
    const md = document.getElementById("megadeps"); const fd = document.getElementById("footdeps");
    if (md) {
      md.innerHTML = deps.map((d, i) => `<li><a href="catalog.html?d=${d.code}" data-dep="${d.code}" class="${i === 0 ? "on" : ""}">${this.depPhoto(d.code) ? `<img class="md-img" src="${this.esc(this.thumb(this.depPhoto(d.code), 120))}" alt="" loading="lazy" />` : icon(d.icon || "box", 22)}<span>${this.esc(this.pick(d, "name"))}</span><span class="n">${d.product_count ? this.num(d.product_count) : this.t("on_request")}</span></a></li>`).join("");
      const showCats = (code) => { const d = deps.find((x) => x.code === code); md.querySelectorAll("a").forEach((a) => a.classList.toggle("on", a.dataset.dep === code)); document.getElementById("megacats").innerHTML = `<h3><a href="catalog.html?d=${d.code}">${this.esc(this.pick(d, "name"))} <span>${this.t("shop_all")} ›</span></a></h3><p>${this.esc(this.pick(d, "blurb"))}</p><div class="mc-grid">${(d.categories || []).map((c) => `<a href="catalog.html?d=${d.code}&c=${c.id}">${this.catPhoto(c.id) ? `<img src="${this.esc(this.thumb(this.catPhoto(c.id)))}" alt="" loading="lazy" />` : icon(c.icon || d.icon, 30)}<span>${this.esc(this.pick(c, "name"))}</span></a>`).join("")}</div>`; };
      md.querySelectorAll("a").forEach((a) => { a.addEventListener("mouseenter", () => showCats(a.dataset.dep)); a.addEventListener("focus", () => showCats(a.dataset.dep)); });
      if (deps[0]) showCats(deps[0].code);
    }
    if (fd) fd.innerHTML = deps.filter((d) => d.product_count).slice(0, 8).map((d) => `<a href="catalog.html?d=${d.code}">${this.esc(this.pick(d, "name"))}</a>`).join("");
  },
  /* product card used on home and catalogue */
  card(p, deps, mode) {
    const name = this.pick(p, "name"); const img = this.photo(p);
    const nSpec = mode === "list" ? 4 : 2; const sl = (p.specs || []).slice(0, nSpec);
    const specs = sl.map((s) => `<li title="${this.esc(this.lang === "ar" ? s.v_ar : s.v_en)}"><span>${this.esc(this.lang === "ar" ? s.k_ar : s.k_en)}</span><b>${this.esc(this.lang === "ar" ? s.v_ar : s.v_en)}</b></li>`).join("") + "<li></li>".repeat(Math.max(0, nSpec - sl.length));
    return `<article class="pc ${mode || ""}"><a class="pc-img" href="${this.purl(p)}" aria-hidden="true" tabindex="-1">${img ? `<img src="${this.esc(img)}" alt="" loading="lazy" />` : icon(p.category_icon || p.sector_icon || "box", 64)}</a>
      <div class="pc-body"><div class="pc-cat">${this.esc(this.pick(p, "category"))}</div><h3 title="${this.esc(name)}"><a href="${this.purl(p)}">${this.esc(name)}</a></h3><ul class="pc-specs">${specs}</ul>
      <div class="pc-moq" title="${this.esc(this.moqText(p))}">${this.esc(this.moqShort(p))}</div>
      <div class="pc-foot"><span class="pc-unit">${this.t("unit")}: ${this.esc(this.unit(p.unit))}</span><button class="btn sm" data-add="${p.id}">${icon("quote", 16)}<span>${this.t("add_quote")}</span></button></div></div></article>`;
  },
  bindAdd(root, rows) {
    root.querySelectorAll("[data-add]").forEach((b) => b.onclick = () => { const p = rows.find((x) => x.id === b.dataset.add); if (p) this.addToList({ id: p.id, name_en: p.name_en, name_ar: p.name_ar, unit: p.unit, qty: this.moq(p), moq: this.moq(p), opts: [], opts_text_en: "", opts_text_ar: "", icon: p.category_icon, img: this.photo(p) }); b.classList.add("ok"); setTimeout(() => b.classList.remove("ok"), 1500); });
  },
};
window.Site = Site;
ICONS.search = '<circle cx="21" cy="21" r="13"/><path d="M31 31l11 11"/>';

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("[data-pre]").forEach((n) => n.remove());
  const mm = document.getElementById("main"); if (mm) for (const n of mm.childNodes) if (n.nodeType === 8 && n.data.startsWith("pmorig:")) { mm.innerHTML = n.data.slice(7, -7).replace(/&#45;&#45;/g, "--"); break; }
  Site.fixLinks(); try { new MutationObserver((ms) => { for (const m of ms) m.addedNodes.forEach((n) => { if (n.nodeType === 1) { if (n.matches && n.matches("a[href],form[action]")) Site.fixLinks(n.parentNode || document); else Site.fixLinks(n); } }); }).observe(document.body, { childList: true, subtree: true }); } catch (e) {}
  document.body.insertAdjacentHTML("afterbegin", Site.header());
  document.body.insertAdjacentHTML("beforeend", Site.footer());
  const qv = Site.q("q"); if (qv) document.getElementById("q").value = qv;
  const allbtn = document.getElementById("allbtn"); const mega = document.getElementById("mega");
  const setMega = (open) => { mega.hidden = !open; allbtn.setAttribute("aria-expanded", String(open)); document.body.classList.toggle("mega-open", open); };
  allbtn.addEventListener("click", () => setMega(mega.hidden));
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") setMega(false); });
  document.addEventListener("click", (e) => { if (!mega.hidden && !e.target.closest("#mega") && !e.target.closest("#allbtn")) setMega(false); });
  document.querySelectorAll("[data-lang-toggle]").forEach((b) => b.addEventListener("click", () => Site.setLang(Site.lang === "ar" ? "en" : "ar")));
  const bindNews = () => { const nf = document.getElementById("newsform"); if (!nf) return; nf.onsubmit = async (e) => { e.preventDefault(); const m = document.getElementById("newsmsg"); const b = nf.querySelector("button"); b.disabled = true;
    try { await Site.lead("newsletter", { email: nf.email.value }, "Newsletter sign-up"); nf.reset(); m.textContent = Site.lang === "ar" ? "تم الاشتراك، شكرا لك." : "You are signed up. Thank you."; } catch (err) { m.textContent = Site.lang === "ar" ? "تعذر الاشتراك، حاول مرة أخرى." : "Could not sign up, please try again."; } b.disabled = false; }; };
  bindNews();
  document.addEventListener("langchange", () => { const sn = document.getElementById("subnav"); if (sn) sn.innerHTML = Site.subnav(); const oldF = document.querySelectorAll(".blogstrip, section.help, footer.foot"); oldF.forEach((x) => x.remove()); document.body.insertAdjacentHTML("beforeend", Site.footer()); Site.apply(); bindNews(); Site.renderHeaderDynamic(); });
  Site.apply();
  if (window.PAGE) window.PAGE();
});
