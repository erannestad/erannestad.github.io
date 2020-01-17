var Application = {
        heading1:'<a class="application-logo"><svg class="application-logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 288 124.91"><g data-name="Layer 2"><g data-name="Layer 1"><path d="M279.78 0H8.22A8.22 8.22 0 0 0 0 8.22v108.47a8.22 8.22 0 0 0 8.22 8.22h271.56a8.22 8.22 0 0 0 8.22-8.22V8.22A8.22 8.22 0 0 0 279.78 0zM78 104.35H61.88L55 50.33l-6.91 54H32L17.66 20.56h16.08l7 56.15 7.92-56.15h12.59l8 56.15 6.95-56.15h16.08zm60.54-69.85h-20.86v20.23h20v13.94h-20v21.74h20.86v13.94h-36.69V20.56h36.69zm42.74 31.8a14.05 14.05 0 0 0 12.85-8.42L207 64c-3.74 7.47-11.29 15.54-25.7 15.54-17.36 0-30.9-12.15-30.9-29.95s13.54-29.94 30.9-29.94c14.41 0 21.88 7.89 25.7 15.53l-12.85 6.08a14.05 14.05 0 0 0-12.85-8.42c-9 0-15.71 7.29-15.71 16.75s6.66 16.71 15.69 16.71zM269 54.92c0 14.41-8.25 24.57-26.82 24.57S215.25 69.25 215.25 55V20.55h15.19v33.94c0 6.86 3.64 11.81 11.72 11.81s11.63-4.95 11.63-11.81V20.55H269z" fill="#474747"></path><path fill="#64b4e4" d="M151.97 93.58h118.37v10.77H151.97z"></path></g></g></svg></a>',
        heading2:'Application: Graphic Designer',
        body:'The review committee can view this portfolio in a <a href="portfolio_WECU.pdf" target="_blank">PDF</a> or can navigate to the <a href="../../index.html">main site</a> to view additional projects. <br><br> Thank you for your consideration.<br><br>'
    };


var ApplicationHeading = document.querySelector("#application-heading");

ApplicationHeading.innerHTML += "<h2 class='application-title'>" + Application.heading1 + "<p class='mono'>" + Application.heading2 + "</p></h2><p>" + Application.body + "</p>";