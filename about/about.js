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

