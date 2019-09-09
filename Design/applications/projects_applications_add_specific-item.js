//ADD SPECIFIC ITEM
function loadThis(itemName) {
    document.documentElement.scrollTop = 0;
    var result = ProjectList.filter(obj => {
    return obj.id === itemName;
})[0];
//    console.log(result);
//    console.log(result.date);
    
    
    var addSpecificItem = function(){
        var iObj = result;
        var content = document.querySelector("#content");
        var allCatagories = iObj.categories.toString();
        console.log(allCatagories);
        var br = '';
        var subtextBreak = function (){
            if (iObj.client=='') {
                return br = '';
            } else {
                return br = '<br>';
            }
        };
        subtextBreak();

        var imagesAndSubtitles = "<img src='" + iObj.image[0] + "'><p class='subtext'>" + iObj.imageSubtext[0] + "</p><img src='" + iObj.image[1] + "'><p class='subtext'>" + iObj.imageSubtext[1] + "</p><img src='" + iObj.image[2] + "'><p class='subtext'>" + iObj.imageSubtext[2] + "</p><img src='" + iObj.image[3] + "'><p class='subtext'>" + iObj.imageSubtext[3] + "</p><img src='" + iObj.image[4] + "'><p class='subtext'>" + iObj.imageSubtext[4] + "</p><img src='" + iObj.image[5] + "'><p class='subtext'>" + iObj.imageSubtext[5] + "</p><img src='" + iObj.image[6] + "'><p class='subtext'>" + iObj.imageSubtext[6] + "</p>";
        
        //add content
        content.innerHTML = "<item class='full-project'><h4>" + iObj.title + "<p class='subtext'>" + iObj.client + br + allCatagories + " | " + iObj.date + "</p></h4> <p>" + iObj.description + "</p>" + imagesAndSubtitles + "</item>";
        
        
        
        //add next and previous items
//        var a = fruits.indexOf("Apple");
        var currentItem = ProjectList.indexOf(iObj);
        var previousItem = currentItem - 1;
        var nextItem = currentItem + 1;
//        console.log(previousItem) 
//        console.log(currentItem);
//        console.log(nextItem);
        
        var addNextPreviousItem = function(){
            var nextObj = ProjectList[nextItem];
            var previousObj = ProjectList[previousItem];
            var content = document.querySelector("#content");
            var allCatagories = iObj.categories.toString();
            var br = '';
            var subtextBreak = function (){
                if (iObj.client=='') {
                    return br = '';
                } else {
                    return br = '<br>';
                }
            };
            subtextBreak();
            
            if (currentItem > 0 && nextObj !== undefined) {
                ///write inner html
                content.innerHTML += "<div class='previous'><p><- previous</p><item class='overview' onclick= 'loadThis(\"" + previousObj.id + "\");'><p class='overview'>" + previousObj.title + " </p><div class='filter'><img class='overview' src='" + previousObj.thumbnail + "'></div><p class='subtext overview'>" + previousObj.client + br + allCatagories + " | " + previousObj.date + "</p></item></div><div class='next'><p>next -></p><item class='overview' onclick= 'loadThis(\"" + nextObj.id + "\");'><p class='overview'>" + nextObj.title + " </p><div class='filter'><img class='overview' src='" + nextObj.thumbnail + "'></div><p class='subtext overview'>" + nextObj.client + br + allCatagories + " | " + nextObj.date + "</p></item></div>";
            } if (currentItem == 0){
                ///write inner html
                content.innerHTML += "<div class='next'><p>next -></p><item class='overview' onclick= 'loadThis(\"" + nextObj.id + "\");'><p class='overview'>" + nextObj.title + " </p><div class='filter'><img class='overview' src='" + nextObj.thumbnail + "'></div><p class='subtext overview'>" + nextObj.client + br + allCatagories + " | " + nextObj.date + "</p></item></div>";
            } if  (nextObj === undefined){
                content.innerHTML += "<div class='previous'><p><- previous</p><item class='overview' onclick= 'loadThis(\"" + previousObj.id + "\");'><p class='overview'>" + previousObj.title + " </p><div class='filter'><img class='overview' src='" + previousObj.thumbnail + "'></div><p class='subtext overview'>" + previousObj.client + br + allCatagories + " | " + previousObj.date + "</p></item></div>";
            };
        };
        
        $("img[src='undefined']").remove();
        addNextPreviousItem();
        $('a.active').removeClass( 'active' );
        $('#' + iObj.id ).addClass( 'active' );
    };
    
    addSpecificItem();
    loaded = 0;
    
    TweenMax.from('item', 1, {opacity: '0',ease:Power2.easeInOut, repeat:0}); 
};


$( 'a.project' ).on( 'click', function() {
    $('a.active').removeClass( 'active' );
    $( this ).addClass( 'active' );
    $('#' + iObj.id ).addClass( 'active' );
    });


// loading highlight from index.html
var loadThisHighlight = function(itemName) {
    window.location.href = 'projects.html#' + itemName;
};


var addSpecificHighlight = function(){
    console.log(highlightName);

    if(window.location.hash) {
        var highlightName = window.location.hash.substring(1); //Puts hash in variable, and removes the # character
        //loadThis('highlightName');
        console.log(highlightName);
        loadThis(highlightName);
      };
};













