var initialPaddingTop;

function updatePaddingTop() {
  var autohideHeight = $('.autohide').outerHeight();
  
  if (initialPaddingTop === undefined) {
    // Запоминаем изначальное значение padding-top
    initialPaddingTop = parseInt($('.first-filler').css('padding-top'), 10) || 0;
  }

  // Добавляем к изначальному значению padding-top
  var newPaddingTop = initialPaddingTop + autohideHeight;
  $('.first-filler').css('padding-top', newPaddingTop + 'px');
}

$(document).ready(function () {
  updatePaddingTop(); // при загрузке страницы
  $(window).resize(function () {
    updatePaddingTop(); // при изменении размера окна
  });
});
