//////////////////
//   ADD MENU   //
//////////////////

var menuContainer = document.querySelector('#Menu')
var menu = Object.assign(
    document.createElement('div'), { 
      id: ``,
      classList: ``,
      innerHTML: `
            <p><a href="index.html"><u><b>Eric Rannestad</b></u></a></p>
            <ul>
               <br>
               <br>
               <li><a href="about.html">About</a></li>
               <br>
               
               <li class="subtext menu-category">SCULPTURE</li>
               <li><a href="truss.html">Truss</a></li>
               <li><a href="Arch.html">Firmament Arch</a></li>
               <li><a href="Where-the-Rain-Seeps-Through.html">Builtscape</a></li>
               <li><a href="forms.html">Forms</a></li>
               <br>
               
               <li class="subtext menu-category">PAINTING</li>
               <li><a href="plotsgridsmodels.html">Plots, Grids, Models</a></li>
               <li><a href="Market-Box.html">Market Box</a></li>
               <!-- <li><a href="Firmament.html">Firmament</a></li> -->
               <!-- <li><a href="Great-Deep.html">The Great Deep</a></li> -->
               <br>

               <li class="subtext menu-category">DIGITAL MEDIA</li>
               <li><a href="ruleset-painting.html">Ruleset Painting Tool</a></li>
               <li><a href="shipwreck.html">Shipwreck</a></li>
               <!-- <li><a href="Mapping-The-Firmament.html">Mapping the Firmament</a></li> -->
               <!-- <li><a href="field-notes.html">Field Notes</a></li>  -->
               
               <br>
               <li class="footer"><a href="Design/projects">Design Website</a></li>
           </ul>    
      `
    }
  )
menuContainer.appendChild(menu);
