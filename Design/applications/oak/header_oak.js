var OakApplication = {
        heading1:'Oak Studios',
        heading2:'Internship Application',
        body:'Attached is the portfolio section of my application. The reviewer(s) can find all of my projects <a href="../../projects.html">here</a> should they like to view more.'
    };


var ApplicationHeading = document.querySelector("#application-heading");

ApplicationHeading.innerHTML += "<h2>" + OakApplication.heading1 + "</h2><p>" + OakApplication.heading2 + "<p><p class='subtext'>" + OakApplication.body + "</p>";