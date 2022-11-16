import { getJSON, getLocation } from "./utilities.js";

const baseUrl =
  "https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2019-01-01&endtime=2019-02-02";

const getQuakesByLocation = () => {
  let location = getLocation();
  //Format locationData in the form of URL params, like so:
  //let locationData = &latitude=${latitudeValue}&longitude=${longitudeValue}&maxradiuskm=100
  //let quakes = getJSON(baseUrl+locationData);
}