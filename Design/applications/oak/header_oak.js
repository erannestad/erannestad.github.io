var OakApplication = {
        heading1:'Oak Studios',
        heading2:'Internship Application',
        body:'Attached is the portfolio section of my application. The reviewer(s) can navigate to the main site <a href="../../projects.html">here</a> should they like to explore further.'
    };


var ApplicationHeading = document.querySelector("#application-heading");

ApplicationHeading.innerHTML += "<h2>" + OakApplication.heading1 + "<p class='subtext'>" + OakApplication.heading2 + "</p></h2><p>" + OakApplication.body + "</p>";