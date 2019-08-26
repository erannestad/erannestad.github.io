var addItemRelated = function(loaded){
    var iObj = ProjectList[loaded];
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
    
    
    ///write inner html
   
    content.innerHTML += "<item class='overview' onclick= 'loadThis(\"" + iObj.id + "\");'><p class='overview'>" + iObj.title + " </p><div class='filter'><img class='overview' src='" + iObj.thumbnail + "'></div><p class='subtext overview'>" + iObj.client + br + allCatagories + " | " + iObj.date + "</p></item>";
    
    $("img[src='undefined']").remove();
};






// ADD ALL ITEMS

var itemsToLoadRelated = 3;
var loadedRelated = 0;

var loadRelated = function() {
    content.innerHTML = '';
    for (i=loadedRelated; i < itemsToLoadRelated; i++){
        addItemRelated(i);
    }
}












    