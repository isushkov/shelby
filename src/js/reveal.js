$(document).ready(function() {
  function reveal() {
    $('.reveal').each(function() {
      var windowHeight = $(window).height();
      var elementTop = $(this).offset().top - $(window).scrollTop();
      var elementVisible = 50;
      if (elementTop < windowHeight - elementVisible) {
        $(this).addClass('active');
      } else {
        $(this).removeClass('active');
      }
    });
  }
  $(window).on('scroll', reveal);
  reveal();
});
