$(document).ready(function() {
  // updImage 
  var src = $("#thumbnail img").first().attr("src");
  var match = src.match(/\.\/img\/projects\/([^\/]+)\/[^\/]+$/);
  var page = match ? match[1] : 'defaultPage';
  var dataImgOthers = $("#dataImgOthers").text().split(';');
  $.each(dataImgOthers, function(index, img) {
    var listItem = $("<li>").html(`<img onclick="changeImage(this)" src="./img/projects/${page}/${img}" width="70">`);
    $("#thumbnail").append(listItem);
  });
  // changeImage
  $('#thumbnail img').click(function() {
    var newImage = $(this).attr('src');
    $('#mainProductImage').attr('src', newImage);
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
