$(document).foundation();


$(document).on('scroll', function() {
		    
  if ($(document).scrollTop() >= 20) {
    $('.orbit-image').css('width', '1000'-$(document).scrollTop());
    $('#sticky').addClass('shadow');
  } else {
//     $('.orbit-image').css('width', '1000');
    $('#sticky').removeClass('shadow');
  }
});

