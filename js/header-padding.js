var initialPaddingTop;function updatePaddingTop(){var i=$(".autohide").outerHeight(),i=(initialPaddingTop=void 0===initialPaddingTop?parseInt($(".first-filler").css("padding-top"),10)||0:initialPaddingTop)+i;$(".first-filler").css("padding-top",i+"px")}$(document).ready(function(){updatePaddingTop(),$(window).resize(function(){updatePaddingTop()})});