//
//document.addEventListener('DOMContentLoaded', function () { 
//function () {   
//            var button = document.getElementByClass('.right-paddle');
//            button.onclick = function () {
//                document.getElementById('WWCCD').scrollLeft += 200;
//            };
//        }, false);

document.addEventListener('DOMContentLoaded', function () {   
            var button = document.getElementById('rightpaddle');
            button.onclick = function () {
                document.getElementById('WWCCD').scrollLeft += 300;
            };
        }, false);

document.addEventListener('DOMContentLoaded', function () {   
            var button = document.getElementById('leftpaddle');
            button.onclick = function () {
                document.getElementById('WWCCD').scrollLeft += -300;
            };
        }, false);