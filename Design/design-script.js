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

//function openDrop() {
// document.getElementById("dropdown").classList.toggle("show");
//}

// Close the dropdown menu if the user clicks outside of it
//window.onclick = function(event) {
//  if (!event.target.matches('.dropbtn')) {
//
//    var dropdowns = document.getElementById("dropdown");
//    var i;
//    for (i = 0; i < dropdowns.length; i++) {
//      var openDropdown = dropdowns[i];
//      if (openDropdown.classList.contains('show')) {
//        openDropdown.classList.remove('show');
//      }
//    }
//  }
//}

//another try from stack exchange

function openDrop() {
  var dropdown = document.getElementById('tab1 tab2 tab3');    
  
  if(dropdown.style.display == "block") { // if is menuBox displayed, hide it
    dropdown.style.display = "none";
  }
  else { // if is menuBox hidden, display it
    dropdown.style.display = "block";
  }
}



