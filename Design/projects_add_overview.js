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
   
    content.innerHTML += "<item class='overview transition' onclick= 'loadThis(\"" + iObj.id + "\");'><p class='overview'>" + iObj.title + " </p><img class='overview' src='" + iObj.thumbnail + "'><p class='subtext overview'>" + iObj.client + br + allCatagories + " | " + iObj.date + "</p></item>";
    
    $("img[src='undefined']").remove();
};



var itemsToLoadOverview = 20;
var loadedOverview = 0;

var loadOverview = function() {
    content.innerHTML = '';
    for (i=loadedOverview; i < itemsToLoadOverview; i++){
        addItemOverview(i);
    }
}



// ADD HIGHLIGHTS

//        var relatedItems = ProjectList.filter(obj => {
//            return obj.id === iObj.related[0];
//            });
//        relatedItems.push(ProjectList.filter(obj => {
//            return obj.id === iObj.related[1];
//            })[0]);
//        relatedItems.push(ProjectList.filter(obj => {
//            return obj.id === iObj.related[2];
//            })[0]);
//        relatedItems.push(ProjectList.filter(obj => {
//            return obj.id === iObj.related[3];
//            })[0]);
//        relatedItems.push(ProjectList.filter(obj => {
//            return obj.id === iObj.related[4];
//            })[0]);
//        relatedItems.push(ProjectList.filter(obj => {
//            return obj.id === iObj.related[5];
//            })[0]);

        
        var loadHighlights = function(highlight1, highlight2, highlight3, highlight4, highlight5, highlight6){
            
            var highlights = ProjectList.filter(obj => {
                return obj.id === highlight1 || obj.id === highlight2 || obj.id === highlight3 || obj.id === highlight4 || obj.id === highlight5 || obj.id === highlight6;
                });
            
            var addHighlights = function(i) {
                var iObj = highlights[i];
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
                content.innerHTML += "<item class='overview' onclick= 'loadThisHighlight(\"" + iObj.id + "\");'><p class='overview'>" + iObj.title + " </p><div class='filter'><img class='overview' src='" + iObj.thumbnail + "'></div><p class='subtext overview'>" + iObj.client + br + allCatagories + " | " + iObj.date + "</p></item>";
                $("img[src='undefined']").remove();
            };
            
            for (i=0; i < 6; i++){
                addHighlights(i);
            }

        };

        

//            
//        var addHighlights = function() {
//            var iObj = highlights[i];
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
//            ///write inner html
//            content.innerHTML += "<item class='overview' onclick= 'loadThis(\"" + iObj.id + "\");'><p class='overview'>" + iObj.title + " </p><div class='filter'><img class='overview' src='" + iObj.thumbnail + "'></div><p class='subtext overview'>" + iObj.client + br + allCatagories + " | " + iObj.date + "</p></item>";
//            $("img[src='undefined']").remove();
//        };
//
//
//
//
//        $("img[src='undefined']").remove();
//        $('a.active').removeClass( 'active' );
//        $('#' + iObj.id ).addClass( 'active' );












    