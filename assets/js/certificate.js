let currentIndex = 0; 
const cards = document.querySelectorAll('.slider-card-3d'); 
let isScrolling = false; 

const updateSlider = () => { // 
  cards.forEach((card, index) => {
    card.classList.toggle('active', index === currentIndex); 
    card.classList.toggle('next', index === (currentIndex + 1) % cards.length); 
    card.classList.toggle('inactive', index !== currentIndex && index !== (currentIndex + 1) % cards.length); // Неактивные карточки
  });
};

cards.forEach((card, index) => { 
  card.addEventListener('click', () => {
    currentIndex = index; 
    updateSlider(); 
  });
});

updateSlider(); 

document.querySelector('.slider-cards-3d').addEventListener('wheel', (event) => { // Обработка прокрутки
  event.preventDefault(); 
  if (isScrolling) return;
  isScrolling = true; 

  currentIndex = (currentIndex + (event.deltaY > 0 ? 1 : -1) + cards.length) % cards.length; // Изменяет текущий индекс
  updateSlider(); 

  setTimeout(() => (isScrolling = false), 300); 
});


