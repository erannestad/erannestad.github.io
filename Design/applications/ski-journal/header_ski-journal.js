var Application = {
        heading1:'The Ski Journal',
        heading2:'Application: Interaction Design Internship',
        body:'The review committee may also navigate to the main site <a href="../../index.html">here</a> to view additional projects. Thank you for your consideration.'
    };


var ApplicationHeading = document.querySelector("#application-heading");

ApplicationHeading.innerHTML += "<h2 class='application-title'>" + Application.heading1 + "<p class='subtext'>" + Application.heading2 + "</p></h2><p>" + Application.body + "</p>";