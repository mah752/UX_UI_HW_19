const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu');
const closeIcon = document.querySelector('.close-icon');

burger.addEventListener('click', () => {
  menu.classList.toggle('show');
});

closeIcon.addEventListener('click', () => {
  menu.classList.remove('show');
});

document.addEventListener('click', (event) => {
  const target = event.target;
  if (!target.closest('.menu') && !target.closest('.burger')) {
    menu.classList.remove('show');
  }
});

$(document).ready(function() {
  function fade() {
    $(".preloader").fadeOut("slow");
  }
  setTimeout(fade, 3000);
});


ScrollReveal().reveal(".slide-up", {
  duration: 2000,
  origin: "bottom",
  distance: "100px",
  easing: "cubic-bezier(.37,.01,.74,1)",
  opacity: 0.3,
  scale: 0.5
});
$(document).ready(function(){
  var btn = $('#backToTop');
  $(window).on('scroll', function() {
      if ($(window).scrollTop() > 300) {
          btn.addClass('show');
      } else {
          btn.removeClass('show');
      }
  });
  btn.on('click', function(e) {
      e.preventDefault();
      $('html, body').animate({
          scrollTop: 0
      }, '300');
  });
});
$(function () {
  // Get clickable link
  $("nav li a").click(function (event) {
    if (this.hash !== "") {
      event.preventDefault();

      // Store link's hash value into variable
      const hash = this.hash;
      // console.log(hash)

      // Animate html & body to the hash value position
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top // - 100 if you wish
        },
        800
      );
    }
  });
});

$(document).ready(function(){
  $('.popup-btn').click(function(){ 
    var popupBlock = $('#'+$(this).data('popup'));
    popupBlock.addClass('active')
      .find('.fade-out').click(function(){
        popupBlock.css('opacity','0').find('.popup-content').css('margin-top','350px');        
        setTimeout(function(){
          $('.popup').removeClass('active');
          popupBlock.css('opacity','').find('.popup-content').css('margin-top','');
        }, 600);
      });
 });
});