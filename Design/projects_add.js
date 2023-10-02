//console.log(ProjectList);



var addItem = function(loaded){
    var iObj = ProjectList[loaded];
//    console.log(iObj);
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
    
    var imagesAndSubtitles = "<img src='" + iObj.image[0] + "'><p class='subtext'>" + iObj.imageSubtext[0] + "</p><img src='" + iObj.image[1] + "'><p class='subtext'>" + iObj.imageSubtext[1] + "</p><img src='" + iObj.image[2] + "'><p class='subtext'>" + iObj.imageSubtext[2] + "</p><img src='" + iObj.image[3] + "'><p class='subtext'>" + iObj.imageSubtext[3] + "</p><img src='" + iObj.image[4] + "'><p class='subtext'>" + iObj.imageSubtext[4] + "</p><img src='" + iObj.image[5] + "'><p class='subtext'>" + iObj.imageSubtext[5] + "</p><img src='" + iObj.image[6] + "'><p class='subtext'>" + iObj.imageSubtext[6] + "</p>";
    
    content.innerHTML += "<item class='full-project'><h4>" + iObj.title + "<p class='subtext'>" + iObj.client + br + allCatagories + " | " + iObj.date + "</p></h4> <p>" + iObj.description + "</p>" + imagesAndSubtitles + "</item>";
    
    $("img[src='undefined']").remove();
};






// ADD ALL ITEMS

var itemsToLoad = 3;
var loaded = 0;

//var addAllItems = function() {
//    for (i=loaded; i < itemsToLoad; i++){
//        addItem(i);
//    }
//    
//    loaded = 2;
//    
//    TweenMax.from('item:last-child', 1, {opacity: '0', ease:Power2.easeInOut, repeat:0}); 
//}



var addAllItems = function() {
    content.innerHTML = '';
    for (i=loaded; i < itemsToLoad; i++){
        addItem(i);
    }
}











    