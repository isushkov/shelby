$(document).ready(function(){var a=$("#thumbnails img").first().attr("src").match(/\.\/img\/projects\/([^\/]+)\/[^\/]+$/),e=a?a[1]:"defaultPage",a=$("#dataImgOthers").text().split(";"),a=($.each(a,function(a,t){t=$('<li class="thumbnail">').html(`<img class='thumbnail-image' onclick='changeImage(this)' src='./img/projects/${e}/${t}'>`);$("#thumbnails").append(t)}),$("#thumbnails img").click(function(){var a=$(this).attr("src");$(".fade-overlay").fadeIn(300,function(){$("#mainProjectImage").attr("src",a),$(".main-image .blur-overlay").attr("src",a),$(".fade-overlay").fadeOut(300)})}),$(".scope-of-work-item").text().split(";"));$(".scope-of-work-item").remove(),$.each(a,function(a,t){(t=$.trim(t))&&$(".scope-of-work").append('<li class="scope-of-work-item"><p><i class="fas fa-circle"></i>'+t+"</p></li>")})});