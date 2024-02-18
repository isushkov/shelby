$(document).ready(function() {
  // updImage
  var src = $("#thumbnails img").first().attr("src");
  var match = src.match(/\.\/img\/projects\/([^\/]+)\/[^\/]+$/);
  var page = match ? match[1] : 'defaultPage';
  var dataImgOthers = $("#dataImgOthers").text().split(';');
  $.each(dataImgOthers, function(index, img) {
    var listItem = $('<li class="thumbnail">').html(`<img class='thumbnail-image' onclick='changeImage(this)' src='./img/projects/${page}/${img}'>`);
    $("#thumbnails").append(listItem);
  });
  // changeImage
  $('#thumbnails img').click(function() {
    var newImage = $(this).attr('src');
    $('.fade-overlay').fadeIn(300, function() {
      $('#mainProjectImage').attr('src', newImage);
      $('.main-image .blur-overlay').attr('src', newImage);
      $('.fade-overlay').fadeOut(300);
    });
  });
  // scopeOfWork
  var tasks = $('.scope-of-work-item').text().split(';');
  $('.scope-of-work-item').remove();
  $.each(tasks, function(i, task) {
    task = $.trim(task);
    if (task) {
      $('.scope-of-work').append('<li class="scope-of-work-item"><p><i class="fas fa-circle"></i>' + task + '</p></li>');
    }
  });
});
