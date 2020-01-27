var Application = {
        heading1:'Cascadia Consulting',
        heading2:'Application: Policy and Planning Analyst',
        body:'This is a curated list of relevant projects. The Cascadia Consulting review committee can navigate to the <a href="../../index.html">main site</a> and view <a href="../../projects.html">all projects</a> if they would like. <br><br> Thank you for your consideration.<br><br>'
    };


var ApplicationHeading = document.querySelector("#application-heading");

ApplicationHeading.innerHTML += "<h2 class='application-title'>" + Application.heading1 + "<p class='mono'>" + Application.heading2 + "</p></h2><p>" + Application.body + "</p>";