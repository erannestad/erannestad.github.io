function runOnReady(fn) {
   if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', fn);
   } else {
      fn();
   }
}

runOnReady(initPreExpandedDescriptions);

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


function initPreExpandedDescriptions() {
   var preExpanded = document.querySelectorAll('.dropdown-text.pre-expanded');
   for (var i = 0; i < preExpanded.length; i++) {
      preExpanded[i].classList.remove('toggleHide');
      preExpanded[i].classList.add('toggleVisible');

      var section = preExpanded[i].closest('section');
      if (section) {
         var toggleLink = section.querySelector('.text-toggle a[onclick*="dropdown"]');
         if (toggleLink) {
            toggleLink.innerHTML = '- hide statement';
            toggleLink.classList.remove('show');
            toggleLink.classList.add('hide');
         }
      }
   }
}


function dropdown(controllerElement, classToToggle, showText, hideText) {

   if(controllerElement.classList.contains("show")) {
      controllerElement.innerHTML = hideText;
      controllerElement.classList.remove("show");
      controllerElement.classList.add("hide");
   } else if (controllerElement.classList.contains("hide")) {
      controllerElement.innerHTML = showText;
      controllerElement.classList.add("show");
      controllerElement.classList.remove("hide");
   }

   var section = controllerElement.closest('section');
   var toggleElements = section
      ? section.querySelectorAll("." + classToToggle)
      : document.querySelectorAll("." + classToToggle);
   for (i=0; i < toggleElements.length; i++) {
      if (toggleElements[i].classList.contains("toggleVisible")) {
         toggleElements[i].classList.remove("toggleVisible");
         toggleElements[i].classList.add("toggleHide");
      } else {
         toggleElements[i].classList.add("toggleVisible");
         toggleElements[i].classList.remove("toggleHide");
      }
   }
}







const lazyImages = document.querySelectorAll('.load-me-later');

function lazyLoadImages() {
   lazyImages.forEach((val,i) => {

     let src = val.querySelector('source').getAttribute('srcset');
     let image = new Image();
     image.src = src;
     val.append(image);


   })
 }