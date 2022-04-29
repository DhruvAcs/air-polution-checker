
// Initialize and add the map
// function initMap() {
//   // The location of Uluru
//   const uluru = { lat: -25.344, lng: 131.036 };
//   // The map, centered at Uluru
//   const map = new google.maps.Map(document.getElementById("map"), {
//     zoom: 4,
//     center: uluru,
//   });
//   // The marker, positioned at Uluru
//   const marker = new google.maps.Marker({
//     position: uluru,
//     map: map,
//   });
// } 
// const loader = new Loader(apiOptions);

// loader.load().then(() => {
// //  console.log('Maps JS API loaded');
// });
function initMap() {
  const mapOptions = {
    center: { lat: 40.7128, lng: -74.0060 },
    zoom: 14
  };
  const mapDiv = document.getElementById('map');
  const map = new google.maps.Map(mapDiv, mapOptions);
  return map;
}

function runApp() {
  console.log("no error");
  const map = initMap();
  const layerOptions = {
    id: 'scatterplot',
    data: '/data.json',
    getPosition: d => [parseFloat(d.longitude), parseFloat(d.latitude)],
    getRadius: d => parseInt(d.capacity),
    stroked: true,
    getFillColor: [255, 133, 27],
    getLineColor: [255, 38, 27],    
    radiusMinPixels: 5,
    radiusMaxPixels: 50
  };

  const scatterplotLayer = new ScatterplotLayer(layerOptions);
  const googleMapsOverlay = new GoogleMapsOverlay({
    layers: [scatterplotLayer]
  });
  googleMapsOverlay.setMap(map);
}

setTimeout(runApp, 5000)



