
$(document).ready(function(){
   $('.toggler').click(function() {
   $('.dropdown').toggle();
   $('.show-more').toggle();
   $('.show-less').toggle();
   });
});
        
$(window).load(function () {
    
    $('.load-me-later').load('/script');
});










const lazyImages = document.querySelectorAll('.load-me-later');

function lazyLoadImages() {
   lazyImages.forEach((val,i) => {

     let src = val.querySelector('source').getAttribute('srcset');
     let image = new Image();
     image.src = src;
     val.append(image);


   })
 }