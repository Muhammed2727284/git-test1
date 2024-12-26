let swiperWrapper = document.querySelector('.swiper-wrapper');
let swiperSlide = document.querySelectorAll('.swiper-slide');
let prevBtn = document.getElementById('prevBtn');
let nextBtn = document.getElementById('nexBtn');

let currentSlide = 0;

const showSlide = (index) => {
    const offset = -index * 100;
    swiperWrapper.style.transform = `translateX(${offset}%)`;
}

const prev = () => {
    currentSlide = (currentSlide - 1 + swiperSlide.length) % swiperSlide.length;
    showSlide(currentSlide);
}

const next = () => {
    currentSlide = (currentSlide + 1) % swiperSlide.length;
    showSlide(currentSlide);
}

nextBtn.onclick = () => {
    next();
}

prevBtn.onclick = () => {
    prev();
}

// let time = setTimeout(() => {
//     // console. log('Hello');
//     clearInterval(interval);

// },4000);

// clearTimeout (time); // останавливает setTimeout

let i = 0;
let interval = setInterval(() => {
    console. log('Hello', i);
    i++;
    next();
},4000);