//image slider lai

const slides = document.querySelectorAll('.sponsorimg .slides img');
let currentIndex = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.style.display = (i === index) ? 'block' : 'none';
  });
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}

showSlide(currentIndex);

setInterval(nextSlide, 2700);
