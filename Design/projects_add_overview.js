
function locationHashChanged() {
  if (location.hash) {
    console.log("true: hash exists: " + location.hash);
    var removeHash = location.hash.substring(1);
    loadThis(removeHash)
  } else if (location.hash === '') {
    console.log('no hash')
    loadOverview();
  }
}
window.onhashchange = locationHashChanged;

// ADD ALL ITEMS
//var content = document.querySelector("#content");
//content.innerHTML += "<div id='tag-container'><a href='projects.html' onclick='closeNav(); loadOverview();' class='tag'>art</a></div>";

var addItemOverview = function(loaded){
    var iObj = ProjectList[loaded];
    var content = document.querySelector("#content");
    var allCatagories = iObj.categories.toString();
    var tags = iObj.categories.join(' ');
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
   
    content.innerHTML += "<item class='overview  " + tags + "' onclick= 'loadThis(\"" + iObj.id + "\");'><img class='overview' src='" + iObj.thumbnail + "'><p class='mono overview'>" + iObj.title + "<br>" + iObj.client + "</p></item>";
    
    $("img[src='undefined']").remove();
}; 



var loadOverview = function() {
    
    var itemsToLoadOverview = ProjectList.length;
    var loadedOverview = 0;
    content.innerHTML = '';
    
//    content.innerHTML = "<div id='tagContainer'></div>";
    for (i=loadedOverview; i < itemsToLoadOverview; i++){
        addItemOverview(i);
        console.log(i);
    };
//    console.log('run');
};


//// ADD HIGHLIGHTS
//
//        
//        var loadHighlights = function(highlight1, highlight2, highlight3, highlight4, highlight5, highlight6){
//            
//            var highlights = ProjectList.filter(obj => {
//                return obj.id === highlight1 || obj.id === highlight2 || obj.id === highlight3 || obj.id === highlight4 || obj.id === highlight5 || obj.id === highlight6;
//                });
//            
//            var addHighlights = function(i) {
//                var iObj = highlights[i];
//                var content = document.querySelector("#content");
//                var allCatagories = iObj.categories.toString();
//                var br = '';
//                var subtextBreak = function (){
//                    if (iObj.client=='') {
//                        return br = '';
//                    } else {
//                        return br = '<br>';
//                    }
//                };
//                subtextBreak();
//                ///write inner html
//                content.innerHTML += "<item class='overview' onclick= 'loadThisHighlight(\"" + iObj.id + "\");'><p class='overview'>" + iObj.title + " </p><div class='filter'><img class='overview' src='" + iObj.thumbnail + "'></div><p class='subtext overview'>" + iObj.client + br + allCatagories + " | " + iObj.date + "</p></item>";
//                $("img[src='undefined']").remove();
//            };
//            
//            for (i=0; i < 6; i++){
//                addHighlights(i);
//            }
//
//        };




        