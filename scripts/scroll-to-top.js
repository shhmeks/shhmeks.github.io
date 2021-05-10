  $(window).scroll(function() {
    if ($(this).scrollTop() > 0) {
      $('.scroll-to-top').fadeIn();
    }
    else {
      $('.scroll-to-top').fadeOut();
    }
  });

  $(function() {
    $('.scroll-to-top').click(function() {
      $("html, body").animate({
        scrollTop:0
      }, 500);
    })
  });
