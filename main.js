document.getElementById('menu-icon').addEventListener('click', function() {
    document.getElementById('navbar').classList.toggle('active');
});
var projectSwiper = new Swiper('.project-container', {
    slidesPerView: 1,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});