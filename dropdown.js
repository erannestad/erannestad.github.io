
$(document).ready(function(){
   $('.toggler').click(function() {
   $('.dropdown').toggle();
   $('.show-more').toggle();
   $('.show-less').toggle();
   });
});
        
$(function() { // called when page is done loading; you can have lots of these
  $.ajax({
    url: 'window.location.href',
    success: function(data) { $('#load-me-later').html(data); }
  });
});