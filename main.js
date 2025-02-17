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
const swiper = new Swiper('.swiper-container', {
    loop: true, // Menambahkan perulangan
    slidesPerView: 1, // Jumlah slide yang ditampilkan
    spaceBetween: 30, // Jarak antar slide
    navigation: {
        nextEl: '.swiper-button-next', // Tombol next
        prevEl: '.swiper-button-prev', // Tombol prev
    },
    pagination: {
        el: '.swiper-pagination', // Menampilkan pagination
        clickable: true, // Membuat pagination bisa diklik
    },
    autoplay: {
        delay: 2500, // Waktu otomatis pindah slide dalam milidetik
    },
});
