jQuery(function() {
	jQuery(window).scroll(function() {
  if (jQuery(document).scrollTop() > 50) {
      $('p').addClass("test");
    } else {
      $('p').removeClass("test");
    } 
  })
});