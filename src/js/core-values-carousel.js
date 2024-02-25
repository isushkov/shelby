$(document).ready(function() {
  const $data = $('#coreValuesData').children();
  const $carouselInner = $('#coreValuesCarousel .carousel-inner').empty();
  let currentSlide;
  function createNewSlide() {
    const $slide = $('<div class="carousel-item core-values-item"><div class="carousel-item-wrapper core-values-item-wrapper"></div></div>');
    if ($carouselInner.children().length === 0) $slide.addClass('active'); // Делаем первый слайд активным
    $carouselInner.append($slide);
    return $slide.find('.core-values-item-wrapper');
  }
  function addCardsToSlides() {
    let cardsPerSlide;
    if ($(window).width() > 991) {
      cardsPerSlide = 3;
    } else if ($(window).width() > 550) {
      cardsPerSlide = 2;
    } else {
      cardsPerSlide = 1;
    }
    currentSlide = createNewSlide();
    $data.each(function(index) {
      if (index % cardsPerSlide === 0 && index !== 0) {
        currentSlide = createNewSlide();
      }
      currentSlide.append($(this));
    });
  }
  addCardsToSlides();
  $(window).resize(function() {
    $carouselInner.empty(); // Очищаем карусель
    addCardsToSlides(); // Пересоздаем слайды
  });
});
