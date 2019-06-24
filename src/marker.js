const mapboxgl = require("mapbox-gl");

const iconURLs = {
  hotels: "http://i.imgur.com/D9574Cu.png",
  restaurants: "http://i.imgur.com/cqR6pUI.png",
  activities: "http://i.imgur.com/WbMOfMl.png"
};

const icon = function(location, url) {
  const activityDomEl = document.createElement("div");
  activityDomEl.style.width = "32px";
  activityDomEl.style.height = "39px";
  activityDomEl.style.backgroundImage = `url(${iconURLs[url]})`;
  return new mapboxgl.Marker(activityDomEl).setLngLat(location);
}

module.exports = icon;
