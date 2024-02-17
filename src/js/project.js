$(document).ready(function() {
  // scopeOfWork
  var tasks = $('.scope-of-work-item').text().split(';');
  $('.scope-of-work-item').remove();
  $.each(tasks, function(i, task) {
    task = $.trim(task);
    if (task) {
      $('.scope-of-work').append('<li class="scope-of-work-item">' + task + '</li>');
    }
  });
  // changeImage
  $('#thumbnail img').click(function() {
    var newImage = $(this).attr('src');
    $('#main_product_image').attr('src', newImage);
  });
});
