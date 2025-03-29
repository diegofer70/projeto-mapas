// -3.7698813554732262 -38.47914681822398

let map;

async function initMap() {
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

  const mylatLng = { lat: -3.7698813554732262, lng: -38.47914681822398 };

  map = new google.maps.Map(document.getElementById("map"), {
    center: mylatLng,
    zoom: 20,
    mapId: "DEMO_MAP_ID",
  });

  // const marker = new google.maps.markers.AdvancedMarkerElement({

//   const marker = new AdvancedMarkerElement({
//     position: mylatLng,
//     map,
//     title: "Ponto",
//   });

//   marker.addListener("click", () => {
//     console.log("CLIQUEI NO MARCADOR VERMELHO");
//   });
  // Evento de clique no mapa para adicionar um marcador
  map.addListener("click", (event) => {
    // Adiciona marcador
    // addMarker(event.latLng.lat(), event.latLng.lng(), "Núcleo de Extensão e Práticas (NEP)");
    adicionaMarcador(
      event.latLng.lat(),
      event.latLng.lng(),
      "Núcleo de Extensão e Práticas (NEP)"
    );

    console.log("debug:", event.latLng.lat(), event.latLng.lng());

    document.getElementById("CampInfor").innerHTML = `<p>NOVA  ${event.latLng.lat()} INformacao</p>`;
  });
}

// Função para adicionar um marcador no mapa
function adicionaMarcador(lat, lng, title = "Ponto Marcado") {
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
    var title = document.getElementById("title").value;

    latitude = Number(latitude);
    longitude = Number(longitude);

    adicionaMarcador(latitude, longitude, title);

    // pega o input
    // document.getElementById("latitude").value
  });
});

initMap();
