var Application = {
        heading1:'Conservation International',
        heading2:'Application: Associate Designer',
        body:'The review committee may also navigate to the main site <a href="../../index.html">here</a> to view additional projects. <br> Thank you for your consideration.'
    };


var ApplicationHeading = document.querySelector("#application-heading");

ApplicationHeading.innerHTML += "<h2 class='application-title'>" + Application.heading1 + "<p class='mono'>" + Application.heading2 + "</p></h2><p>" + Application.body + "</p>";