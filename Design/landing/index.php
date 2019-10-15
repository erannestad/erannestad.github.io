<?php
    session_start();
    include_once("db.php");
    include_once("userInput.php");
?>

<!--http://192.168.64.2/-->

<!DOCTYPE html>
<html>
<head>
  <meta content="width=device-width, initial-scale=1" name="viewport" />

  <title>A Leaflet map!</title>
  <link rel="stylesheet" href="leaflet.css"/>
  <link href="https://fonts.googleapis.com/css?family=Roboto+Mono&display=swap" rel="stylesheet">
  <script src="leaflet-src.js"></script>
  <script src="unchopping-a-tree.js"></script>
  <script
  src="https://code.jquery.com/jquery-3.4.1.slim.min.js"
  integrity="sha256-pasqAKBDmFT4eHoN2ndd6lN370kFiGUFyTiUHWhU7k8="
  crossorigin="anonymous"></script>
    
  
    <style>
        #map{ height: 80vw; width: 80vw}
    </style>
    
  
</head>
    
<body>

    
<wrapper>
  <div id="map">
        <div class='filter-container'>
        <img src="filter1.svg" class="svg" >
    </div>
  </div>
    
    <div id="custom-map-controls">
        <div id='zoom-container'></div><br>
        <button onclick="newPath()">new path</button>
        <p id="latContainer"></p>
        <p id="longContainer"></p>
    </div>
    
<!--
    <div id="message-container">
        <p id=message>please feel free to interact with the map</p>
    </div>
-->
        
    <div id="text-controls">
        <button class="text" onclick="toggleText()">text</button> <br>
        <div id="toggleText">
            <br>
            <p class="text">words from...
                <br><br>
                <a href="https://designobserver.com/feature/unchopping-a-tree/7857" class="text" id='unchopping-a-tree'><i>Unchopping A Tree</i>, M.S. Merwin </a>
            </p>
            
            <br><br>
            
            
            <?php
                include("post.php")
            ?>
        </div>
    </div>
</wrapper>
    
  <script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyB-Mhe0bnI35xvyjk7t1JDwCTpCTOgydOs&callback=initMap" type="text/javascript"></script>

<script>

  // initialize the map
  var map = L.map('map', {
    center: [78, -166.90],
    zoom: 7,
    zoomControl: false
  });   
    
    var center = map.getCenter();
    function getRandomInt(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min + 1)) + min;
            };
    function newPath() {
        var randomLat = getRandomInt(30, 82);
        var randomLng = getRandomInt(-180, 0);
        map.setZoom(7);
        map.panTo([randomLat, randomLng]);
    };
    
    function toggleText() {
        var getElement = document.getElementById('toggleText');
        $(getElement).toggle();
    };
