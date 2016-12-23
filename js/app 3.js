$(document).foundation()


$(document).on('scroll', function() {
  if ($(document).scrollTop() >= 20) {
    $('.orbit-image').css('width', '400px');
  } else {
    $('.orbit-image').css('width', '');
  }
});

