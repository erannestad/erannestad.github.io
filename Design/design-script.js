src="jquery-3.3.1.min.js"

//MAIN NAV JS//

    "use strict"; 
    function openPage(evt, tabName) {
    // Declare all variables
    // use strict is an addition
    
    var i, tabcontent, tablinks;
    

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}


//SUB NAV JS//
    
/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */

function myFunction () {
    document.getElementById("projects-nav").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("projects-nav");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}


//goin' it alone...
$(document).ready(function(){
  if ( $('button#projects').hasClass('active') ) {
    $('.projects-nav').addClass('show');
  }
});

