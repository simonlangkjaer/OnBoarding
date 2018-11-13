  
  window.onscroll = function() {scrollFunction()};

  function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      // document.querySelector(".headershrink").style.height = "30px"; 
      // console.log(document.querySelectorAll(".headershrink")[0]);
      $('.wrapsearch').removeClass('show'); 
      $('.linknav:link').css('font-size','16px');
      $('.headershrink').addClass('showheadershrink'); 
   
    
    } else {
    //  document.getElementById("headershrink").style.height = "67px";
      $('.wrapsearch').addClass('show');
      $('.linknav:link').css('font-size','18px');
      $('.headershrink').removeClass('showheadershrink');
    }
  } 