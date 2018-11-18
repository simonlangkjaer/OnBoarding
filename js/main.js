  
  window.onscroll = function() {scrollFunction()};

  function scrollFunction() {
    console.log(document.documentElement.scrollTop);
    
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      // document.querySelector(".headershrink").style.height = "30px"; 
      // console.log(document.querySelectorAll(".headershrink")[0]);
    
    
      $('.headershrink').addClass('showheadershrink');
      $('.searchparent').addClass('searchhide');
      $('.dropbtn').addClass('fontchange');

    } else {
    //  document.getElementById("headershrink").style.height = "67px";
    
    
    $('.headershrink').removeClass('showheadershrink');  
    $('.searchparent').removeClass('searchhide');
    $('.dropbtn').removeClass('fontchange');
    }
  } 

// slider

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
}

$(".headlinebox").click(function(e){
  e.preventDefault();
  $(".headlinetext").toggle();  
  $(".headline").toggle();  
});

$(".icon1").click(function(e){
  e.preventDefault();
  $(".headlinetext").toggle();  
  $(".headline").toggle();  
});


// Here are some dropdowns for the navbar

$("#mainNav").on('dropdownToogled', function(e){
  e.preventDefault();
  dropdown = e.target;
  $(this).find('.dropdown-content').filter(function(idx, elm){
    return elm !==  dropdown;
  }).hide(); 
});


$("#mainNav button").click(function(e){
 
  e.preventDefault();
  $dropdown = $(this).next('.dropdown-content');
  $dropdown.toggle(); 
  $dropdown.trigger('dropdownToogled');
});

$(".slideshow-container").click(function(c){
  $(".dropdown-content").hide(); 
});


