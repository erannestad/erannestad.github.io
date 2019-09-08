// ADD ALL ITEMS

var addItemOverview = function(loaded){
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
   
    content.innerHTML += "<item class='overview transition' onclick= 'loadThis(\"" + iObj.id + "\");'><p class='overview'>" + iObj.title + " </p><div class='filter'><img class='overview' src='" + iObj.thumbnail + "'></div><p class='subtext overview'>" + iObj.client + br + allCatagories + " | " + iObj.date + "</p></item>";
    
    $("img[src='undefined']").remove();
};



var itemsToLoadOverview = 15;
var loadedOverview = 0;

var loadOverview = function() {
    content.innerHTML = '';
    content.innerHTML = "<div id='application-heading'></div>";
    for (i=loadedOverview; i < itemsToLoadOverview; i++){
        addItemOverview(i);
    }
}












    