////ADD SPECIFIC ITEM
//function loadThis(itemName) {
//    document.documentElement.scrollTop = 0;
//    var result = ProjectList.filter(obj => {
//    return obj.id === itemName;
//    })[0];
////    console.log(result);
////    console.log(result.date);
//    
//    
//    var addSpecificItem = function(){
//        var iObj = result;
//        var content = document.querySelector("#content");
//        var allCatagories = iObj.categories.toString();
//        var br = '';
//        var subtextBreak = function (){
//            if (iObj.client=='') {
//                return br = '';
//            } else {
//                return br = '<br>';
//            }
//        };
//        subtextBreak();
//
//        var imagesAndSubtitles = "<img src='" + iObj.image[0] + "'><p class='subtext'>" + iObj.imageSubtext[0] + "</p><img src='" + iObj.image[1] + "'><p class='subtext'>" + iObj.imageSubtext[1] + "</p><img src='" + iObj.image[2] + "'><p class='subtext'>" + iObj.imageSubtext[2] + "</p><img src='" + iObj.image[3] + "'><p class='subtext'>" + iObj.imageSubtext[3] + "</p><img src='" + iObj.image[4] + "'><p class='subtext'>" + iObj.imageSubtext[4] + "</p><img src='" + iObj.image[5] + "'><p class='subtext'>" + iObj.imageSubtext[5] + "</p><img src='" + iObj.image[6] + "'><p class='subtext'>" + iObj.imageSubtext[6] + "</p>";
//        
//        //add content
//        content.innerHTML == "<item class='full-project'><h4>" + iObj.title + "<p class='subtext'>" + iObj.client + br + allCatagories + " | " + iObj.date + "</p></h4> <p>" + iObj.description + "</p>" + imagesAndSubtitles + "</item>";
//        
//        
//        
//        //add next and previous items
////        var a = fruits.indexOf("Apple");
//        var currentItem = ProjectList.indexOf(iObj);
//        var previousItem = currentItem - 1;
//        var nextItem = currentItem + 1;
////        console.log(previousItem) 
////        console.log(currentItem);
////        console.log(nextItem);
//        
//        var addNextPreviousItem = function(){
//            var nextObj = ProjectList[nextItem];
//            var previousObj = ProjectList[previousItem];
//            var content = document.querySelector("#content");
//            var allCatagories = iObj.categories.toString();
//            var br = '';
//            var subtextBreak = function (){
//                if (iObj.client=='') {
//                    return br = '';
//                } else {
//                    return br = '<br>';
//                }
//            };
//            subtextBreak();
//            
//            if (currentItem > 0 && nextObj !== undefined) {
//                ///write inner html
//                content.innerHTML += "<div class='previous'><p><- previous</p><item class='overview' onclick= 'loadThis(\"" + previousObj.id + "\");'><p class='overview'>" + previousObj.title + " </p><div class='filter'><img class='overview' src='" + previousObj.thumbnail + "'></div><p class='subtext overview'>" + previousObj.client + br + allCatagories + " | " + previousObj.date + "</p></item></div><div class='next'><p>next -></p><item class='overview' onclick= 'loadThis(\"" + nextObj.id + "\");'><p class='overview'>" + nextObj.title + " </p><div class='filter'><img class='overview' src='" + nextObj.thumbnail + "'></div><p class='subtext overview'>" + nextObj.client + br + allCatagories + " | " + nextObj.date + "</p></item></div>";
//            } if (currentItem == 0){
//                ///write inner html
//                content.innerHTML += "<div class='next'><p>next -></p><item class='overview' onclick= 'loadThis(\"" + nextObj.id + "\");'><p class='overview'>" + nextObj.title + " </p><div class='filter'><img class='overview' src='" + nextObj.thumbnail + "'></div><p class='subtext overview'>" + nextObj.client + br + allCatagories + " | " + nextObj.date + "</p></item></div>";
//            } if  (nextObj === undefined){
//                content.innerHTML += "<div class='previous'><p><- previous</p><item class='overview' onclick= 'loadThis(\"" + previousObj.id + "\");'><p class='overview'>" + previousObj.title + " </p><div class='filter'><img class='overview' src='" + previousObj.thumbnail + "'></div><p class='subtext overview'>" + previousObj.client + br + allCatagories + " | " + previousObj.date + "</p></item></div>";
//            };
//        };
//        
//        $("img[src='undefined']").remove();
//        addNextPreviousItem();
//        $('a.active').removeClass( 'active' );
//        $('#' + iObj.id ).addClass( 'active' );
//    };
//    
//    addSpecificItem();
//    loaded = 0;
//    
//    TweenMax.from('item', 1, {opacity: '0',ease:Power2.easeInOut, repeat:0}); 
//};
//
//
//// loading highlight from index.html
//var loadThisHighlight = function(itemName) {
//    window.location.href = 'projects.html#' + itemName;
//};
//
//
//var addSpecificHighlight = function(){
//    console.log(highlightName);
//
//    if(window.location.hash) {
//        var highlightName = window.location.hash.substring(1); //Puts hash in variable, and removes the # character
//        //loadThis('highlightName');
//        console.log(highlightName);
//        loadThis(highlightName);
//      };
//};
//
//
//
//$( 'a.project' ).on( 'click', function() {
//    $('a.active').removeClass( 'active' );
//    $( this ).addClass( 'active' );
//    $('#' + iObj.id ).addClass( 'active' );
//    });
