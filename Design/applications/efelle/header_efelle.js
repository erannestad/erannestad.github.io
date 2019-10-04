var Application = {
        heading1:'efelle creative',
        heading2:'Application: Part-Time Graphic Designer',
        body:'Welcome to the portfolio component of my application. The review committee can navigate to the main site <a href="../../index.html">here</a> should they like view additional projects.'
    };


var ApplicationHeading = document.querySelector("#application-heading");

ApplicationHeading.innerHTML += "<h2>" + Application.heading1 + "<p class='subtext'>" + Application.heading2 + "</p></h2><p>" + Application.body + "</p>";