//    var panX = 0;
//    var panY = 0;
//    function incrementPan() {
//    panX = panX + 0; 
//    panY = panY + 10;
//    };
//    setInterval(incrementPan, 1000);
    
    
 ////////// tile url of 1st tile     http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}
 ////////// tile url of 1st tile     src="http://mt0.google.com/vt/lyrs=s&x=4956&y=6060&z=14"
 ///UPDATED tile url of 1st tile     a.google.com/vt/lyrs=s&x=4956&y=6060&z=13:1
 ///UPDATED tile url of 1st tile     c.google.com/vt/lyrs=s&x=2478&y=3029&z=13:1
      
    L.TileLayer.NewURL = L.TileLayer.extend({
    getTileUrl: function(coords) {
//      Returns a random number between min (inclusive) and max (exclusive)
        function getRandomArbitrary(min, max) {
            return Math.random() * (max - min) + min;
        }
        
        /**
         * Returns a random integer between min (inclusive) and max (inclusive).
         * The value is no lower than min (or the next integer greater than min.
         * if min isn't an integer) and no greater than max (or the next integer.
         * lower than max if max isn't an integer).
         * Using Math.round() will give you a non-uniform distribution!
         */
        
        function getRandomInt(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
        
        var i = getRandomInt(0, 3);
        var j = getRandomInt(0, 2);
        
        // increment our x/y coords by 1 so they match our tile naming scheme
        coords.x = coords.x + i;
        coords.y = coords.y + j;

        // pass the new coords on through the original getTileUrl
        // see http://leafletjs.com/examples/extending/extending-1-classes.html 
        // for calling parent methods
        return L.TileLayer.prototype.getTileUrl.call(this, coords);
    }
});

//// static factory as recommended by http://leafletjs.com/reference-1.0.3.html#class
L.tileLayer.NewURL = function(templateUrl, options) {
    return new L.TileLayer.NewURL(templateUrl, options);
}

// create the layer and add it to the map
L.tileLayer.NewURL('http://mt0.google.com/vt/lyrs=s&x={x}&y={y}&z={z}&tilesize={tileSize}', {
    tms: false,
    detectRetina: true,
    continuousWorld: 'true',
    noWrap: true,
    tileSize: 128,
    defaultRadius:1,
}).addTo(map);
    
    setInterval(function(){
        
        map.panBy([100, 100], {
            animate: true,
            duration: 10});
//        console.log(panX + ' ' + panY)
        
        center = map.getCenter();
        var latString = center.lat.toString(); //convert lat to string
        var latTRIM = latString.substring(0,9)  // cut six first character
        var lngString = center.lng.toString(); //convert lat to string
        var lngTRIM = lngString.substring(0,9)  // cut six first character
        var latTRIMint = parseInt(latTRIM); // convert it to a number
        var lngTRIMint = parseInt(latTRIM); // convert it to a number
        latContainer.innerHTML = "latitude: " + latTRIM + "<br>longitude: " + lngTRIM;
        
        if (center.lat < 0) {
            map.panTo([90, -128]);
        };
    }, 1000);

////////////////////////////
    

    
////////////////////////////
    
var tiles = new L.GridLayer();
tiles.createTile = function(coords) {
  var tile = L.DomUtil.create('canvas', 'leaflet-tile');
  var ctx = tile.getContext('2d');
  var size = this.getTileSize()
  tile.width = size.x
  tile.height = size.y
  
  // calculate projection coordinates of top left tile pixel
  var nwPoint = coords.scaleBy(size)
  
  // calculate geographic coordinates of top left tile pixel
  var nw = map.unproject(nwPoint, coords.z)
  
        var a = getRandomInt(0, 256);
        var b = getRandomInt(0, 256);
        var c = getRandomInt(0, 256);
        var d = getRandomInt(0, 256);
        var e = getRandomInt(0, 300);

          ctx.strokeStyle = 'white';
          ctx.beginPath();
          ctx.moveTo(a, b);
          ctx.lineTo(c, d);
    //          ctx.lineTo(size.x, size.y);
    //          ctx.lineTo(0, size.y);
          ctx.closePath();
          ctx.stroke();
        
          ////////////////////////

          ctx.font = 'normal 10px Roboto Mono';
          ctx.fillStyle = 'white';
          ctx.fillText(finalArray[e], 5, a);

  return tile;
  
}

tiles.addTo(map);

////////////////////////////////////////////
////////////////////////////////////////////

var mapbuttons_div = L.DomUtil.create('div', 'mapbuttons leaflet-bar leaflet-control');
var newParent = document.getElementById('zoom-container');
var zoom = L.control.zoom(
    {
        position: 'topleft'
     }
);
zoom.addTo(map);
newParent.appendChild(zoom.getContainer()); // works
    
    
var latContainer = document.getElementById('latContainer');
var longContainer = document.getElementById('longContainer');
    
//    var lat = coord.lat;
//    var lng = coord.lng;
    
///////////////////////////////////////////
    
    </script>
    
    
    
    
    
    
    
    
    
<!----------------------------------------->
<!----------------------------------------->
<!----------------STYLES------------------->
<!----------------------------------------->
<!----------------------------------------->
<!----------------------------------------->
    
    <style>
        
        @media only screen and (max-width: 600px) {
            body {
/*              position: absolute;*/
                perspective: 400vw !important;
                margin: 30px !important;
/*                background-color: blue;*/
            }
            wrapper {
                margin-top: 30%;
            }
            p, p#message, button, textarea, #post-submit  {
/*                font-size: 24px;*/
            }
            
            #latcontainer{
                margin-bottom: 0px;
            }
            
            textarea{
                height: 10vh;
                border: solid;
                border-color: blue;
                font-family: 'Roboto Mono', monospace;
            }
