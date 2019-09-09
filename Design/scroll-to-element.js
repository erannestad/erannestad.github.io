// https://github.com/flesler/jquery.scrollTo

var scrollToElem = function(element){
    $(window).scrollTo(document.querySelector(element), 1500, {easing:'easeInOutExpo'});
};



// on index load: if url contains #info, then scroll to .info-content
//var checkHash = function() {

    if (window.location.hash = 'info') {
        console.log('test');
//        var info = window.location.hash.substring(1); //Puts hash in variable, and removes the # character
        
        $(document).ready(function () {
            $(window).scrollTo(document.querySelector('.info-content'), 1500, {easing:'easeInOutExpo'});
        });
    };


