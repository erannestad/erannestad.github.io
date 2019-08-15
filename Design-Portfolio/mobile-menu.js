          function myFunction(x) {x.classList.toggle("change");}
          
          function openNav() {
              var menu = document.getElementById("menu-side");
              var shift = document.getElementById("content")
          if (menu.style.marginLeft < "0%") {
              menu.style.display = "block";
              menu.style.width = "100%";
              menu.style.marginLeft = "0%";
//              content.style.marginLeft = "0%";
          } else {
              menu.style.display = "block";
              menu.style.width = "100%";
              menu.style.marginLeft = "-100%";
//              content.style.marginLeft = "0%";
              
////              shift.style.width = "100%";
              }
          }  