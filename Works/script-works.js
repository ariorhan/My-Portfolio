$(document).ready(function(){

    //hamburger Toggle
    $('.hamburger').click(function(event){
    $('.menu-list').slideToggle(500);
    event.preventDefault();
    
    $('.menu-list1 li a').click(function(event) {
        if ($(window).width() < 768) {
          $('.menu-list').slideUp(500);
          event.preventDefault(); 
        }
      });
  });

});







