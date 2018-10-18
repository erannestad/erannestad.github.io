//MAIN NAV JS//

    "use strict"; 
    function openPage(evt, tabName) {
    // Declare all variables
    // use strict is an addition
    //tabName is the ID tag of div
    
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

///////////////////////////////submenu/////////////////////////////////////

    "use strict"; 
    function openDrop(evt, tabName) {  //openDrop(evt,tabName)
    // Declare all variables
    // use strict is an addition
    
    var i, projectNav, dropdown; //tabcontent, tablinks
    

    // Get all elements with class="project" and hide them
    projectNav = document.getElementsByClassName("projectNav");
    for (i = 0; i < projectNav.length; i++) {
        project[i].style.display = "none";
    }

    // Get all elements with class="dropdown" and remove the class "active"
    dropdown = document.getElementsByClassName("dropdown");
    for (i = 0; i < dropdown.length; i++) {
        dropdown[i].className = dropdown[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById("projectContainer").style.display = 'block';
    evt.currentTarget.className += " active";
}
