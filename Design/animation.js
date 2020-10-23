   

$(document).ready (function(){
    
    console.log('document ready: animating');
    
    var tl = new TimelineLite();
    tl.staggerTo("item.transition", .5, {opacity:'1', marginTop: '0px', delay:.5}, 0.05);
   
    
    TweenMax.from(".landing-img", .5, {opacity: '0', ease:Power2.easeInOut, repeat:0, delay:1});
    
    TweenMax.from('.landing-img > img', .5, {marginTop: '-100px', ease:Power2.easeInOut, repeat:0, delay:1});
    
    TweenMax.from('.heading-text', .5, {marginTop: '100px', ease:Power2.easeInOut, repeat:0, delay:1});
    
    TweenMax.from('.title', 1.5, {opacity: '0', marginLeft: '-100px' ,ease:Power2.easeInOut, repeat:0, delay:1}); 
    
    TweenMax.from('.subtitle', 1.5, {opacity: '0', marginLeft: '100px' ,ease:Power2.easeInOut, repeat:0, delay:1}); 
    
    TweenMax.from('.arrow', 1.5, {opacity: '0', marginTop: '-100px' ,ease:Power2.easeIn, repeat:0, delay:4}); 
    

});



var animate = function(){
     
    console.log('animating');
    
    
    var tl2 = new TimelineLite();
    tl2.staggerTo("item.transition", .5, {opacity:'1', marginTop: '0px', delay:.5}, 0.05);
   
    
    TweenMax.from(".landing-img", .5, {opacity: '0', ease:Power2.easeInOut, repeat:0, delay:1});
    
    TweenMax.from('.landing-img > img', .5, {marginTop: '-100px', ease:Power2.easeInOut, repeat:0, delay:1});
    
    TweenMax.from('.heading-text', .5, {marginTop: '100px', ease:Power2.easeInOut, repeat:0, delay:1});
    
    TweenMax.from('.title', 1.5, {opacity: '0', marginLeft: '-100px' ,ease:Power2.easeInOut, repeat:0, delay:1}); 
    
    TweenMax.from('.subtitle', 1.5, {opacity: '0', marginLeft: '100px' ,ease:Power2.easeInOut, repeat:0, delay:1}); 
    
    TweenMax.from('.arrow', 1.5, {opacity: '0', marginTop: '-100px' ,ease:Power2.easeIn, repeat:0, delay:4}); 
    

};

