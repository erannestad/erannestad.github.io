$(document).ready (function(){
    TweenMax.from(".landing-img", .5, {opacity: '0', ease:Power2.easeInOut, repeat:0, delay:1});
    
    TweenMax.from('.landing-img > img', .5, {marginTop: '-100px', ease:Power2.easeInOut, repeat:0, delay:1});
    
    TweenMax.from('.heading-text', .5, {marginTop: '100px', ease:Power2.easeInOut, repeat:0, delay:1});
    
    TweenMax.from('.title', 1.5, {opacity: '0', marginLeft: '-100px' ,ease:Power2.easeInOut, repeat:0, delay:1});   
});








