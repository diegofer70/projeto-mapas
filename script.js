// -3.7698813554732262 -38.47914681822398

let map;

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: -3.7698813554732262, lng: -38.47914681822398 },
        zoom: 20,
        mapId: 'DEMO_MAP_ID'
    });

    // Evento de clique no mapa para adicionar um marcador
    map.addListener("click", (event) => {
        addMarker(event.latLng.lat(), event.latLng.lng(), "Núcleo de Extensão e Práticas (NEP)");


        console.log('debug:', event.latLng.lat(), event.latLng.lng());
    });
}


// Função para adicionar um marcador no mapa
function adicionaMarcador(lat, lng, title = "Ponto Marcado") {
    // new google.maps.Marker({
    //     position: { lat, lng },
    //     map,
    //     title,
    // });

    new google.maps.marker.AdvancedMarkerElement({
        position: { lat, lng },
        map,
        title,
    });
    
}

// Adiciona evento de clique ao botão para adicionar um marcador com os valores inseridos
document.addEventListener("DOMContentLoaded", () => {
    // traducao simplficcada. DOM (documento/js), pega o elemento de id _____ e QUANDO acontece evento click, executa funcao
    document.getElementById("addMarkerBtn").addEventListener("click", () => {
        // const lat = parseFloat(document.getElementById("latitude").value);
        // const lng = parseFloat(document.getElementById("longitude").value);
        // const title = document.getElementById("title").value || "Ponto Marcado";

        // if (!isNaN(lat) && !isNaN(lng)) {
        //     addMarker(lat, lng, title);
        // } else {
        //     alert("Por favor, insira valores válidos de latitude e longitude.");
        // }

        // console.log('aconteceu click', document.getElementById("latitude").value)
        // console.log('aconteceu click', document.getElementById("longitude").value)
        // console.log('aconteceu click', document.getElementById("title").value)

        var latitude = document.getElementById("latitude").value;
        var longitude = document.getElementById("longitude").value;
        var title =  document.getElementById("title").value;

        latitude = Number(latitude)
        longitude = Number(longitude)

        console.log(latitude, longitude, title);
        console.log(123)

        adicionaMarcador(latitude, longitude, title)
        

        // pega o input
        // document.getElementById("latitude").value
    });
});