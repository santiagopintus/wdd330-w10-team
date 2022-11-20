import { getJSON, getLocation } from "./utilities.js";

const baseUrl =
  "https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2019-01-01&endtime=2019-02-02";

/* async function getQuakesByLocation() {
  getLocation().then((result) => {
    console.log(result);
    let latitudeValue = result.coords.latitude;
    let longitudeValue = result.coords.longitude;
    let locationData = `&latitude=${latitudeValue}&longitude=${longitudeValue}&maxradiuskm=100`;
    getJSON(baseUrl+locationData).then((result) => {
      buildListUI(result);
    });
  });
}

function buildListUI(quakes){
  console.log(quakes);
  const listElement = document.querySelector("#quakeList");
  const listHtml = quakes.features.map((quake) => {
    return `${quake.properties.title} ${new Date(quake.properties.time)}`;
  });
  listElement.innerHTML = listHtml.join("");
  listElement.addEventListener("click", (event) => {
    console.log(event.currentTarget);
    console.log(event.target);
    const quakeId = event.target.dataset.id;
    const quake = quakes.features.find((item) => item.id === quakeId);
    const detailsElement = document.querySelector("#quakeDetails");
    const quakeProperties = Object.entries(quake.properties);
    detailsElement.innerHTML = quakeProperties.map((item) => {
        if (item[0] === "time" || item[0] === "updated") {
          return `${item[0]}: ${new Date(item[1])}`;
        } 
        else 
          return `${item[0]}: ${item[1]}`;
      }).join("");
    });
} */

//getQuakesByLocation();