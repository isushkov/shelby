$(document).ready(function() {
  $('.gallery-item').each(function() {
    var $titleWord = $(this).find('.project-title-word');
    var words = $titleWord.text().split(' ');
    var $title = $titleWord.parent();
    $titleWord.remove();
    $.each(words, function(i, word) {
      $('<div class="project-title-word"></div>').text(word).appendTo($title);
    });
  });
});
