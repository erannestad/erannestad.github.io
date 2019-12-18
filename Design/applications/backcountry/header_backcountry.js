var Application = {
        heading1:'Backcountry',
        heading2:'Application: Graphic Designer',
        body:'The review committee can view this portfolio in a <a href="portfolio_Backcountry.pdf" target="_blank">PDF</a> or can navigate to the <a href="../../index.html">main site</a> to view additional projects. <br> Thank you for your consideration.<br><br>'
    };


var ApplicationHeading = document.querySelector("#application-heading");

ApplicationHeading.innerHTML += "<h2 class='application-title'>" + Application.heading1 + "<p class='mono'>" + Application.heading2 + "</p></h2><p>" + Application.body + "</p>";