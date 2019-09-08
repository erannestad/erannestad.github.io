var Application = {
        heading1:'Mt. Baker Ski Area',
        heading2:'Application: Seasonal Design Production Assistant',
        body:'Attached is the portfolio section of my application. The reviewer(s) can navigate to the main site <a href="../../projects.html">here</a> should they like to explore further.<br><p>Thank you for your consideration.'
    };


var ApplicationHeading = document.querySelector("#application-heading");

ApplicationHeading.innerHTML += "<h2>" + Application.heading1 + "<p class='subtext'>" + Application.heading2 + "</p></h2><p>" + Application.body + "</p>";