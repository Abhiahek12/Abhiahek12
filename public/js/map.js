mapboxgl.accessToken =
  "pk.eyJ1IjoiMWFiaGlzaGVrIiwiYSI6ImNsdWVoMWs1aTBhZ24yam9lbnBuYzNpNzUifQ.AFKGngPIrER00WeX0DFI9w";
const map = new mapboxgl.Map({
  container: "map", // container ID
  center: [87.855, 22.9868], // starting position [lng, lat]
  zoom: 8, // starting zoom
});
const marker = new mapboxgl().setLngLet([12.554729, 55.70651]).addTo(map);
