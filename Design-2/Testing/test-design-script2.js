function openDrop() {
  var dropdown = document.getElementById('tab1 tab2 tab3');    
  
  if(dropdown.style.display == "block") { // if is menuBox displayed, hide it
    dropdown.style.display = "none";
  }
  else { // if is menuBox hidden, display it
    dropdown.style.display = "block";
  }
}
