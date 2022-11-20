import { getJSON, getLocation } from "./utilities.js";

const baseUrl =
  "https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2019-01-01&endtime=2019-02-02";

async function getQuakesByLocation() {
  getLocation().then((result) => {
    let latitudeValue = result.coords.latitude;
    let longitudeValue = result.coords.longitude;
    let locationData = `&latitude=${latitudeValue}&longitude=${longitudeValue}&maxradiuskm=100`;
    let quakes = getJSON(baseUrl+locationData);
    console.log(quakes);
  });
}

getQuakesByLocation();