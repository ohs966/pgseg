/* PGS blog posts. Newest first. body: array of [heading or "", paragraph] per language. dep: department code for the shop link. kw/kw_ar: SEO keywords. faq: questions shown on the article and in FAQ schema. Static pages blog-<slug>.html (English) and blog-<slug>-ar.html (Arabic) are generated from this file. */
const POSTS = [
{
"slug": "backup-generator-ats-ups-power-cuts-egypt",
"date": "2026-11-06",
"icon": "generator",
"dep": "machinery",
"img": "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1200&q=80&auto=format&fit=crop",
"kw": "backup generator Egypt, diesel generator price Egypt, ATS panel, UPS for office, power cuts Egypt, load shedding, generator sizing, generator maintenance, generator supplier in Egypt, reduce diesel consumption",
"kw_ar": "مولد كهرباء, مولد ديزل للمصانع, لوحة ATS, جهاز UPS, انقطاع الكهرباء في مصر, تخفيف الأحمال, حساب قدرة المولد, صيانة المولدات, توفير السولار, مورد مولدات في مصر",
"title": {
"en": "Power cuts in Egypt: backup generators, ATS and UPS that keep you open",
"ar": "انقطاع الكهرباء في مصر: مولدات ولوحات ATS وأجهزة UPS تبقي عملك مستمرا"
},
"excerpt": {
"en": "Load shedding stops lines, spoils stock and closes tills. A correctly sized generator, ATS panel and UPS keeps your site running and burns less diesel per hour.",
"ar": "تخفيف الأحمال يوقف خطوط الإنتاج ويتلف البضاعة ويغلق الكاشير. مولد بقدرة صحيحة مع لوحة ATS وجهاز UPS يبقي موقعك شغالا ويستهلك سولار أقل في الساعة."
},
"body": {
"en": [
[
"",
"Load shedding in recent summers reminded every business in Egypt how expensive a power cut can be. A factory line stops mid-batch, a clinic loses its fridges and X-ray, a shop closes its tills and an office goes offline. Even as Egypt expands its grid and builds new cities, a well planned backup system is still the cheapest insurance most sites can buy."
],
[
"What a power cut really costs",
"Count the lost production hours, spoiled stock, idle wages, equipment damaged by sudden shutdowns and customers who walk away. For many small factories one unplanned hour can cost more than a month of generator running. Servers, PLCs and medical devices can also be damaged when power drops and returns with a surge."
],
[
"Generator, ATS and UPS: who does what",
"A diesel generator carries the load for hours. An ATS panel (automatic transfer switch) detects the cut, starts the generator and moves the load over within seconds, then switches back when grid power returns. A UPS bridges those seconds with batteries, so computers, servers, cash registers and lab equipment never notice the gap."
],
[
"Sizing the generator correctly",
"List every load you must keep running, add the starting current of the largest motors and allow a margin of around 20 to 25 percent. An oversized generator running at 20 percent load burns more diesel per kWh, builds up carbon and wears faster, while an undersized one trips when a compressor starts. Most diesel generators work best at around 60 to 80 percent of their rated load."
],
[
"A simple diesel example",
"A workshop ran a 200 kVA generator for essential loads that rarely passed 70 kW. Moving those circuits to a correctly sized 125 kVA unit, and keeping non-essential lighting and air conditioning off the backup board, typically cuts fuel use by around a quarter per outage hour. Over a summer of daily cuts that adds up to thousands of litres of diesel."
],
[
"Maintenance that prevents a no-start",
"Most generators that fail during a cut fail because of flat starter batteries, old diesel, clogged filters or low coolant. Run the generator on load for 30 minutes every week or two, change oil and filters on the running hours schedule, test the ATS monthly and keep spare filters and a battery charger on site. UPS batteries usually last three to five years, so check their health every year."
],
[
"How Palm helps",
"Send us a list of the equipment you need to keep running, or your electricity bill and a photo of your main panel. We will propose the generator size, ATS panel and UPS units and send a full quotation within 24 hours, with delivery anywhere in Egypt."
]
],
"ar": [
[
"",
"تخفيف الأحمال في الصيف الماضي ذكّر كل منشأة في مصر بتكلفة انقطاع الكهرباء الحقيقية. خط الإنتاج يقف في منتصف التشغيلة، والعيادة تفقد الثلاجات وجهاز الأشعة، والمحل يقفل الكاشير، والمكتب يخرج من على الشبكة. ومع توسع الشبكة القومية وبناء المدن الجديدة، يظل نظام الطاقة الاحتياطية المدروس أرخص تأمين يمكن لأي موقع شراؤه."
],
[
"التكلفة الحقيقية لانقطاع الكهرباء",
"احسب ساعات الإنتاج الضائعة، والبضاعة التالفة، وأجور العمال وهم واقفون، والمعدات التي تتلف بسبب الفصل المفاجئ، والعملاء الذين يذهبون لغيرك. في كثير من المصانع الصغيرة ساعة انقطاع واحدة غير متوقعة قد تكلف أكثر من تشغيل المولد شهرا كاملا. والسيرفرات وأجهزة PLC والأجهزة الطبية قد تتلف أيضا عندما تنقطع الكهرباء ثم ترجع بقوة مفاجئة."
],
[
"المولد ولوحة ATS وجهاز UPS: دور كل واحد",
"مولد الكهرباء الديزل يشيل الحمل لساعات. لوحة ATS (مفتاح التحويل الأوتوماتيكي) تكتشف الانقطاع وتشغل المولد وتنقل الحمل عليه خلال ثوان، ثم ترجعه للكهرباء العمومية عند عودتها. وجهاز UPS يغطي هذه الثواني بالبطاريات، فلا تشعر أجهزة الكمبيوتر والسيرفرات والكاشير وأجهزة المعامل بأي انقطاع."
],
[
"حساب قدرة المولد صح",
"اكتب كل الأحمال التي يجب أن تستمر في العمل، وأضف تيار بدء تشغيل أكبر المواتير، واترك هامشا حوالي 20 إلى 25 بالمئة. المولد الأكبر من اللازم الذي يعمل على 20 بالمئة من قدرته يحرق سولار أكثر لكل كيلووات ساعة ويكوّن كربون ويستهلك أسرع، والمولد الأصغر من اللازم يفصل عند تشغيل الكمبروسر. ومعظم مولدات الديزل تعمل بأفضل كفاءة عند 60 إلى 80 بالمئة تقريبا من قدرتها."
],
[
"مثال بسيط على توفير السولار",
"ورشة كانت تشغل مولد 200 KVA لأحمال أساسية نادرا ما تتجاوز 70 كيلووات. نقل هذه الدوائر على مولد 125 KVA بالقدرة الصحيحة، وإبعاد الإضاءة والتكييف غير الضروريين عن لوحة الطوارئ، يخفض استهلاك السولار عادة بحوالي الربع في كل ساعة انقطاع. وعلى مدار صيف فيه انقطاع يومي، يصل التوفير لآلاف اللترات من السولار."
],
[
"صيانة تمنع مفاجأة عدم الدوران",
"معظم المولدات التي تفشل وقت الانقطاع تفشل بسبب بطارية مارش فاضية، أو سولار قديم، أو فلاتر مسدودة، أو مياه تبريد ناقصة. شغّل المولد على حمل لمدة 30 دقيقة كل أسبوع أو أسبوعين، وغيّر الزيت والفلاتر حسب عدد ساعات التشغيل، واختبر لوحة ATS شهريا، واحتفظ بفلاتر احتياطية وشاحن بطارية في الموقع. وبطاريات UPS تعيش عادة من ثلاث إلى خمس سنوات، فافحص حالتها كل سنة."
],
[
"كيف تساعدك بالم",
"أرسل لنا قائمة بالمعدات التي تحتاج أن تظل شغالة، أو فاتورة الكهرباء وصورة للوحة الرئيسية. سنقترح قدرة المولد ولوحة ATS وأجهزة UPS المناسبة ونرسل عرض سعر كامل خلال 24 ساعة، مع التوصيل لأي مكان في مصر."
]
]
},
"faq": [
{
"q": {
"en": "What size generator do I need for a small factory?",
"ar": "ما قدرة المولد المناسبة لمصنع صغير؟"
},
"a": {
"en": "Add up the running load of the machines you must keep on, add the starting current of the largest motors and a margin of 20 to 25 percent. Send us your equipment list and we will size it for you.",
"ar": "اجمع أحمال الماكينات التي يجب أن تستمر، وأضف تيار بدء تشغيل أكبر المواتير وهامشا من 20 إلى 25 بالمئة. أرسل لنا قائمة المعدات وسنحسب لك القدرة المناسبة."
}
},
{
"q": {
"en": "Do I need an ATS panel with my generator?",
"ar": "هل أحتاج لوحة ATS مع المولد؟"
},
"a": {
"en": "An ATS is not always required, but it switches the load automatically within seconds and avoids mistakes in manual switching. For clinics, cold rooms and production lines it is strongly recommended.",
"ar": "لوحة ATS ليست إلزامية دائما، لكنها تنقل الحمل أوتوماتيكيا خلال ثوان وتمنع أخطاء التحويل اليدوي. وننصح بها بقوة للعيادات وغرف التبريد وخطوط الإنتاج."
}
},
{
"q": {
"en": "How long does a UPS last during a power cut?",
"ar": "كم يدوم جهاز UPS أثناء انقطاع الكهرباء؟"
},
"a": {
"en": "It depends on the load and battery capacity. Most office UPS units are sized for 5 to 30 minutes, enough to bridge until the generator starts or to shut down safely; longer backup needs extra battery packs.",
"ar": "يعتمد على الحمل وسعة البطاريات. معظم أجهزة UPS للمكاتب تكفي من 5 إلى 30 دقيقة، وهذا يكفي حتى يدور المولد أو لإطفاء الأجهزة بأمان، والمدد الأطول تحتاج بطاريات إضافية."
}
}
]
},
{
"slug": "fire-extinguishers-alarms-civil-defense-egypt",
"date": "2026-11-06",
"icon": "extinguisher",
"dep": "safety",
"img": "https://images.unsplash.com/photo-1625958936686-a9343dc35b5b?w=1200&q=80&auto=format&fit=crop",
"kw": "fire extinguishers Egypt, fire extinguisher price Egypt, fire extinguisher refill, fire alarm system, fire hose reel, Civil Defense inspection Egypt, CO2 extinguisher, dry powder extinguisher, fire safety equipment supplier in Egypt",
"kw_ar": "طفايات حريق, سعر طفاية حريق, تعبئة طفايات الحريق, نظام إنذار حريق, بكرة خرطوم حريق, اشتراطات الدفاع المدني, طفاية CO2, طفاية بودرة, معدات إطفاء الحريق, مورد معدات حريق في مصر",
"title": {
"en": "Fire extinguishers and alarms in Egypt: get ready for Civil Defense",
"ar": "طفايات وإنذار الحريق في مصر: جهّز منشأتك لتفتيش الدفاع المدني"
},
"excerpt": {
"en": "The right fire extinguishers, alarms, hose reels and signage protect stock and staff and help you pass Civil Defense inspection, for far less than a fire costs.",
"ar": "طفايات الحريق وأجهزة الإنذار وبكرات الخراطيم واللوحات الإرشادية الصحيحة تحمي بضاعتك وعمالك وتساعدك تعدي تفتيش الدفاع المدني، بتكلفة أقل بكثير من الحريق."
},
"body": {
"en": [
[
"",
"Egypt is adding new factories, malls, hotels, schools and housing at a fast pace, and each of them must satisfy the Civil Defense before it opens and keep satisfying it after. Fire safety equipment is not just a licence requirement. It is the cheapest protection a business can buy against losing its stock, its building and its people."
],
[
"Cost of a fire vs cost of compliance",
"A small fire in a warehouse or kitchen can destroy stock, stop operations for weeks and raise insurance costs for years. A full set of fire extinguishers, alarms, hose reels and signage for a typical shop, office or small workshop usually costs a fraction of one month of lost trading. Annual servicing and refilling cost even less."
],
[
"Choosing the right fire extinguisher",
"Dry powder (ABC) extinguishers are the general purpose choice for offices, shops and warehouses. CO2 extinguishers suit electrical panels, server rooms and labs because they leave no residue. Foam suits flammable liquids, and wet chemical extinguishers are made for commercial kitchen fryers and cooking oil. Common sizes are 6 kg and 12 kg powder, 6 kg CO2 and 6 or 9 litre foam."
],
[
"How many, and where",
"Place extinguishers near exits, escape routes and specific risks such as electrical rooms, generators and kitchens, on wall brackets at a reachable height with a clear sign above each one. The exact number and spacing depend on floor area and type of activity, so check the current requirements of the Civil Defense for your site before you buy. A floor plan makes the calculation quick."
],
[
"Alarms, hose reels and signage",
"A fire alarm panel with smoke and heat detectors, manual call points and sounders gives early warning, especially at night when nobody is on site. Larger buildings typically also need fire hose reels or hose cabinets, emergency lighting and photoluminescent exit signs. Fire blankets in kitchens and first aid kits complete the basics."
],
[
"Refilling and getting inspection ready",
"Check pressure gauges and seals monthly, have extinguishers serviced at least once a year and refilled immediately after any use, and keep a tag on each one showing the last service date. Test alarms regularly and keep a simple logbook. Inspectors usually look for in-date extinguishers, clear access, working alarms and visible signs, so a check and labelling round before the visit avoids delays."
],
[
"How Palm helps",
"Send us your floor plan, the area of each room and the type of activity, or a list of the extinguishers you already have. We will propose the types, quantities, alarm components and signage, including replacements for expired units, and send a full quotation within 24 hours, with delivery anywhere in Egypt."
]
],
"ar": [
[
"",
"مصر تضيف مصانع ومولات وفنادق ومدارس ومساكن جديدة بسرعة كبيرة، وكل منشأة منها لازم تستوفي اشتراطات الدفاع المدني قبل الافتتاح وتفضل مستوفياها بعده. معدات الحريق ليست مجرد ورقة للترخيص، بل هي أرخص حماية يمكن أن تشتريها المنشأة ضد خسارة بضاعتها ومبناها وعمالها."
],
[
"تكلفة الحريق مقابل تكلفة الالتزام",
"حريق صغير في مخزن أو مطبخ ممكن يدمر البضاعة ويوقف الشغل لأسابيع ويرفع تكلفة التأمين لسنوات. أما مجموعة كاملة من طفايات الحريق وأجهزة الإنذار وبكرات الخراطيم واللوحات الإرشادية لمحل أو مكتب أو ورشة صغيرة فتكلف عادة جزءا صغيرا من مبيعات شهر واحد. والصيانة والتعبئة السنوية تكلف أقل من ذلك بكثير."
],
[
"اختيار طفاية الحريق المناسبة",
"طفايات البودرة (ABC) هي الاختيار العام للمكاتب والمحلات والمخازن. طفايات CO2 مناسبة للوحات الكهرباء وغرف السيرفرات والمعامل لأنها لا تترك أي أثر. طفايات الفوم مناسبة للسوائل القابلة للاشتعال، وطفايات الكيماويات الرطبة مصممة لقلايات وزيوت المطابخ التجارية. والأحجام الشائعة هي بودرة 6 و12 كجم، وCO2 بوزن 6 كجم، وفوم 6 أو 9 لتر."
],
[
"كم طفاية، وفين نركبها",
"ركّب الطفايات بجوار المخارج وطرق الهروب وأماكن الخطر مثل غرف الكهرباء والمولدات والمطابخ، على حوامل حائط بارتفاع يسهل الوصول إليه مع لوحة واضحة فوق كل طفاية. العدد والمسافات المطلوبة تعتمد على المساحة ونوع النشاط، لذلك راجع الاشتراطات الحالية للدفاع المدني لموقعك قبل الشراء. ومخطط المكان يجعل الحساب سريعا."
],
[
"الإنذار وبكرات الخراطيم واللوحات",
"لوحة إنذار حريق مع كواشف دخان وحرارة وأزرار يدوية وسارينات تعطي تحذيرا مبكرا، خاصة بالليل عندما لا يوجد أحد في الموقع. والمباني الأكبر تحتاج عادة أيضا بكرات خراطيم حريق أو صناديق حريق، وإضاءة طوارئ، ولوحات خروج فسفورية. وبطانية حريق في المطبخ وشنطة إسعافات أولية تكمل الأساسيات."
],
[
"التعبئة والاستعداد للتفتيش",
"افحص عداد الضغط والختم شهريا، واعمل صيانة للطفايات مرة على الأقل في السنة، وأعد تعبئتها فورا بعد أي استخدام، وعلّق على كل واحدة كارت بتاريخ آخر صيانة. اختبر الإنذار بانتظام واحتفظ بسجل بسيط. المفتش عادة يبحث عن طفايات سارية الصلاحية، وطريق وصول مفتوح، وإنذار شغال، ولوحات واضحة، لذلك جولة مراجعة وتعليم قبل الزيارة توفر عليك التأخير."
],
[
"كيف تساعدك بالم",
"أرسل لنا مخطط المكان ومساحة كل غرفة ونوع النشاط، أو قائمة بالطفايات الموجودة عندك. سنقترح الأنواع والكميات ومكونات الإنذار واللوحات، بما فيها بدائل الطفايات المنتهية، ونرسل عرض سعر كامل خلال 24 ساعة، مع التوصيل لأي مكان في مصر."
]
]
},
"faq": [
{
"q": {
"en": "Which fire extinguisher is best for an office or shop in Egypt?",
"ar": "ما أفضل طفاية حريق لمكتب أو محل في مصر؟"
},
"a": {
"en": "A 6 kg dry powder ABC extinguisher covers most risks in offices and shops, with a CO2 extinguisher next to the electrical panel or server room. Kitchens need a wet chemical extinguisher and a fire blanket.",
"ar": "طفاية بودرة ABC وزن 6 كجم تغطي معظم المخاطر في المكاتب والمحلات، مع طفاية CO2 بجوار لوحة الكهرباء أو غرفة السيرفر. والمطابخ تحتاج طفاية كيماويات رطبة وبطانية حريق."
}
},
{
"q": {
"en": "How often should fire extinguishers be refilled?",
"ar": "كل قد إيه لازم أعيد تعبئة طفايات الحريق؟"
},
"a": {
"en": "Extinguishers should be serviced at least once a year and refilled immediately after any use or if the gauge shows low pressure. Follow the manufacturer's guidance and the current Civil Defense requirements for your site.",
"ar": "الطفايات تحتاج صيانة مرة على الأقل في السنة، وإعادة تعبئة فورا بعد أي استخدام أو لو العداد أظهر ضغطا منخفضا. اتبع تعليمات الشركة المصنعة والاشتراطات الحالية للدفاع المدني لموقعك."
}
},
{
"q": {
"en": "How many fire extinguishers do I need for my building?",
"ar": "كم طفاية حريق أحتاج لمبناي؟"
},
"a": {
"en": "It depends on floor area, number of floors and the type of activity. Send us your floor plan and we will propose quantities in line with the current Civil Defense requirements.",
"ar": "يعتمد على المساحة وعدد الأدوار ونوع النشاط. أرسل لنا مخطط المبنى وسنقترح الكميات بما يتوافق مع الاشتراطات الحالية للدفاع المدني."
}
}
]
},
{
"slug": "cctv-cameras-access-control-factories-egypt",
"date": "2026-11-05",
"icon": "lock",
"dep": "security",
"img": "https://images.unsplash.com/photo-1496368077930-c1e31b4e5b44?w=1200&q=80&auto=format&fit=crop",
"kw": "CCTV cameras Egypt, IP cameras, surveillance cameras price Egypt, NVR, night vision camera, access control system, attendance system Egypt, fingerprint attendance, warehouse security, CCTV supplier in Egypt",
"kw_ar": "كاميرات مراقبة, سعر كاميرات المراقبة في مصر, كاميرات IP, جهاز تسجيل NVR, كاميرات رؤية ليلية, نظام التحكم في الدخول, أجهزة الحضور والانصراف, جهاز بصمة, تأمين المخازن والمصانع, مورد كاميرات مراقبة في مصر",
"title": {
"en": "CCTV and access control in Egypt: cut theft in factories and warehouses",
"ar": "كاميرات المراقبة والتحكم في الدخول في مصر: أوقف السرقة في المصانع والمخازن"
},
"excerpt": {
"en": "IP cameras, NVR recording and access control stop shrinkage and settle disputes fast. How to choose cameras, storage, night vision and attendance devices.",
"ar": "كاميرات IP والتسجيل على NVR وأنظمة التحكم في الدخول توقف الفاقد وتحسم الخلافات بسرعة. إزاي تختار الكاميرات والتخزين والرؤية الليلية وأجهزة الحضور في مصر."
},
"body": {
"en": [
[
"",
"From new factories in the Suez Canal Economic Zone to gated compounds in New Cairo and schools across the governorates, security is now part of every new project in Egypt. Theft, stock shrinkage and unauthorised entry quietly eat into margins. Modern CCTV cameras and access control systems cost far less than they did a few years ago and often pay for themselves through what they prevent."
],
[
"Where losses really come from",
"In most warehouses and factories, shrinkage comes from small, repeated losses: missing cartons, fuel and spare parts, goods leaving without paperwork and people entering areas they should not. Visible cameras at gates, loading bays and stores deter much of this, and recorded footage settles disputes with suppliers, drivers and customers quickly."
],
[
"Choosing IP cameras",
"IP cameras give sharper images than older analog systems and run over a single network cable that also powers them (PoE). Use 4 MP or higher at gates, cash points and loading bays, dome cameras indoors and bullet cameras with IP66 or IP67 housings outdoors to handle dust and heat. Varifocal lenses help where you need to read number plates or faces at a distance."
],
[
"Night vision and NVR storage",
"Many thefts happen at night, so choose cameras whose infrared range covers your yard, or colour night vision models where there is some ambient light. The NVR (network video recorder) needs enough hard disk space to keep footage as long as your business or insurer requires, often 30 days. As a rough guide, one 4 MP camera recording continuously with H.265 uses around 0.5 to 1.5 TB a month, and motion recording reduces this."
],
[
"Access control and attendance",
"Card readers, fingerprint and face recognition terminals control who opens which door and record every entry. The same devices work as attendance systems, ending paper sign-in sheets and staff clocking in for absent colleagues, and export data straight to payroll. Turnstiles and barrier gates suit factories, schools and compounds with heavy foot or vehicle traffic."
],
[
"A simple example",
"A distribution warehouse with 16 cameras, a 16 channel NVR and face recognition at two staff entrances can see who loaded each truck and when. If it prevents even a few lost pallets a year and saves an hour a day of manual attendance checks, a system like this typically pays back within one to two years."
],
[
"How Palm helps",
"Send us a site plan or a few photos showing the gates, stores and areas you want covered, and how many staff need access. We will propose cameras, NVR, hard disks, cabling, access control and attendance devices and send a full quotation within 24 hours, with delivery anywhere in Egypt."
]
],
"ar": [
[
"",
"من المصانع الجديدة في المنطقة الاقتصادية لقناة السويس إلى الكمباوندات في القاهرة الجديدة والمدارس في كل المحافظات، أصبح التأمين جزءا من كل مشروع جديد في مصر. السرقة والفاقد في المخزون ودخول غير المصرح لهم تأكل الأرباح في صمت. وكاميرات المراقبة وأنظمة التحكم في الدخول الحديثة أصبحت أرخص بكثير مما كانت عليه منذ سنوات قليلة، وغالبا تسترد ثمنها مما تمنعه من خسائر."
],
[
"من أين يأتي الفاقد فعلا",
"في معظم المخازن والمصانع، الفاقد يأتي من خسائر صغيرة متكررة: كراتين ناقصة، وسولار وقطع غيار تختفي، وبضاعة تخرج بدون إذن صرف، وأشخاص يدخلون أماكن ليست من حقهم. الكاميرات الظاهرة على البوابات ورصيف التحميل والمخازن تردع جزءا كبيرا من ذلك، والتسجيلات تحسم الخلافات مع الموردين والسائقين والعملاء بسرعة."
],
[
"اختيار كاميرات IP",
"كاميرات IP تعطي صورة أوضح من الأنظمة الأنالوج القديمة، وتعمل على كابل شبكة واحد يغذيها بالكهرباء أيضا (PoE). استخدم 4 ميجا بكسل أو أعلى على البوابات والخزن ورصيف التحميل، وكاميرات دوم داخلية، وكاميرات بولت خارجية بحماية IP66 أو IP67 لتتحمل التراب والحرارة. والعدسات الـ Varifocal مفيدة عندما تحتاج قراءة لوحات العربيات أو الوجوه من مسافة."
],
[
"الرؤية الليلية والتخزين على NVR",
"سرقات كثيرة تحدث بالليل، فاختر كاميرات مدى الأشعة تحت الحمراء فيها يغطي الساحة، أو كاميرات رؤية ليلية ملونة حيث توجد إضاءة خفيفة. جهاز التسجيل NVR يحتاج هارد ديسك يكفي لحفظ التسجيلات المدة التي تحتاجها منشأتك أو شركة التأمين، وغالبا 30 يوما. وكتقدير تقريبي، كاميرا 4 ميجا تسجل باستمرار بضغط H.265 تستهلك حوالي 0.5 إلى 1.5 تيرا في الشهر، والتسجيل عند الحركة يقلل ذلك."
],
[
"التحكم في الدخول والحضور والانصراف",
"قارئات الكروت وأجهزة البصمة والتعرف على الوجه تتحكم في من يفتح أي باب وتسجل كل دخول. ونفس الأجهزة تعمل كأجهزة حضور وانصراف، فتنهي كشوف التوقيع الورقية وتوقيع الموظفين بدل زملائهم الغائبين، وتصدّر البيانات مباشرة للمرتبات. والبوابات الدوارة والبوابات الأوتوماتيكية مناسبة للمصانع والمدارس والكمباوندات ذات الحركة الكثيفة للأفراد أو العربيات."
],
[
"مثال بسيط",
"مخزن توزيع فيه 16 كاميرا وجهاز NVR بـ 16 قناة وجهاز تعرف على الوجه على مدخلين للعمال يستطيع أن يعرف من حمّل كل عربية ومتى. ولو منع ولو بالتات قليلة مفقودة في السنة ووفر ساعة يوميا من مراجعة الحضور يدويا، فنظام مثل هذا يسترد تكلفته عادة خلال سنة إلى سنتين."
],
[
"كيف تساعدك بالم",
"أرسل لنا مخطط الموقع أو بعض الصور للبوابات والمخازن والأماكن التي تريد تغطيتها، وعدد العاملين الذين يحتاجون صلاحية دخول. سنقترح الكاميرات وجهاز NVR والهاردات والكابلات وأجهزة التحكم في الدخول والحضور والانصراف، ونرسل عرض سعر كامل خلال 24 ساعة، مع التوصيل لأي مكان في مصر."
]
]
},
"faq": [
{
"q": {
"en": "How many days of recording can an NVR store?",
"ar": "جهاز NVR يحفظ تسجيلات كام يوم؟"
},
"a": {
"en": "It depends on the number of cameras, resolution, compression and hard disk size. As a rough guide, plan around 1 TB per 4 MP camera for 30 days of continuous H.265 recording, less with motion recording.",
"ar": "يعتمد على عدد الكاميرات والدقة ونوع الضغط وحجم الهارد. وكتقدير تقريبي، احسب حوالي 1 تيرا لكل كاميرا 4 ميجا لمدة 30 يوما من التسجيل المستمر بضغط H.265، وأقل مع التسجيل عند الحركة."
}
},
{
"q": {
"en": "Are IP cameras better than analog cameras?",
"ar": "هل كاميرات IP أفضل من الكاميرات الأنالوج؟"
},
"a": {
"en": "For most new installations, yes: IP cameras give higher resolution, use one cable for power and data and are easier to expand. Analog can still make sense when upgrading an existing site on a tight budget.",
"ar": "في معظم التركيبات الجديدة نعم، فكاميرات IP دقتها أعلى وتستخدم كابلا واحدا للكهرباء والبيانات وأسهل في التوسع. والأنالوج قد يكون مناسبا عند تطوير موقع قائم بميزانية محدودة."
}
},
{
"q": {
"en": "Can a fingerprint attendance device connect to payroll?",
"ar": "هل يمكن ربط جهاز البصمة بالمرتبات؟"
},
"a": {
"en": "Most modern attendance devices export records to Excel or connect to HR and payroll software over the network. Tell us which system you use and we will suggest compatible devices.",
"ar": "معظم أجهزة الحضور والانصراف الحديثة تصدّر البيانات إلى Excel أو ترتبط ببرامج الموارد البشرية والمرتبات عبر الشبكة. قل لنا البرنامج الذي تستخدمه وسنقترح الأجهزة المتوافقة."
}
}
]
},
{
"slug": "structured-cabling-fiber-network-offices-egypt",
"date": "2026-11-05",
"icon": "cable",
"dep": "telecom",
"img": "https://images.unsplash.com/photo-1683322499436-f4383dd59f5a?w=1200&q=80&auto=format&fit=crop",
"kw": "structured cabling Egypt, Cat6 cable price Egypt, fiber optic cable, network rack, Wi-Fi access points, office network installation, Cat6A, patch panel, PoE switch, networking supplier in Egypt",
"kw_ar": "كابلات شبكات, كابل Cat6, سعر كابل شبكة, كابلات فايبر, راك شبكة, أكسس بوينت واي فاي, تمديد شبكات للمكاتب, باتش بانل, سويتش PoE, مورد مستلزمات شبكات في مصر",
"title": {
"en": "Structured cabling and fiber for Egyptian offices: wire it right once",
"ar": "تمديد شبكات وفايبر للمكاتب في مصر: نفّذها صح من أول مرة"
},
"excerpt": {
"en": "Cat6, fiber, racks and Wi-Fi access points planned once at fit-out keep your office online for years and avoid costly downtime and rewiring later.",
"ar": "كابلات Cat6 والفايبر والراكات ونقاط الواي فاي المخططة مرة واحدة وقت التشطيب تبقي مكتبك متصلا لسنوات وتمنع التوقف وإعادة التمديد المكلفة لاحقا."
},
"body": {
"en": [
[
"",
"Digital Egypt is moving government services, banking, education and business online, and new administrative cities and business parks are being built around fast connectivity. Yet many offices still run on cabling added piece by piece over the years, and every loose cable or overheating switch means lost hours. Structured cabling done properly once typically supports the network for well over a decade."
],
[
"The cost of a messy network",
"Random patch cords, cheap connectors and unlabelled ports cause slow Wi-Fi, dropped calls and long troubleshooting. When the system or internet goes down, a whole office sits idle. Rewiring later, with ceilings opened and staff working around technicians, usually costs far more than doing it right at fit-out."
],
[
"Cat6 or fiber: what goes where",
"Cat6 copper cable is the standard for desks, phones, cameras and access points, handling 1 Gbps comfortably and up to 10 Gbps over shorter runs. Cat6A suits high density or future proof floors. Fiber optic cable is used for the backbone between floors and buildings, for runs longer than about 90 metres and where electrical interference is high, as in factories."
],
[
"Racks, patch panels and labelling",
"A proper network rack with patch panels, cable managers, a power distribution unit and ventilation keeps switches cool and makes every change a two minute job. Label both ends of every cable and keep a simple port map. Wall mount racks suit small offices, while floor standing 42U racks suit server rooms and the building's main distribution point."
],
[
"Wi-Fi access points, not home routers",
"Ceiling mounted access points powered by PoE switches give stable coverage across the whole floor and let staff move between rooms without dropping. A typical open office needs roughly one access point per 150 to 250 square metres, depending on walls and the number of users. Central management makes guest networks and passwords easy to control."
],
[
"A simple planning example",
"A 600 square metre office for 60 staff might need around 90 to 120 Cat6 points for desks, printers, cameras and phones, three to four ceiling access points, one 24U rack with two 48 port PoE switches and a fiber link to the building riser. Planning this at design stage avoids extra trunking, wasted cable and weeks of disruption later."
],
[
"How Palm helps",
"Send us the floor plan, the number of staff and devices, or the cable schedule from your consultant. We will propose cable, fiber, racks, patch panels, switches and access points with quantities and send a full quotation within 24 hours, with delivery anywhere in Egypt, including the New Administrative Capital and the new cities."
]
],
"ar": [
[
"",
"مصر الرقمية تنقل الخدمات الحكومية والبنوك والتعليم والأعمال إلى الإنترنت، والعواصم الإدارية الجديدة ومجمعات الأعمال تُبنى على أساس اتصال سريع. ومع ذلك، مكاتب كثيرة ما زالت تعمل على كابلات تمت إضافتها حتة حتة على مر السنين، وكل كابل سايب أو سويتش سخن يعني ساعات ضائعة. أما تمديد الشبكات المنظم المنفذ صح من أول مرة فيخدم الشبكة عادة لأكثر من عشر سنوات."
],
[
"تكلفة الشبكة العشوائية",
"الباتش كورد العشوائي والكونكترات الرخيصة والبورتات بدون ترقيم تسبب واي فاي بطيء ومكالمات تقطع وتصليح أعطال يأخذ وقتا طويلا. وعندما يقع السيستم أو الإنترنت، المكتب كله يقعد بدون شغل. وإعادة التمديد لاحقا، مع فتح الأسقف والموظفين يشتغلون وسط الفنيين، تكلف عادة أكثر بكثير من التنفيذ الصحيح وقت التشطيب."
],
[
"Cat6 أم فايبر: كل واحد فين",
"كابل الشبكة Cat6 النحاس هو الأساس للمكاتب والتليفونات والكاميرات ونقاط الواي فاي، ويتحمل 1 جيجابت بسهولة وحتى 10 جيجابت في المسافات الأقصر. وكابل Cat6A مناسب للأدوار عالية الكثافة أو للتجهيز للمستقبل. أما كابلات الفايبر فتستخدم للعمود الفقري بين الأدوار والمباني، وللمسافات الأطول من حوالي 90 مترا، وفي الأماكن ذات التداخل الكهربائي العالي مثل المصانع."
],
[
"الراك والباتش بانل والترقيم",
"راك شبكة مضبوط فيه باتش بانل ومنظمات كابلات وPDU وتهوية يحافظ على السويتشات باردة ويجعل أي تعديل شغل دقيقتين. رقّم طرفي كل كابل واحتفظ بخريطة بسيطة للبورتات. الراك الحائطي مناسب للمكاتب الصغيرة، والراك الأرضي 42U مناسب لغرف السيرفرات ونقطة التوزيع الرئيسية في المبنى."
],
[
"أكسس بوينت بدل راوترات البيوت",
"نقاط الواي فاي (أكسس بوينت) المركبة في السقف والمغذاة من سويتشات PoE تعطي تغطية ثابتة للدور كله، وتسمح للموظفين بالتنقل بين الغرف بدون فصل. المكتب المفتوح يحتاج تقريبا أكسس بوينت لكل 150 إلى 250 مترا مربعا حسب الحوائط وعدد المستخدمين. والإدارة المركزية تسهل التحكم في شبكة الضيوف وكلمات المرور."
],
[
"مثال بسيط للتخطيط",
"مكتب مساحته 600 متر مربع لـ 60 موظفا قد يحتاج حوالي 90 إلى 120 نقطة Cat6 للمكاتب والطابعات والكاميرات والتليفونات، وثلاثة إلى أربعة أكسس بوينت في السقف، وراك 24U واحد فيه سويتشين PoE بـ 48 بورت، ووصلة فايبر لرايزر المبنى. تخطيط هذا في مرحلة التصميم يوفر مجاري كابلات زيادة وكابلات مهدرة وأسابيع من التعطيل لاحقا."
],
[
"كيف تساعدك بالم",
"أرسل لنا مخطط الدور وعدد الموظفين والأجهزة، أو جدول الكابلات من الاستشاري. سنقترح الكابلات والفايبر والراكات والباتش بانل والسويتشات ونقاط الواي فاي بالكميات، ونرسل عرض سعر كامل خلال 24 ساعة، مع التوصيل لأي مكان في مصر، بما في ذلك العاصمة الإدارية الجديدة والمدن الجديدة."
]
]
},
"faq": [
{
"q": {
"en": "Should I use Cat6 or Cat6A for a new office?",
"ar": "أستخدم Cat6 ولا Cat6A في مكتب جديد؟"
},
"a": {
"en": "Cat6 is enough for most offices and delivers 1 Gbps to every desk. Choose Cat6A if you expect 10 Gbps to desks or high density Wi-Fi in the coming years.",
"ar": "Cat6 يكفي لمعظم المكاتب ويوصل 1 جيجابت لكل مكتب. اختر Cat6A لو تتوقع احتياج 10 جيجابت للمكاتب أو واي فاي عالي الكثافة في السنوات القادمة."
}
},
{
"q": {
"en": "What is the maximum length of a Cat6 cable?",
"ar": "ما أقصى طول لكابل Cat6؟"
},
"a": {
"en": "The standard channel length is 100 metres, made of about 90 metres of fixed cable plus patch cords. For longer runs between floors or buildings, use fiber.",
"ar": "الطول القياسي للقناة 100 متر، منها حوالي 90 مترا كابل ثابت والباقي باتش كورد. وللمسافات الأطول بين الأدوار أو المباني استخدم الفايبر."
}
},
{
"q": {
"en": "How many Wi-Fi access points does an office need?",
"ar": "كم أكسس بوينت واي فاي يحتاج المكتب؟"
},
"a": {
"en": "As a rough guide, one access point per 150 to 250 square metres of open office, more where there are thick walls or many users. A floor plan lets us propose an exact number.",
"ar": "كتقدير تقريبي، أكسس بوينت لكل 150 إلى 250 مترا مربعا من المكتب المفتوح، وأكثر في وجود حوائط سميكة أو مستخدمين كثيرين. ومخطط الدور يسمح لنا باقتراح العدد بدقة."
}
}
]
},
{
"slug": "hotel-supplies-ffe-linen-amenities-egypt",
"date": "2026-11-04",
"icon": "towel",
"dep": "hospitality",
"img": "https://images.unsplash.com/photo-1630660664869-c9d3cc676880?w=1200&q=80&auto=format&fit=crop",
"kw": "hotel supplies Egypt, hotel FF&E, hotel linen supplier Egypt, hotel towels, hotel amenities, hotel kitchen equipment, housekeeping supplies, hotel opening checklist, Red Sea hotels, hotel supplier in Egypt",
"kw_ar": "مستلزمات فنادق, تجهيز فنادق في مصر, مفروشات فنادق, فوط فنادق, أمنيتيز فنادق, معدات مطابخ فنادق, مستلزمات هاوس كيبينج, قائمة افتتاح فندق, فنادق البحر الأحمر, مورد مستلزمات فنادق في مصر",
"title": {
"en": "Hotel supplies checklist for Egypt: FF&E, linen, amenities and kitchen",
"ar": "قائمة مستلزمات الفنادق في مصر: أثاث ومفروشات وأمنيتيز ومطابخ"
},
"excerpt": {
"en": "Opening or renovating a hotel in Egypt's tourism boom? A checklist for FF&E, linen, amenities, kitchen and housekeeping, and why one supplier saves time.",
"ar": "تفتتح أو تجدد فندقا مع طفرة السياحة في مصر؟ قائمة عملية للأثاث والمفروشات والأمنيتيز والمطابخ والهاوس كيبينج، ولماذا يوفر المورد الواحد الوقت والتكلفة."
},
"body": {
"en": [
[
"",
"Egypt's tourism is growing fast, with strong visitor numbers, new hotels on the Red Sea and North Coast and upgrades across Cairo, Luxor and Aswan. Whether you are opening a new hotel or renovating rooms between seasons, the supply list runs to hundreds of items. Getting it right, on time and on budget decides whether you open on the date your bookings start."
],
[
"The opening checklist problem",
"A typical opening involves FF&E for rooms and public areas, linen and towels, guest amenities, kitchen equipment, housekeeping supplies and back of house items. Bought from a dozen vendors, each with its own lead time and invoice, one missing item such as shower curtains or minibar trays can hold up a whole floor. One consolidated supplier and one delivery schedule remove most of that risk."
],
[
"FF&E and room essentials",
"Plan beds and mattresses, wardrobes, desks, curtains and blackout blinds, lamps, safes, minibars, kettles, hair dryers and room signage for each room type. Ask for contract grade fabrics and finishes that handle heavy daily use, coastal humidity and strong sun. Ordering a small percentage of extra stock for damage and replacement saves emergency purchases later."
],
[
"Linen and towels",
"Hotels usually plan three to five sets (pars) of linen per bed: one on the bed, one in the laundry, one in the store and spares. Choose cotton or cotton polyester blends that suit industrial laundry, with bath towels typically around 450 to 600 gsm. Better linen survives more wash cycles, which lowers the cost per use even if the unit price is higher."
],
[
"Amenities, kitchen and housekeeping",
"Guest amenities such as shampoo, soap, dental kits and slippers can carry your brand at modest cost. The kitchen needs cooking equipment, stainless steel tables, cold storage, cutlery, crockery and glassware with breakage stock. Housekeeping needs trolleys, cleaning chemicals, mops, vacuum cleaners, bins and laundry carts, plus PPE for staff."
],
[
"A simple example",
"A 100 room resort buying linen, amenities and housekeeping items from several vendors can easily end up handling more than 20 purchase orders, deliveries and follow ups. Consolidating them into one or two orders with a single delivery schedule often saves weeks of procurement time and lowers cost through volume pricing and fewer trips."
],
[
"How Palm helps",
"Send us your room count and room types, your FF&E list or BOQ, or simply your opening date. We will build a complete supply list, quote everything in one offer within 24 hours and deliver anywhere in Egypt, from Hurghada, Sharm El Sheikh and Marsa Alam to the North Coast, Luxor and Cairo."
]
],
"ar": [
[
"",
"السياحة في مصر تنمو بسرعة، مع أعداد زائرين قوية وفنادق جديدة على البحر الأحمر والساحل الشمالي وتطوير في القاهرة والأقصر وأسوان. سواء كنت تفتتح فندقا جديدا أو تجدد الغرف بين المواسم، قائمة المستلزمات تصل لمئات البنود. وتوريدها صح وفي الميعاد وفي حدود الميزانية هو ما يحدد هل ستفتح في التاريخ الذي تبدأ فيه حجوزاتك أم لا."
],
[
"مشكلة قائمة الافتتاح",
"الافتتاح المعتاد يشمل الأثاث والتجهيزات FF&E للغرف والأماكن العامة، والمفروشات والفوط، والأمنيتيز، ومعدات المطبخ، ومستلزمات الهاوس كيبينج، وبنود الخدمات الخلفية. ولما تشتري من عشرة موردين لكل واحد ميعاد تسليم وفاتورة، بند واحد ناقص مثل ستائر البانيو أو صواني الميني بار ممكن يعطل دورا كاملا. مورد واحد وجدول توريد واحد يزيلان معظم هذا الخطر."
],
[
"الأثاث والتجهيزات وأساسيات الغرفة",
"خطط للسراير والمراتب والدواليب والمكاتب والستائر والبلاك أوت والأباجورات والخزن والميني بار والكاتل ومجففات الشعر ولوحات الغرف لكل نوع غرفة. اطلب أقمشة وتشطيبات بدرجة تعاقدية (contract grade) تتحمل الاستخدام اليومي الكثيف ورطوبة السواحل والشمس القوية. وطلب نسبة صغيرة زيادة للتالف والاستبدال يوفر عليك مشتريات الطوارئ لاحقا."
],
[
"المفروشات والفوط",
"الفنادق عادة تخطط من ثلاثة إلى خمسة أطقم مفروشات لكل سرير: واحد على السرير، وواحد في المغسلة، وواحد في المخزن، والباقي احتياطي. اختر قطن أو قطن بوليستر يناسب المغاسل الصناعية، وفوط الحمام عادة حوالي 450 إلى 600 جرام للمتر المربع. المفروشات الأجود تتحمل غسلات أكثر، فتقل تكلفة الاستخدام الواحد حتى لو سعر القطعة أعلى."
],
[
"الأمنيتيز والمطبخ والهاوس كيبينج",
"أمنيتيز الضيوف مثل الشامبو والصابون وأطقم الأسنان والشباشب ممكن تحمل علامتك التجارية بتكلفة معقولة. والمطبخ يحتاج معدات طهي وترابيزات ستانلس ستيل وتبريد وتخزين وأدوات مائدة وأطباق وكاسات مع مخزون للكسر. والهاوس كيبينج يحتاج تروليات ومواد تنظيف ومساحات ومكانس كهربائية وصناديق قمامة وعربات غسيل، بالإضافة لمهمات وقاية للعاملين."
],
[
"مثال بسيط",
"منتجع من 100 غرفة يشتري المفروشات والأمنيتيز ومستلزمات الهاوس كيبينج من عدة موردين قد يجد نفسه يتابع أكثر من 20 أمر شراء وتوريد ومتابعة. تجميعها في أمر أو اثنين بجدول توريد واحد يوفر غالبا أسابيع من وقت المشتريات ويخفض التكلفة بفضل أسعار الكميات وعدد نقلات أقل."
],
[
"كيف تساعدك بالم",
"أرسل لنا عدد الغرف وأنواعها، أو قائمة FF&E أو المقايسة، أو ببساطة ميعاد الافتتاح. سنجهز قائمة مستلزمات كاملة ونقدم عرض سعر واحد لكل شيء خلال 24 ساعة، مع التوصيل لأي مكان في مصر، من الغردقة وشرم الشيخ ومرسى علم إلى الساحل الشمالي والأقصر والقاهرة."
]
]
},
"faq": [
{
"q": {
"en": "What supplies do I need to open a hotel in Egypt?",
"ar": "ما المستلزمات التي أحتاجها لافتتاح فندق في مصر؟"
},
"a": {
"en": "The main groups are FF&E for rooms and public areas, linen and towels, guest amenities, kitchen and restaurant equipment, housekeeping and laundry supplies, and safety equipment. Send us your room count and we will share a full checklist with a quotation.",
"ar": "المجموعات الأساسية هي الأثاث والتجهيزات للغرف والأماكن العامة، والمفروشات والفوط، والأمنيتيز، ومعدات المطبخ والمطعم، ومستلزمات الهاوس كيبينج والمغسلة، ومعدات السلامة. أرسل لنا عدد الغرف وسنرسل قائمة كاملة مع عرض السعر."
}
},
{
"q": {
"en": "How many sets of linen does a hotel need per bed?",
"ar": "كم طقم مفروشات يحتاج الفندق لكل سرير؟"
},
"a": {
"en": "Most hotels keep three to five sets (pars) per bed, so there is always one on the bed, one in the laundry and spares in the store. Busy resorts or slow laundry cycles push toward the higher end.",
"ar": "معظم الفنادق تحتفظ بثلاثة إلى خمسة أطقم لكل سرير، بحيث يكون هناك دائما طقم على السرير وطقم في المغسلة واحتياطي في المخزن. والمنتجعات المزدحمة أو دورات الغسيل البطيئة تحتاج الحد الأعلى."
}
},
{
"q": {
"en": "What is a good towel weight for hotels?",
"ar": "ما الوزن المناسب لفوط الفنادق؟"
},
"a": {
"en": "Bath towels of around 450 to 600 gsm balance softness, durability and drying time in industrial laundries. Heavier towels feel more luxurious but take longer to dry.",
"ar": "فوط الحمام بوزن حوالي 450 إلى 600 جرام للمتر المربع توازن بين النعومة والتحمل وسرعة التجفيف في المغاسل الصناعية. والفوط الأثقل أفخم في الملمس لكنها تأخذ وقتا أطول في التجفيف."
}
}
]
},
{
"slug": "warehouse-racking-pallet-trucks-storage-egypt",
"date": "2026-11-04",
"icon": "pallettruck",
"dep": "material_handling",
"img": "https://images.unsplash.com/photo-1672552226380-486fe900b322?w=1200&q=80&auto=format&fit=crop",
"kw": "pallet racking Egypt, warehouse shelving, storage racks supplier Egypt, pallet truck, hand pallet jack, electric stacker, warehouse storage solutions, e-commerce warehouse Egypt, racking price Egypt",
"kw_ar": "أرفف مخازن, أرفف بالتات, رفوف تخزين, ونش بالتات يدوي, هاند باليت, ستاكر كهرباء, تجهيز مخازن في مصر, أرفف مخازن أسعار, مورد أرفف مخازن في مصر",
"title": {
"en": "Warehouse racking in Egypt: double storage without a bigger warehouse",
"ar": "أرفف المخازن في مصر: ضاعف مساحة التخزين بدون مخزن أكبر"
},
"excerpt": {
"en": "E-commerce and logistics are booming in Egypt and warehouse rents keep rising. Racking, shelving and stackers let you store far more in the same space.",
"ar": "التجارة الإلكترونية واللوجستيات تنمو بسرعة في مصر وإيجارات المخازن ترتفع. أرفف البالتات والرفوف والستاكر تخليك تخزن أكثر بكثير في نفس المساحة."
},
"body": {
"en": [
[
"",
"Egypt's logistics sector is growing fast, driven by e-commerce, new industrial zones around the Suez Canal and 10th of Ramadan, and new dry ports. Warehouse space near Cairo, Alexandria and the new cities is in demand and rents keep climbing. Before you sign a lease on a bigger building, look up: most warehouses use less than half of their real height."
],
[
"The problem with floor stacking",
"Pallets stacked directly on the floor waste the space above them, crush the cartons at the bottom and make it hard to reach older stock first. Workers spend time moving pallets to reach the one they need, and picking errors grow as the stock grows. The result is a full warehouse that is actually mostly air."
],
[
"Use the height you already pay for",
"Selective pallet racking turns a 7 to 9 meter clear height into four or five storage levels, so the same floor can often hold two to three times as many pallets. For small items and e-commerce orders, boltless shelving and longspan racks keep cartons organised and easy to pick. Mezzanine floors add a second working level for packing or light storage."
],
[
"A simple capacity example",
"Take a 1,000 m2 warehouse floor stacking around 400 pallets. With selective racking at four levels and proper aisles, the same building can typically hold 900 to 1,100 pallet positions. If the alternative was renting a second warehouse, the racking usually pays for itself within the first year of avoided rent."
],
[
"Moving the load: pallet trucks and stackers",
"A manual hand pallet truck rated 2.5 to 3 tons is the basic tool for any site. For racking up to around 3 to 4.5 meters, an electric or semi-electric stacker is far cheaper than a forklift and works in narrow aisles. Add trolleys, platform carts and plastic bins for picking areas so staff are not carrying loads by hand."
],
[
"How to choose, and mistakes to avoid",
"Measure clear height, column positions and your pallet size (1200 x 1000 or 1200 x 800) before ordering. Check beam load per level against your heaviest pallets, keep aisle widths matched to your truck or stacker, and fit column guards and load signs. Never mix parts from different racking systems, and check the current Civil Defense requirements for sprinklers and aisle access."
],
[
"How Palm helps",
"Send us your warehouse plan or simply the floor size, clear height, pallet size and what you store. We will propose a racking layout, the shelving, pallet trucks and stackers you need, and a full quotation within 24 hours, with delivery anywhere in Egypt."
]
],
"ar": [
[
"",
"قطاع اللوجستيات في مصر بينمو بسرعة بفضل التجارة الإلكترونية والمناطق الصناعية الجديدة حول قناة السويس والعاشر من رمضان والموانئ الجافة الجديدة. الطلب على المخازن حول القاهرة والإسكندرية والمدن الجديدة عالي والإيجارات في ارتفاع. قبل ما توقع عقد مخزن أكبر، بص لفوق: معظم المخازن بتستخدم أقل من نصف ارتفاعها الحقيقي."
],
[
"مشكلة التخزين على الأرض",
"رص البالتات على الأرض مباشرة يضيع المساحة اللي فوقها، ويكسر الكراتين اللي تحت، ويصعب صرف البضاعة القديمة أولا. العمال يضيعوا وقت في تحريك البالتات للوصول للمطلوبة، وأخطاء الصرف تزيد كل ما زاد المخزون. والنتيجة مخزن مليان لكن أغلبه هواء."
],
[
"استغل الارتفاع اللي بتدفع إيجاره",
"أرفف البالتات السليكتف تحول ارتفاع صافي من 7 إلى 9 متر إلى أربع أو خمس أدوار تخزين، فنفس الأرضية غالبا تستوعب ضعفين إلى ثلاثة أضعاف عدد البالتات. وللأصناف الصغيرة وطلبات التجارة الإلكترونية، الرفوف المعدنية بدون مسامير وأرفف الأحمال المتوسطة تخلي الكراتين منظمة وسهلة الصرف. والميزانين يضيف دور عمل تاني للتعبئة أو التخزين الخفيف."
],
[
"مثال بسيط للسعة",
"مخزن مساحته 1,000 متر مربع يرص حوالي 400 بالتة على الأرض. بأرفف سليكتف من أربع أدوار وممرات مظبوطة، نفس المبنى يستوعب عادة من 900 إلى 1,100 موقع بالتة. ولو البديل كان إيجار مخزن تاني، الأرفف غالبا بتسترد تكلفتها خلال أول سنة من الإيجار اللي وفرته."
],
[
"تحريك الحمولة: ونش البالتات والستاكر",
"ونش البالتات اليدوي (هاند باليت) بحمولة 2.5 إلى 3 طن هو الأداة الأساسية لأي موقع. وللأرفف حتى ارتفاع حوالي 3 إلى 4.5 متر، الستاكر الكهرباء أو النص كهرباء أرخص كثيرا من الكلارك ويشتغل في الممرات الضيقة. أضف ترولي وعربيات منصة وصناديق بلاستيك لمناطق التجهيز عشان العمال ما يشيلوش الحمولة بإيديهم."
],
[
"إزاي تختار، وأخطاء تتجنبها",
"قيس الارتفاع الصافي وأماكن الأعمدة ومقاس البالتة عندك (1200 × 1000 أو 1200 × 800) قبل الطلب. راجع حمولة الكمرة في كل دور مقارنة بأتقل بالتة، وخلي عرض الممر مناسب للونش أو الستاكر، وركب حمايات للقوائم ولافتات الحمولة. ما تخلطش قطع من أنظمة أرفف مختلفة، وراجع الاشتراطات الحالية للحماية المدنية بخصوص الرشاشات والممرات."
],
[
"كيف تساعدك بالم",
"ابعت لنا مخطط المخزن أو ببساطة المساحة والارتفاع الصافي ومقاس البالتة ونوع البضاعة. هنقترح توزيع الأرفف والرفوف وونش البالتات والستاكر المناسبين، مع عرض سعر كامل خلال 24 ساعة، والتوصيل لأي مكان في مصر."
]
]
},
"faq": [
{
"q": {
"en": "How much weight can a pallet racking level hold?",
"ar": "الدور الواحد في أرفف البالتات يشيل كام كيلو؟"
},
"a": {
"en": "It depends on the beam size and length. Common systems carry around 1,000 to 3,000 kg per pair of beams, so always order based on your heaviest pallet with a safety margin.",
"ar": "يعتمد على مقاس وطول الكمرة. الأنظمة الشائعة تشيل حوالي 1,000 إلى 3,000 كجم لكل زوج كمرات، فاطلب دائما على أساس أتقل بالتة عندك مع هامش أمان."
}
},
{
"q": {
"en": "Do I need a forklift or is a stacker enough?",
"ar": "محتاج كلارك ولا الستاكر يكفي؟"
},
"a": {
"en": "For racking up to about 4.5 meters and indoor use, an electric stacker is usually enough and costs much less to buy and run. Higher racking, heavy loads or outdoor yards normally need a forklift.",
"ar": "للأرفف حتى حوالي 4.5 متر والاستخدام الداخلي، الستاكر الكهرباء غالبا يكفي وتكلفة شرائه وتشغيله أقل كثيرا. الأرفف الأعلى والأحمال التقيلة والساحات المكشوفة تحتاج عادة كلارك."
}
},
{
"q": {
"en": "Can racking be installed in a rented warehouse?",
"ar": "ينفع أركب أرفف في مخزن إيجار؟"
},
"a": {
"en": "Yes. Selective racking is bolted to the floor and can be dismantled and moved to a new site, so the investment goes with you when the lease ends.",
"ar": "أيوه. الأرفف السليكتف بتتثبت في الأرضية بمسامير وممكن تتفك وتتنقل لموقع جديد، فاستثمارك بيمشي معاك لما العقد يخلص."
}
}
]
},
{
"slug": "roof-thermal-insulation-cool-roof-egypt",
"date": "2026-11-03",
"icon": "paint",
"dep": "building_finishes",
"img": "https://images.unsplash.com/photo-1657195721935-e73e545a2aae?w=1200&q=80&auto=format&fit=crop",
"kw": "thermal insulation Egypt, roof insulation, cool roof coating, reflective roof paint, insulated sandwich panels, polyurethane foam insulation, reduce air conditioning bill, heat insulation supplier Egypt, waterproofing and insulation",
"kw_ar": "عزل حراري, عزل أسطح, دهان عازل للحرارة, دهان عاكس للأسطح, ساندوتش بانل, عزل فوم بولي يوريثان, عزل حراري ومائي, تقليل فاتورة التكييف, مورد مواد عزل في مصر",
"title": {
"en": "Roof thermal insulation in Egypt: cut your air-conditioning bills",
"ar": "العزل الحراري للأسطح في مصر: خفض فاتورة التكييف من الصيف ده"
},
"excerpt": {
"en": "The roof is where most summer heat enters an Egyptian building. Insulation, reflective coatings and sealing keep rooms cooler and cut AC costs.",
"ar": "السطح هو المدخل الأكبر لحرارة الصيف في المباني المصرية. العزل الحراري والدهانات العاكسة وسد الفتحات تخلي الأماكن أبرد وتقلل تكلفة تشغيل التكييف بشكل واضح."
},
"body": {
"en": [
[
"",
"Egypt is pushing hard on energy efficiency, and the new building codes in the new cities increasingly expect better thermal performance. For owners of offices, schools, factories, hotels and residential blocks, the motive is simpler: electricity tariffs are rising and air conditioning is the biggest summer load. The cheapest kilowatt is the one your AC never has to use."
],
[
"Where the heat comes from",
"A flat concrete roof under the Egyptian sun can easily reach 60 to 70 degrees on its surface in summer. That heat soaks through the slab all day and radiates into the top floor long after sunset. Top-floor rooms are often several degrees hotter than the floors below, and their AC units run longer and wear out sooner."
],
[
"What actually works",
"Roof insulation boards (extruded polystyrene or polyurethane) under a protective screed slow heat flow through the slab dramatically. A white reflective cool roof coating bounces most of the sunlight back before it is absorbed. For sheds, warehouses and site buildings, insulated sandwich panels replace bare metal sheets, and sealing gaps around doors, windows and ducts stops cool air leaking out."
],
[
"A simple savings example",
"Take a top-floor office of 300 m2 cooled by six 3 HP split units. Insulating the roof and adding a reflective coating can typically cut the cooling load on that floor by 20 to 35 percent. Over a long Egyptian summer that often means thousands of kWh saved, which adds up to tens of thousands of pounds a year for a larger building, plus a longer life for the AC units."
],
[
"Choosing the right system",
"For concrete roofs, combine waterproofing with insulation in one system so you solve leaks and heat together. Check the thermal conductivity and thickness of boards, the reflectance and UV resistance of coatings, and the fire rating of panels. Avoid painting a reflective coating over a dusty or cracked surface without primer, and plan to clean or recoat it every few years."
],
[
"Beyond the roof",
"The same idea helps walls facing south and west, metal-roofed factories, cold rooms and kitchens. Reflective window film, door seals and pipe insulation on chilled water lines all reduce the load further. Combined with inverter AC and good maintenance, a building can feel cooler while paying noticeably less."
],
[
"How Palm helps",
"Send us your roof area, roof type (concrete or metal sheet) and current cooling setup, or just photos of the roof. We will recommend insulation, coatings and sealing materials with a full quotation within 24 hours, and deliver anywhere in Egypt."
]
],
"ar": [
[
"",
"مصر بتتجه بقوة لترشيد الطاقة، وأكواد البناء في المدن الجديدة بتطلب أداء حراري أفضل للمباني. ولأصحاب المكاتب والمدارس والمصانع والفنادق والعمارات السكنية الدافع أبسط: أسعار الكهرباء بترتفع والتكييف هو أكبر حمل في الصيف. وأرخص كيلووات هو اللي التكييف مش محتاج يستهلكه أصلا."
],
[
"الحرارة جاية منين",
"السطح الخرساني تحت شمس مصر ممكن توصل حرارة سطحه بسهولة من 60 إلى 70 درجة في الصيف. الحرارة دي بتتشرب في البلاطة طول اليوم وتفضل تطلع للدور الأخير لحد بعد المغرب بكتير. وأوض الدور الأخير غالبا أسخن بكذا درجة من الأدوار اللي تحتها، وتكييفاتها بتشتغل أطول وتستهلك أسرع."
],
[
"إيه اللي بيشتغل فعلا",
"ألواح العزل الحراري (بوليسترين مبثوق أو بولي يوريثان) تحت طبقة حماية من المونة بتقلل انتقال الحرارة خلال البلاطة بشكل كبير. والدهان العاكس الأبيض للأسطح بيرجع معظم أشعة الشمس قبل ما تتمتص. وللهناجر والمخازن ومباني المواقع، الساندوتش بانل المعزول بيحل محل الصاج العادي، وسد الفتحات حوالين الأبواب والشبابيك ومجاري الهواء بيمنع تسريب الهواء البارد."
],
[
"مثال بسيط للتوفير",
"مكتب في الدور الأخير مساحته 300 متر مربع بيتكيف بست تكييفات سبليت 3 حصان. عزل السطح وإضافة دهان عاكس ممكن يقلل حمل التبريد في الدور ده عادة من 20 إلى 35 بالمئة. وعلى مدار صيف مصري طويل ده معناه غالبا آلاف الكيلووات ساعة، يعني عشرات الآلاف من الجنيهات سنويا في المباني الأكبر، بالإضافة لعمر أطول للتكييفات."
],
[
"اختيار النظام المناسب",
"للأسطح الخرسانية، اجمع العزل المائي مع العزل الحراري في نظام واحد عشان تحل مشكلة التسريب والحرارة مع بعض. راجع معامل التوصيل الحراري وسمك الألواح، ونسبة الانعكاس ومقاومة الأشعة فوق البنفسجية في الدهانات، وتصنيف الحريق في البانلات. وما تدهنش دهان عاكس على سطح مترب أو مشروخ من غير برايمر، وخطط لتنظيفه أو إعادة دهانه كل كام سنة."
],
[
"أبعد من السطح",
"نفس الفكرة تفيد الحوائط القبلية والغربية، والمصانع بأسقف صاج، وغرف التبريد والمطابخ. فيلم الشبابيك العاكس وجوانات الأبواب وعزل مواسير المياه المبردة كلها بتقلل الحمل أكتر. ومع تكييف إنفرتر وصيانة كويسة، المبنى يبقى أبرد وفاتورته أقل بشكل ملحوظ."
],
[
"كيف تساعدك بالم",
"ابعت لنا مساحة السطح ونوعه (خرسانة أو صاج) ونظام التكييف الحالي، أو حتى صور للسطح. هنرشح لك مواد العزل والدهانات ومواد سد الفتحات المناسبة مع عرض سعر كامل خلال 24 ساعة، والتوصيل لأي مكان في مصر."
]
]
},
"faq": [
{
"q": {
"en": "Does reflective roof paint really reduce heat?",
"ar": "هل الدهان العاكس للأسطح بيقلل الحرارة فعلا؟"
},
"a": {
"en": "Yes, a good white reflective coating can lower the roof surface temperature considerably in direct sun. It works best combined with insulation and needs to be kept reasonably clean to stay effective.",
"ar": "أيوه، الدهان العاكس الأبيض الجيد ممكن يقلل حرارة سطح السقف بشكل كبير في الشمس المباشرة. وبيشتغل أفضل مع العزل الحراري، ومحتاج يفضل نظيف نسبيا عشان يحافظ على كفاءته."
}
},
{
"q": {
"en": "What is the best thermal insulation for roofs in Egypt?",
"ar": "إيه أفضل عزل حراري للأسطح في مصر؟"
},
"a": {
"en": "For concrete roofs, extruded polystyrene or polyurethane boards combined with waterproofing are a common, durable choice. For metal roofs, insulated sandwich panels or sprayed polyurethane foam are usually more practical.",
"ar": "للأسطح الخرسانية، ألواح البوليسترين المبثوق أو البولي يوريثان مع العزل المائي اختيار شائع ويعيش. وللأسقف الصاج، الساندوتش بانل أو فوم البولي يوريثان بالرش غالبا يكون أنسب."
}
},
{
"q": {
"en": "Can insulation be added to an existing building?",
"ar": "ينفع أعمل عزل لمبنى قائم بالفعل؟"
},
"a": {
"en": "Yes. Most roof insulation and reflective coating systems are applied on top of the existing slab, so the building can stay in use during the work.",
"ar": "أيوه. معظم أنظمة عزل الأسطح والدهانات العاكسة بتتركب فوق البلاطة الموجودة، فالمبنى يفضل شغال عادي أثناء التنفيذ."
}
}
]
},
{
"slug": "fleet-maintenance-tires-filters-oil-egypt",
"date": "2026-11-03",
"icon": "truck",
"dep": "automotive",
"img": "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=1200&q=80&auto=format&fit=crop",
"kw": "fleet maintenance Egypt, truck tires Egypt, engine oil supplier, oil filters and air filters, vehicle batteries Egypt, preventive maintenance fleet, reduce fuel consumption, delivery fleet Egypt, auto parts supplier Egypt",
"kw_ar": "صيانة أسطول السيارات, كاوتش نقل, زيت موتور, فلاتر زيت وهواء, بطاريات سيارات, صيانة وقائية للسيارات, تقليل استهلاك السولار, أسطول توزيع في مصر, مورد قطع غيار سيارات في مصر",
"title": {
"en": "Fleet maintenance in Egypt: cut fuel use and breakdowns for fleets",
"ar": "صيانة أسطول السيارات في مصر: استهلاك وقود أقل وأعطال أقل لعربيات الشركة"
},
"excerpt": {
"en": "Fuel is one of the biggest costs of any delivery, distribution or staff bus fleet. Preventive service with the right tires, filters, oils and batteries cuts it.",
"ar": "الوقود من أكبر تكاليف أي أسطول توصيل أو توزيع أو أتوبيسات موظفين. صيانة وقائية بسيطة بالكاوتش والفلاتر والزيوت والبطاريات المناسبة بتقلله بوضوح."
},
"body": {
"en": [
[
"",
"Egypt's new road network has made it faster to move goods between Cairo, the Delta, the Canal cities and Upper Egypt, and e-commerce has multiplied the number of delivery vans and motorcycles on those roads. For any company running a fleet, fuel and repairs are now among the largest running costs. Most of that cost is decided long before a breakdown, in the workshop."
],
[
"What a neglected fleet really costs",
"Under-inflated tires, clogged air filters and old oil all make the engine work harder for the same distance. A vehicle stuck at the roadside means a missed delivery, an idle driver and often a towing bill. Batteries that fail in summer heat or winter mornings stop whole routes before they start."
],
[
"The basics that save fuel",
"Keeping tires at the correct pressure can typically improve fuel use by a few percent and makes tires last noticeably longer. Clean air and fuel filters keep diesel engines efficient, and the right grade of engine oil reduces friction and wear. Wheel alignment, correct loading and less idling add further savings that drivers feel immediately."
],
[
"A simple fleet example",
"Take a fleet of 20 distribution trucks each covering around 200 km a day. If proper tire pressure, filters and oil changes cut fuel use by even 5 percent, that is thousands of liters of diesel a year across the fleet. Add fewer roadside breakdowns and longer tire life, and the savings typically reach hundreds of thousands of pounds a year."
],
[
"Building a preventive service plan",
"Set service intervals by kilometers and hours, not by waiting for a warning light. Keep a stock of fast-moving items: oil and air filters, fuel filters, engine oil, brake pads, wiper blades, bulbs and a spare battery or two. Record every service per plate number so you can see which vehicles cost the most and why."
],
[
"Mistakes to avoid",
"Do not mix tire brands or sizes on the same axle, and do not buy filters only on price, since a poor filter can let dust into the engine. Use the oil grade the manufacturer specifies for Egyptian heat and dusty roads. Check battery terminals and electrolyte regularly, especially before summer."
],
[
"How Palm helps",
"Send us your fleet list with vehicle models, tire sizes and the filters and oils you use now. We will prepare a supply list for tires, filters, oils, batteries and service parts with a full quotation within 24 hours, and deliver to your depot anywhere in Egypt."
]
],
"ar": [
[
"",
"شبكة الطرق الجديدة في مصر خلت نقل البضاعة بين القاهرة والدلتا ومدن القناة والصعيد أسرع، والتجارة الإلكترونية ضاعفت عدد عربيات وموتوسيكلات التوصيل على الطرق دي. ولأي شركة عندها أسطول، الوقود والإصلاحات بقوا من أكبر تكاليف التشغيل. ومعظم التكلفة دي بتتحدد قبل العطل بكتير، جوه الورشة."
],
[
"الأسطول المهمل بيكلفك كام فعلا",
"الكاوتش اللي ضغطه ناقص وفلتر الهوا المسدود والزيت القديم كلهم بيخلوا الموتور يتعب أكتر لنفس المسافة. والعربية اللي بتقف على الطريق معناها توصيلة ضاعت وسواق قاعد وغالبا ونش. والبطاريات اللي بتقع في حر الصيف أو صباحيات الشتا بتوقف خطوط توزيع كاملة قبل ما تبدأ."
],
[
"الأساسيات اللي بتوفر وقود",
"الحفاظ على ضغط الكاوتش الصحيح ممكن يحسن استهلاك الوقود عادة بنسبة بسيطة لكن مستمرة، ويطول عمر الكاوتش بشكل ملحوظ. فلاتر الهوا والسولار النظيفة بتحافظ على كفاءة موتورات الديزل، والزيت بالدرجة الصحيحة بيقلل الاحتكاك والتآكل. وظبط الزوايا والتحميل السليم وتقليل الدوران على الفاضي بيضيفوا توفير السواق بيحسه على طول."
],
[
"مثال بسيط لأسطول",
"أسطول من 20 عربية توزيع كل واحدة بتمشي حوالي 200 كم في اليوم. لو ضغط الكاوتش الصحيح والفلاتر وتغيير الزيت في ميعاده قللوا الاستهلاك ولو 5 بالمئة، ده معناه آلاف اللترات من السولار في السنة على مستوى الأسطول. ومع أعطال أقل على الطريق وعمر أطول للكاوتش، التوفير يوصل عادة لمئات الآلاف من الجنيهات سنويا."
],
[
"عمل خطة صيانة وقائية",
"حدد مواعيد الصيانة بالكيلومترات وساعات التشغيل، مش لما لمبة التحذير تنور. خلي عندك مخزون من الأصناف سريعة الحركة: فلاتر زيت وهوا، فلاتر سولار، زيت موتور، تيل فرامل، مساحات، لمبات، وبطارية أو اتنين احتياطي. وسجل كل صيانة برقم اللوحة عشان تعرف أنهي عربيات بتكلفك أكتر وليه."
],
[
"أخطاء تتجنبها",
"ما تخلطش ماركات أو مقاسات كاوتش مختلفة على نفس الدنجل، وما تشتريش الفلاتر على السعر بس، لأن الفلتر الضعيف ممكن يدخل تراب للموتور. استخدم درجة الزيت اللي الشركة المصنعة محدداها لحر مصر والطرق المتربة. وافحص أقطاب البطاريات والمية بانتظام، خصوصا قبل الصيف."
],
[
"كيف تساعدك بالم",
"ابعت لنا كشف الأسطول بموديلات العربيات ومقاسات الكاوتش والفلاتر والزيوت اللي بتستخدمها حاليا. هنجهز لك قائمة توريد للكاوتش والفلاتر والزيوت والبطاريات وقطع الصيانة مع عرض سعر كامل خلال 24 ساعة، والتوصيل لجراجك في أي مكان في مصر."
]
]
},
"faq": [
{
"q": {
"en": "How often should a delivery truck change its oil?",
"ar": "عربية التوزيع تغير الزيت كل قد إيه؟"
},
"a": {
"en": "Follow the manufacturer's interval for your engine and oil grade, and shorten it for heavy loads, dusty roads and city stop-and-go driving, which are common in Egypt.",
"ar": "اتبع المدة اللي الشركة المصنعة محدداها حسب الموتور ودرجة الزيت، وقصرها مع الأحمال التقيلة والطرق المتربة والقيادة المتقطعة جوه المدن، وده شائع في مصر."
}
},
{
"q": {
"en": "Does tire pressure really affect fuel consumption?",
"ar": "هل ضغط الكاوتش بيأثر فعلا على استهلاك الوقود؟"
},
"a": {
"en": "Yes. Under-inflated tires increase rolling resistance, so the engine burns more fuel, and the tires wear out faster and run hotter.",
"ar": "أيوه. الكاوتش اللي ضغطه ناقص بيزود مقاومة الدوران فالموتور بيحرق وقود أكتر، والكاوتش نفسه بيسخن ويستهلك أسرع."
}
},
{
"q": {
"en": "Can I buy fleet supplies in bulk from one supplier in Egypt?",
"ar": "ينفع أشتري مستلزمات الأسطول بالجملة من مورد واحد في مصر؟"
},
"a": {
"en": "Yes. Buying tires, filters, oils and batteries on one quotation simplifies ordering and usually gives better pricing than buying item by item from different shops.",
"ar": "أيوه. شراء الكاوتش والفلاتر والزيوت والبطاريات في عرض سعر واحد بيسهل الطلب وغالبا بيدي سعر أفضل من الشراء صنف صنف من محلات مختلفة."
}
}
]
},
{
"slug": "led-retrofit-cut-electricity-bills-egypt",
"date": "2026-11-02",
"icon": "bulb",
"dep": "lighting",
"img": "https://images.unsplash.com/photo-1635468609223-4e59675ac96d?w=1200&q=80&auto=format&fit=crop",
"kw": "LED lighting Egypt, LED high bay, LED retrofit, cut electricity bill, energy saving lighting, factory lighting Egypt, warehouse lighting",
"title": {
"en": "LED retrofit: how Egyptian factories and warehouses cut lighting bills by half",
"ar": "التحويل إلى LED: كيف تخفض المصانع والمخازن في مصر فاتورة الإضاءة للنصف"
},
"excerpt": {
"en": "Electricity tariffs keep rising. Swapping old metal halide and fluorescent fittings for LED high bays is the fastest saving most sites can make, and it pays for itself quickly.",
"ar": "أسعار الكهرباء في ارتفاع مستمر. استبدال كشافات الميتال هاليد والفلورسنت القديمة بكشافات LED هاي باي أسرع توفير يمكن لمعظم المواقع تحقيقه، ويسترد تكلفته بسرعة."
},
"body": {
"en": [
[
"",
"Every business in Egypt has felt electricity prices climb over the last few years. For a factory, warehouse, showroom or parking garage, lighting is often one of the biggest lines on that bill because the lights run 12 to 24 hours a day. The good news: it is also the easiest line to cut."
],
[
"The problem with old lighting",
"Metal halide high bays and fluorescent tubes waste most of their energy as heat, take minutes to warm up, lose brightness every month and need frequent lamp and ballast changes. In a hot Egyptian summer that extra heat also makes your air conditioning work harder."
],
[
"What LED changes",
"A modern LED high bay typically uses 50 to 70 percent less power than the metal halide fitting it replaces for the same light on the floor. It switches on instantly, keeps its brightness for years, and is rated for 50,000 hours or more, so maintenance visits almost disappear. Less heat also means a lighter load on your cooling."
],
[
"A simple payback example",
"Take a 2,000 m2 warehouse with 40 old 400 W fittings running 16 hours a day. Replacing them with 150 W LED high bays saves around 160 kWh every day, which adds up to tens of thousands of pounds a year at commercial tariffs. Most retrofits like this pay back in one to two years, and then keep saving for many more."
],
[
"Choosing the right LED fitting",
"Match lumen output to mounting height, pick 4000 K to 5000 K neutral white for clear labels, insist on IP65 for dusty sites and drivers rated for high ambient temperatures. Add motion sensors in aisles and daylight sensors near skylights to save even more."
],
[
"Beyond the warehouse",
"The same logic works for LED street lights, flood lights for yards and facades, LED panels for offices and schools, and solar LED lights for remote sites. Hotels, hospitals, malls and government buildings can all apply it."
],
[
"How Palm helps",
"Send us your floor plan or simply the number and wattage of your current fittings. We will propose the LED equivalent, a fixture count and a full quotation within 24 hours, with delivery anywhere in Egypt."
]
],
"ar": [
[
"",
"كل منشأة في مصر شعرت بارتفاع أسعار الكهرباء في السنوات الأخيرة. في المصنع أو المخزن أو المعرض أو الجراج، الإضاءة غالبا من أكبر بنود الفاتورة لأنها تعمل من 12 إلى 24 ساعة يوميا. والخبر الجيد أنها أيضا أسهل بند يمكن تخفيضه."
],
[
"مشكلة الإضاءة القديمة",
"كشافات الميتال هاليد ولمبات الفلورسنت تهدر معظم طاقتها في صورة حرارة، وتحتاج دقائق لتصل لكامل إضاءتها، وتفقد قوتها شهرا بعد شهر، وتحتاج تغيير لمبات وبلاستات باستمرار. وفي صيف مصر الحار هذه الحرارة الزائدة تضغط على التكييف أيضا."
],
[
"ما الذي يغيره LED",
"كشاف LED هاي باي الحديث يستهلك عادة من 50 إلى 70 بالمئة طاقة أقل من كشاف الميتال هاليد الذي يستبدله لنفس الإضاءة على الأرض. يعمل فورا، ويحافظ على قوته لسنوات، وعمره الافتراضي 50,000 ساعة أو أكثر، فتختفي زيارات الصيانة تقريبا. وحرارة أقل تعني حملا أخف على التكييف."
],
[
"مثال بسيط لاسترداد التكلفة",
"مخزن مساحته 2,000 متر مربع به 40 كشافا قديما قدرة 400 وات تعمل 16 ساعة يوميا. استبدالها بكشافات LED قدرة 150 وات يوفر حوالي 160 كيلووات ساعة يوميا، أي عشرات الآلاف من الجنيهات سنويا بالتعريفة التجارية. معظم مشروعات التحويل المماثلة تسترد تكلفتها خلال سنة إلى سنتين ثم تستمر في التوفير لسنوات."
],
[
"اختيار كشاف LED المناسب",
"اختر قوة الإضاءة حسب ارتفاع التركيب، ولون أبيض محايد من 4000 إلى 5000 كلفن لوضوح الملصقات، وحماية IP65 للأماكن المتربة، ودرايفر يتحمل درجات الحرارة العالية. أضف حساسات حركة في الممرات وحساسات ضوء نهار قرب الفتحات لتوفير أكبر."
],
[
"أبعد من المخزن",
"نفس الفكرة تنطبق على أعمدة إنارة الشوارع LED، والكشافات الخارجية للساحات والواجهات، وبانلات LED للمكاتب والمدارس، وكشافات الطاقة الشمسية للمواقع البعيدة. الفنادق والمستشفيات والمولات والمباني الحكومية كلها يمكنها التطبيق."
],
[
"كيف تساعدك بالم",
"أرسل لنا مخطط المكان أو ببساطة عدد وقدرة الكشافات الحالية. سنقترح البديل LED وعدد الكشافات وعرض سعر كامل خلال 24 ساعة، مع التوصيل لأي مكان في مصر."
]
]
},
"kw_ar": "كشافات LED, كشاف LED هاي باي, high bay LED, تحويل الإضاءة إلى LED, توفير الكهرباء في المصانع, إضاءة مخازن, لمبات LED توفير, تخفيض فاتورة الكهرباء, إضاءة مصانع في مصر, كشافات ليد صناعية",
"faq": [
{
"q": {
"en": "How much electricity does an LED high bay save?",
"ar": "كام بيوفر كشاف LED هاي باي من الكهرباء؟"
},
"a": {
"en": "An LED high bay typically uses 50 to 70 percent less power than the metal halide fitting it replaces, for the same light on the floor. For example, a 150 W LED often replaces a 400 W metal halide lamp.",
"ar": "كشاف LED هاي باي يستهلك عادة أقل بنسبة 50 إلى 70 بالمئة من كشاف الميتال هاليد الذي يحل محله مع نفس الإضاءة على الأرض. مثلا كشاف LED بقدرة 150 وات غالبا يغني عن لمبة ميتال هاليد 400 وات."
}
},
{
"q": {
"en": "How long does an LED retrofit take to pay back in Egypt?",
"ar": "في كام سنة يسترد التحويل إلى LED تكلفته في مصر؟"
},
"a": {
"en": "Most warehouse and factory retrofits pay back in around one to two years when lights run long hours, and faster where lights run 24 hours a day.",
"ar": "معظم مشاريع التحويل في المخازن والمصانع تسترد تكلفتها في سنة إلى سنتين تقريبا عندما تعمل الإضاءة ساعات طويلة، وأسرع إذا كانت تعمل 24 ساعة."
}
},
{
"q": {
"en": "Which colour temperature and IP rating should warehouse LED lights have?",
"ar": "ما درجة اللون ودرجة الحماية IP المناسبة لكشافات LED في المخازن؟"
},
"a": {
"en": "Choose 4000 K to 5000 K neutral white so labels are easy to read, and at least IP65 for dusty sites. Also ask for drivers rated for high ambient temperatures.",
"ar": "اختر إضاءة بيضاء محايدة من 4000 إلى 5000 كلفن لسهولة قراءة الملصقات، وحماية IP65 على الأقل للأماكن المتربة. واطلب درايفر مصمم لتحمل درجات الحرارة العالية."
}
}
]
},
{
"slug": "booster-pumps-water-tanks-buildings-egypt",
"date": "2026-11-01",
"icon": "pump",
"dep": "pumps",
"img": "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=1200&q=80&auto=format&fit=crop",
"kw": "booster pump Egypt, water pump for building, water tanks Egypt, low water pressure solution, pressure booster system, how to choose pump size, compound water supply, water pump supplier Egypt, variable speed pump",
"kw_ar": "طلمبة رفع مياه, طلمبة بوستر, موتور مياه للعمارة, خزانات مياه, ضعف ضغط المياه, اختيار قدرة الطلمبة, طلمبات للكمبوندات, طلمبة انفرتر, مورد طلمبات في مصر",
"title": {
"en": "Booster pumps and water tanks: fix water pressure in Egypt's new cities",
"ar": "طلمبات البوستر وخزانات المياه: حل ضعف ضغط المياه في مدن مصر الجديدة"
},
"excerpt": {
"en": "Weak pressure on upper floors, noisy pumps and high bills are common in new buildings. The right booster pump, tank size and leak control fix all three.",
"ar": "ضعف المياه في الأدوار العليا وطلمبات بصوت عالي وفواتير مرتفعة مشاكل شائعة في المباني الجديدة. الطلمبة والخزان المناسبين ومنع التسريب بيحلوا التلاتة."
},
"body": {
"en": [
[
"",
"Egypt's new cities, from the New Administrative Capital to New Alamein, 6th of October and the compounds of New Cairo, are adding tens of thousands of housing units every year. Taller buildings and spread-out compounds mean the public network pressure alone rarely reaches the top floors. A well chosen pump and tank system is what keeps the water running, and the electricity bill reasonable."
],
[
"The common problems",
"Residents on upper floors get a weak trickle at peak hours, while ground floors have more pressure than they need. Many buildings use an oversized pump that starts and stops dozens of times an hour, wasting power and wearing out the motor. Leaking float valves and pipes keep pumps running even when nobody is using water."
],
[
"What a good system looks like",
"A ground or underground water tank stores supply when network pressure is available. A booster set, ideally with variable speed (inverter) control and a pressure vessel, then delivers steady pressure to every floor. Variable speed pumps slow down when demand is low instead of switching on and off, which typically saves 20 to 40 percent of pumping energy compared with a fixed speed pump running on a pressure switch."
],
[
"How to size the pump",
"Start from the number of apartments or fixtures to estimate peak flow, then calculate the head: building height plus pipe losses plus the pressure you want at the top tap. A ten floor building usually needs a pump delivering around 40 to 60 meters of head. Use two pumps (duty and standby) so one can be serviced without cutting water, and size the tank for at least one day of consumption."
],
[
"Reducing leaks and running costs",
"Fix dripping float valves and toilet cisterns, since one leaking cistern can waste hundreds of liters a day and keep the pump cycling. Use quality valves, check valves and pressure gauges, and insulate exposed pipes on roofs. Schedule tank cleaning and pump checks at least once or twice a year."
],
[
"For compounds and larger sites",
"Compounds, hotels and hospitals benefit from central pump rooms with multiple pumps sharing the load, plus separate fire pump sets according to the current Civil Defense requirements. Irrigation pumps for landscaping should be on their own circuit and timers, not on the domestic system."
],
[
"How Palm helps",
"Send us the number of floors and apartments, your tank size and a photo of your current pump nameplate. We will recommend the right booster pump, pressure vessel, tanks and fittings with a full quotation within 24 hours, and deliver anywhere in Egypt."
]
],
"ar": [
[
"",
"مدن مصر الجديدة، من العاصمة الإدارية الجديدة للعلمين الجديدة و6 أكتوبر وكمبوندات القاهرة الجديدة، بتضيف عشرات الآلاف من الوحدات السكنية كل سنة. والمباني الأعلى والكمبوندات الواسعة معناها إن ضغط الشبكة لوحده نادرا ما يوصل للأدوار العليا. ونظام الطلمبة والخزان المختار صح هو اللي بيخلي المية واصلة والفاتورة معقولة."
],
[
"المشاكل الشائعة",
"سكان الأدوار العليا بتوصلهم مية ضعيفة في أوقات الذروة، والأدوار الأرضية عندها ضغط أكتر من احتياجها. ومباني كتير بتستخدم طلمبة أكبر من اللازم بتفصل وتشتغل عشرات المرات في الساعة، فتهدر كهرباء وتهلك الموتور. والعوامات والمواسير اللي بتسرب بتخلي الطلمبة شغالة حتى لما محدش بيستخدم مية."
],
[
"شكل النظام الصح",
"خزان مياه أرضي أو تحت الأرض بيخزن المية لما ضغط الشبكة متاح. وبعدين مجموعة بوستر، والأفضل بتحكم سرعة متغيرة (إنفرتر) مع تانك ضغط، بتوصل ضغط ثابت لكل الأدوار. الطلمبات بسرعة متغيرة بتهدي لما الاستهلاك يقل بدل ما تفصل وتشتغل، وده بيوفر عادة من 20 إلى 40 بالمئة من طاقة الضخ مقارنة بطلمبة سرعة ثابتة على مفتاح ضغط."
],
[
"إزاي تحدد قدرة الطلمبة",
"ابدأ من عدد الشقق أو الأجهزة الصحية عشان تقدر أقصى تصرف، وبعدين احسب الرفع: ارتفاع المبنى زائد فواقد المواسير زائد الضغط اللي عايزه في آخر حنفية. مبنى من عشر أدوار محتاج عادة طلمبة برفع حوالي 40 إلى 60 متر. استخدم طلمبتين (واحدة شغالة وواحدة احتياطي) عشان تقدر تصين واحدة من غير ما تقطع المية، وخلي الخزان يكفي استهلاك يوم على الأقل."
],
[
"تقليل التسريب وتكلفة التشغيل",
"صلح العوامات وصناديق الطرد اللي بتنقط، لأن صندوق طرد واحد بيسرب ممكن يهدر مئات اللترات يوميا ويخلي الطلمبة تفصل وتشتغل. استخدم محابس وكلابيات وعدادات ضغط بجودة كويسة، واعزل المواسير المكشوفة على السطح. وحدد مواعيد لتنظيف الخزانات وفحص الطلمبات مرة أو مرتين في السنة على الأقل."
],
[
"للكمبوندات والمواقع الكبيرة",
"الكمبوندات والفنادق والمستشفيات بتستفيد من غرف طلمبات مركزية فيها أكتر من طلمبة بتتقاسم الحمل، مع مجموعات طلمبات حريق منفصلة حسب الاشتراطات الحالية للحماية المدنية. وطلمبات ري اللاندسكيب لازم تكون على خط وتايمر خاص بيها، مش على شبكة الاستخدام المنزلي."
],
[
"كيف تساعدك بالم",
"ابعت لنا عدد الأدوار والشقق وسعة الخزان وصورة للوحة بيانات الطلمبة الحالية. هنرشح لك طلمبة البوستر المناسبة وتانك الضغط والخزانات والوصلات مع عرض سعر كامل خلال 24 ساعة، والتوصيل لأي مكان في مصر."
]
]
},
"faq": [
{
"q": {
"en": "What size water pump do I need for a building?",
"ar": "محتاج طلمبة قدرة كام للعمارة؟"
},
"a": {
"en": "It depends on peak flow (number of apartments) and total head (height plus pipe losses plus required pressure). Share your floors and apartment count and a supplier can size it properly rather than guessing by horsepower.",
"ar": "يعتمد على أقصى تصرف (عدد الشقق) وإجمالي الرفع (الارتفاع زائد فواقد المواسير زائد الضغط المطلوب). ابعت عدد الأدوار والشقق والمورد يحدد القدرة صح بدل التخمين بالحصان."
}
},
{
"q": {
"en": "Is an inverter booster pump worth the extra cost?",
"ar": "هل طلمبة البوستر الإنفرتر تستاهل فرق السعر؟"
},
"a": {
"en": "For buildings with changing demand through the day, usually yes. It saves energy, gives steadier pressure and reduces wear because the motor does not start and stop constantly.",
"ar": "للمباني اللي استهلاكها بيتغير خلال اليوم، غالبا أيوه. بتوفر كهرباء وبتدي ضغط أثبت وبتقلل التآكل لأن الموتور مش بيفصل ويشتغل باستمرار."
}
},
{
"q": {
"en": "How often should building water tanks be cleaned?",
"ar": "خزانات مياه العمارة تتنضف كل قد إيه؟"
},
"a": {
"en": "A common practice is at least once or twice a year, and after any contamination or long shutdown. Check the current requirements of your local water authority.",
"ar": "الشائع مرة أو مرتين في السنة على الأقل، وبعد أي تلوث أو توقف طويل. راجع الاشتراطات الحالية لشركة المياه في منطقتك."
}
}
]
},
{
"slug": "construction-site-supplies-reduce-waste-egypt",
"date": "2026-11-01",
"icon": "barrow",
"dep": "construction",
"img": "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=80&auto=format&fit=crop",
"kw": "construction supplies Egypt, construction site consumables, building materials supplier Egypt, construction tools Egypt, site safety equipment, reduce construction waste, contractor supplies, national housing projects Egypt, one supplier for contractors",
"kw_ar": "مستلزمات مواقع البناء, مستلزمات المقاولين, مورد مواد بناء في مصر, عدد ومعدات بناء, مهمات السلامة في المواقع, تقليل هدر مواد البناء, توريدات مقاولات, مشروعات الإسكان القومي, مورد واحد للمقاولين",
"title": {
"en": "Construction site supplies in Egypt: cut waste and delays on projects",
"ar": "مستلزمات مواقع البناء في مصر: هدر أقل وتأخير أقل في كل مشروع"
},
"excerpt": {
"en": "Egypt's housing and infrastructure projects run on tight schedules. The right consumables, tools and safety gear from one supplier cut waste and delays.",
"ar": "مشروعات الإسكان والبنية التحتية في مصر بتشتغل بجداول زمنية ضيقة. المستلزمات والعدد ومهمات السلامة الصح من مورد واحد موثوق بتقلل الهدر والأيام الضايعة."
},
"body": {
"en": [
[
"",
"Egypt is building at a scale few countries match: national housing programs, new cities, roads, bridges, water and sewage plants. Contractors and subcontractors working on these projects face fixed handover dates and tight margins. On most sites, the profit is lost not in the big materials, but in small items that run out, get wasted or arrive late."
],
[
"Where sites lose money",
"A crew waiting half a day for cutting discs, tie wire or a replacement drill bit still gets paid. Cement and mortar left exposed or mixed in the wrong quantity end up in the skip. Cheap tools break, unprotected materials get damaged, and buying from five different shops means five deliveries, five invoices and no clear record of what was used."
],
[
"The consumables that keep a site moving",
"Keep a steady stock of cutting and grinding discs, tie wire, nails and anchors, spacers, shuttering oil, curing compounds, silicone and sealants, plastic sheeting and tape. Add drill bits, trowels, levels, measuring tapes, wheelbarrows and buckets. These items are cheap individually, but running out of any of them stops work."
],
[
"A simple waste example",
"Take a housing block using around 1,000 tons of materials. If better storage, measured mixing and the right accessories cut waste by even 3 to 5 percent, that is 30 to 50 tons less material bought and hauled away. On a large contract that typically means hundreds of thousands of pounds saved, plus fewer days lost to shortages."
],
[
"Safety is part of productivity",
"Helmets, safety boots, gloves, high-visibility vests, harnesses, barriers, cones and warning tape protect workers and keep inspections smooth. Fire extinguishers and first aid kits should be on site from day one. Check the current requirements of the relevant authority and your client's HSE plan, since many government projects audit safety equipment."
],
[
"Why one reliable supplier helps",
"A single supplier who can deliver consumables, tools, safety gear and finishing items on one quotation saves your procurement team time and gives you one clear record per project. Agree a monthly or phase-based supply list in advance, so deliveries arrive before the crew needs them. Ask for consistent brands so quality does not change from one batch to the next."
],
[
"How Palm helps",
"Send us your bill of quantities, a list of items per phase, or simply what you bought last month. We will prepare a full quotation within 24 hours and deliver to your site anywhere in Egypt, from Greater Cairo to the new cities and Upper Egypt."
]
],
"ar": [
[
"",
"مصر بتبني بحجم قليل من الدول يقدر يجاريه: برامج الإسكان القومي، والمدن الجديدة، والطرق والكباري، ومحطات المياه والصرف. والمقاولين ومقاولين الباطن في المشروعات دي قدامهم مواعيد تسليم ثابتة وهوامش ربح ضيقة. وفي معظم المواقع المكسب بيضيع مش في المواد الكبيرة، لكن في الحاجات الصغيرة اللي بتخلص أو بتتهدر أو بتتأخر."
],
[
"الموقع بيخسر فلوسه فين",
"طاقم عمال مستني نص يوم عشان صواريخ قطع أو سلك رباط أو بنطة بديلة بياخد يوميته برضه. والأسمنت والمونة اللي بتتساب مكشوفة أو بتتخلط بكميات غلط بتنتهي في الردم. والعدد الرخيصة بتتكسر، والمواد غير المحمية بتبوظ، والشراء من خمس محلات معناه خمس توصيلات وخمس فواتير ومفيش سجل واضح للمستخدم."
],
[
"المستهلكات اللي بتخلي الموقع شغال",
"خلي عندك مخزون ثابت من صواريخ القطع والجلخ، وسلك الرباط، والمسامير والخوابير، والبسكوت، وزيت الشدات، ومواد المعالجة، والسيليكون ومواد العزل، والنايلون والشريط اللاصق. وضيف البنط والمحارات وميزان المية وشريط القياس والعربيات اليد والجرادل. الأصناف دي رخيصة لوحدها، لكن خلوص أي واحد منها بيوقف الشغل."
],
[
"مثال بسيط للهدر",
"عمارة سكنية بتستخدم حوالي 1,000 طن مواد. لو التخزين الأفضل والخلط بالقياس والإكسسوارات الصح قللوا الهدر ولو من 3 إلى 5 بالمئة، ده معناه 30 إلى 50 طن مواد أقل في الشراء والنقل للردم. وفي عقد كبير ده يعني عادة مئات الآلاف من الجنيهات توفير، وأيام أقل ضايعة بسبب النواقص."
],
[
"السلامة جزء من الإنتاجية",
"الخوذ وأحذية السيفتي والجوانتيات والسترات العاكسة وأحزمة الأمان والحواجز والأقماع وشريط التحذير بتحمي العمال وبتخلي التفتيش يعدي بسهولة. وطفايات الحريق وشنط الإسعافات الأولية لازم تكون في الموقع من أول يوم. راجع الاشتراطات الحالية للجهة المختصة وخطة السلامة الخاصة بالعميل، لأن مشروعات حكومية كتير بتراجع مهمات السلامة."
],
[
"ليه المورد الواحد الموثوق بيفرق",
"مورد واحد يقدر يوردلك المستهلكات والعدد ومهمات السلامة وخامات التشطيب في عرض سعر واحد بيوفر وقت إدارة المشتريات وبيديك سجل واضح لكل مشروع. اتفق على قائمة توريد شهرية أو حسب المرحلة مقدما عشان التوريد يوصل قبل ما الطاقم يحتاجه. واطلب ماركات ثابتة عشان الجودة ما تتغيرش من دفعة للتانية."
],
[
"كيف تساعدك بالم",
"ابعت لنا المقايسة أو قائمة الأصناف لكل مرحلة، أو ببساطة اللي اشتريته الشهر اللي فات. هنجهز لك عرض سعر كامل خلال 24 ساعة ونوصل لموقعك في أي مكان في مصر، من القاهرة الكبرى للمدن الجديدة والصعيد."
]
]
},
"faq": [
{
"q": {
"en": "What consumables does a construction site need every month?",
"ar": "موقع البناء محتاج مستهلكات إيه كل شهر؟"
},
"a": {
"en": "Typically cutting and grinding discs, tie wire, nails and anchors, spacers, shuttering oil, sealants, plastic sheeting, drill bits and replacement hand tools, plus PPE for new workers. Quantities depend on the phase of the project.",
"ar": "عادة صواريخ القطع والجلخ، وسلك الرباط، والمسامير والخوابير، والبسكوت، وزيت الشدات، ومواد العزل، والنايلون، والبنط، والعدد اليدوية البديلة، بالإضافة لمهمات السلامة للعمال الجدد. والكميات بتعتمد على مرحلة المشروع."
}
},
{
"q": {
"en": "How can contractors reduce material waste on site?",
"ar": "إزاي المقاول يقلل هدر المواد في الموقع؟"
},
"a": {
"en": "Store cement and materials covered and off the ground, mix in measured batches, order to a phase-based list and use the right accessories such as spacers and proper formwork oil.",
"ar": "خزن الأسمنت والمواد مغطاة ومرفوعة عن الأرض، واخلط بكميات محسوبة، واطلب حسب قائمة لكل مرحلة، واستخدم الإكسسوارات الصح زي البسكوت وزيت الشدات المناسب."
}
},
{
"q": {
"en": "Do you deliver construction supplies to sites in the new cities?",
"ar": "هل بتوصلوا مستلزمات البناء للمواقع في المدن الجديدة؟"
},
"a": {
"en": "Yes, Palm delivers to sites anywhere in Egypt, including the New Administrative Capital, New Alamein and other new cities.",
"ar": "أيوه، بالم بتوصل للمواقع في أي مكان في مصر، ومنها العاصمة الإدارية الجديدة والعلمين الجديدة وباقي المدن الجديدة."
}
}
]
},
{
"slug": "solar-power-factories-farms-egypt",
"date": "2026-10-31",
"icon": "battery",
"dep": "solar",
"img": "https://images.unsplash.com/photo-1792465676549-62ba4383cce2?w=1200&q=80&auto=format&fit=crop",
"kw": "solar panels Egypt, solar energy Egypt, solar inverter, solar water pump, solar for factories, net metering Egypt, reduce diesel cost",
"title": {
"en": "Solar power for Egyptian factories and farms: stop paying for diesel and peak tariffs",
"ar": "الطاقة الشمسية للمصانع والمزارع في مصر: توقف عن دفع ثمن السولار وتعريفة الذروة"
},
"excerpt": {
"en": "Egypt has some of the best sunshine on earth. Rooftop solar and solar water pumps turn that into lower bills, fewer generator hours and protection from future price rises.",
"ar": "مصر من أكثر بلاد العالم سطوعا للشمس. الألواح الشمسية على الأسطح والطلمبات الشمسية تحول ذلك إلى فواتير أقل وساعات تشغيل أقل للمولدات وحماية من زيادات الأسعار القادمة."
},
"body": {
"en": [
[
"",
"Egypt already hosts one of the largest solar parks in the world at Benban near Aswan. The same sun falls on every factory roof, farm and warehouse in the country, and most of it is still wasted."
],
[
"The problem",
"Businesses face rising grid tariffs, expensive diesel for generators and pumps, and power cuts that stop production. On farms far from the grid, diesel pumps are often the single largest running cost."
],
[
"The solution: on-grid and off-grid solar",
"An on-grid rooftop system feeds your daytime load directly from the sun, which is exactly when factories, cold stores and offices use the most power. Off-grid systems with batteries and hybrid inverters keep critical loads running during outages. Solar water pumps replace diesel pumps for irrigation and livestock."
],
[
"What it saves",
"A well designed rooftop system can cover a large share of daytime consumption, and solar panels are typically warranted for 25 years of output. Solar pumps remove fuel and most maintenance costs entirely. Many commercial systems in sunny countries like Egypt pay back in roughly four to six years."
],
[
"What you need to buy",
"Monocrystalline solar panels, a correctly sized inverter (on-grid, off-grid or hybrid), mounting structures, DC cables, MC4 connectors, DC isolators and surge protection, and batteries if you need backup. For farms, a solar pump controller and a submersible or surface pump matched to your well depth and flow."
],
[
"Mistakes to avoid",
"Undersized cables, cheap connectors and no surge protection cause most failures. Dust reduces output, so plan for regular panel cleaning. Always size the system from your actual bills, not a guess."
],
[
"How Palm helps",
"Share your last 12 electricity bills or your pump details. We supply panels, inverters, cables, protection and pumps from trusted brands, and can connect you with installers across Egypt."
]
],
"ar": [
[
"",
"مصر تضم بالفعل واحدة من أكبر محطات الطاقة الشمسية في العالم في بنبان قرب أسوان. ونفس الشمس تسقط على كل سطح مصنع ومزرعة ومخزن في البلد، ومعظمها ما زال يضيع."
],
[
"المشكلة",
"المنشآت تواجه ارتفاع تعريفة الكهرباء، وغلاء السولار للمولدات والطلمبات، وانقطاعات توقف الإنتاج. وفي المزارع البعيدة عن الشبكة تكون طلمبات السولار غالبا أكبر بند تشغيل."
],
[
"الحل: طاقة شمسية متصلة بالشبكة أو مستقلة",
"النظام المتصل بالشبكة على السطح يغذي أحمالك نهارا مباشرة من الشمس، وهو بالضبط وقت أعلى استهلاك للمصانع والثلاجات والمكاتب. والأنظمة المستقلة بالبطاريات والانفرترات الهجين تحافظ على تشغيل الأحمال الحرجة أثناء الانقطاع. والطلمبات الشمسية تحل محل طلمبات السولار في الري والمواشي."
],
[
"كم توفر",
"النظام المصمم جيدا على السطح يمكنه تغطية جزء كبير من استهلاك النهار، والألواح عادة بضمان إنتاج 25 سنة. والطلمبات الشمسية تلغي تكلفة الوقود ومعظم الصيانة. كثير من الأنظمة التجارية في بلد مشمس مثل مصر تسترد تكلفتها في حوالي أربع إلى ست سنوات."
],
[
"ما الذي تحتاج شراءه",
"ألواح شمسية مونو كريستال، وانفرتر بالقدرة الصحيحة (متصل أو مستقل أو هجين)، وهياكل تثبيت، وكابلات DC، ووصلات MC4، ومفاتيح فصل DC وحماية من الصواعق، وبطاريات إذا احتجت احتياطيا. وللمزارع: كنترول طلمبة شمسية وطلمبة غاطسة أو سطحية مناسبة لعمق البئر والتصرف."
],
[
"أخطاء يجب تجنبها",
"الكابلات الأصغر من اللازم والوصلات الرخيصة وغياب الحماية هي سبب معظم الأعطال. الأتربة تقلل الإنتاج، فخطط لتنظيف الألواح بانتظام. وصمم النظام دائما من فواتيرك الفعلية وليس بالتخمين."
],
[
"كيف تساعدك بالم",
"أرسل آخر 12 فاتورة كهرباء أو بيانات طلمبتك. نوفر الألواح والانفرترات والكابلات والحماية والطلمبات من ماركات موثوقة، ويمكننا توصيلك بفنيي تركيب في كل محافظات مصر."
]
]
},
"kw_ar": "طاقة شمسية للمصانع, ألواح طاقة شمسية, الواح شمسية مصر, انفرتر طاقة شمسية, طلمبة طاقة شمسية, طاقة شمسية للمزارع, solar system مصر, ربط شبكة on-grid, توفير السولار, أسعار الطاقة الشمسية في مصر",
"faq": [
{
"q": {
"en": "What is the difference between on-grid and off-grid solar?",
"ar": "ما الفرق بين الطاقة الشمسية on-grid و off-grid؟"
},
"a": {
"en": "An on-grid system feeds your daytime load directly from the sun while staying connected to the grid. An off-grid or hybrid system adds batteries so critical loads keep running during power cuts.",
"ar": "نظام on-grid يغذي أحمالك نهارا من الشمس مباشرة مع بقاء الاتصال بالشبكة. أما نظام off-grid أو الهايبرد فيضيف بطاريات حتى تستمر الأحمال الحرجة في العمل أثناء انقطاع الكهرباء."
}
},
{
"q": {
"en": "Can a solar water pump replace a diesel pump on a farm?",
"ar": "هل تغني طلمبة الطاقة الشمسية عن طلمبة السولار في المزرعة؟"
},
"a": {
"en": "Yes, in most cases. A correctly sized solar pump with its controller removes fuel costs and most maintenance, especially on farms far from the grid.",
"ar": "نعم في أغلب الحالات. طلمبة شمسية بمقاس صحيح مع الكنترولر الخاص بها تلغي تكلفة السولار ومعظم الصيانة، خاصة في المزارع البعيدة عن الشبكة."
}
},
{
"q": {
"en": "How do I size a solar system for my factory?",
"ar": "كيف أحدد حجم نظام الطاقة الشمسية لمصنعي؟"
},
"a": {
"en": "Size it from your actual electricity bills for the last 12 months, not a guess. Panels are typically warranted for 25 years of output, so getting the size right matters.",
"ar": "حدد الحجم من فواتير الكهرباء الفعلية لآخر 12 شهرا وليس بالتخمين. الألواح عادة عليها ضمان إنتاج 25 سنة، لذلك الحجم الصحيح يفرق كثيرا."
}
}
]
},
{
"slug": "drip-irrigation-save-water-egypt-farms",
"date": "2026-10-30",
"icon": "leaf",
"dep": "agriculture",
"img": "https://images.unsplash.com/photo-1748432171507-c1d62fe2e859?w=1200&q=80&auto=format&fit=crop",
"kw": "drip irrigation Egypt, irrigation supplies, water saving agriculture, drip tape, irrigation pipes, farm supplies Egypt, modern irrigation",
"title": {
"en": "Drip irrigation in Egypt: grow more with less water and lower pumping costs",
"ar": "الري بالتنقيط في مصر: إنتاج أكثر بمياه أقل وتكلفة ضخ أقل"
},
"excerpt": {
"en": "Water is Egypt's most precious resource. Moving from flood irrigation to drip and modern systems saves water, fertiliser and fuel, and usually raises yields.",
"ar": "المياه أغلى موارد مصر. التحول من الري بالغمر إلى الري بالتنقيط والأنظمة الحديثة يوفر المياه والسماد والوقود، وغالبا يرفع الإنتاجية."
},
"body": {
"en": [
[
"",
"Egypt depends almost entirely on the Nile for its water, and every new reclamation project in the desert makes each cubic metre more valuable. Modernising irrigation is one of the clearest national priorities, and it is also good business for every farm."
],
[
"The problem with flood irrigation",
"Flooding fields loses a large part of the water to evaporation and deep drainage, washes fertiliser away from the roots, encourages weeds and needs more pumping hours. On new desert land with sandy soil, it barely works at all."
],
[
"How drip irrigation solves it",
"Drip lines deliver water and dissolved fertiliser straight to each plant's root zone. Farms that switch commonly report water savings of 30 to 50 percent, lower fertiliser use through fertigation and more even crops. Less water to pump also means less diesel or electricity."
],
[
"What a drip system includes",
"A pump and filtration (disc or sand filters), main and sub-main PE or PVC pipes, valves and pressure regulators, drip tape or drip lines with the right emitter spacing, connectors, end caps and a fertiliser injector or venturi. Add timers or a controller to automate the schedule."
],
[
"Getting the design right",
"Emitter flow and spacing depend on the crop and the soil. Filtration is critical, because most drip failures come from clogged emitters. Flush the lines regularly and treat the water if it carries sand or algae."
],
[
"Combine it with solar",
"Pair a drip system with a solar water pump and the running cost of irrigation drops close to zero after the investment."
],
[
"How Palm helps",
"Tell us the crop, the area and your water source. We supply drip tape, PE pipes, fittings, filters, valves, pumps and fertigation kits, priced as one package and delivered to the farm."
]
],
"ar": [
[
"",
"مصر تعتمد بشكل شبه كامل على نهر النيل في مياهها، وكل مشروع استصلاح جديد في الصحراء يجعل كل متر مكعب أغلى. تحديث الري من أوضح الأولويات القومية، وهو أيضا مشروع مربح لكل مزرعة."
],
[
"مشكلة الري بالغمر",
"غمر الأرض يفقد جزءا كبيرا من المياه في البخر والتسرب العميق، ويغسل السماد بعيدا عن الجذور، ويشجع الحشائش، ويحتاج ساعات ضخ أكثر. وفي الأراضي الصحراوية الرملية الجديدة لا يكاد ينجح أصلا."
],
[
"كيف يحل الري بالتنقيط المشكلة",
"خطوط التنقيط توصل المياه والسماد الذائب مباشرة لجذور كل نبات. المزارع التي تتحول تذكر عادة توفيرا في المياه من 30 إلى 50 بالمئة، واستخداما أقل للسماد عبر التسميد مع الري، ونموا أكثر تجانسا. ومياه أقل للضخ تعني سولار أو كهرباء أقل."
],
[
"مكونات شبكة التنقيط",
"طلمبة وفلاتر (قرصية أو رملية)، ومواسير رئيسية وفرعية PE أو PVC، ومحابس ومنظمات ضغط، وخراطيم تنقيط بالمسافة المناسبة بين النقاطات، ووصلات وسدادات نهاية، وحاقن سماد أو فنتوري. أضف مؤقتات أو كنترول لأتمتة مواعيد الري."
],
[
"التصميم الصحيح",
"تصرف النقاط والمسافة بينها حسب المحصول والتربة. والفلترة أساسية لأن معظم أعطال التنقيط سببها انسداد النقاطات. اغسل الخطوط بانتظام وعالج المياه إذا كانت تحمل رمالا أو طحالب."
],
[
"ادمجه مع الطاقة الشمسية",
"اربط شبكة التنقيط بطلمبة شمسية وستقترب تكلفة تشغيل الري من الصفر بعد الاستثمار."
],
[
"كيف تساعدك بالم",
"أخبرنا بالمحصول والمساحة ومصدر المياه. نوفر خراطيم التنقيط ومواسير PE والوصلات والفلاتر والمحابس والطلمبات وأجهزة التسميد، بسعر واحد للحزمة كاملة وتوصيل للمزرعة."
]
]
},
"kw_ar": "ري بالتنقيط, شبكة ري بالتنقيط, خراطيم تنقيط, drip tape, مستلزمات ري, خراطيم PE, فلاتر ري, ري حديث في مصر, توفير مياه الري, أسعار شبكات الري",
"faq": [
{
"q": {
"en": "How much water does drip irrigation save compared with flood irrigation?",
"ar": "كم يوفر الري بالتنقيط من المياه مقارنة بالري بالغمر؟"
},
"a": {
"en": "Farms that switch commonly report water savings of around 30 to 50 percent, plus lower fertiliser use through fertigation and fewer pumping hours.",
"ar": "المزارع التي تتحول للتنقيط تحقق عادة توفيرا في المياه بنحو 30 إلى 50 بالمئة، مع تقليل السماد عن طريق التسميد مع الري وساعات ضخ أقل."
}
},
{
"q": {
"en": "What do I need to install a drip irrigation system?",
"ar": "ما المكونات المطلوبة لتركيب شبكة ري بالتنقيط؟"
},
"a": {
"en": "A pump, disc or sand filters, main and sub-main PE or PVC pipes, valves and pressure regulators, drip tape or drip lines, fittings, end caps and a fertiliser injector. A timer or controller is a useful extra.",
"ar": "طلمبة، وفلاتر ديسك أو رملية، وخطوط رئيسية وفرعية PE أو PVC، ومحابس ومنظمات ضغط، وخراطيم تنقيط أو drip tape، ووصلات وسدادات نهاية، وحاقن سماد. ويمكن إضافة تايمر أو كنترولر."
}
},
{
"q": {
"en": "Why do drip emitters get clogged?",
"ar": "لماذا تنسد نقاطات الري بالتنقيط؟"
},
"a": {
"en": "Most clogging comes from poor filtration, sand or algae in the water. Good filters, regular line flushing and water treatment where needed prevent it.",
"ar": "معظم الانسداد سببه ضعف الفلترة أو وجود رمل أو طحالب في المياه. الفلاتر الجيدة وغسيل الخطوط بانتظام ومعالجة المياه عند الحاجة تمنع المشكلة."
}
}
]
},
{
"slug": "water-saving-fixtures-hotels-offices-schools",
"date": "2026-10-29",
"icon": "tap",
"dep": "plumbing",
"img": "https://images.unsplash.com/photo-1639492099556-2e63cf24a42f?w=1200&q=80&auto=format&fit=crop",
"kw": "water saving taps, sensor taps Egypt, aerators, dual flush, plumbing supplies Egypt, hotel water saving, reduce water bill",
"title": {
"en": "Sensor taps, aerators and dual flush: cutting water bills in hotels, offices and schools",
"ar": "خلاطات الحساس والموفرات والسيفون المزدوج: تخفيض فاتورة المياه في الفنادق والمكاتب والمدارس"
},
"excerpt": {
"en": "Small plumbing upgrades with a big effect. Water-saving fixtures cut consumption without anyone noticing a difference, and they protect your building from leaks.",
"ar": "تحديثات سباكة صغيرة بأثر كبير. الأدوات الموفرة للمياه تخفض الاستهلاك دون أن يلاحظ أحد فرقا، وتحمي المبنى من التسريبات."
},
"body": {
"en": [
[
"",
"Water and wastewater bills keep rising for commercial buildings in Egypt, and the country is working hard to use every drop wisely. In a hotel, hospital, office tower, mall or school, most of that water flows through taps, showers and toilets, which makes them the easiest place to save."
],
[
"Where the water goes",
"Taps left running, old toilets using 9 to 12 litres per flush, high-flow showers and silent leaks from worn valves account for most of the waste in public and commercial washrooms."
],
[
"The upgrades that pay back fastest",
"Tap aerators and flow restrictors cost very little and can cut tap flow by half. Infrared sensor taps stop water as soon as hands move away. Dual flush cisterns and valves save water on most flushes. Low-flow shower heads keep a good spray while using much less water and less hot water energy."
],
[
"Hygiene is a bonus",
"Touchless sensor taps, soap dispensers and hand dryers also reduce the spread of germs, which matters for hospitals, clinics, food factories and schools."
],
[
"Do not forget the hidden leaks",
"Replace worn angle valves, flexible hoses and float valves in tanks. A small continuous leak can waste thousands of litres a month without anyone seeing it."
],
[
"A practical rollout",
"Start with an audit of each washroom, fit aerators everywhere, then upgrade the busiest washrooms to sensor taps and dual flush. Track the water meter before and after to prove the saving."
],
[
"How Palm helps",
"We supply aerators, sensor taps, flush valves, dual flush cisterns, angle valves, hoses and complete washroom accessories for hotels, offices, hospitals and schools across Egypt. Send us your fixture count for a quotation."
]
],
"ar": [
[
"",
"فواتير المياه والصرف في ارتفاع مستمر للمباني التجارية في مصر، والدولة تعمل بجد لاستخدام كل قطرة بحكمة. وفي الفندق أو المستشفى أو البرج الإداري أو المول أو المدرسة، معظم المياه تمر عبر الحنفيات والدش والتواليت، وهذا يجعلها أسهل مكان للتوفير."
],
[
"أين تذهب المياه",
"حنفيات تُترك مفتوحة، وسيفونات قديمة تستهلك 9 إلى 12 لترا في كل مرة، ودش بتدفق عال، وتسريبات صامتة من محابس تالفة، هذه هي أغلب أسباب الهدر في دورات المياه العامة والتجارية."
],
[
"التحديثات الأسرع في استرداد التكلفة",
"موفرات المياه (الإيريتور) ومحددات التدفق رخيصة جدا ويمكنها تقليل تدفق الحنفية للنصف. خلاطات الحساس تغلق المياه بمجرد إبعاد اليد. والسيفون المزدوج يوفر المياه في معظم المرات. ورؤوس الدش منخفضة التدفق تعطي رشا جيدا باستهلاك أقل بكثير للمياه وطاقة التسخين."
],
[
"النظافة ميزة إضافية",
"الخلاطات والصبانات ومجففات الأيدي بدون لمس تقلل انتشار الجراثيم أيضا، وهذا مهم للمستشفيات والعيادات ومصانع الأغذية والمدارس."
],
[
"لا تنس التسريبات المخفية",
"استبدل محابس الزاوية التالفة والخراطيم المرنة وعوامات الخزانات. التسريب الصغير المستمر قد يهدر آلاف اللترات شهريا دون أن يراه أحد."
],
[
"خطة تنفيذ عملية",
"ابدأ بحصر كل دورة مياه، ثم ركب الموفرات في كل مكان، ثم حدث الدورات الأكثر استخداما بخلاطات حساس وسيفون مزدوج. سجل عداد المياه قبل وبعد لإثبات التوفير."
],
[
"كيف تساعدك بالم",
"نوفر موفرات المياه وخلاطات الحساس وفلاشات السيفون والسيفونات المزدوجة ومحابس الزاوية والخراطيم وكل إكسسوارات دورات المياه للفنادق والمكاتب والمستشفيات والمدارس في كل مصر. أرسل عدد الأدوات لدينا لعرض سعر."
]
]
},
"kw_ar": "خلاط حساس, حنفية حساس, موفر مياه للحنفيات, aerator, سيفون دبل فلاش, أدوات صحية موفرة للمياه, توفير المياه في الفنادق, مستلزمات سباكة, محبس زاوية, تخفيض فاتورة المياه",
"faq": [
{
"q": {
"en": "How much water does a tap aerator save?",
"ar": "كم يوفر موفر المياه (aerator) في الحنفية؟"
},
"a": {
"en": "A tap aerator or flow restrictor can cut tap flow by around half while the water still feels full. It is one of the cheapest water saving upgrades.",
"ar": "الـ aerator أو مقيد التدفق يمكنه تقليل تدفق الحنفية بحوالي النصف مع إحساس بنفس قوة المياه. وهو من أرخص تحديثات توفير المياه."
}
},
{
"q": {
"en": "Are sensor taps worth it for hotels and schools?",
"ar": "هل خلاطات الحساس مناسبة للفنادق والمدارس؟"
},
"a": {
"en": "Yes, especially in busy washrooms. They stop water as soon as hands move away and are touchless, which also helps hygiene.",
"ar": "نعم، خاصة في الحمامات كثيفة الاستخدام. تقفل المياه بمجرد إبعاد اليد ولا تحتاج لمس، وهذا يساعد أيضا على النظافة."
}
},
{
"q": {
"en": "How do I find hidden water leaks in a building?",
"ar": "كيف أكتشف تسريب المياه المخفي في المبنى؟"
},
"a": {
"en": "Check worn angle valves, flexible hoses, toilet flush valves and tank float valves, and compare the water meter at night when nothing is in use. A small continuous leak can waste thousands of litres a month.",
"ar": "افحص محابس الزاوية والخراطيم المرنة وبلوف السيفون وعوامات الخزانات، وراجع عداد المياه ليلا وقت عدم الاستخدام. تسريب صغير مستمر قد يهدر آلاف اللترات شهريا."
}
}
]
},
{
"slug": "ppe-checklist-egypt-worksites",
"date": "2026-10-28",
"icon": "helmet",
"img": "img/construction.jpg",
"title": {
"en": "A simple PPE checklist for Egyptian worksites",
"ar": "قائمة بسيطة لمهمات الوقاية في مواقع العمل بمصر"
},
"excerpt": {
"en": "Five questions to answer before you order helmets, gloves and boots for a new site or a new team.",
"ar": "قبل طلب الخوذ والجوانتيات والأحذية السيفتي لموقع جديد، أجب عن خمسة أسئلة بسيطة: المخاطر، المواصفات، المقاسات، معدل الاستبدال، ومن يستلم العهدة."
},
"body": {
"en": [
[
"",
"Most PPE problems on site start at the purchase order: the wrong glove for the task, boots ordered in one size range, or masks that do not seal. A short checklist fixes most of it."
],
[
"1. What are the hazards, job by job?",
"List each role on site (steel fixers, electricians, drivers, cleaners) and the main hazard for each: falling objects, cuts, dust, noise, chemicals, heat. This becomes your PPE matrix."
],
[
"2. Which standard does each item need?",
"Ask for the standard on the quotation: EN 397 helmets, EN 388 gloves with the right cut level, EN 20345 S3 boots, EN 149 FFP2 masks. A standard number is the easiest way to compare two offers fairly."
],
[
"3. Do the sizes match your people?",
"Collect shoe and glove sizes before ordering. An S3 boot that does not fit stays in the store."
],
[
"4. How often is each item replaced?",
"Gloves and masks are consumables, helmets and harnesses have an inspection cycle. Agree minimum stock levels so the site never runs out."
],
[
"5. Who signs for it?",
"Issue PPE against a name. It cuts losses and gives you a record if an inspector or client asks."
]
],
"ar": [
[
"",
"معظم مشكلات مهمات الوقاية في المواقع تبدأ من أمر الشراء: قفاز غير مناسب للعمل، أو أحذية بمقاسات محدودة، أو كمامات لا تحكم على الوجه. قائمة مراجعة قصيرة تحل معظم ذلك."
],
[
"1. ما المخاطر لكل وظيفة؟",
"اكتب كل وظيفة في الموقع (حدادين، كهربائيين، سائقين، عمال نظافة) والخطر الرئيسي لكل منها: سقوط أجسام، جروح، أتربة، ضوضاء، كيماويات، حرارة. هذه هي مصفوفة مهمات الوقاية."
],
[
"2. ما المواصفة المطلوبة لكل صنف؟",
"اطلب رقم المواصفة في عرض السعر: خوذ EN 397، وقفازات EN 388 بمستوى القطع المناسب، وأحذية EN 20345 S3، وكمامات EN 149 FFP2. رقم المواصفة أسهل طريقة لمقارنة عرضين بعدل."
],
[
"3. هل المقاسات مناسبة لفريقك؟",
"اجمع مقاسات الأحذية والقفازات قبل الطلب. الحذاء الذي لا يناسب يبقى في المخزن."
],
[
"4. كل متى يستبدل كل صنف؟",
"القفازات والكمامات مستهلكات، والخوذ والأحزمة لها دورة فحص. اتفق على حد أدنى للمخزون حتى لا ينفد في الموقع."
],
[
"5. من يوقع بالاستلام؟",
"اصرف المهمات باسم الشخص. هذا يقلل الفاقد ويعطيك سجلا عند سؤال المفتش أو العميل."
]
]
},
"dep": "safety",
"kw": "PPE Egypt, safety equipment Egypt, safety helmets, safety shoes, work gloves, construction safety, PPE checklist",
"kw_ar": "مهمات وقاية, مهمات الوقاية الشخصية, PPE, خوذ سلامة, أحذية سيفتي, جوانتي عمل, كمامات FFP2, معدات السلامة المهنية, مستلزمات أمن صناعي, سيفتي شوز مصر",
"faq": [
{
"q": {
"en": "Which standards should I ask for when buying PPE?",
"ar": "ما المواصفات التي أطلبها عند شراء مهمات الوقاية؟"
},
"a": {
"en": "Ask for the standard on the quotation, for example EN 397 for helmets, EN 388 for gloves, EN 20345 S3 for safety boots and EN 149 FFP2 for masks. It makes comparing offers fair and easy.",
"ar": "اطلب رقم المواصفة في عرض السعر، مثل EN 397 للخوذ وEN 388 للجوانتيات وEN 20345 S3 للأحذية السيفتي وEN 149 FFP2 للكمامات. هذا يجعل مقارنة العروض سهلة وعادلة."
}
},
{
"q": {
"en": "What does S3 mean on safety shoes?",
"ar": "ماذا يعني S3 في الأحذية السيفتي؟"
},
"a": {
"en": "S3 is a common safety footwear class that includes a protective toe cap and penetration resistant sole, with water resistance. It suits most construction sites.",
"ar": "S3 فئة شائعة في الأحذية السيفتي تشمل مقدمة واقية ونعلا مقاوما للاختراق مع مقاومة للمياه. وهي مناسبة لمعظم مواقع الإنشاءات."
}
},
{
"q": {
"en": "How often should PPE be replaced?",
"ar": "كل قد إيه يتم تغيير مهمات الوقاية؟"
},
"a": {
"en": "Gloves and masks are consumables and are replaced often, while helmets and harnesses follow an inspection cycle from the maker. Set minimum stock levels so the site never runs out.",
"ar": "الجوانتيات والكمامات مستهلكات تتغير باستمرار، أما الخوذ وأحزمة الأمان فلها دورة فحص حسب تعليمات المصنع. حدد حدا أدنى للمخزون حتى لا ينفد في الموقع."
}
}
]
},
{
"slug": "ie3-motors-vfd-energy-savings-factories",
"date": "2026-10-27",
"icon": "motor",
"dep": "motors",
"img": "https://images.unsplash.com/photo-1698031610511-c7a35d121b17?w=1200&q=80&auto=format&fit=crop",
"kw": "IE3 motors Egypt, variable frequency drive, VFD inverter, energy efficient motors, industrial motors Egypt, pump energy saving, factory energy cost",
"title": {
"en": "IE3 motors and VFD drives: the hidden energy saving in every Egyptian factory",
"ar": "محركات IE3 والانفرترات: التوفير الخفي في الطاقة داخل كل مصنع مصري"
},
"excerpt": {
"en": "Electric motors use most of the electricity in industry. Efficient motors and variable speed drives on pumps, fans and compressors cut that cost without touching production.",
"ar": "المحركات الكهربائية تستهلك معظم كهرباء الصناعة. المحركات عالية الكفاءة والانفرترات على الطلمبات والمراوح والكمبروسرات تخفض هذه التكلفة دون المساس بالإنتاج."
},
"body": {
"en": [
[
"",
"Walk through any Egyptian factory, water station or large building and you will find dozens of electric motors running pumps, fans, conveyors, mixers and compressors. Together they are usually the largest consumer of electricity on site."
],
[
"The problem",
"Many motors are old, rewound several times, oversized for the job and running at full speed all day, even when the process only needs half the flow. Flow is then throttled with valves or dampers, which wastes the energy as noise and heat."
],
[
"Upgrade to IE3 premium efficiency motors",
"An IE3 motor converts more of its input power into useful work than older IE1 motors. The difference is a few percent, but a motor running 6,000 hours a year spends many times its purchase price on electricity over its life, so those few percent add up fast."
],
[
"Add a variable frequency drive (VFD)",
"On pumps and fans, power drops sharply as speed falls, so running a fan at 80 percent speed needs only about half the power. A VFD matches motor speed to real demand and commonly saves 20 to 50 percent on these loads. It also gives soft starts, less mechanical wear and fewer burst pipes."
],
[
"Where to start",
"List motors above 7.5 kW that run long hours. Pumps and fans with throttling valves are the best candidates. Then plan to replace failed motors with IE3 instead of rewinding them."
],
[
"What you need",
"IE3 motors in the right frame size and mounting, VFDs sized for the motor current, line reactors or filters where needed, shielded motor cables and proper earthing."
],
[
"How Palm helps",
"Send us the motor nameplate details. We will quote IE3 replacements, matching VFDs, couplings, bearings and cables, delivered to your plant in Egypt."
]
],
"ar": [
[
"",
"تجول في أي مصنع أو محطة مياه أو مبنى كبير في مصر وستجد عشرات المحركات الكهربائية تدير طلمبات ومراوح وسيورا وخلاطات وكمبروسرات. ومجتمعة تكون عادة أكبر مستهلك للكهرباء في الموقع."
],
[
"المشكلة",
"كثير من المحركات قديمة، وأعيد لفها عدة مرات، وقدرتها أكبر من الحاجة، وتعمل بأقصى سرعة طوال اليوم حتى عندما يحتاج التشغيل نصف التصرف فقط. ثم يُخنق التصرف بالمحابس أو الدامبرات، فتضيع الطاقة في صورة ضوضاء وحرارة."
],
[
"التحديث إلى محركات IE3 عالية الكفاءة",
"محرك IE3 يحول جزءا أكبر من الطاقة الداخلة إلى عمل مفيد مقارنة بمحركات IE1 القديمة. الفرق بضعة في المئة، لكن المحرك الذي يعمل 6,000 ساعة سنويا يستهلك كهرباء خلال عمره بأضعاف ثمنه، فتتراكم هذه النسبة بسرعة."
],
[
"أضف انفرتر (VFD)",
"في الطلمبات والمراوح تنخفض القدرة بشدة مع انخفاض السرعة، فتشغيل مروحة بسرعة 80 بالمئة يحتاج حوالي نصف القدرة فقط. الانفرتر يطابق سرعة المحرك مع الطلب الحقيقي ويوفر عادة من 20 إلى 50 بالمئة في هذه الأحمال. كما يعطي بدءا ناعما وتآكلا ميكانيكيا أقل وانفجارات مواسير أقل."
],
[
"من أين تبدأ",
"اعمل قائمة بالمحركات فوق 7.5 كيلووات التي تعمل ساعات طويلة. الطلمبات والمراوح ذات محابس الخنق هي أفضل المرشحين. ثم خطط لاستبدال المحركات المحروقة بمحركات IE3 بدلا من إعادة لفها."
],
[
"ما تحتاجه",
"محركات IE3 بمقاس الشاسيه وطريقة التثبيت الصحيحة، وانفرترات بقدرة تيار المحرك، وملفات خط أو فلاتر عند الحاجة، وكابلات محرك مسلحة وتأريض سليم."
],
[
"كيف تساعدك بالم",
"أرسل لنا بيانات لوحة المحرك. سنقدم عرض سعر لمحركات IE3 البديلة والانفرترات المناسبة والكوبلنجات ورولمان البلي والكابلات، مع التوصيل لمصنعك في مصر."
]
]
},
"kw_ar": "موتور IE3, محركات كهربائية موفرة, انفرتر سرعة, VFD, مغير سرعة للمواتير, موتور كهرباء صناعي, توفير الكهرباء في المصانع, انفرتر طلمبات, مواتير مصر, ترشيد الطاقة",
"faq": [
{
"q": {
"en": "How much energy can a VFD save on a pump or fan?",
"ar": "كم يوفر الانفرتر (VFD) من الكهرباء على الطلمبة أو المروحة؟"
},
"a": {
"en": "On pumps and fans a VFD commonly saves around 20 to 50 percent, because power falls sharply as speed falls. A fan at 80 percent speed needs only about half the power.",
"ar": "على الطلمبات والمراوح يوفر الانفرتر عادة من 20 إلى 50 بالمئة تقريبا، لأن القدرة تنخفض بشدة مع انخفاض السرعة. مروحة تعمل بسرعة 80 بالمئة تحتاج تقريبا نصف القدرة فقط."
}
},
{
"q": {
"en": "Is it better to rewind an old motor or replace it with IE3?",
"ar": "الأفضل لف الموتور القديم أم استبداله بموتور IE3؟"
},
"a": {
"en": "For motors that run long hours, replacing a failed motor with IE3 is usually the better choice, because electricity over its life costs many times the purchase price. Rewinding several times often lowers efficiency.",
"ar": "للمواتير التي تعمل ساعات طويلة، استبدال الموتور التالف بموتور IE3 غالبا هو الاختيار الأفضل، لأن تكلفة الكهرباء على مدار عمره تساوي أضعاف ثمنه. واللف المتكرر يقلل الكفاءة عادة."
}
},
{
"q": {
"en": "Which motors should I upgrade first?",
"ar": "أي المواتير أبدأ بتحديثها أولا؟"
},
"a": {
"en": "Start with motors above 7.5 kW that run long hours, especially pumps and fans controlled by throttling valves or dampers.",
"ar": "ابدأ بالمواتير الأكبر من 7.5 كيلووات التي تعمل ساعات طويلة، خاصة الطلمبات والمراوح التي يتم التحكم في تدفقها بخنق المحابس أو البوابات."
}
}
]
},
{
"slug": "inverter-ac-hvac-maintenance-cooling-costs",
"date": "2026-10-26",
"icon": "snow",
"dep": "hvac",
"img": "https://images.unsplash.com/photo-1765634219706-15729e7a3295?w=1200&q=80&auto=format&fit=crop",
"kw": "inverter air conditioner Egypt, HVAC maintenance, AC filters, cooling cost, energy efficient AC, chiller maintenance, air conditioning supplies Egypt",
"title": {
"en": "Beating Egypt's summer heat for less: inverter AC and smart HVAC maintenance",
"ar": "هزيمة حر الصيف في مصر بتكلفة أقل: تكييف إنفرتر وصيانة ذكية للتكييف"
},
"excerpt": {
"en": "Cooling is the biggest summer cost for offices, shops, hotels and hospitals. Inverter units, clean filters and a simple maintenance plan can cut it sharply.",
"ar": "التبريد أكبر تكلفة صيفية للمكاتب والمحلات والفنادق والمستشفيات. وحدات الإنفرتر والفلاتر النظيفة وخطة صيانة بسيطة يمكنها تخفيضها بشدة."
},
"body": {
"en": [
[
"",
"With summer temperatures above 40 degrees in much of Egypt, air conditioning is no longer a luxury. It is essential for productivity, for food and medicine storage, and for customer comfort. It is also the largest summer electricity cost for most commercial buildings."
],
[
"The problem",
"Old fixed-speed units switch on and off at full power all day. Dirty filters and coils force them to work longer. Refrigerant leaks and worn fan belts quietly push consumption up year after year."
],
[
"Inverter technology",
"Inverter air conditioners adjust compressor speed to the actual cooling load instead of cycling on and off. They typically use 30 to 50 percent less energy than fixed-speed units, keep a steadier temperature and are quieter."
],
[
"Maintenance that saves money",
"Clean or replace air filters monthly in summer, clean condenser and evaporator coils each season, check refrigerant pressure, tighten electrical connections and replace worn belts. A clean system can use noticeably less power than a neglected one."
],
[
"Other quick wins",
"Set thermostats to 24 to 25 degrees, use window film and reflective roof coatings to block heat, seal doors in cold rooms, and add timers so units are off when buildings are empty."
],
[
"What to keep in stock",
"Filters in the right sizes, coil cleaner, refrigerant, copper pipe and insulation, capacitors, contactors, fan motors and drain pumps. Having them on hand turns a breakdown into a short visit instead of a lost day."
],
[
"How Palm helps",
"We supply inverter split and package units, HVAC spare parts, filters, refrigerants and cleaning chemicals to facilities teams and contractors across Egypt, with fast delivery before the summer rush."
]
],
"ar": [
[
"",
"مع درجات حرارة صيفية تتجاوز 40 درجة في معظم مصر، لم يعد التكييف رفاهية. إنه ضروري للإنتاجية وتخزين الأغذية والأدوية وراحة العملاء. وهو أيضا أكبر تكلفة كهرباء صيفية لمعظم المباني التجارية."
],
[
"المشكلة",
"الوحدات القديمة ثابتة السرعة تعمل وتفصل بكامل قدرتها طوال اليوم. والفلاتر والملفات المتسخة تجبرها على العمل مدة أطول. وتسريب الفريون وسيور المراوح التالفة ترفع الاستهلاك بهدوء عاما بعد عام."
],
[
"تقنية الإنفرتر",
"تكييفات الإنفرتر تغير سرعة الكمبروسر حسب حمل التبريد الفعلي بدلا من الفصل والتشغيل. وتستهلك عادة من 30 إلى 50 بالمئة طاقة أقل من الوحدات ثابتة السرعة، وتحافظ على درجة حرارة أكثر ثباتا وصوتها أهدأ."
],
[
"صيانة توفر المال",
"نظف أو غير فلاتر الهواء شهريا في الصيف، ونظف ملفات المكثف والمبخر كل موسم، وافحص ضغط الفريون، واربط التوصيلات الكهربائية، وغير السيور التالفة. النظام النظيف يستهلك طاقة أقل بشكل ملحوظ من النظام المهمل."
],
[
"مكاسب سريعة أخرى",
"اضبط الترموستات على 24 إلى 25 درجة، واستخدم أفلام النوافذ ودهانات الأسطح العاكسة لحجب الحرارة، وأحكم أبواب غرف التبريد، وأضف مؤقتات لإيقاف الوحدات عندما تكون المباني فارغة."
],
[
"ما يجب الاحتفاظ به في المخزن",
"فلاتر بالمقاسات الصحيحة، ومنظف ملفات، وفريون، ومواسير نحاس وعزل، ومكثفات، وكونتاكتورات، وموتورات مراوح، وطلمبات صرف. وجودها يحول العطل إلى زيارة قصيرة بدلا من يوم ضائع."
],
[
"كيف تساعدك بالم",
"نوفر تكييفات إنفرتر سبليت وباكيدج وقطع غيار التكييف والفلاتر والفريون وكيماويات التنظيف لفرق إدارة المرافق والمقاولين في كل مصر، مع توصيل سريع قبل زحمة الصيف."
]
]
},
"kw_ar": "تكييف انفرتر, تكييفات انفرتر للشركات, صيانة التكييف, فلاتر تكييف, قطع غيار تكييف, فريون, صيانة تشيلر, توفير كهرباء التكييف, تكييف سبليت, مستلزمات تكييف مصر",
"faq": [
{
"q": {
"en": "How much electricity does an inverter AC save?",
"ar": "كم يوفر التكييف الانفرتر من الكهرباء؟"
},
"a": {
"en": "Inverter air conditioners typically use 30 to 50 percent less energy than fixed-speed units, because the compressor adjusts its speed instead of switching on and off at full power.",
"ar": "التكييف الانفرتر يستهلك عادة طاقة أقل بنسبة 30 إلى 50 بالمئة من التكييف العادي، لأن الكمبروسر يغير سرعته بدلا من الفصل والتشغيل بكامل القدرة."
}
},
{
"q": {
"en": "How often should AC filters be cleaned?",
"ar": "كل قد إيه يتم تنظيف فلاتر التكييف؟"
},
"a": {
"en": "Clean or replace filters monthly during summer, and clean condenser and evaporator coils each season. Dirty filters make units run longer and use more power.",
"ar": "نظف الفلاتر أو غيرها شهريا في الصيف، ونظف ملفات الكوندنسر والإيفابوريتور كل موسم. الفلاتر المتسخة تجعل التكييف يعمل وقتا أطول ويستهلك كهرباء أكثر."
}
},
{
"q": {
"en": "What is the best thermostat setting to save on cooling?",
"ar": "ما أفضل درجة لضبط التكييف لتوفير الكهرباء؟"
},
"a": {
"en": "Setting thermostats to around 24 to 25 degrees keeps people comfortable while cutting consumption. Timers that switch units off in empty buildings save even more.",
"ar": "ضبط التكييف على 24 إلى 25 درجة تقريبا يحافظ على الراحة ويقلل الاستهلاك. واستخدام التايمر لإطفاء الوحدات في المباني الفارغة يوفر أكثر."
}
}
]
},
{
"slug": "preventive-maintenance-lubrication-avoid-downtime",
"date": "2026-10-24",
"icon": "wrench",
"dep": "lubricants",
"img": "https://images.unsplash.com/photo-1544456457-52c38b3cda5a?w=1200&q=80&auto=format&fit=crop",
"kw": "preventive maintenance Egypt, industrial lubricants, bearing grease, MRO supplies Egypt, reduce downtime, maintenance spare parts, bearings Egypt",
"title": {
"en": "Preventive maintenance: how the right grease and spare parts stop costly breakdowns",
"ar": "الصيانة الوقائية: كيف يمنع الشحم المناسب وقطع الغيار الأعطال المكلفة"
},
"excerpt": {
"en": "One stopped production line can cost more in a day than a year of lubricants. A simple preventive maintenance plan and a stocked spare parts shelf protect your output.",
"ar": "خط إنتاج متوقف واحد قد يكلف في يوم أكثر من زيوت وشحوم سنة كاملة. خطة صيانة وقائية بسيطة ورف قطع غيار جاهز يحميان إنتاجك."
},
"body": {
"en": [
[
"",
"As Egypt grows its manufacturing base, from food and textiles to building materials and pharmaceuticals, every factory faces the same enemy: unplanned downtime. Most breakdowns start small, with a dry bearing, a loose belt or a contaminated oil."
],
[
"The real cost of a breakdown",
"Lost production, overtime, rush shipping for parts, scrapped batches and late deliveries to customers. Waiting days for a single bearing or seal is common when spares are not on the shelf."
],
[
"Lubrication done right",
"Use the grease and oil grade specified by the equipment maker, high temperature grease for hot areas such as kilns and dryers, and food grade lubricants where there is any contact with food. Over-greasing is as harmful as under-greasing, so follow the quantity and interval."
],
[
"Keep critical spares in stock",
"Bearings, V-belts, seals and O-rings, couplings, filters, fuses and contactors for your most important machines. A small, well organised spare parts store is far cheaper than a day of stopped production."
],
[
"A simple preventive maintenance plan",
"List critical machines, set daily, weekly and monthly checks, record vibration, temperature and noise, and replace wear parts on schedule instead of waiting for failure. Even a paper checklist makes a big difference."
],
[
"Tools that pay for themselves",
"Grease guns with meters, infrared thermometers, vibration pens, belt tension gauges and alignment tools let your team spot problems early."
],
[
"How Palm helps",
"We supply lubricants, greases, bearings, belts, seals, couplings and maintenance tools as one account, so your maintenance team can order everything in one quotation and get it delivered fast."
]
],
"ar": [
[
"",
"مع توسع قاعدة الصناعة في مصر، من الأغذية والنسيج إلى مواد البناء والأدوية، يواجه كل مصنع نفس العدو: التوقف غير المخطط. ومعظم الأعطال تبدأ صغيرة، برولمان بلي جاف أو سير مرتخ أو زيت ملوث."
],
[
"التكلفة الحقيقية للعطل",
"إنتاج ضائع، وساعات إضافية، وشحن عاجل للقطع، وتشغيلات تالفة، وتأخر في التسليم للعملاء. وانتظار أيام لرولمان بلي أو جوان واحد أمر شائع عندما لا تكون قطع الغيار على الرف."
],
[
"التشحيم الصحيح",
"استخدم درجة الشحم والزيت التي يحددها صانع المعدة، وشحم الحرارة العالية للأماكن الساخنة مثل الأفران والمجففات، وزيوت الدرجة الغذائية حيثما يوجد أي تلامس مع الطعام. والإفراط في التشحيم ضار مثل نقصه، فالتزم بالكمية والمواعيد."
],
[
"احتفظ بقطع الغيار الحرجة",
"رولمان بلي، وسيور، وجوانات وحلقات O، وكوبلنجات، وفلاتر، وفيوزات، وكونتاكتورات لأهم ماكيناتك. مخزن قطع غيار صغير ومنظم أرخص بكثير من يوم إنتاج متوقف."
],
[
"خطة صيانة وقائية بسيطة",
"اعمل قائمة بالماكينات الحرجة، وحدد فحوصات يومية وأسبوعية وشهرية، وسجل الاهتزاز والحرارة والصوت، واستبدل قطع التآكل حسب الجدول بدلا من انتظار العطل. حتى قائمة مراجعة ورقية تصنع فرقا كبيرا."
],
[
"أدوات تسترد ثمنها",
"مسدسات شحم بعداد، وترمومترات بالأشعة تحت الحمراء، وأقلام قياس الاهتزاز، ومقاييس شد السيور، وأدوات المحاذاة تساعد فريقك على اكتشاف المشكلات مبكرا."
],
[
"كيف تساعدك بالم",
"نوفر الزيوت والشحوم ورولمان البلي والسيور والجوانات والكوبلنجات وأدوات الصيانة من حساب واحد، فيطلب فريق الصيانة كل شيء في عرض سعر واحد ويستلمه بسرعة."
]
]
},
"kw_ar": "صيانة وقائية, شحم رولمان بلي, زيوت صناعية, شحوم صناعية, رولمان بلي, سيور, قطع غيار صيانة, مستلزمات صيانة MRO, شحم حرارة عالية, زيوت food grade",
"faq": [
{
"q": {
"en": "What is preventive maintenance and why does it matter?",
"ar": "ما هي الصيانة الوقائية ولماذا هي مهمة؟"
},
"a": {
"en": "Preventive maintenance means checking, lubricating and replacing wear parts on a schedule instead of waiting for failure. It prevents unplanned stops that often cost more in a day than a year of lubricants.",
"ar": "الصيانة الوقائية هي الفحص والتشحيم واستبدال القطع المستهلكة حسب جدول بدلا من انتظار العطل. وهي تمنع التوقف المفاجئ الذي قد يكلف في يوم أكثر من زيوت وشحوم سنة كاملة."
}
},
{
"q": {
"en": "Can you over-grease a bearing?",
"ar": "هل الإفراط في تشحيم الرولمان بلي مضر؟"
},
"a": {
"en": "Yes. Over-greasing is as harmful as under-greasing, as it can cause heat and seal damage. Follow the quantity and interval set by the equipment maker.",
"ar": "نعم، الشحم الزائد ضار مثل الشحم القليل، فقد يسبب سخونة وتلفا في الجوانات. التزم بالكمية والمدة التي يحددها مصنع المعدة."
}
},
{
"q": {
"en": "Which spare parts should a factory keep in stock?",
"ar": "ما قطع الغيار التي يجب أن يحتفظ بها المصنع في المخزن؟"
},
"a": {
"en": "Keep bearings, V-belts, seals and O-rings, couplings, filters, fuses and contactors for your most critical machines. A small organised spares store is far cheaper than a day of lost production.",
"ar": "احتفظ برولمان بلي وسيور وجوانات وأورينج وكوبلنج وفلاتر وفيوزات وكونتاكتورات لأهم الماكينات. مخزن قطع غيار صغير ومنظم أرخص بكثير من يوم إنتاج ضائع."
}
}
]
},
{
"slug": "smart-cities-road-safety-supplies-egypt",
"date": "2026-10-22",
"icon": "cone",
"dep": "roads_municipal",
"img": "https://images.unsplash.com/photo-1594143533227-d269073daf02?w=1200&q=80&auto=format&fit=crop",
"kw": "road safety equipment Egypt, traffic cones, road studs, traffic signs, solar street lights, municipal supplies, new cities Egypt, smart city",
"title": {
"en": "Building Egypt's new cities: road safety and municipal supplies that last",
"ar": "بناء مدن مصر الجديدة: مستلزمات أمان الطرق والبلديات التي تدوم"
},
"excerpt": {
"en": "New roads, new cities and new bridges need signs, studs, barriers and lighting that survive heat, sand and heavy traffic. Buying the right specification once saves years of replacements.",
"ar": "الطرق والمدن والكباري الجديدة تحتاج لافتات وعيون قطط وحواجز وإنارة تتحمل الحرارة والرمال والمرور الكثيف. شراء المواصفة الصحيحة مرة واحدة يوفر سنوات من الاستبدال."
},
"body": {
"en": [
[
"",
"Egypt is building at a historic scale: the New Administrative Capital, new cities across the country, thousands of kilometres of new roads and many new bridges. Each project needs safety and municipal supplies, and each authority wants them to last."
],
[
"The problem",
"Cheap reflective sheeting fades in the sun, plastic road studs crack under trucks, poorly anchored barriers move, and street lights fail in dust and heat. Replacing them costs money and puts work crews at risk on live roads."
],
[
"Specify for the conditions",
"Use high intensity or diamond grade reflective sheeting for signs, aluminium or tempered glass road studs that survive heavy loads, solar road studs on dark highways, and water or concrete-filled barriers that stay in place."
],
[
"Light the road for less",
"LED street lights cut energy use compared with old sodium lamps, and solar street lights remove trenching and cabling on new roads and remote junctions."
],
[
"Work zone safety",
"Traffic cones, delineators, flashing beacons, reflective vests and portable signs protect workers during construction and maintenance. Keep a standard kit for every crew."
],
[
"Public spaces",
"Parks and public areas need benches, litter bins, bollards, playground surfaces and irrigation, all chosen to resist vandalism and weather."
],
[
"How Palm helps",
"We supply contractors and municipalities with traffic signs, road studs, cones, barriers, street lighting and park furniture, with the documentation needed for public tenders. Send us your bill of quantities for a complete price."
]
],
"ar": [
[
"",
"مصر تبني بحجم تاريخي: العاصمة الإدارية الجديدة، ومدن جديدة في كل المحافظات، وآلاف الكيلومترات من الطرق الجديدة، وكباري كثيرة. كل مشروع يحتاج مستلزمات أمان وبلديات، وكل جهة تريدها أن تدوم."
],
[
"المشكلة",
"الشرائح العاكسة الرخيصة تبهت في الشمس، وعيون القطط البلاستيك تتكسر تحت الشاحنات، والحواجز غير المثبتة جيدا تتحرك، وأعمدة الإنارة تتعطل من الأتربة والحرارة. واستبدالها يكلف مالا ويعرض فرق العمل للخطر على طرق مفتوحة."
],
[
"حدد المواصفة حسب الظروف",
"استخدم شرائح عاكسة عالية الكثافة أو دايموند جريد للافتات، وعيون قطط ألومنيوم أو زجاج مقسى تتحمل الأحمال الثقيلة، وعيون قطط شمسية على الطرق السريعة المظلمة، وحواجز تملأ بالمياه أو خرسانية تبقى في مكانها."
],
[
"إنارة الطريق بتكلفة أقل",
"أعمدة الإنارة LED تخفض استهلاك الطاقة مقارنة بلمبات الصوديوم القديمة، وأعمدة الإنارة الشمسية تلغي الحفر ومد الكابلات في الطرق الجديدة والتقاطعات البعيدة."
],
[
"أمان مناطق العمل",
"أقماع المرور والعلامات الإرشادية والفلاشرات والسترات العاكسة واللافتات المتنقلة تحمي العمال أثناء الإنشاء والصيانة. جهز طقما قياسيا لكل فريق."
],
[
"المساحات العامة",
"الحدائق والمساحات العامة تحتاج مقاعد وسلال مهملات وبولاردات وأرضيات ملاعب وري، كلها مختارة لتقاوم التخريب والطقس."
],
[
"كيف تساعدك بالم",
"نوفر للمقاولين والبلديات لافتات المرور وعيون القطط والأقماع والحواجز وإنارة الشوارع وأثاث الحدائق، مع المستندات المطلوبة للمناقصات الحكومية. أرسل لنا جدول الكميات لسعر كامل."
]
]
},
"kw_ar": "مستلزمات أمان الطرق, أقماع مرور, كونز مرور, عيون قطط, لافتات مرورية, حواجز طرق, أعمدة إنارة طاقة شمسية, كشافات شوارع LED, مستلزمات بلديات, المدن الجديدة مصر",
"faq": [
{
"q": {
"en": "Which reflective sheeting is best for road signs in Egypt?",
"ar": "ما أفضل شريط عاكس للافتات الطرق في مصر؟"
},
"a": {
"en": "High intensity or diamond grade reflective sheeting holds up much better in strong sun and stays visible at night longer than cheap engineering grade sheeting.",
"ar": "الشريط العاكس عالي الكثافة أو الدايموند جريد يتحمل الشمس القوية أفضل بكثير ويظل واضحا ليلا لفترة أطول من الأنواع الرخيصة."
}
},
{
"q": {
"en": "Are solar street lights a good option for new roads?",
"ar": "هل أعمدة الإنارة بالطاقة الشمسية مناسبة للطرق الجديدة؟"
},
"a": {
"en": "Yes, especially on new roads and remote junctions, because they avoid trenching and cabling. Where grid power exists, LED street lights cut energy use compared with old sodium lamps.",
"ar": "نعم، خاصة في الطرق الجديدة والتقاطعات البعيدة لأنها توفر الحفر ومد الكابلات. وحيث توجد كهرباء، كشافات الشوارع LED تقلل الاستهلاك مقارنة بلمبات الصوديوم القديمة."
}
},
{
"q": {
"en": "What should a work zone safety kit include?",
"ar": "ماذا تشمل عدة أمان مناطق العمل على الطرق؟"
},
"a": {
"en": "Traffic cones, delineators, flashing beacons, reflective vests and portable signs. Keeping one standard kit per crew protects workers on live roads.",
"ar": "أقماع مرور وأعمدة إرشادية وفلاشرات وسترات عاكسة ولافتات متنقلة. وجود عدة موحدة لكل فريق يحمي العمال على الطرق المفتوحة."
}
}
]
},
{
"slug": "cut-facility-supply-costs",
"date": "2026-10-21",
"icon": "quote",
"img": "img/housekeeping.jpg",
"title": {
"en": "Five ways to cut what your facility spends on supplies",
"ar": "خمس طرق لتقليل ما تنفقه منشأتك على التوريدات"
},
"excerpt": {
"en": "Small, regular purchases add up. Here is where the savings usually hide in hotels, offices and factories.",
"ar": "المشتريات الصغيرة المتكررة تستنزف الميزانية بهدوء. إليك خمس طرق عملية لتقليل ما تنفقه الفنادق والمكاتب والمصانع على التوريدات ومستلزمات النظافة."
},
"body": {
"en": [
[
"",
"Supplies are rarely the biggest line in a budget, but they are the most frequent. That frequency is where money leaks out."
],
[
"Consolidate suppliers",
"Ten small suppliers mean ten delivery charges, ten invoices and no volume discount. One or two main suppliers give you leverage and less admin."
],
[
"Agree prices for repeat items",
"Your top 50 items are probably 80% of spend. Fix their prices for six or twelve months."
],
[
"Stop emergency buying",
"Buying from the nearest shop when stock runs out costs 20 to 50% more. Set minimum levels and a weekly reorder day."
],
[
"Standardise",
"Three brands of the same glove or cleaner cost more than one. Pick a standard and stick to it."
],
[
"Look at total cost, not unit price",
"A cheaper mop that lasts half as long is not cheaper. Ask for samples and compare usage."
]
],
"ar": [
[
"",
"التوريدات نادرا ما تكون أكبر بند في الميزانية، لكنها الأكثر تكرارا. وهذا التكرار هو مكان تسرب الأموال."
],
[
"وحد الموردين",
"عشرة موردين صغار تعني عشر مصاريف توصيل وعشر فواتير ولا خصم كميات. مورد أو اثنان رئيسيان يمنحانك قوة تفاوض وعملا إداريا أقل."
],
[
"اتفق على أسعار الأصناف المتكررة",
"أهم 50 صنفا لديك تمثل غالبا 80% من الإنفاق. ثبت أسعارها لستة أو اثني عشر شهرا."
],
[
"أوقف الشراء الطارئ",
"الشراء من أقرب محل عند نفاد المخزون يكلف أكثر بنسبة 20 إلى 50%. حدد حدا أدنى ويوما أسبوعيا لإعادة الطلب."
],
[
"وحد الأصناف",
"ثلاث ماركات لنفس القفاز أو المنظف تكلف أكثر من ماركة واحدة. اختر صنفا قياسيا والتزم به."
],
[
"انظر للتكلفة الكلية لا سعر الوحدة",
"الممسحة الأرخص التي تعيش نصف المدة ليست أرخص. اطلب عينات وقارن الاستهلاك."
]
]
},
"dep": "cleaning",
"kw": "facility management Egypt, reduce supply costs, cleaning supplies Egypt, procurement Egypt, office supplies, MRO supplies",
"kw_ar": "توريدات عامة, تقليل تكاليف المشتريات, مستلزمات نظافة, أدوات نظافة للشركات, توريدات مكتبية, إدارة المشتريات, مورد توريدات في مصر, مستلزمات فنادق, توريدات مصانع, شركة توريدات عمومية",
"faq": [
{
"q": {
"en": "How can a company reduce its supply costs?",
"ar": "كيف تقلل الشركة تكاليف التوريدات؟"
},
"a": {
"en": "Consolidate suppliers, fix prices for your top repeat items, stop emergency buying, standardise brands and compare total cost rather than unit price.",
"ar": "قلل عدد الموردين، وثبت أسعار الأصناف المتكررة الأهم، وأوقف الشراء الطارئ، ووحد الماركات، وقارن التكلفة الإجمالية لا سعر الوحدة فقط."
}
},
{
"q": {
"en": "Why is emergency buying so expensive?",
"ar": "لماذا الشراء الطارئ مكلف؟"
},
"a": {
"en": "Buying from the nearest shop when stock runs out often costs 20 to 50 percent more. Minimum stock levels and a weekly reorder day prevent it.",
"ar": "الشراء من أقرب محل عند نفاد المخزون يكلف غالبا 20 إلى 50 بالمئة أكثر. تحديد حد أدنى للمخزون ويوم ثابت للطلب أسبوعيا يمنع ذلك."
}
},
{
"q": {
"en": "Is it better to use one supplier or many?",
"ar": "الأفضل التعامل مع مورد واحد أم عدة موردين؟"
},
"a": {
"en": "One or two main suppliers usually give better prices, fewer delivery charges and less admin than ten small ones. Keep a backup for critical items.",
"ar": "مورد أو اثنان رئيسيان يعطيان عادة أسعارا أفضل ومصاريف توصيل أقل وأعمالا إدارية أقل من عشرة موردين صغار. واحتفظ بمورد بديل للأصناف الحرجة."
}
}
]
},
{
"slug": "hospital-clinic-infection-control-supplies",
"date": "2026-10-20",
"icon": "mask",
"dep": "medical",
"img": "https://images.unsplash.com/photo-1635715521195-6e3740b89909?w=1200&q=80&auto=format&fit=crop",
"kw": "medical supplies Egypt, infection control, hospital consumables, disposable gloves, disinfectants, clinic supplies Egypt, healthcare procurement",
"title": {
"en": "Infection control on a budget: smarter medical supply buying for Egyptian hospitals and clinics",
"ar": "مكافحة العدوى بميزانية محدودة: شراء أذكى للمستلزمات الطبية للمستشفيات والعيادات في مصر"
},
"excerpt": {
"en": "Egypt is expanding healthcare coverage and building new hospitals. Standardising consumables and buying by specification keeps patients safe while controlling cost.",
"ar": "مصر توسع التغطية الصحية وتبني مستشفيات جديدة. توحيد المستهلكات والشراء بالمواصفة يحافظ على سلامة المرضى ويضبط التكلفة."
},
"body": {
"en": [
[
"",
"With the rollout of universal health insurance and new hospitals and clinics opening across Egypt, healthcare buyers are under pressure to do more with every pound while meeting stricter infection control standards."
],
[
"The problem",
"Many facilities buy dozens of brands of the same glove, mask or disinfectant from different suppliers. Quality varies, staff use the wrong product for the task, and stock runs out at the worst moment."
],
[
"Standardise the essentials",
"Agree one specification for each core item: nitrile examination gloves, surgical masks and FFP2 respirators, isolation gowns, hand sanitiser, surface disinfectant, sharps containers and clinical waste bags. Fewer items means better prices and fewer mistakes."
],
[
"Use the right product for each task",
"Hand hygiene points at every bed, colour coded cleaning cloths and mops to stop cross contamination, and hospital grade disinfectants with a clear contact time. Training staff on these basics prevents infections that cost far more than the supplies."
],
[
"Plan stock levels",
"Set minimum and maximum levels for each ward and reorder automatically. This avoids both emergency buying at high prices and expired stock on the shelf."
],
[
"Beyond consumables",
"Patient monitors, beds, trolleys, sterilisation supplies, linen and uniforms can all be included in the same supply plan."
],
[
"How Palm helps",
"We supply hospitals, clinics, labs and pharmacies with gloves, masks, gowns, disinfectants, waste management products and medical consumables, with consolidated delivery and the documents procurement teams need."
]
],
"ar": [
[
"",
"مع تطبيق التأمين الصحي الشامل وافتتاح مستشفيات وعيادات جديدة في كل مصر، يواجه مسؤولو المشتريات الطبية ضغطا لتحقيق المزيد بكل جنيه مع الالتزام بمعايير أشد لمكافحة العدوى."
],
[
"المشكلة",
"كثير من المنشآت تشتري عشرات الماركات لنفس القفاز أو الكمامة أو المطهر من موردين مختلفين. فتختلف الجودة، ويستخدم العاملون المنتج الخطأ للمهمة، وينفد المخزون في أسوأ توقيت."
],
[
"وحد الأساسيات",
"اتفق على مواصفة واحدة لكل صنف أساسي: قفازات فحص نيتريل، وكمامات جراحية وكمامات FFP2، وجاونات عزل، ومطهر أيدي، ومطهر أسطح، وصناديق الأدوات الحادة، وأكياس النفايات الطبية. أصناف أقل تعني أسعارا أفضل وأخطاء أقل."
],
[
"المنتج الصحيح لكل مهمة",
"نقاط تعقيم أيدي عند كل سرير، وفوط ومماسح ملونة حسب المنطقة لمنع انتقال العدوى، ومطهرات بدرجة المستشفيات بزمن تلامس واضح. تدريب العاملين على هذه الأساسيات يمنع عدوى تكلف أكثر بكثير من المستلزمات."
],
[
"خطط لمستويات المخزون",
"حدد حدا أدنى وأقصى لكل قسم وأعد الطلب تلقائيا. هذا يمنع الشراء الطارئ بأسعار عالية والمخزون منتهي الصلاحية على الرفوف."
],
[
"أبعد من المستهلكات",
"أجهزة المراقبة والأسرة والترولي ومستلزمات التعقيم والمفروشات والزي الموحد يمكن إدراجها كلها في نفس خطة التوريد."
],
[
"كيف تساعدك بالم",
"نوفر للمستشفيات والعيادات والمعامل والصيدليات القفازات والكمامات والجاونات والمطهرات ومنتجات إدارة النفايات والمستهلكات الطبية، مع توصيل مجمع والمستندات التي تحتاجها إدارات المشتريات."
]
]
},
"kw_ar": "مستلزمات طبية, مستلزمات مكافحة العدوى, جوانتي نيتريل, كمامات طبية, مطهرات مستشفيات, مستلزمات مستشفيات, مستلزمات عيادات, أكياس نفايات طبية, صناديق سنون, توريدات طبية مصر",
"faq": [
{
"q": {
"en": "Which disposable gloves are best for hospitals and clinics?",
"ar": "ما أفضل جوانتي للاستخدام مرة واحدة في المستشفيات والعيادات؟"
},
"a": {
"en": "Nitrile examination gloves are a common standard choice because they suit most tasks and avoid latex allergies. Agree one specification and buy it consistently.",
"ar": "جوانتي الفحص النيتريل اختيار شائع لأنه يناسب معظم المهام ويتجنب حساسية اللاتكس. اتفق على مواصفة واحدة واشترِ بها باستمرار."
}
},
{
"q": {
"en": "How can a hospital cut the cost of medical consumables?",
"ar": "كيف يقلل المستشفى تكلفة المستهلكات الطبية؟"
},
"a": {
"en": "Standardise core items to one specification each, set minimum and maximum stock per ward, and consolidate suppliers. This avoids emergency buying and expired stock.",
"ar": "وحد المواصفة لكل صنف أساسي، وحدد حدا أدنى وأقصى للمخزون في كل قسم، وقلل عدد الموردين. هذا يمنع الشراء الطارئ وانتهاء صلاحية المخزون."
}
},
{
"q": {
"en": "Why use colour coded cleaning cloths and mops in hospitals?",
"ar": "لماذا تستخدم المستشفيات فوط ومساحات ملونة؟"
},
"a": {
"en": "Colour coding keeps cloths and mops for each area separate, which helps stop cross contamination between wards, washrooms and kitchens.",
"ar": "الألوان تفصل أدوات كل منطقة عن الأخرى، وهذا يساعد على منع انتقال التلوث بين الأقسام والحمامات والمطابخ."
}
}
]
},
{
"slug": "equipping-schools-universities-egypt",
"date": "2026-10-18",
"icon": "book",
"dep": "education",
"img": "https://images.unsplash.com/photo-1618245596888-2fa0c17d4cec?w=1200&q=80&auto=format&fit=crop",
"kw": "school supplies Egypt, school furniture, classroom equipment, lab equipment schools, university supplies Egypt, education procurement, smart classroom",
"title": {
"en": "Equipping Egypt's schools and universities: durable furniture, labs and supplies that stretch the budget",
"ar": "تجهيز مدارس وجامعات مصر: أثاث ومعامل ومستلزمات متينة تحقق أقصى استفادة من الميزانية"
},
"excerpt": {
"en": "New schools, technical schools and private universities are opening every year. Buying durable, standard items and planning the whole year in one order saves money and stress.",
"ar": "مدارس جديدة ومدارس تكنولوجيا تطبيقية وجامعات خاصة تفتتح كل عام. شراء أصناف متينة وموحدة وتخطيط العام كله في طلب واحد يوفر المال والضغط."
},
"body": {
"en": [
[
"",
"Education is at the heart of Egypt's development plans, with new public schools, applied technology schools, international schools and private universities opening across the country. Every one of them needs to be equipped, and most work to a fixed budget."
],
[
"The problem",
"Furniture that breaks within two years, lab equipment bought piece by piece at retail prices, and stationery ordered in a rush every term all quietly eat the budget."
],
[
"Buy for durability",
"Steel frame student desks and chairs with replaceable tops, whiteboards with a long surface warranty and heavy duty lockers outlast cheaper options many times over. Cost per year matters more than the price tag."
],
[
"Science and technical labs",
"Standard lab kits for physics, chemistry and biology, safety equipment such as goggles, lab coats, eye wash stations and fire blankets, and workshop tools for technical schools can be bought as complete packages."
],
[
"Keep buildings safe and clean",
"Fire extinguishers, first aid kits, emergency lighting, cleaning supplies and washroom consumables are easy to forget but essential for safety inspections."
],
[
"Plan the year in one order",
"Combine furniture, lab, stationery, cleaning and maintenance needs into a yearly plan with scheduled deliveries. Schools get better prices and nothing runs out mid-term."
],
[
"How Palm helps",
"We supply schools, universities and training centres with classroom furniture, lab equipment, safety items, stationery and cleaning supplies, with one quotation for the full list and delivery across Egypt."
]
],
"ar": [
[
"",
"التعليم في قلب خطط التنمية في مصر، مع افتتاح مدارس حكومية جديدة ومدارس تكنولوجيا تطبيقية ومدارس دولية وجامعات خاصة في كل المحافظات. وكل منها يحتاج تجهيزا، ومعظمها يعمل بميزانية محددة."
],
[
"المشكلة",
"أثاث يتكسر خلال سنتين، ومعدات معامل تُشترى قطعة قطعة بأسعار التجزئة، وأدوات مكتبية تطلب على عجل كل ترم، كلها تستنزف الميزانية بهدوء."
],
[
"اشتر من أجل المتانة",
"مكاتب وكراسي طلاب بهيكل حديد وأسطح قابلة للتغيير، وسبورات بيضاء بضمان طويل للسطح، ولوكرات قوية تدوم أضعاف البدائل الأرخص. التكلفة لكل سنة أهم من السعر المكتوب."
],
[
"المعامل العلمية والفنية",
"أطقم معامل قياسية للفيزياء والكيمياء والأحياء، ومعدات أمان مثل النظارات والبالطو ومحطات غسيل العين وبطاطين الحريق، وعدد ورش للمدارس الفنية، يمكن شراؤها كحزم كاملة."
],
[
"حافظ على أمان ونظافة المباني",
"طفايات الحريق وشنط الإسعافات الأولية وإضاءة الطوارئ ومستلزمات النظافة ومستهلكات دورات المياه سهل نسيانها لكنها ضرورية لتفتيش السلامة."
],
[
"خطط العام في طلب واحد",
"اجمع احتياجات الأثاث والمعامل والأدوات المكتبية والنظافة والصيانة في خطة سنوية بمواعيد توريد. تحصل المدرسة على أسعار أفضل ولا ينفد شيء في منتصف الترم."
],
[
"كيف تساعدك بالم",
"نوفر للمدارس والجامعات ومراكز التدريب أثاث الفصول ومعدات المعامل ومستلزمات الأمان والأدوات المكتبية ومستلزمات النظافة، بعرض سعر واحد للقائمة كاملة وتوصيل لكل مصر."
]
]
},
"kw_ar": "تجهيز مدارس, أثاث مدرسي, ديسك مدرسي, تجهيز معامل مدارس, أدوات معامل, مستلزمات مدارس, تجهيز جامعات, سبورة بيضاء, توريدات مدارس مصر, تجهيز فصول ذكية",
"faq": [
{
"q": {
"en": "What school furniture lasts longest?",
"ar": "ما الأثاث المدرسي الأكثر تحملا؟"
},
"a": {
"en": "Steel frame desks and chairs with replaceable tops, heavy duty lockers and whiteboards with a long surface warranty usually outlast cheaper options many times over.",
"ar": "الديسكات والكراسي بهيكل حديد وأسطح قابلة للتغيير، والدواليب المعدنية القوية، والسبورات البيضاء بضمان طويل على السطح تعيش عادة أضعاف الأنواع الأرخص."
}
},
{
"q": {
"en": "What does a school science lab need?",
"ar": "ماذا يحتاج معمل العلوم في المدرسة؟"
},
"a": {
"en": "Standard kits for physics, chemistry and biology, plus safety items such as goggles, lab coats, eye wash stations and fire blankets. They can be ordered as complete packages.",
"ar": "أطقم معامل قياسية للفيزياء والكيمياء والأحياء، مع مستلزمات أمان مثل النظارات الواقية والبالطو وغسيل العين وبطانية الحريق. ويمكن طلبها كباقات كاملة."
}
},
{
"q": {
"en": "How can schools save on yearly supplies?",
"ar": "كيف توفر المدارس في مستلزمات العام الدراسي؟"
},
"a": {
"en": "Combine furniture, lab, stationery, cleaning and maintenance needs into one yearly plan with scheduled deliveries. This gets better prices and stops mid-term shortages.",
"ar": "اجمع احتياجات الأثاث والمعامل والأدوات المكتبية والنظافة والصيانة في خطة سنوية واحدة بمواعيد توريد محددة. هذا يحقق أسعارا أفضل ويمنع النقص في منتصف الترم."
}
}
]
},
{
"slug": "reduce-food-waste-cold-chain-restaurants-hotels",
"date": "2026-10-17",
"icon": "chef",
"dep": "kitchen_equipment",
"img": "img/kitchen.jpg",
"kw": "commercial kitchen equipment Egypt, food waste reduction, cold chain, food storage containers, restaurant supplies Egypt, hotel kitchen supplies, food safety",
"title": {
"en": "Less food waste, more profit: kitchen and cold chain supplies for Egyptian restaurants and hotels",
"ar": "هدر طعام أقل وربح أكثر: مستلزمات المطابخ وسلسلة التبريد للمطاعم والفنادق في مصر"
},
"excerpt": {
"en": "With food prices rising, every kilo thrown away is lost profit. Proper storage, labelling and temperature control cut waste and keep inspectors happy.",
"ar": "مع ارتفاع أسعار الغذاء، كل كيلو يُرمى ربح ضائع. علب الحفظ الصحيحة وملصقات التواريخ وضبط حرارة الثلاجات تقلل الهدر وتريح المطبخ عند أي تفتيش رسمي."
},
"body": {
"en": [
[
"",
"Egypt's tourism and food service sectors are growing fast, from Red Sea resorts to Cairo's restaurant scene and factory canteens. At the same time, food costs have risen sharply, so waste in the kitchen goes straight off the bottom line."
],
[
"Where the waste happens",
"Food spoils in fridges that run too warm, stock is used in the wrong order, open containers dry out, portions are inconsistent and leftovers have nowhere safe to go."
],
[
"Store it right",
"Airtight food storage containers in standard gastronorm sizes, colour coded cutting boards, vacuum sealing for meat and prepared items, and shelving that keeps food off the floor all extend shelf life."
],
[
"Control the temperature",
"Calibrated fridge and freezer thermometers, probe thermometers for cooking and cooling, data loggers in cold rooms and strip curtains on walk-in doors protect the cold chain from delivery to plate."
],
[
"First in, first out",
"Day dot labels and date labels on every container make rotation automatic. Staff instantly see what to use first, and inspectors see a system that works."
],
[
"Portion and measure",
"Scales, portion scoops and standard ladles keep plates consistent, which controls food cost and keeps guests happy."
],
[
"How Palm helps",
"We supply hotels, restaurants, catering companies and canteens with storage containers, labels, thermometers, kitchen equipment, cleaning chemicals and disposables, delivered together on one schedule."
]
],
"ar": [
[
"",
"قطاعا السياحة والخدمات الغذائية في مصر يكبران بسرعة، من منتجعات البحر الأحمر إلى مطاعم القاهرة وكافتيريات المصانع. وفي نفس الوقت ارتفعت تكلفة الغذاء بشدة، فكل هدر في المطبخ يُخصم مباشرة من الربح."
],
[
"أين يحدث الهدر",
"الطعام يفسد في ثلاجات أدفأ من اللازم، ويُستخدم المخزون بترتيب خاطئ، وتجف العبوات المفتوحة، وتختلف الحصص، ولا يوجد مكان آمن لحفظ البواقي."
],
[
"خزن بطريقة صحيحة",
"علب حفظ طعام محكمة بمقاسات جاسترونورم قياسية، وألواح تقطيع ملونة، وتغليف بالتفريغ للحوم والمجهزات، وأرفف ترفع الطعام عن الأرض، كلها تطيل مدة الصلاحية."
],
[
"اضبط درجة الحرارة",
"ترمومترات معايرة للثلاجات والفريزرات، وترمومترات سيخ للطهي والتبريد، ومسجلات بيانات في غرف التبريد، وستائر شرائح على أبواب الغرف الباردة، تحمي سلسلة التبريد من الاستلام حتى الطبق."
],
[
"الوارد أولا يُصرف أولا",
"ملصقات الأيام وملصقات التاريخ على كل علبة تجعل الدوران تلقائيا. يرى العاملون فورا ما يستخدم أولا، ويرى المفتشون نظاما يعمل."
],
[
"قس الحصص",
"الموازين ومغارف الحصص والكبشات القياسية تحافظ على ثبات الأطباق، فتضبط تكلفة الطعام وترضي الضيوف."
],
[
"كيف تساعدك بالم",
"نوفر للفنادق والمطاعم وشركات التغذية والكافتيريات علب الحفظ والملصقات والترمومترات ومعدات المطابخ وكيماويات النظافة والمستهلكات، بتوصيل مجمع في موعد واحد."
]
]
},
"kw_ar": "معدات مطابخ فنادق, مستلزمات مطاعم, علب حفظ طعام, جاسترونوم, ترمومتر ثلاجة, سلسلة التبريد, تقليل هدر الطعام, ملصقات تواريخ الطعام, معدات مطابخ تجارية مصر, سلامة الغذاء",
"faq": [
{
"q": {
"en": "How can restaurants reduce food waste?",
"ar": "كيف تقلل المطاعم هدر الطعام؟"
},
"a": {
"en": "Store food in airtight containers, control fridge temperatures, label everything for first in, first out rotation, and use scales and portion tools for consistent plates.",
"ar": "خزن الطعام في علب محكمة، واضبط حرارة الثلاجات، وضع ملصقات تاريخ على كل شيء لتطبيق الوارد أولا يصرف أولا، واستخدم الموازين وأدوات التقسيم لثبات الحصص."
}
},
{
"q": {
"en": "What are day dot labels?",
"ar": "ما هي ملصقات اليوم (day dot)؟"
},
"a": {
"en": "Day dot labels are small coloured or dated stickers placed on food containers so staff can see at a glance what to use first. They make stock rotation automatic.",
"ar": "ملصقات صغيرة ملونة أو عليها تاريخ توضع على علب الطعام ليعرف العاملون فورا ما يجب استخدامه أولا. وهي تجعل تدوير المخزون تلقائيا."
}
},
{
"q": {
"en": "How do I protect the cold chain in a hotel kitchen?",
"ar": "كيف أحافظ على سلسلة التبريد في مطبخ الفندق؟"
},
"a": {
"en": "Use calibrated fridge and freezer thermometers, probe thermometers, data loggers in cold rooms and strip curtains on walk-in doors. Check the current food safety requirements of the relevant authority for target temperatures.",
"ar": "استخدم ترمومترات معايرة للثلاجات والفريزرات، وترمومترات بسن، وأجهزة تسجيل حرارة في غرف التبريد، وستائر شرائح على أبوابها. وراجع اشتراطات سلامة الغذاء الحالية لدى الجهة المختصة لمعرفة درجات الحرارة المطلوبة."
}
}
]
},
{
"slug": "export-packaging-reduce-damage-shipping-costs",
"date": "2026-10-16",
"icon": "box",
"dep": "packaging",
"img": "https://images.unsplash.com/photo-1689942010216-dc412bb1e7a9?w=1200&q=80&auto=format&fit=crop",
"kw": "export packaging Egypt, stretch film, pallet wrap, packaging supplies Egypt, reduce shipping damage, corrugated boxes, logistics supplies",
"title": {
"en": "Packaging for export: how Egyptian manufacturers cut damage and shipping costs",
"ar": "التعبئة للتصدير: كيف يخفض المصنعون في مصر التلف وتكاليف الشحن"
},
"excerpt": {
"en": "Egypt wants to grow exports, and every damaged carton or rejected pallet hurts. Better packaging materials protect products, fill containers smarter and save on freight.",
"ar": "مصر تسعى لزيادة الصادرات، وكل كرتونة تالفة أو بالتة مرفوضة تضر. خامات تعبئة أفضل تحمي المنتجات وتملأ الحاويات بذكاء وتوفر في الشحن."
},
"body": {
"en": [
[
"",
"Growing exports is one of Egypt's top economic goals, and Egyptian food, textiles, chemicals, furniture and building materials are reaching more markets every year. Packaging is where many of those shipments win or lose."
],
[
"The problem",
"Weak cartons collapse when stacked, loads shift during long sea freight, humidity damages goods inside containers, and wrong pallet sizes waste space and trigger rejections at the destination."
],
[
"Stronger, smarter boxes",
"Choose the right corrugated board grade (single, double or triple wall) for the stack height and journey. Correctly sized boxes use less filling and fit more units per pallet."
],
[
"Secure the load",
"Quality stretch film applied with the right pre-stretch, edge protectors on pallet corners, strapping and buckles, and airbags or dunnage between pallets stop loads from moving."
],
[
"Fight humidity",
"Container desiccant bags and moisture barrier liners protect goods on long voyages, especially textiles, paper, metal parts and food."
],
[
"Use compliant pallets",
"Heat treated ISPM 15 wooden pallets or plastic pallets avoid customs problems in many importing countries. Check the standard size your market expects."
],
[
"How Palm helps",
"We supply stretch film, cartons, tape, strapping, edge protectors, desiccants, pallets and labels to exporters and logistics companies across Egypt, with steady pricing for regular orders."
]
],
"ar": [
[
"",
"زيادة الصادرات من أهم الأهداف الاقتصادية لمصر، والمنتجات المصرية من أغذية ونسيج وكيماويات وأثاث ومواد بناء تصل لأسواق أكثر كل عام. والتعبئة هي المكان الذي تنجح فيه هذه الشحنات أو تخسر."
],
[
"المشكلة",
"كراتين ضعيفة تنهار عند الرص، وحمولات تتحرك أثناء الشحن البحري الطويل، ورطوبة تتلف البضائع داخل الحاويات، ومقاسات بالتات خاطئة تهدر المساحة وتسبب الرفض في بلد الوصول."
],
[
"كراتين أقوى وأذكى",
"اختر درجة الكرتون المضلع المناسبة (طبقة واحدة أو مزدوجة أو ثلاثية) حسب ارتفاع الرص والرحلة. الكرتونة بالمقاس الصحيح تحتاج حشوا أقل وتستوعب البالتة عددا أكبر من الوحدات."
],
[
"ثبت الحمولة",
"استرتش فيلم جيد مع نسبة الشد الصحيحة، وزوايا حماية على أركان البالتة، وأشرطة تحزيم وأبازيم، وأكياس هواء أو حشوات بين البالتات تمنع الحمولة من الحركة."
],
[
"قاوم الرطوبة",
"أكياس امتصاص الرطوبة للحاويات وبطانات عازلة للرطوبة تحمي البضائع في الرحلات الطويلة، خاصة النسيج والورق والقطع المعدنية والأغذية."
],
[
"استخدم بالتات مطابقة",
"البالتات الخشبية المعالجة حراريا طبقا لـ ISPM 15 أو البالتات البلاستيك تتجنب مشكلات الجمارك في كثير من الدول المستوردة. تأكد من المقاس القياسي الذي يتوقعه سوقك."
],
[
"كيف تساعدك بالم",
"نوفر الاسترتش فيلم والكراتين والشرائط وأشرطة التحزيم وزوايا الحماية ومواد امتصاص الرطوبة والبالتات والملصقات للمصدرين وشركات اللوجستيات في كل مصر، بأسعار ثابتة للطلبات المنتظمة."
]
]
},
"kw_ar": "مستلزمات تغليف, استرتش تغليف, stretch film, كراتين شحن, كرتون مضلع, بالتات خشب, أكياس امتصاص رطوبة, شنابر تحزيم, تغليف للتصدير, مستلزمات تعبئة مصر",
"faq": [
{
"q": {
"en": "Which carton grade do I need for export?",
"ar": "ما نوع الكرتون المناسب للتصدير؟"
},
"a": {
"en": "Choose single, double or triple wall corrugated board based on the stack height and the length of the journey. Correctly sized boxes also fit more units per pallet.",
"ar": "اختر كرتونا مضلعا طبقة واحدة أو مزدوجا أو ثلاثيا حسب ارتفاع الرص وطول الرحلة. والكرتونة بالمقاس الصحيح تسمح بوحدات أكثر على البالتة."
}
},
{
"q": {
"en": "What is an ISPM 15 pallet?",
"ar": "ما هي بالتة ISPM 15؟"
},
"a": {
"en": "It is a wooden pallet heat treated and marked under the international ISPM 15 standard, which many importing countries require. Plastic pallets are another way to avoid customs problems.",
"ar": "بالتة خشب معالجة حراريا وعليها علامة المعيار الدولي ISPM 15 الذي تشترطه دول مستوردة كثيرة. والبالتات البلاستيك طريقة أخرى لتجنب مشاكل الجمارك."
}
},
{
"q": {
"en": "How do I protect goods from humidity in a shipping container?",
"ar": "كيف أحمي البضاعة من الرطوبة داخل حاوية الشحن؟"
},
"a": {
"en": "Use container desiccant bags and moisture barrier liners, especially for textiles, paper, metal parts and food on long sea voyages.",
"ar": "استخدم أكياس امتصاص الرطوبة للحاويات وبطانات عازلة للرطوبة، خاصة للمنسوجات والورق والقطع المعدنية والأغذية في الرحلات البحرية الطويلة."
}
}
]
},
{
"slug": "staff-uniforms-branded-workwear-egypt",
"date": "2026-10-15",
"icon": "shirt",
"dep": "uniforms",
"img": "https://images.unsplash.com/photo-1641122669951-3e2aff778d3b?w=1200&q=80&auto=format&fit=crop",
"kw": "staff uniforms Egypt, branded workwear, company uniforms supplier Egypt, embroidered polo shirts, work coveralls, hotel uniforms, factory uniforms, uniform fabric for hot weather, uniform embroidery vs printing, corporate uniforms Cairo",
"kw_ar": "يونيفورم موظفين, زي موحد للشركات, ملابس عمل, أفرول عمال, تيشيرت بولو مطرز, يونيفورم فنادق, يونيفورم مصانع, تطريز لوجو, مورد يونيفورم في مصر, سعر يونيفورم",
"title": {
"en": "Staff uniforms in Egypt: branded workwear that looks sharp and lasts",
"ar": "يونيفورم الموظفين في مصر: ملابس عمل بشعار شركتك تدوم وتحافظ على شكلها"
},
"excerpt": {
"en": "How to choose staff uniforms and branded workwear in Egypt: fabrics for the heat, embroidery vs print, sizing a whole team and reorders that match.",
"ar": "كيف تختار يونيفورم الموظفين وملابس العمل في مصر: خامات تناسب الحر، التطريز أم الطباعة، مقاسات الفريق كله، وإعادة الطلب بنفس اللون بدون اختلاف."
},
"body": {
"en": [
[
"",
"Egypt's tourism, retail, logistics and manufacturing sectors are all hiring, and customers notice the team before they notice the product. A clean, consistent uniform says the business is organised and trustworthy. Yet many companies buy uniforms in a rush, then replace faded, shrunken shirts within months, paying twice for the same look."
],
[
"Why uniforms are a business decision",
"A good uniform does three jobs: it carries your brand, it helps customers and supervisors spot staff quickly, and on sites like factories and warehouses it supports safety with the right fabric, colour and reflective details. Treating it as a cost to minimise usually means cheap fabric that fades after a few washes, so the real cost per wear goes up."
],
[
"Fabrics that survive Egypt's heat",
"For front of house and offices, a cotton rich polo or a cotton polyester blend around 65/35 breathes well and keeps its colour. For kitchens, workshops and warehouses, heavier twill or drill coveralls resist tearing and frequent washing. Ask for pre-shrunk fabric and colourfast dyes, and choose lighter shades for outdoor teams working in summer sun."
],
[
"Embroidery or printing?",
"Embroidery looks premium and typically outlasts the garment itself, which makes it the best choice for logos on shirts, jackets and chef coats. Screen or heat transfer printing suits large areas, back prints, event shirts and short runs where cost per piece matters more than lifespan. Many companies combine both: a small embroidered logo on the chest and a printed company name on the back."
],
[
"Sizing a whole team without waste",
"Collect sizes with a simple sheet per department instead of guessing, and order one or two sample pieces in each size first. Keep a small buffer stock, often around 5 to 10 percent, for new hires and replacements. A team of 60 staff with three sets each needs about 180 pieces, plus roughly 10 to 15 spares, which avoids emergency orders in a different shade."
],
[
"Reorders that match",
"Colour mismatch between batches is the most common complaint. Keep a reference sample, record the fabric code, colour code and logo file, and reorder from the same specification every time. Planning reorders twice a year is usually cheaper than many small rush orders."
],
[
"How Palm helps",
"Send us your logo, the number of staff per department, the roles (office, kitchen, field, factory) and any colour preferences. We will propose fabrics and garment types, send samples, and give you a full quotation within 24 hours, with delivery anywhere in Egypt."
]
],
"ar": [
[
"",
"قطاعات السياحة والتجزئة واللوجستيات والصناعة في مصر كلها تتوسع وتوظف، والعميل يلاحظ فريق العمل قبل أن يلاحظ المنتج. اليونيفورم النظيف الموحد يقول إن الشركة منظمة وتستحق الثقة. ومع ذلك تشتري شركات كثيرة اليونيفورم على عجل، ثم تستبدل القمصان الباهتة والمنكمشة خلال شهور، فتدفع مرتين لنفس الشكل."
],
[
"لماذا اليونيفورم قرار تجاري",
"اليونيفورم الجيد يؤدي ثلاث وظائف: يحمل هوية شركتك، ويساعد العملاء والمشرفين على التعرف على الموظفين بسرعة، وفي المصانع والمخازن يدعم السلامة بالخامة واللون والشرائط العاكسة المناسبة. التعامل معه كتكلفة يجب تقليلها بأي شكل يعني غالبا قماشا رخيصا يبهت بعد غسلات قليلة، فترتفع التكلفة الحقيقية لكل مرة لبس."
],
[
"خامات تتحمل حر مصر",
"للاستقبال والمكاتب، تيشيرت بولو قطن أو خليط قطن وبوليستر بنسبة حوالي 65/35 يسمح بالتهوية ويحافظ على لونه. وللمطابخ والورش والمخازن، أفرول من قماش تويل أو درل أثقل يقاوم التمزق والغسيل المتكرر. اطلب قماشا مضاد للانكماش وصباغة ثابتة، واختر ألوانا فاتحة للفرق التي تعمل في الشمس صيفا."
],
[
"تطريز أم طباعة؟",
"التطريز يعطي مظهرا راقيا وغالبا يعيش أطول من القطعة نفسها، لذلك هو الأفضل للوجو على القمصان والجواكت وجواكت الشيف. أما الطباعة بالسيلك سكرين أو الطباعة الحرارية فتناسب المساحات الكبيرة والطباعة على الظهر وتيشيرتات الفعاليات والكميات القليلة حيث تهم تكلفة القطعة أكثر من عمرها. وشركات كثيرة تجمع بينهما: لوجو صغير مطرز على الصدر واسم الشركة مطبوع على الظهر."
],
[
"مقاسات الفريق كله بدون هدر",
"اجمع المقاسات بكشف بسيط لكل قسم بدلا من التخمين، واطلب قطعة أو اثنتين عينة من كل مقاس أولا. احتفظ بمخزون احتياطي صغير، غالبا من 5 إلى 10 بالمئة، للموظفين الجدد والاستبدال. فريق من 60 موظفا بثلاث أطقم لكل فرد يحتاج حوالي 180 قطعة، مع 10 إلى 15 قطعة احتياطي تقريبا، وهذا يمنع الطلبات العاجلة بدرجة لون مختلفة."
],
[
"إعادة طلب بنفس اللون",
"اختلاف اللون بين الدفعات هو أكثر شكوى متكررة. احتفظ بعينة مرجعية، وسجل كود القماش وكود اللون وملف اللوجو، وأعد الطلب بنفس المواصفات كل مرة. التخطيط لإعادة الطلب مرتين في السنة غالبا أوفر من طلبات صغيرة عاجلة كثيرة."
],
[
"كيف تساعدك بالم",
"أرسل لنا اللوجو، وعدد الموظفين في كل قسم، وطبيعة العمل (مكاتب، مطبخ، ميداني، مصنع)، وأي ألوان تفضلها. سنقترح الخامات وأنواع القطع، ونرسل عينات، ونقدم لك عرض سعر كامل خلال 24 ساعة، مع التوصيل لأي مكان في مصر."
]
]
},
"faq": [
{
"q": {
"en": "What is the best fabric for staff uniforms in Egypt's hot weather?",
"ar": "ما أفضل خامة ليونيفورم الموظفين في جو مصر الحار؟"
},
"a": {
"en": "Cotton rich fabrics or a cotton polyester blend around 65/35 breathe well and hold colour. For heavy duty work, choose a durable twill or drill in a lighter shade.",
"ar": "الأقمشة القطنية أو خليط القطن والبوليستر بنسبة حوالي 65/35 تسمح بالتهوية وتحافظ على اللون. وللأعمال الشاقة اختر قماش تويل أو درل متين بلون فاتح."
}
},
{
"q": {
"en": "Is embroidery or printing better for a company logo on uniforms?",
"ar": "هل التطريز أفضل أم الطباعة للوجو الشركة على اليونيفورم؟"
},
"a": {
"en": "Embroidery usually lasts longer and looks more premium for chest logos. Printing is better for large back designs and short or event runs.",
"ar": "التطريز عادة يدوم أطول ويبدو أرقى للوجو على الصدر. والطباعة أفضل للتصميمات الكبيرة على الظهر والكميات القليلة أو تيشيرتات الفعاليات."
}
},
{
"q": {
"en": "How many uniform sets should each employee get?",
"ar": "كم طقم يونيفورم يحتاج كل موظف؟"
},
"a": {
"en": "Most companies give two to three sets per person so one can be washed while another is worn, plus a small spare stock of around 5 to 10 percent.",
"ar": "معظم الشركات تصرف من طقمين إلى ثلاثة لكل فرد حتى يُغسل طقم ويُلبس آخر، مع مخزون احتياطي صغير حوالي 5 إلى 10 بالمئة."
}
}
]
},
{
"slug": "choosing-led-lighting-warehouse",
"date": "2026-10-14",
"icon": "bulb",
"img": "https://images.unsplash.com/photo-1772305336606-989a457ffbae?w=1200&q=80&auto=format&fit=crop",
"title": {
"en": "Choosing LED lighting for a warehouse",
"ar": "اختيار إضاءة LED للمخازن"
},
"excerpt": {
"en": "Lumens, colour temperature, beam angle and mounting height, explained without the jargon.",
"ar": "شرح مبسط لاختيار كشافات LED للمخازن: اللومن وشدة الإضاءة باللوكس ودرجة اللون وزاوية الإضاءة وارتفاع التركيب، لإضاءة أفضل وفاتورة كهرباء أقل."
},
"body": {
"en": [
[
"",
"Good warehouse lighting means fewer picking errors, safer forklifts and lower bills. These are the four numbers that matter."
],
[
"Light output (lumens)",
"For general storage aim for around 150 to 200 lux at floor level, and 300 lux or more in picking and packing areas. Your supplier can turn that into a fixture count from the floor area."
],
[
"Mounting height and beam angle",
"Above about 6 m use high bays with a 60 to 90 degree beam. In narrow aisles a narrower beam puts light down the aisle instead of on top of the racks."
],
[
"Colour temperature",
"4000 K to 5000 K neutral white keeps labels readable and people alert."
],
[
"Heat and dust",
"Egyptian summers are hard on drivers. Choose fixtures rated for high ambient temperatures and at least IP65 if the space is dusty."
]
],
"ar": [
[
"",
"الإضاءة الجيدة في المخزن تعني أخطاء تحضير أقل وأمانا أكبر للونش وفاتورة كهرباء أقل. هذه هي الأرقام الأربعة المهمة."
],
[
"شدة الإضاءة (لومن)",
"للتخزين العام استهدف حوالي 150 إلى 200 لوكس على الأرض، و300 لوكس أو أكثر في مناطق التحضير والتعبئة. المورد يمكنه تحويل ذلك لعدد كشافات حسب المساحة."
],
[
"ارتفاع التركيب وزاوية الإضاءة",
"فوق 6 أمتار تقريبا استخدم كشافات هاي باي بزاوية 60 إلى 90 درجة. في الممرات الضيقة الزاوية الأضيق توجه الضوء للممر بدلا من أعلى الأرفف."
],
[
"درجة لون الإضاءة",
"الأبيض المحايد من 4000 إلى 5000 كلفن يحافظ على وضوح الملصقات وتركيز العاملين."
],
[
"الحرارة والأتربة",
"صيف مصر قاس على الدرايفرات. اختر كشافات مناسبة لدرجات الحرارة العالية وبحماية IP65 على الأقل إذا كان المكان مترب."
]
]
},
"dep": "lighting",
"kw": "warehouse lighting Egypt, LED high bay, lux levels, industrial lighting, LED lights Egypt",
"kw_ar": "إضاءة مخازن, كشافات مخازن LED, هاي باي LED, كشاف high bay, شدة الإضاءة لوكس, زاوية الإضاءة, درجة حرارة اللون, إضاءة صناعية, كشافات LED مصر, إضاءة مستودعات",
"faq": [
{
"q": {
"en": "How many lux does a warehouse need?",
"ar": "كم لوكس يحتاج المخزن؟"
},
"a": {
"en": "General storage areas typically need around 150 to 200 lux at floor level, while picking and packing areas need 300 lux or more.",
"ar": "مناطق التخزين العامة تحتاج عادة حوالي 150 إلى 200 لوكس على مستوى الأرض، بينما تحتاج مناطق التجهيز والتعبئة 300 لوكس أو أكثر."
}
},
{
"q": {
"en": "What beam angle should warehouse high bays have?",
"ar": "ما زاوية الإضاءة المناسبة لكشافات الهاي باي في المخازن؟"
},
"a": {
"en": "Above about 6 m mounting height, a 60 to 90 degree beam suits open areas. In narrow aisles a narrower beam puts light down the aisle instead of on top of the racks.",
"ar": "مع ارتفاع تركيب فوق 6 أمتار تقريبا تناسب زاوية 60 إلى 90 درجة المساحات المفتوحة. وفي الممرات الضيقة تضع الزاوية الأضيق الإضاءة داخل الممر بدلا من أعلى الأرفف."
}
},
{
"q": {
"en": "Which colour temperature is best for a warehouse?",
"ar": "ما أفضل درجة لون للإضاءة في المخزن؟"
},
"a": {
"en": "4000 K to 5000 K neutral white keeps labels readable and people alert, which helps reduce picking errors.",
"ar": "الإضاءة البيضاء المحايدة من 4000 إلى 5000 كلفن تجعل الملصقات واضحة والعاملين منتبهين، وهذا يقلل أخطاء التجهيز."
}
}
]
},
{
"slug": "office-fit-out-new-administrative-capital-egypt",
"date": "2026-10-13",
"icon": "shelf",
"dep": "furniture",
"img": "https://images.unsplash.com/photo-1761818645915-260598d569a7?w=1200&q=80&auto=format&fit=crop",
"kw": "office furniture Egypt, office fit-out New Administrative Capital, ergonomic office chairs, office desks supplier Egypt, meeting room furniture, office furniture price Egypt, breakroom supplies, office stationery supplier, new office setup Cairo",
"kw_ar": "أثاث مكتبي, تجهيز مكاتب العاصمة الإدارية, كراسي مكتب طبية, مكاتب موظفين, ترابيزة اجتماعات, سعر أثاث مكتبي في مصر, أدوات مكتبية, تجهيز بوفيه مكتب, مورد أثاث مكتبي في مصر",
"title": {
"en": "Office fit-out in the New Capital: one supply plan from desks to pens",
"ar": "تجهيز المكاتب في العاصمة الإدارية: خطة توريد واحدة من المكتب للقلم"
},
"excerpt": {
"en": "Moving to the New Administrative Capital or a new business district? Plan furniture, ergonomic chairs, meeting rooms, breakroom and stationery as one supply.",
"ar": "تنقل مكاتبك للعاصمة الإدارية أو منطقة أعمال جديدة؟ خطط للأثاث المكتبي وكراسي المكتب الطبية وغرف الاجتماعات والبوفيه والأدوات المكتبية كتوريد واحد."
},
"body": {
"en": [
[
"",
"Government bodies, banks and private companies are moving into the New Administrative Capital and new business districts such as New Cairo, Sheikh Zayed and the new coastal cities. Every move needs an office that works on day one. The usual problem is buying from many vendors on different schedules, so desks arrive but chairs do not, and the opening slips by weeks."
],
[
"Start with a headcount and floor plan",
"List how many people sit in open plan, private offices, meeting rooms and reception, then mark them on the floor plan. A typical open plan workstation needs around 6 to 8 m2 including circulation. This one list drives every quantity that follows and stops over-buying."
],
[
"Ergonomic chairs: the item not to cut",
"Staff sit eight hours a day, so the chair matters more than the desk. Look for adjustable seat height, lumbar support, adjustable armrests, a breathable mesh back for Egypt's heat and a strong five-star base. A cheap chair that breaks within a year usually costs more than a good one that lasts five or more."
],
[
"Desks, storage and meeting rooms",
"Modular workstations with cable trays make future changes easy without new furniture. Add lockable pedestals or lockers for each person and filing cabinets per department. For meeting rooms, size the table at about 0.6 to 0.7 metres of edge per person, and include a screen, whiteboard and power points in the plan from the start."
],
[
"Breakroom and stationery in the same order",
"The breakroom needs a fridge, water dispenser, kettle or coffee machine, cups and cleaning supplies. Stationery covers paper, files, pens, toner and desk organisers. Putting these in the same plan as the furniture means one delivery schedule and one invoice, and staff have everything they need on moving day."
],
[
"A worked example",
"An office of 50 staff typically needs 50 workstations and chairs, around 4 private offices, two meeting rooms of 8 and 12 seats, reception seating and a breakroom. Ordered as one package, procurement time often drops from many weeks of chasing vendors to a single quotation, review and delivery plan."
],
[
"How Palm helps",
"Send us your floor plan, headcount by area and any brand colours or furniture style you prefer. We will prepare a full fit-out list with furniture, chairs, breakroom and stationery and a complete quotation within 24 hours, with delivery anywhere in Egypt, including the New Administrative Capital."
]
],
"ar": [
[
"",
"الجهات الحكومية والبنوك والشركات الخاصة تنتقل للعاصمة الإدارية الجديدة ومناطق الأعمال الجديدة مثل القاهرة الجديدة والشيخ زايد والمدن الساحلية الجديدة. وكل انتقال يحتاج مكتبا جاهزا للعمل من أول يوم. المشكلة المعتادة هي الشراء من موردين كثيرين بمواعيد مختلفة، فتصل المكاتب ولا تصل الكراسي، ويتأخر الافتتاح أسابيع."
],
[
"ابدأ بعدد الموظفين ومخطط المكان",
"اكتب عدد من يجلسون في المساحة المفتوحة والمكاتب الخاصة وغرف الاجتماعات والاستقبال، ثم حددهم على المخطط. محطة العمل في المساحة المفتوحة تحتاج عادة حوالي 6 إلى 8 متر مربع شاملة الممرات. هذه القائمة الواحدة تحدد كل الكميات بعدها وتمنع الشراء الزائد."
],
[
"كرسي المكتب الطبي: البند الذي لا توفر فيه",
"الموظف يجلس ثماني ساعات يوميا، لذلك الكرسي أهم من المكتب. ابحث عن ارتفاع قابل للتعديل، ودعم لأسفل الظهر، ومساند يد قابلة للتعديل، وظهر شبك يسمح بالتهوية في حر مصر، وقاعدة خماسية قوية. الكرسي الرخيص الذي ينكسر خلال سنة يكلف غالبا أكثر من كرسي جيد يعيش خمس سنوات أو أكثر."
],
[
"المكاتب والتخزين وغرف الاجتماعات",
"محطات العمل الموديولار بمجاري كابلات تسهل أي تعديل مستقبلي بدون أثاث جديد. أضف أدراجا بقفل أو لوكرات لكل موظف ودواليب ملفات لكل قسم. ولغرف الاجتماعات احسب طول الترابيزة بحوالي 0.6 إلى 0.7 متر لكل فرد، وضع الشاشة والسبورة ومخارج الكهرباء في الخطة من البداية."
],
[
"البوفيه والأدوات المكتبية في نفس الطلب",
"البوفيه يحتاج ثلاجة وكولدير مياه وكاتل أو ماكينة قهوة وأكواب ومستلزمات نظافة. والأدوات المكتبية تشمل الورق والملفات والأقلام والأحبار ومنظمات المكتب. وضع هذه البنود في نفس خطة الأثاث يعني جدول توريد واحدا وفاتورة واحدة، ويجد الموظفون كل ما يحتاجونه يوم الانتقال."
],
[
"مثال عملي",
"مكتب به 50 موظفا يحتاج عادة 50 محطة عمل وكرسيا، وحوالي 4 مكاتب خاصة، وغرفتي اجتماعات لـ 8 و12 فردا، وجلسة استقبال، وبوفيه. عند طلبها كباقة واحدة، يتحول وقت الشراء غالبا من أسابيع طويلة من متابعة الموردين إلى عرض سعر واحد ومراجعة وخطة توريد."
],
[
"كيف تساعدك بالم",
"أرسل لنا مخطط المكتب وعدد الموظفين في كل منطقة وأي ألوان أو طراز أثاث تفضله. سنجهز قائمة تجهيز كاملة بالأثاث والكراسي والبوفيه والأدوات المكتبية وعرض سعر كامل خلال 24 ساعة، مع التوصيل لأي مكان في مصر بما فيها العاصمة الإدارية الجديدة."
]
]
},
"faq": [
{
"q": {
"en": "How much space does each employee need in an open plan office?",
"ar": "كم مساحة يحتاجها كل موظف في المكتب المفتوح؟"
},
"a": {
"en": "A common planning range is around 6 to 8 m2 per person including walkways. Private offices and meeting rooms are added on top.",
"ar": "النطاق الشائع في التخطيط حوالي 6 إلى 8 متر مربع للفرد شاملة الممرات. وتضاف مساحة المكاتب الخاصة وغرف الاجتماعات فوق ذلك."
}
},
{
"q": {
"en": "What should I look for in an ergonomic office chair?",
"ar": "ما المواصفات المهمة في كرسي المكتب الطبي؟"
},
"a": {
"en": "Adjustable seat height, lumbar support, adjustable armrests, a breathable mesh back and a strong five-star base.",
"ar": "ارتفاع قابل للتعديل، ودعم لأسفل الظهر، ومساند يد قابلة للتعديل، وظهر شبك يسمح بالتهوية، وقاعدة خماسية قوية."
}
},
{
"q": {
"en": "Can one supplier furnish a whole office in Egypt?",
"ar": "هل يمكن لمورد واحد تجهيز مكتب كامل في مصر؟"
},
"a": {
"en": "Yes. A general supplier can quote furniture, chairs, meeting rooms, breakroom equipment and stationery together, which means one delivery plan and one invoice.",
"ar": "نعم. مورد التوريدات العامة يمكنه تسعير الأثاث والكراسي وغرف الاجتماعات وتجهيزات البوفيه والأدوات المكتبية معا، أي خطة توريد واحدة وفاتورة واحدة."
}
}
]
},
{
"slug": "lab-pharma-consumables-supplier-egypt",
"date": "2026-10-12",
"icon": "glove",
"dep": "pharma",
"img": "https://images.unsplash.com/photo-1599652749620-e45b7f38988e?w=1200&q=80&auto=format&fit=crop",
"kw": "lab consumables Egypt, pharmaceutical supplies Egypt, nitrile gloves supplier, pipette tips, laboratory glassware, cleanroom supplies Egypt, lab supplies supplier Egypt, pharma factory consumables, cleanroom wipes and coveralls",
"kw_ar": "مستلزمات معامل, مستلزمات مصانع الأدوية, جوانتي نيتريل, سنون ماصات, زجاجيات معامل, مستلزمات غرف نظيفة, مورد مستلزمات معامل في مصر, أفرول غرف نظيفة, مناديل غرف نظيفة",
"title": {
"en": "Lab and pharma consumables in Egypt: steady quality, no stockouts",
"ar": "مستلزمات المعامل ومصانع الأدوية في مصر: جودة ثابتة بدون نقص مخزون"
},
"excerpt": {
"en": "As Egypt localises medicine manufacturing, labs and pharma plants need gloves, pipettes, glassware and cleanroom supplies with steady quality and no stockouts.",
"ar": "مع توطين صناعة الدواء في مصر، تحتاج المعامل ومصانع الأدوية جوانتيات وماصات وزجاجيات ومستلزمات غرف نظيفة بجودة ثابتة وبدون نقص في المخزون."
},
"body": {
"en": [
[
"",
"Egypt is pushing to make more of its own medicines and to export them, which means new production lines, quality control labs and research facilities. These sites run on consumables used by the thousand every week. When gloves, pipette tips or cleanroom wipes run out or arrive in a different grade, testing stops and batches can be delayed."
],
[
"The real cost of a stockout",
"A missing box of pipette tips sounds small, but it can idle an analyst, push back a release test and hold a finished batch in quarantine. Emergency buying usually means higher prices and an unfamiliar brand that then has to be checked. Planned supply is almost always cheaper than rushed supply."
],
[
"Gloves and protective wear",
"Nitrile gloves are the common choice in labs because they suit many chemicals and avoid latex allergies. Pick thickness by task, thin for dexterity and thicker for handling solvents, and keep one or two approved brands. Cleanroom areas also need sterile or low-lint gloves, coveralls, hoods, overshoes and face masks matched to the room classification."
],
[
"Pipettes, tips and glassware",
"Tips should fit your pipette models precisely, or volumes drift and results become harder to trust. Buy filter tips for sensitive work and keep a stock of standard tips for routine tests. For glassware, borosilicate beakers, volumetric flasks and measuring cylinders resist heat and chemicals; class A volumetric ware is typically used where accuracy is critical."
],
[
"Keep quality consistent",
"Changing suppliers or grades every order creates extra checks and paperwork. Fix a specification sheet for each item with brand, size, grade and packaging, ask for certificates of analysis or conformity where relevant, and follow your own quality system and the current requirements of the Egyptian Drug Authority for anything that touches the product."
],
[
"A simple min-max plan",
"Track weekly use for each item, then set a minimum stock of about two to four weeks of use and a reorder quantity that covers the next month. A lab using 20 boxes of gloves a week would keep a floor of around 40 to 80 boxes. This turns surprise shortages into routine monthly orders."
],
[
"How Palm helps",
"Send us your consumables list with brands, sizes and monthly quantities, or simply last quarter's purchase records. We will match the same specifications, suggest a min-max plan and send a full quotation within 24 hours, with delivery anywhere in Egypt."
]
],
"ar": [
[
"",
"مصر تتجه لتصنيع نسبة أكبر من أدويتها محليا وتصديرها، وهذا يعني خطوط إنتاج جديدة ومعامل رقابة جودة ومنشآت بحثية. هذه المواقع تعمل على مستلزمات تستهلك بالآلاف كل أسبوع. وعندما تنفد الجوانتيات أو سنون الماصات أو مناديل الغرف النظيفة أو تصل بدرجة مختلفة، تتوقف الاختبارات وقد تتأخر التشغيلات."
],
[
"التكلفة الحقيقية لنقص المخزون",
"علبة سنون ماصات ناقصة تبدو أمرا بسيطا، لكنها قد توقف محللا عن العمل، وتؤخر اختبار الإفراج، وتبقي تشغيلة جاهزة في الحجر. والشراء العاجل يعني غالبا أسعارا أعلى وماركة غير معتادة تحتاج فحصا من جديد. التوريد المخطط أوفر دائما تقريبا من التوريد على عجل."
],
[
"الجوانتيات وملابس الوقاية",
"جوانتي النيتريل هو الاختيار الشائع في المعامل لأنه يناسب كيماويات كثيرة ويتجنب حساسية اللاتكس. اختر السمك حسب المهمة، رفيع للدقة وأسمك للتعامل مع المذيبات، وثبت ماركة أو اثنتين معتمدتين. ومناطق الغرف النظيفة تحتاج أيضا جوانتيات معقمة أو قليلة الوبر، وأفرولات، وأغطية رأس، وأغطية أحذية، وكمامات تناسب تصنيف الغرفة."
],
[
"الماصات والسنون والزجاجيات",
"يجب أن تركب السنون على موديلات الماصات عندك بدقة، وإلا تنحرف الأحجام وتصبح النتائج أقل موثوقية. اشتر سنونا بفلتر للأعمال الحساسة واحتفظ بمخزون من السنون العادية للاختبارات الروتينية. وفي الزجاجيات، البيكرات والدوارق العيارية والمخابير من زجاج البوروسيليكات تتحمل الحرارة والكيماويات، والزجاجيات العيارية Class A تستخدم عادة حيث الدقة مهمة جدا."
],
[
"حافظ على ثبات الجودة",
"تغيير المورد أو الدرجة مع كل طلب يخلق فحوصات وأوراقا إضافية. ثبت ورقة مواصفات لكل صنف بالماركة والمقاس والدرجة والتعبئة، واطلب شهادات التحليل أو المطابقة عند الحاجة، واتبع نظام الجودة الخاص بك والاشتراطات الحالية لهيئة الدواء المصرية في كل ما يلمس المنتج."
],
[
"خطة حد أدنى وحد أقصى بسيطة",
"تابع الاستهلاك الأسبوعي لكل صنف، ثم حدد حدا أدنى للمخزون يغطي حوالي أسبوعين إلى أربعة أسابيع من الاستهلاك، وكمية إعادة طلب تغطي الشهر التالي. معمل يستهلك 20 علبة جوانتي أسبوعيا يحتفظ بحد أدنى حوالي 40 إلى 80 علبة. وهكذا يتحول النقص المفاجئ إلى طلبات شهرية روتينية."
],
[
"كيف تساعدك بالم",
"أرسل لنا قائمة المستلزمات بالماركات والمقاسات والكميات الشهرية، أو ببساطة سجلات مشتريات الربع الماضي. سنوفر نفس المواصفات، ونقترح خطة حد أدنى وأقصى، ونرسل عرض سعر كامل خلال 24 ساعة، مع التوصيل لأي مكان في مصر."
]
]
},
"faq": [
{
"q": {
"en": "Are nitrile or latex gloves better for laboratories?",
"ar": "أيهما أفضل للمعامل: جوانتي نيتريل أم لاتكس؟"
},
"a": {
"en": "Nitrile is the more common choice in labs because it handles a wide range of chemicals and avoids latex allergies. Always check the chemical resistance data for the substances you use.",
"ar": "النيتريل هو الاختيار الأكثر شيوعا في المعامل لأنه يتحمل نطاقا واسعا من الكيماويات ويتجنب حساسية اللاتكس. راجع دائما بيانات المقاومة الكيميائية للمواد التي تستخدمها."
}
},
{
"q": {
"en": "Do pipette tips have to match the pipette brand?",
"ar": "هل يجب أن تكون سنون الماصة من نفس ماركة الماصة؟"
},
"a": {
"en": "Not always, but they must fit your pipette model precisely. Universal tips work for many models, so test a sample before ordering in bulk.",
"ar": "ليس دائما، لكن يجب أن تركب على موديل الماصة بدقة. السنون العامة تناسب موديلات كثيرة، لذلك جرب عينة قبل الطلب بكميات كبيرة."
}
},
{
"q": {
"en": "How much safety stock should a lab keep?",
"ar": "كم مخزون أمان يجب أن يحتفظ به المعمل؟"
},
"a": {
"en": "Many labs keep around two to four weeks of normal use for critical consumables, adjusted for how long deliveries take.",
"ar": "كثير من المعامل تحتفظ بمخزون يكفي حوالي أسبوعين إلى أربعة أسابيع من الاستهلاك العادي للمستلزمات الحرجة، مع التعديل حسب مدة التوريد."
}
}
]
},
{
"slug": "marine-port-supplies-suez-canal-economic-zone",
"date": "2026-10-11",
"icon": "globe",
"dep": "marine",
"img": "https://images.unsplash.com/photo-1678182451047-196f22a4143e?w=1200&q=80&auto=format&fit=crop",
"kw": "marine supplies Egypt, port supplies SCZone, mooring ropes, marine fenders, marine paint Egypt, ship chandler Egypt, shipyard supplies, Suez Canal Economic Zone suppliers, Ain Sokhna port supplies, Port Said marine equipment",
"kw_ar": "مستلزمات بحرية, توريدات موانئ, حبال رباط السفن, مصدات سفن, دهانات بحرية, مستلزمات أحواض بناء السفن, المنطقة الاقتصادية لقناة السويس, توريدات العين السخنة, معدات بحرية بورسعيد, مورد مستلزمات بحرية في مصر",
"title": {
"en": "Marine and port supplies for the Suez Canal Economic Zone",
"ar": "المستلزمات البحرية وتوريدات الموانئ في المنطقة الاقتصادية لقناة السويس"
},
"excerpt": {
"en": "Mooring ropes, fenders, marine paint, safety gear and spare parts for ports, shipyards and logistics firms in SCZone: how to choose and avoid downtime.",
"ar": "حبال الرباط والمصدات والدهانات البحرية ومهمات السلامة وقطع الغيار للموانئ والترسانات وشركات اللوجستيات في المنطقة الاقتصادية: كيف تختارها وتتجنب التوقف المكلف."
},
"body": {
"en": [
[
"",
"The Suez Canal Economic Zone around Ain Sokhna, East Port Said, Ismailia and the canal ports is one of Egypt's fastest growing hubs for shipping, logistics and industry. Every berth, tug, shipyard and container yard there depends on supplies that face salt, sun and heavy loads every day. When a rope parts or a fender fails, a vessel waits, and waiting time is expensive."
],
[
"Mooring ropes: match the line to the job",
"Polypropylene ropes are light and float but wear faster in sun. Polyester and nylon blends offer better strength, abrasion resistance and some stretch to absorb surge. Choose diameter and breaking load to suit the vessel size you handle, follow the manufacturer's working load limits, and inspect lines regularly for abrasion and UV damage."
],
[
"Fenders that protect the quay and the hull",
"Cylindrical and D-shaped rubber fenders suit most berths and tugs, while pneumatic fenders are common for ship to ship work. Undersized or worn fenders transfer impact to the quay wall and the hull, and repairs to either usually cost far more than the fenders themselves. Keep a spare set for the busiest berths."
],
[
"Marine paint and corrosion control",
"Salt air attacks steel fast, so cranes, bollards, hulls and structures need a proper marine coating system: surface preparation, an anticorrosive primer, then a durable topcoat, and antifouling below the waterline for vessels. Repainting before rust spreads is typically much cheaper than replacing corroded steel."
],
[
"Safety gear and spare parts",
"Life jackets, lifebuoys, work vests, safety boots, gloves, helmets and first aid kits should be stocked for every shift. Check the current requirements of the port authority and the relevant maritime authority for each item. Critical spares such as shackles, wire ropes, hydraulic hoses, bearings, filters and lubricants for cranes and reach stackers should be on the shelf, not on order."
],
[
"A downtime example",
"If a container crane stops for a missing hydraulic hose, a terminal may lose many container moves per hour until a replacement arrives. Holding a small kit of the hoses and filters that fail most often typically costs far less than a single day of lost handling. A short critical spares list is one of the best investments a port operator can make."
],
[
"How Palm helps",
"Send us your vessel or berth details, your current consumption list or the spare parts list for your cranes and equipment. We will match the right ropes, fenders, coatings, safety gear and spares and send a full quotation within 24 hours, with delivery anywhere in Egypt, including Sokhna, Port Said, Ismailia and Suez."
]
],
"ar": [
[
"",
"المنطقة الاقتصادية لقناة السويس حول العين السخنة وشرق بورسعيد والإسماعيلية وموانئ القناة من أسرع مراكز الشحن واللوجستيات والصناعة نموا في مصر. كل رصيف وقاطرة وترسانة وساحة حاويات هناك تعتمد على مستلزمات تواجه الملح والشمس والأحمال الثقيلة كل يوم. وعندما ينقطع حبل أو تتلف مصدة، تنتظر السفينة، ووقت الانتظار مكلف جدا."
],
[
"حبال الرباط: اختر الحبل حسب الشغل",
"حبال البولي بروبلين خفيفة وتطفو لكنها تتآكل أسرع في الشمس. وخلطات البوليستر والنايلون تعطي قوة أعلى ومقاومة أفضل للاحتكاك ومرونة تمتص حركة الأمواج. اختر القطر وحمل الكسر حسب حجم السفن التي تتعامل معها، والتزم بحدود حمل التشغيل من المصنع، وافحص الحبال بانتظام بحثا عن التآكل وتلف الشمس."
],
[
"مصدات تحمي الرصيف وبدن السفينة",
"المصدات المطاطية الأسطوانية وعلى شكل حرف D تناسب معظم الأرصفة والقاطرات، بينما المصدات الهوائية شائعة في عمليات التراكي من سفينة لسفينة. المصدات الصغيرة أو المتآكلة تنقل الصدمة لحائط الرصيف ولبدن السفينة، وإصلاح أي منهما يكلف عادة أضعاف ثمن المصدات نفسها. احتفظ بطقم احتياطي لأكثر الأرصفة ازدحاما."
],
[
"الدهانات البحرية ومكافحة الصدأ",
"هواء البحر المالح يهاجم الحديد بسرعة، لذلك الأوناش والبولارد وأبدان السفن والمنشآت تحتاج نظام دهان بحري سليما: تجهيز السطح، ثم برايمر مانع للصدأ، ثم طبقة نهائية متينة، ودهان مانع للحشف أسفل خط الماء للسفن. إعادة الدهان قبل انتشار الصدأ أوفر عادة بكثير من تغيير الحديد المتآكل."
],
[
"مهمات السلامة وقطع الغيار",
"سترات النجاة وأطواق النجاة والصديري العاكس وأحذية السيفتي والجوانتيات والخوذ وشنط الإسعافات يجب أن تكون متوفرة لكل وردية. راجع الاشتراطات الحالية لهيئة الميناء والجهة البحرية المختصة لكل صنف. وقطع الغيار الحرجة مثل الشكلات وحبال الصلب والخراطيم الهيدروليك والرولمان بلي والفلاتر والزيوت للأوناش والريتش ستاكر يجب أن تكون على الرف وليس تحت الطلب."
],
[
"مثال على تكلفة التوقف",
"إذا توقف ونش حاويات بسبب خرطوم هيدروليك ناقص، قد يخسر الترمينال حركات حاويات كثيرة كل ساعة حتى يصل البديل. الاحتفاظ بطقم صغير من الخراطيم والفلاتر الأكثر تلفا يكلف عادة أقل بكثير من يوم واحد من التشغيل الضائع. قائمة قصيرة لقطع الغيار الحرجة من أفضل الاستثمارات لأي مشغل ميناء."
],
[
"كيف تساعدك بالم",
"أرسل لنا بيانات السفن أو الأرصفة، أو قائمة الاستهلاك الحالية، أو قائمة قطع غيار الأوناش والمعدات. سنوفر الحبال والمصدات والدهانات ومهمات السلامة وقطع الغيار المناسبة ونرسل عرض سعر كامل خلال 24 ساعة، مع التوصيل لأي مكان في مصر بما فيها السخنة وبورسعيد والإسماعيلية والسويس."
]
]
},
"faq": [
{
"q": {
"en": "Which rope is best for mooring ships?",
"ar": "ما أفضل نوع حبال لرباط السفن؟"
},
"a": {
"en": "Polyester and nylon blends are widely used for their strength, abrasion resistance and stretch. The right diameter depends on vessel size and the manufacturer's working load limits.",
"ar": "خلطات البوليستر والنايلون مستخدمة على نطاق واسع لقوتها ومقاومتها للاحتكاك ومرونتها. والقطر المناسب يعتمد على حجم السفينة وحدود حمل التشغيل من المصنع."
}
},
{
"q": {
"en": "How often should port steel structures be repainted?",
"ar": "كل كم يجب إعادة دهان المنشآت الحديدية في الموانئ؟"
},
"a": {
"en": "It depends on the coating system and exposure, so inspect regularly and touch up as soon as rust appears rather than waiting for a full repaint.",
"ar": "يعتمد ذلك على نظام الدهان ودرجة التعرض، لذلك افحص بانتظام وأصلح الدهان بمجرد ظهور الصدأ بدلا من انتظار إعادة دهان كاملة."
}
},
{
"q": {
"en": "Do you deliver marine supplies to Ain Sokhna and Port Said?",
"ar": "هل توصلون المستلزمات البحرية للعين السخنة وبورسعيد؟"
},
"a": {
"en": "Yes. Palm delivers anywhere in Egypt, including all Suez Canal Economic Zone ports and industrial areas.",
"ar": "نعم. بالم توصل لأي مكان في مصر، بما في ذلك كل موانئ ومناطق المنطقة الاقتصادية لقناة السويس الصناعية."
}
}
]
},
{
"slug": "welding-electrodes-wire-gas-supplier-egypt",
"date": "2026-10-10",
"icon": "weld",
"dep": "welding",
"img": "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1200&q=80&auto=format&fit=crop",
"kw": "welding supplies Egypt, welding electrodes, MIG welding wire, welding gas argon CO2, welding helmet, steel structure fabrication Egypt, welding consumables supplier Egypt, reduce welding rework, E7018 electrodes, welding gloves",
"kw_ar": "مستلزمات لحام, سلك لحام, أسلاك لحام CO2, سلك لحام MIG, غاز أرجون, ماسك لحام, جوانتي لحام, لحام الهياكل المعدنية, مورد مستلزمات لحام في مصر, سعر سلك لحام",
"title": {
"en": "Welding supplies in Egypt: right electrodes, wire and gas cut rework",
"ar": "مستلزمات اللحام في مصر: سلك اللحام والغاز المناسب يقللان إعادة الشغل"
},
"excerpt": {
"en": "How Egyptian workshops and steel structure factories choose electrodes, MIG wire, shielding gas and welding PPE to cut rework, consumable waste and downtime.",
"ar": "كيف تختار الورش ومصانع الهياكل المعدنية في مصر أسلاك اللحام وسلك MIG وغاز الحماية ومهمات وقاية اللحام لتقليل إعادة الشغل وهدر المستهلكات والتوقف."
},
"body": {
"en": [
[
"",
"Egypt's national projects, new cities, warehouses and factories are built on steel structures, and every one of them is welded. For a fabrication shop, consumables look like a small cost next to steel. But the wrong electrode, damp wire or the wrong gas mix leads to porosity, cracks and rejected welds, and rework quietly eats the profit."
],
[
"The hidden cost of rework",
"Grinding out and rewelding a bad joint typically takes longer than welding it right the first time, plus extra consumables, grinding discs and inspection. A shop that cuts its repair rate from, say, 8 percent to 3 percent of joints can recover many welder hours every month without hiring anyone."
],
[
"Choosing electrodes",
"For general mild steel work, rutile electrodes such as E6013 are easy to use and give a neat finish. For structural joints that need strength and toughness, low hydrogen electrodes such as E7018 are usually specified. Low hydrogen rods absorb moisture, so store them sealed or in a rod oven as the manufacturer advises, or they can cause cracking."
],
[
"MIG wire and shielding gas",
"Switching from stick to MIG/MAG on long production seams often raises deposition rate and cuts slag cleaning. Match wire to the steel, with ER70S-6 common for carbon steel, and pick wire diameter for plate thickness. Pure CO2 is economical with deeper penetration but more spatter, while an argon CO2 mix gives a cleaner weld and less cleanup, which often pays back on visible or high volume work."
],
[
"Protective gear that welders actually wear",
"An auto-darkening welding helmet, leather welding gloves, flame resistant jackets or sleeves, safety boots and suitable respiratory protection keep welders working comfortably in Egypt's heat. Gear that is light and comfortable gets worn all shift. Check the current requirements of the relevant labour and safety authority for your site."
],
[
"Cut consumable waste",
"Buy wire on larger spools for production lines, keep electrodes dry and in closed packs, avoid discarding long rod stubs, and fix leaks in gas hoses and regulators. Track consumption per tonne of steel fabricated; that one number shows quickly whether a process change actually saved money."
],
[
"How Palm helps",
"Send us your steel grades, typical thicknesses, welding processes and monthly consumption of rods, wire and gas. We will recommend matching consumables and PPE and send a full quotation within 24 hours, with delivery anywhere in Egypt."
]
],
"ar": [
[
"",
"المشروعات القومية والمدن الجديدة والمخازن والمصانع في مصر تقوم على الهياكل المعدنية، وكل واحدة منها تُلحم. بالنسبة لورشة التصنيع، تبدو مستهلكات اللحام تكلفة صغيرة بجانب الحديد. لكن سلك اللحام الخطأ أو السلك الرطب أو خلطة الغاز غير المناسبة تؤدي إلى مسامية وشروخ ولحامات مرفوضة، وإعادة الشغل تأكل الربح في صمت."
],
[
"التكلفة الخفية لإعادة الشغل",
"تجليخ لحام سيئ وإعادة لحامه تستغرق عادة وقتا أطول من لحامه صح من أول مرة، بالإضافة لمستهلكات إضافية وأحجار صاروخ وفحص. والورشة التي تخفض نسبة الإصلاح مثلا من 8 بالمئة إلى 3 بالمئة من الوصلات تستعيد ساعات لحام كثيرة كل شهر بدون تعيين أي فرد جديد."
],
[
"اختيار أسلاك اللحام (الإلكترود)",
"لأعمال الحديد العادي، أسلاك الروتايل مثل E6013 سهلة الاستخدام وتعطي شكلا نظيفا. وللوصلات الإنشائية التي تحتاج قوة ومتانة، تحدد عادة الأسلاك منخفضة الهيدروجين مثل E7018. هذه الأسلاك تمتص الرطوبة، لذلك خزنها مغلقة أو في فرن تجفيف الأسلاك حسب تعليمات المصنع، وإلا قد تسبب شروخا."
],
[
"سلك MIG وغاز الحماية",
"التحول من اللحام بالإلكترود إلى لحام MIG/MAG في خطوط الإنتاج الطويلة يرفع غالبا معدل الترسيب ويقلل تنظيف الخبث. اختر السلك المناسب للحديد، وER70S-6 شائع للحديد الكربوني، واختر قطر السلك حسب سمك اللوح. غاز CO2 النقي اقتصادي ويعطي اختراقا أعمق لكن مع رذاذ أكثر، بينما خليط الأرجون وCO2 يعطي لحاما أنظف وتنظيفا أقل، وهذا يسترد تكلفته غالبا في الشغل الظاهر أو الكميات الكبيرة."
],
[
"مهمات وقاية يلبسها اللحام فعلا",
"ماسك لحام أوتوماتيك، وجوانتي لحام جلد، وجاكت أو أكمام مقاومة للهب، وحذاء سيفتي، ووقاية تنفسية مناسبة تجعل اللحام يعمل براحة في حر مصر. المهمات الخفيفة المريحة تُلبس طوال الوردية. راجع الاشتراطات الحالية لجهة العمل والسلامة المختصة لموقعك."
],
[
"قلل هدر المستهلكات",
"اشتر السلك على بكرات أكبر لخطوط الإنتاج، واحفظ الأسلاك جافة وفي عبوات مغلقة، وتجنب رمي أعقاب أسلاك طويلة، وأصلح تسريبات خراطيم الغاز والمنظمات. تابع الاستهلاك لكل طن حديد مصنع، فهذا الرقم وحده يوضح بسرعة إن كان أي تغيير في الطريقة وفر فلوسا فعلا."
],
[
"كيف تساعدك بالم",
"أرسل لنا أنواع الحديد والسماكات المعتادة وطرق اللحام والاستهلاك الشهري من الأسلاك والسلك والغاز. سنرشح المستهلكات ومهمات الوقاية المناسبة ونرسل عرض سعر كامل خلال 24 ساعة، مع التوصيل لأي مكان في مصر."
]
]
},
"faq": [
{
"q": {
"en": "What is the difference between E6013 and E7018 electrodes?",
"ar": "ما الفرق بين سلك لحام E6013 وE7018؟"
},
"a": {
"en": "E6013 is a rutile electrode that is easy to use for general mild steel work. E7018 is a low hydrogen electrode usually specified for structural joints and must be kept dry.",
"ar": "E6013 سلك روتايل سهل الاستخدام لأعمال الحديد العادي. وE7018 سلك منخفض الهيدروجين يحدد عادة للوصلات الإنشائية ويجب حفظه جافا."
}
},
{
"q": {
"en": "Is CO2 or argon mix better for MIG welding?",
"ar": "أيهما أفضل للحام MIG: غاز CO2 أم خليط الأرجون؟"
},
"a": {
"en": "CO2 is cheaper and penetrates deeper but gives more spatter. An argon CO2 mix gives a cleaner weld and less cleanup, which often suits visible or high volume work.",
"ar": "CO2 أرخص ويعطي اختراقا أعمق لكن برذاذ أكثر. وخليط الأرجون وCO2 يعطي لحاما أنظف وتنظيفا أقل، وهو غالبا الأنسب للشغل الظاهر أو الكميات الكبيرة."
}
},
{
"q": {
"en": "How should welding electrodes be stored?",
"ar": "كيف تُخزن أسلاك اللحام؟"
},
"a": {
"en": "Keep them sealed in a dry place. Low hydrogen electrodes should be stored or redried in a rod oven following the manufacturer's instructions.",
"ar": "احفظها مغلقة في مكان جاف. والأسلاك منخفضة الهيدروجين تُخزن أو يعاد تجفيفها في فرن الأسلاك حسب تعليمات المصنع."
}
}
]
}
];
window.POSTS = POSTS;
