var Application = {
        heading1:'Seattle Art Museum',
        heading2:'Application: Junior Designor',
        body:'Attached is the portfolio section of my application. The reviewer(s) can navigate to the main site <a href="../../projects.html">here</a> should they like to explore further.'
    };


var ApplicationHeading = document.querySelector("#application-heading");

ApplicationHeading.innerHTML += "<h2>" + Application.heading1 + "<p class='subtext'>" + Application.heading2 + "</p></h2><p>" + Application.body + "</p>";