let btn_menu = document.querySelector(".btn_menu")
let close_menu = document.querySelector(".btn_close")
let nav = document.querySelector('nav')



// open menu 
btn_menu.addEventListener('click', () => {
    var Over = document.createElement('Div')
    Over.className='overlay'
    document.querySelector('header .container').appendChild(Over)
    nav.style.right = '0'
    document.body.style.overflow = "hidden"
})

// close menu
close_menu.addEventListener('click', (e) => {
    var overlay = document.querySelector(".overlay")
    nav.style.right = '-500px'
    document.body.style.overflowY = "scroll"
    setTimeout(() => {
        overlay.remove()
    }, 100)
})


document.addEventListener('DOMContentLoaded', function() {
    // جلب الصف الذي يحوي الصور
    const sliderRow = document.getElementById('slider-row');
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;
    const slideInterval = 3000; // وقت التبديل بالملي ثانية (3 ثواني)

    function nextSlide() {
        // الانتقال للصورة التالية
        currentSlide = (currentSlide + 1) % slides.length;
        
        // حساب الإزاحة الأفقية بنسبة مئوية
        const offset = -currentSlide * 100;
        
        // تطبيق تأثير التحرك الأفقي
        sliderRow.style.transform = `translateX(${offset}%)`;
    }

    // تشغيل الدالة بشكل متكرر وتلقائي
    setInterval(nextSlide, slideInterval);
});


