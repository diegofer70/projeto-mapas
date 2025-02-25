// -3.7698813554732262 -38.47914681822398

// var lat;
// var lon;

// function getLocation() {

//   if (!navigator.geolocation) return null;
//   navigator.geolocation.getCurrentPosition((pos) => {
//     lat = document.getElementById("lat").innerHTML = pos.coords.latitude;
//     lon = document.getElementById("lon").innerHTML = pos.coords.longitude;
//     initMap();
//   });
// }

// function initMap() {
//   const uluru = { lat: lat, lng: lon };

//   map = new google.maps.Map(document.getElementById("map"), {
//     center: uluru,
//     zoom: 18,
//   });
//   const marker = new google.maps.Marker({
//     position: uluru,
//     map: map,
//   });
// }
// getLocation();

//

let map;

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: -3.7698813554732262, lng: -38.47914681822398 },
        zoom: 18,
    });

    // Evento de clique no mapa para adicionar um marcador
    map.addListener("click", (event) => {
        addMarker(event.latLng.lat(), event.latLng.lng(), "Núcleo de Extensão e Práticas (NEP)");
    });
}

// Função para adicionar um marcador no mapa
function addMarker(lat, lng, title = "Ponto Marcado") {
    new google.maps.Marker({
        position: { lat, lng },
        map,
        title,
    });
}

// Adiciona evento de clique ao botão para adicionar um marcador com os valores inseridos
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("addMarkerBtn").addEventListener("click", () => {
        const lat = parseFloat(document.getElementById("latitude").value);
        const lng = parseFloat(document.getElementById("longitude").value);
        const title = document.getElementById("title").value || "Ponto Marcado";

        if (!isNaN(lat) && !isNaN(lng)) {
            addMarker(lat, lng, title);
        } else {
            alert("Por favor, insira valores válidos de latitude e longitude.");
        }
    });
});