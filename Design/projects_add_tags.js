//add tags to DOM

var tags = ['all','art','print', 'web', 'graphic-design'];
console.log(tags)

var contentHeader = document.querySelector("#content-header");

var tagContainer = document.createElement('div');
tagContainer.classList.add("tagContainer");
contentHeader.appendChild(tagContainer);


for (var i=0; i < tags.length; i++) {
    tagContainer.innerHTML += "<a href='#' id='" + tags[i] + "'onclick= 'tagFilter(\"" + tags[i] + "\")' class='tag mono'>" + tags[i] + "</a>"
//    tag = document.createElement('a');
    //tag.href = 'projects.html#'+tags[i];
//    tag.onclick = function() {
//        window.location.replace('projects.html#' + tag.id );
//    };
//    tag.id = tags[i];
//    tag.setAttribute("onclick", "window.location.replace('projects.html#"+ String(tags[i]) + "');");
//    tag.setAttribute("onclick", "navigateTag("+String(tags[i])+");");
//    tag.className = 'tag mono';
//    tag.innerHTML = tags[i];
//    tagContainer.appendChild(tag);
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

//function navigateTag() {
//    console.log('click');
//    window.location.href.split('#')[0];
//    console.log('cleared hash');
//    var content = document.querySelector("#content");
//    content.innerHTML == "";
//    //;loadOverview();
//}
