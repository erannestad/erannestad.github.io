var Application = {
        heading1:'Rogue Farm Corps',
        heading2:'Application: Graphic Design Contractor',
        body:'The reviewers may also navigate to the main site <a href="../../index.html">here</a> to view additional projects. <br><br> Thank you for your consideration.<br><br>'
    };


var ApplicationHeading = document.querySelector("#application-heading");

ApplicationHeading.innerHTML += "<h2 class='application-title'>" + Application.heading1 + "<p class='mono'>" + Application.heading2 + "</p></h2><p>" + Application.body + "</p>";