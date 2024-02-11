$(document).ready(function() {
  // для мобильных устройств и планшетов
  if ($(window).width() <= 768 && !sessionStorage.getItem("alreadyVisited")) {
      $("#welcome").css("display", "flex");
      sessionStorage.setItem("alreadyVisited", "true");
      $('#welcome').delay(4000).queue(function() {
        $(this).remove();
      });
  } else {
    $('#welcome').remove();
  }
});
