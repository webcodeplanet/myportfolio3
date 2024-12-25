const filters = document.querySelectorAll('.filter');

const resetAnimation = (el) => {
  el.style.animation = 'none';
  el.offsetHeight; // Перезапускаем анимацию
  el.style.animation = ''; // Восстанавливаем анимацию
};

filters.forEach((filter) => {
  filter.addEventListener('click', function () {
    const selectedFilter = filter.getAttribute('data-filter');
    const allItems = document.querySelectorAll('.project-cards .project-card');
    
    const itemsToHide = document.querySelectorAll(`.project-cards .project-card:not([data-filter='${selectedFilter}'])`);
    const itemsToShow = selectedFilter === 'all' 
      ? allItems 
      : document.querySelectorAll(`.project-cards [data-filter='${selectedFilter}']`);

    // Прячем карточки
    itemsToHide.forEach((el) => {
      el.classList.remove('show');
      el.classList.add('hide');
      resetAnimation(el);
    });

    // Показываем карточки
    itemsToShow.forEach((el) => {
      el.classList.remove('hide');
      el.classList.add('show');
      resetAnimation(el);
    });
  });
});
