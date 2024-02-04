var initialPaddingTop;

function getNewPaddingTop() {
  var autohideHeight = $('.autohide').outerHeight();
  if (initialPaddingTop === undefined) {
    // Запоминаем изначальное значение padding-top
    initialPaddingTop = parseInt($('.first-filler').css('padding-top'), 10) || 0;
  }
  // Добавляем к изначальному значению padding-top
  var newPaddingTop = initialPaddingTop + autohideHeight;
  return newPaddingTop;
}

$(document).ready(function () {
  // при загрузке страницы
  $('.first-filler').css('padding-top', getNewPaddingTop() + 'px');
  // при изменении размера окна
  $(window).resize(function () {
    $('.first-filler').css('padding-top', getNewPaddingTop() + 'px');
  });
  // при клике на toggler
  $('.navbar-toggler').click(function() {
    if (!$(this).hasClass('collapsed')) {
      $('#navbarContent').css('padding-top', getNewPaddingTop() + 'px');
    }
  });
});
