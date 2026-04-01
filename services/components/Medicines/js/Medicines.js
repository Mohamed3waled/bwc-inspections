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


const translations = {
    "ar": {}, // الكود هيسحب العربي أوتوماتيك من الـ HTML
    "en": {
        "page_title": "Inspection of medicines and medical supplies - BWC Pre-Shipment Inspection",
        "nav_home": "Home",
        "nav_about": "About Us",
        "nav_services": "Inspection Services",
        "nav_certs": "Certifications & Memberships",
        "nav_contact": "Contact Us",
        "lang_btn": "English",
        
        "med_title": "Inspection of medicines and medical supplies",
        "med_li_1": "Cosmetic products and preparations.",
        "med_li_2": "Medical devices and their supplies.",
        "med_li_3": "Inspection of human and veterinary medicines and verification of their quality and conformity to agreed specifications through a documentary system that ensures the quality of materials and the safety of their arrival. Inspection of medical serums and ensuring the safety of their storage and safe arrival.",
        
        "footer_1": "Commitment",
        "footer_2": "Accuracy",
        "footer_3": "Quality",
        "footer_contact": "Contact Us",
        "footer_address": "Cairo - Nasr City",
        "footer_copyright": "© BWC All rights reserved 2026"
    }
};

document.addEventListener("DOMContentLoaded", () => {
    let currentLanguage = localStorage.getItem("siteLang") || "ar";

    translations["ar"] = translations["ar"] || {}; 
    const elements = document.querySelectorAll("[data-i18n]");
    
    elements.forEach(element => {
        const key = element.getAttribute("data-i18n");
        translations["ar"][key] = element.innerHTML;
    });

    function setLanguage(lang) {
        currentLanguage = lang;
        localStorage.setItem("siteLang", lang);

        document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
        document.documentElement.lang = lang;

        elements.forEach(element => {
            const translationKey = element.getAttribute("data-i18n");
            if (translations[lang] && translations[lang][translationKey]) {
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