/*
            a.leaflet-control-zoom-in, a.leaflet-control-zoom-out{
                font-size: 36px;
            }
*/
        }
        @media screen and (min-width: 600px) {
            body {
/*              position: absolute;*/
                perspective: 100vw;
                margin: 30px !important;
/*                background-color: blue;*/
            }
        }
        
        #longContainer{
            display: none;
        }
        
        form{
            margin-bottom: 0px;
        }
        
        
        .leaflet-overlay-pane{
            mix-blend-mode: exclusion;
            z-index: 1000;
        }
        
        .svg {
            width: 200vw;
            overflow: hidden;
        }
        
        .filter-container {
            width: 100%;
            height: 100%;
            background: url(filter1.svg);
            background-size: 100% 100%;
            position: absolute;
            z-index: 1000;
            mix-blend-mode: hard-light;
            pointer-events: none;
        }
        
        body{
/*            perspective: 100vw;*/
            perspective-origin: 50% 50%;
            font-family:'Roboto Mono';
            font-size: 10px;
            margin: 16px;
        }
        
        #custom-map-controls {
/*            display: inline-block;*/
            position: fixed;
            bottom: 0;
            width: 50%;
        }
        
        #map{
                margin: auto;
                top: 0px;
                right: 0;
                bottom: 0;
                left: 0;
                height: 70vw; width: 70vw;
                max-height: 70vh;
                max-width: 70vh;
                transform: rotate3d(0, 0, 1, 0deg) rotateX(45deg) rotateZ(45deg);
        }
        
        canvas{
            overflow: visible;
        }
    
        #map > div.leaflet-control-container > div.leaflet-bottom.leaflet-right > div > a {
            display: none;
        }
        
        #text-controls {
            position: fixed;
            bottom: 0;
            right: 0;
            float: right;
            z-index: -1;
        }
        .text{
            float: right;
        }
        
        wrapper{
            position: absolute;
            width: 100%;
        }
        
        #toggleText {
            display: none;
        }
        
        #custom-map-controls, #text-controls {
            font-family: 'Roboto Mono', monospace;
            font-size: 10px;
        }
        
        #userInput_TextArea{
            width: 100%;
        }
        
        #userInput{
            width: 100%;
        }
        button {
            padding: 10px;
            font-family: 'Roboto Mono', monospace;
            border: none;
            text-decoration: underline;
            color: black;
            cursor: pointer;
            background-color: gainsboro;
            display: block;
            border-radius: 4px;
        }
        
        #post-submit {
            padding: 4px;
            font-family: 'Roboto Mono', monospace;
            border: none;
            text-decoration: underline;
            color: black;
            cursor: pointer;
            background-color: gainsboro;
            display: block;
            border-radius: 4px;
            margin-top: 10px;
        }
        
        button:hover {
            background-color: blue;
            color: white;
        }
        
        #zoom-container {
            position: fixed;
            top: 0;
        }
        
        .leaflet-bar a {
            background-color: #ddd;
            border-bottom: 1px solid #ccc;
            width: 26px;
            height: 26px;
            line-height: 26px;
            display: block;
            text-align: center;
            text-decoration: none;
            color: black;
        }
        
        .leaflet-bar{
            box-shadow: none;
        }
        
        a:hover {
            background-color: blue !important;
            color: white !important;
        }
        
       #message-container {
           position: fixed;
           bottom: 0;
           left: calc(50% - 150px);
           width: 300px;
        }
        
        #message {
            text-align: center;
            font-family:'Roboto Mono';
            font-size: 10px;
        }

    </style>
    
  
    
</body>
</html>