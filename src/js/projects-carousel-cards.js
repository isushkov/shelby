$(document).ready(function() {
  const $data = $('#projectCarouselData').children();
  const $carouselInner = $('#projectCarousel .carousel-inner').empty();
  let currentSlide;

  // Функция для создания нового слайда
  function createNewSlide() {
    const $slide = $('<div class="carousel-item"><div class="d-flex justify-content-center"></div></div>');
    if ($carouselInner.children().length === 0) $slide.addClass('active'); // Делаем первый слайд активным
    $carouselInner.append($slide);
    return $slide.find('.d-flex');
  }

  // Функция добавления карточек в слайды
  function addCardsToSlides() {
    let cardsPerSlide;
    if ($(window).width() > 768) {
      cardsPerSlide = 3;
    } else {
      cardsPerSlide = 2;
    }

    currentSlide = createNewSlide();
    $data.each(function(index) {
      if (index % cardsPerSlide === 0 && index !== 0) {
        currentSlide = createNewSlide();
      }
      currentSlide.append($(this));
    });
  }

  // Инициализация
  addCardsToSlides();

  // Обновление при изменении размера окна
  $(window).resize(function() {
    $carouselInner.empty(); // Очищаем карусель
    addCardsToSlides(); // Пересоздаем слайды
  });
});
