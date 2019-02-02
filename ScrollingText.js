
//<center><h1>Scrolling Text in a Box</h1></center>
//<p>If you <strong>must</strong> have scrolling text, this is probably as good a way as any to show it.</p>

/*
   Feel free to use this script in your own page, making changes were
   necessary, but do leave the following line in the code.  Thanks

   Copyright 1996, E.T. Smith Associates Brogue, Pennsylvania, USA 

   Special thanks to Andy Augustine for helping me rewrite the 
   script to be more readable and object oriented. Check out
   http://www.freqgrafx.com/411/ for javascript info and codes.
*/ 

/* The following set of parameters control the scrolling text and the
   box that contains it.

   bgn_ln   is the line which you want to appear in the box when the
            page loads, is only shown once. Leave blank if there is 
            to be no beginning line (though do leave the quotes).

   txt_ln   is the scrolling text. There is no real need to concatenate
            the line. Though for a long string of several messages it
            easier to edit the text using concatenation as shown.

   end_ln   is the text you want to appear the box when the scrolling 
            is over. Leave blank if there is to be no end message.

   speed    is the number of milliseconds for the line to move one 
            character.  A lower number will cause a higher speed. 
            Note: Higher speeds are limited by the speed of the user's
            cpu and other loads on it.

   box_lg   is the length of the text box (form input element) in
            which the scrolling text appears

   max      is the maximum number of scroll iterations to be done. To
            have a continuous scroll, just use rather large number(1000).
            I doubt everyone will be looking at it take long.

   the other variables: count; pos; stop; box_ln; msg_ln are used by the 
   script and should be left at their currently set initation values.

   The names of the form and box used for scrolling are scrlform and
   scrlbox.  I won't expect you to need different names, but if you do,
   make sure to change all occurances of these names in the following
   script and the script in the bottom half of the page.

   Also if the scrolling text is to be located such that it might not
   be seen when the page loads, please read the comments in the
   function scrlbox about preventing inadvertant stops by the user.

*/   
 
 function scrl_param(){
   this.bgn_ln = "hello";
   this.txt_ln = "thank you for taking the time to look at my work... please know that my art is only possible due to the support I've been given by my friends, family, and mentors. For this I am deeply grateful. Support the artists you know..."; 
   this.end_ln = "thank you";

   this.speed = 600; 
   this.box_lg = 70;
   this.max = 10;
   this.count = 0;
   this.pos = 0;  
   this.stop = 0;
   this.box_ln = " ";
   if( this.txt_ln.length < this.box_lg ){  
      this.msg_ln = this.txt_ln; 
      for( var i = 0 ; i < (this.box_lg - this.txt_ln.length) ; i++ ) 
         this.msg_ln += " "; 
    }   
   else{ 
     this.msg_ln = this.txt_ln; 
     this.msg_ln += "          ";
   }  

  }

 var scrl = new scrl_param();
     
 function scrlbox() 
   { 
    /* if whole has been scrolled, reset to beginning of line */
    if( scrl.pos > scrl.msg_ln.length ){
      scrl.pos = 1;  
      scrl.count++; 
     } 
    
   /* construct display line using the line position property */
   scrl.box_ln = " "; 
   scrl.box_ln += scrl.msg_ln.substring(scrl.pos,scrl.msg_ln.length);  
   scrl.box_ln += scrl.msg_ln.substring(0,scrl.pos);  
 
   /* continue, if user hasn't unfocused the box */
   if( scrl.stop == 0 ) 
     {   
      /* The following sets focus on the scroll box, allowing the user to
         easy stop the text by clicking out of the box.  If scroll is to
         be located such that when the page is loaded the box may not be
         seen, the user may inadvertantly stop the text by clicking on
         the page before seeing the box. For this case you may wish to
         comment out the following line. The user will then have to click
         in the box and then out of the box to stop the text.
       */  
      document.scrlform.scrlbox.focus(); 

      /* continue if the maximum iterations have not been done */ 
      if( scrl.count < scrl.max ) 
        { 
         scrl.pos++; /* advance line postion for next iteration */
         document.scrlform.scrlbox.value = scrl.box_ln; /* display new line */
         time3 = window.setTimeout('scrlbox()',scrl.speed); /* restart function */
        } 
      else /* maximum iteration been done */ 
        { 
         if ( scrl.end_ln.length > 2 ){ /* display end message if any */
            time2 = window.setTimeout("document.scrlform.scrlbox.value ="+ 'scrl.end_ln',scrl.speed); 
           } 
         document.scrlform.scrlbox.blur(); /* remove focus, so user */
        }                                  /* can easily restart */ 
     } 
 
 
  } 
 /* restart function */
 function startscrl() 
  { 
   scrl.stop = 0; 
   scrl.pos = 0; 
   scrlbox(); 
  } 
 
/* stop function */ 
function stopscrl() 
 { 
  scrl.stop = 1; 
 } 

var scrollTarget = document.getElementById('scrollTarget');
 
scrollTarget.innerHTML = "<DIV ALIGN=CENTER><FORM NAME='scrlform'> INPUT NAME='scrlbox' SIZE=" + scrl.box_lg + " onFocus='startscrl();' onBlur='stopscrl();' VALUE='" + scrl.bgn_ln + "'><BR><p><SMALL><EM>To stop scrolling, click anywhere on the page except the scrolling text field. To restart scrolling text, click in the text field.</EM></p><P></FORM></DIV>";
 
//document.write("<"); 
//document.write("<p><SMALL><EM>To stop scrolling, click anywhere on the page except the scrolling text field. "); 
//document.write("To restart scrolling text, click in the text field.</EM></p>"); 
 
/* 
  Time delay for scrolling is set at 2 seconds (2000 milliseconds), you
  change this value if desired, though it is suggest that at least 500 
  millseconds be used (NN2.0 for Win95 has problems running without a 
  little delay in starting).
*/

time1 = window.setTimeout('scrlbox()',2000); 
 
//document.write("<P></FORM></DIV>"); 
 
// --- end javascript --> 

