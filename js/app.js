$(document).foundation()


$(document).on('scroll', function() {
  if ($(document).scrollTop() >= 20) {
    $('.orbit-image').css('width', '600px');
    $('#sticky').addClass('shadow');
  } else {
    $('.orbit-image').css('width', '');
    $('#sticky').removeClass('shadow');
  }
});

