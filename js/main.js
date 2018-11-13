  
  window.onscroll = function() {scrollFunction()};

  function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
      document.getElementById("headershrink").style.height = "30px"; 
      $('.wrapsearch').removeClass('show'); 
      $('.linknav:link').css('font-size','16px');
    } else {
      document.getElementById("headershrink").style.height = "67px";
      $('.wrapsearch').addClass('show');
      $('.linknav:link').css('font-size','18px');
    }
  } 