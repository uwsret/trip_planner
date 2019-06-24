const mapboxgl = require("mapbox-gl");
const icon = require('./marker')

mapboxgl.accessToken = "pk.eyJ1IjoiZGltYTdtYXNsb3Z2IiwiYSI6ImNqeGFqcjNzbDE3bWYzdG8xMjI1ZThlenIifQ.J7g4wQBywrUjVFyCWGfLLQ";

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});

const marker = icon([-74.009, 40.705],'hotels');
marker.addTo(map);