// 1. قاموس الترجمة الخاص بصفحة "من نحن"
const translations = {
    "ar": {
        "page_title": "من نحن - شركة بي دبليو سي للفحص والتفتيش ما قبل الشحن",
        "nav_home": "الصفحة الرئيسية",
        "nav_about": "من نحن",
        "nav_services": "خدمات التفتيش",
        "nav_certs": "الشهادات والعضويات",
        "nav_contact": "تواصل معنا",
        "lang_btn": "English",

        "landing_title": "من نحن",
        "landing_desc": "شركة بي دبليو سي للفحص والتفتيش ما قبل الشحن لأننا ملتزمون بالجودة بكفاءة عالية واسعة في جميع المجالات ونراعي عملائنا ونسعى لرضاهم",
        
        "slider_title": "من نحن",
        "slider_desc": "شركة بي دبليو سي للفحص والتفتيش ما قبل الشحن هي شركة مصرية رائدة في تقديم خدمات التفتيش والمطابقة وإصدار الشهادات حسب المواصفات العالمية والمحلية، تأسست في عام 2021 بخبرات للموظفين تزيد عن 15 عاماً من الخبرة الواسعة والكفاءة في تقديم خدمات التفتيش والمطابقة في وقت سريع ودقة متناهية وسرية تامة نضمنها لكم فنحن نعمل كطرف ثالث محايد. تقدم الشركة حلولاً لتسهيل التجارة وجعل سلسلة التوريد أكثر أماناً وكفاءة لعملائنا، وفقاً لأفضل الممارسات المعمول بها عالمياً ومحلياً.",
        
        "choose_header": "فاختيارك لنا يعني حصولك على تجربة فريدة وخبرة لامثيل لها وفق أعلى معايير الجودة والنزاهة",
        "choose_title": "ما يميزنا",
        "choose_desc": "1- خبرتنا الفنية جنبا الي جنب مع الجودة الفائقة لخدماتنا وقدرتنا علي توقع احتياجات عملائنا.<br>2-الاستجابة السريعة لكل المهمات في وقت قياسي وبدقة متناهية وبخبرة واسعة في جميع المجالات.<br>3-التغطية العالمية للمختبرات .<br>4-الشهادات والاعتمادات المعترف بها محلياً ودولياً",
        
        "vision_title": "رؤية الشركة",
        "vision_desc": "نسعى لتقديم خدمات احترافية وفق اعلى معايير الجودة المتعارف عليها محليا وعالميا. نحن نسعي جاهدين لنكون معروفين كطرف ثالث محايد ، مقدم لخدمة الاختبار والتفتيش والتحقق الأكثر موثوقية وتركيزا علي العملاء في اسواقنا المحلية والدولية. نريد ان نكون مشهورين لجودة خدماتنا وقدرتنا علي استخدام الخبرة الفنية والابداع لتوقع احتياجات عملائنا. نقيس انفسنا بالقيمة التي نضيفها من خلال قدرتنا واستعدادنا للمضي قدما في تقديم الحلول لعملائنا",
        
        "goals_title": "أهدافنا",
        "goals_desc": "(انتشار.. جودة…تطويرمستمر).<br><br>نسعى لتوسيع شبكتنا الجغرافية وتوسيع نطاق قدراتنا ومهاراتنا الفنية والتقنية وتقديم خدماتنا في اغلب قارات العالم. نواكب كل جديد لتطوير فريقنا من خلال مراعاة ادق معايير التوظيف والتدريب من اجل الحفاظ على زبائننا وتقديم افضل الخدمات بكل جودة وكفاءة. نطمح للوصول للتميز وان نكون الخيار الاول في عالم التفتيش والمطابقة محليا وعالميا.",
        
        "mission_title": "الرساله",
        "mission_desc": "نتعهد على توفير اعلى درجات الجودة والكفاءة وتقديم خدمات تنافسية عالية بالاعتماد على التقنية الحديثة والخبرة وفق اعلى المواصفات العالمية المتبعة",

        "footer_1": "إلتزام",
        "footer_2": "دقة",
        "footer_3": "جودة",
        "footer_contact": "تواصل معنا",
        "footer_address": "القاهرة – مدينة نصر – عقار رقم 26 شقة رقم 4 – الدور الرابع – شارع نبيل خليل",
        "footer_copyright": "© بي دبليو سي جميع الحقوق محفوظة 2021-2026"
    },
    "en": {
        "page_title": "About Us - BWC Pre-Shipment Inspection",
        "nav_home": "Home",
        "nav_about": "About Us",
        "nav_services": "Inspection Services",
        "nav_certs": "Certifications & Memberships",
        "nav_contact": "Contact Us",
        "lang_btn": "العربية",

        "landing_title": "WHO WE ARE",
        "landing_desc": "BWC Pre-Shipment Inspection Company, because we are committed to quality with high efficiency across all fields, and we care for our clients and seek their satisfaction.",
        
        "slider_title": "Who we are",
        "slider_desc": "BWC Pre-Shipment Inspection is a leading Egyptian company in providing inspection, conformity, and certification services according to international and local standards. Founded in 2021 with staff expertise exceeding 15 years of extensive experience and competence in providing inspection and conformity services promptly, with utmost accuracy, and strict confidentiality guaranteed to you, as we act as an impartial third party. The company provides solutions to facilitate trade and make the supply chain safer and more efficient for our clients, in accordance with the best practices applied globally and locally.",
        
        "choose_header": "We follow up on your work and monitor it...anytime and anywhere.",
        "choose_title": "What distinguishes us",
        "choose_desc": "1- Our technical expertise coupled with the superior quality of our services and our ability to anticipate our clients' needs.<br>2- Rapid response to all tasks in record time, with utmost accuracy, and extensive experience in all fields.<br>3- Global coverage of laboratories.<br>4- Certificates and accreditations recognized locally and internationally.",
        
        "vision_title": "Company Vision",
        "vision_desc": "We seek to provide professional services according to the highest quality standards recognized locally and globally. We strive to be known as an impartial third party, the most reliable and customer-focused provider of testing, inspection, and verification services in our local and international markets. We want to be renowned for the quality of our services and our ability to use technical expertise and creativity to anticipate our clients' needs. We measure ourselves by the value we add through our ability and willingness to step forward in providing solutions to our clients.",
        
        "goals_title": "Our Goals",
        "goals_desc": "(Expansion.. Quality… Continuous Development).<br><br>We seek to expand our geographical network, broaden the scope of our technical capabilities and skills, and provide our services in most continents of the world. We keep pace with everything new to develop our team by observing the strictest recruitment and training standards in order to retain our customers and provide the best services with quality and efficiency. We aspire to reach excellence and be the first choice in the world of inspection and conformity locally and globally.",
        
        "mission_title": "The Message",
        "mission_desc": "We pledge to provide the highest levels of quality and efficiency and offer highly competitive services based on modern technology and experience according to the highest applied international standards.",

        "footer_1": "Commitment",
        "footer_2": "Accuracy",
        "footer_3": "Quality",
        "footer_contact": "Contact Us",
        "footer_address": "Cairo - Nasr City - Building No. 26, Apartment 4 - Fourth Floor - Nabil Khalil Street",
        "footer_copyright": "© BWC All rights reserved 2021-2026"
    }
};

// 2. كود التشغيل
document.addEventListener("DOMContentLoaded", () => {
    let currentLanguage = localStorage.getItem("siteLang") || "ar";

    function setLanguage(lang) {
        currentLanguage = lang;
        localStorage.setItem("siteLang", lang);

        document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
        document.documentElement.lang = lang;

        const elements = document.querySelectorAll("[data-i18n]");
        elements.forEach(element => {
            const translationKey = element.getAttribute("data-i18n");
            if (translations[lang] && translations[lang][translationKey]) {
                // نستخدم innerHTML هنا لأن بعض النصوص تحتوي على <br> لسطر جديد
                element.innerHTML = translations[lang][translationKey];
            }
        });
    }

    setLanguage(currentLanguage);

    const langSwitchBtn = document.getElementById("lang-switch");
    if (langSwitchBtn) {
        langSwitchBtn.addEventListener("click", (e) => {
            e.preventDefault(); 
            const newLang = currentLanguage === "ar" ? "en" : "ar";
            setLanguage(newLang);
        });
    }
});