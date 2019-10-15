

  // initialize the map
  var map = L.map('map', {
    center: [70, -183.90],
    zoom: 18,
    zoomControl: false
  });   

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
	maxZoom: 11,
//    mapbox://styles/mapbox/satellite-streets-v11
	id: 'mapbox.satellite',
	accessToken: 'pk.eyJ1IjoiZXJhbm5lc3RhZCIsImEiOiJjamp4dHp3N2ExaHp1M3FycnJsamZ4cGpuIn0.Z3DvBItGT21xpbhnIbJLBg'
}).addTo(map);


    setInterval(function(){
        
        map.panBy([100, 100], {
            animate: true,
            duration: 10});
//        console.log(panX + ' ' + panY)
        
        if (center.lat < 0) {
            map.panTo([90, -128]);
        };
    }, 1000);
////////////////////////////
    

    
    
    

    