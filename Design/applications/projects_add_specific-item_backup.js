//ADD SPECIFIC ITEM
function loadThis(itemName) {
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
        
        
        
        //add related items
        var relatedItems = ProjectList.filter(obj => {
            return obj.id === iObj.related[0];
            });
        relatedItems.push(ProjectList.filter(obj => {
            return obj.id === iObj.related[1];
            })[0]);
        relatedItems.push(ProjectList.filter(obj => {
            return obj.id === iObj.related[2];
            })[0]);
        console.log(relatedItems);
        
        var addRelatedItems = function(){
        var iObj = relatedItems[i];
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

        var loadRelated = function() {
            for (i=0; i < 3; i++){
                addRelatedItems(i);
            }
        }
        loadRelated();
        $("img[src='undefined']").remove();
    };
    
    addSpecificItem();
    loaded = 0;
    
    TweenMax.from('item', 1, {opacity: '0',ease:Power2.easeInOut, repeat:0}); 
};


$( 'a.project' ).on( 'click', function() {
    $('a.active').removeClass( 'active' );
    $( this ).addClass( 'active' );
    });
