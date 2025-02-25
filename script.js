// -3.7698813554732262 -38.47914681822398

var lat;
var lon;

function getLocation() {

  if (!navigator.geolocation) return null;
  navigator.geolocation.getCurrentPosition((pos) => {
    lat = document.getElementById("lat").innerHTML = pos.coords.latitude;
    lon = document.getElementById("lon").innerHTML = pos.coords.longitude;
    initMap();
  });
}

function initMap() {
  const uluru = { lat: lat, lng: lon };

  map = new google.maps.Map(document.getElementById("map"), {
    center: uluru,
    zoom: 18,
  });
  const marker = new google.maps.Marker({
    position: uluru,
    map: map,
  });
}
getLocation();