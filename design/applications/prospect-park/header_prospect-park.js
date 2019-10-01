

var Application = {
        heading1:'Prospect Park Alliance',
        heading2:'Application: Graphic Designer',
        body:'Attached is the portfolio section of my application. The reviewer(s) can navigate to the main site <a href="../../index.html">here</a> should they like to explore further.<br><p class="subtext">ADDITIONAL LINKS:<br>github: <a href="https://github.com/erannestad">github.com/erannestad</a>  |  artist website: <a href="https://ericrannestad.com">ericrannestad.com</a></p><p>Thank you for your consideration.'
    };


var ApplicationHeading = document.querySelector("#application-heading");

ApplicationHeading.innerHTML += "<h2>" + Application.heading1 + "<p class='subtext'>" + Application.heading2 + "</p></h2><p>" + Application.body + "</p>";