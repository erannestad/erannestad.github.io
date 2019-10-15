//add tags to DOM

var tags = ['all','art','print', 'web', 'graphic design'];
console.log(tags)

var tagContainer = document.querySelector("#tagContainer");

for (var i=0; i < tags.length; i++) {
    tagContainer.innerHTML += "<a href='#' id='" + tags[i] + "' onclick= 'tagFilter(\"" + tags[i] + "\")' class='tag'>" + tags[i] + "</a>"
}


//tag functionality
var items = document.getElementsByTagName('item');
console.log(items);
function tagFilter(tagQuery){
    if (tagQuery == 'all') { 
        console.log('all')
        for (var i = 0; i < items.length; i++){
            items[i].classList.remove('tagHide');
        };
    } else {
        for(var i = 0; i < items.length; i++){
            if (items[i].classList.contains(tagQuery)) {
                items[i].classList.remove('tagHide');
                console.log(tagQuery);
            } else {
                items[i].classList.add('tagHide');
            };
        };
    };
};