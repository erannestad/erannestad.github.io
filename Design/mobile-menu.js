document.getElementsByClassName('project').addEventListener("click", closeNav, false);

    function myFunction(x) {x.classList.toggle("change");}
          
    function openNav() {
              var menu = document.getElementById("menu-side");
              var shift = document.getElementById("content")
          if (menu.style.marginLeft < "0%") {
              menu.style.display = "block";
              menu.style.width = "100%";
              menu.style.marginLeft = "0%";
          } else {
              menu.style.display = "block";
              menu.style.width = "100%";
              menu.style.marginLeft = "-100%";  
              }
          }  


    function closeNav() {
        var menu = document.getElementById("menu-side");
        var navBarContainer = document.querySelector("#navBarContainer");
        var mq = window.matchMedia( "(max-width: 750px)" );
       
        if (mq.matches) {
            // window width is at less than 750px
            //close menu on click
            menu.style.display = "block";
            menu.style.width = "100%";
            menu.style.marginLeft = "-100%";

            //toggle nav bar X
            navBarContainer.classList.toggle("change")
        }
        else {
            // window width is greater than 750px
            return
        }
    }  
