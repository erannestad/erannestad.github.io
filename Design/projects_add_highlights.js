
// ADD HIGHLIGHTS

        
        var loadHighlights = function(highlight1, highlight2, highlight3, highlight4, highlight5, highlight6){
            
            var highlights = ProjectList.filter(function (obj) {
            return obj.id === highlight1 || obj.id === highlight2 || obj.id === highlight3 || obj.id === highlight4 || obj.id === highlight5 || obj.id === highlight6;
          });
            
            var addHighlights = function(i) {
                var iObj = highlights[i];
                var content = document.querySelector("#content-highlights");
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
                content.innerHTML += "<item class='overview' onclick= 'loadThisHighlight(\"" + iObj.id + "\");'><div class='filter'><img class='overview' src='" + iObj.thumbnail + "'></div><p class='mono overview'>" + iObj.title + br +  iObj.client + "</p></item>";
                $("img[src='undefined']").remove();
            };
            
            for (i=0; i < 6; i++){
                addHighlights(i);
            }

        };

        