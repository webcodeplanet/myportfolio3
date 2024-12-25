const testomonialImages = document.querySelectorAll('.testomonials-images img');
const testomonialContents = document.querySelectorAll('.testomonial-contents .testomonial-content');

testomonialImages.forEach((testomonialImage) => {
  testomonialImage.addEventListener('mouseover', () => {
    const index = testomonialImage.dataset.index;

    testomonialContents.forEach((content) => {
      if (content.dataset.index === index) {
        content.classList.add('active');
        const elements = Array.from(content.children);

        // Пошаговое появление элементов
        elements.forEach((el, i) => {
          setTimeout(() => {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
          }, i * 300); // Задержка между элементами
        });
      } else {
        content.classList.remove('active');
        const elements = Array.from(content.children);

        // Сброс видимости
        elements.forEach((el) => {
          el.style.opacity = '0';
          el.style.transform = 'translateY(10px)';
        });
      }
    });
  });
});
