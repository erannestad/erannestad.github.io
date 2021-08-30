// get markdown content  
function renderMarkdown(MD_body_location, md_target_El)  {
    
    // MD_body_location is a rel link passed as a parameter to the renderMarkdown function.
    // var body_location = 'markdown/overview.md';

    function getText(myUrl){
        var result = null;
        $.ajax( { url: myUrl, 
                  type: 'get', 
                  dataType: 'html',
                  async: false,
                  success: function(data) { result = data; } 
                }
        );
        FileReady = true;
        return result;
    }

    var markdown_source = getText(MD_body_location);
    console.log(MD_body_location);

    document.querySelector(md_target_El).innerHTML =
    marked(markdown_source);
}