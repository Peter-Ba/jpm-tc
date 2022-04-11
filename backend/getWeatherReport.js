const citiesData = require("./database/Cities.json");
const stationsData = require("./database/WeatherStations.json");

function getWeatherReport() {
  const report = [];

  citiesData.map((city) => {
    report.push(getWeather(city));
  });

  return report;
}

//Helper Functions

function getWeather(cityObj) {
  const city = Object.keys(cityObj)[0];
  const [cLat, cLng] = cityObj[city];
  let nearestStation = Infinity;
  let weather;

  stationsData.map((station) => {
    const sLat = station.lat;
    const sLng = station.lng;
    const distance = getDistance(cLat, cLng, sLat, sLng);

    if (distance < nearestStation) {
      nearestStation = distance;
      weather = station.weather;
    }
  });
  return { city: `${city}`, weather: `${weather}` };
}

function getDistance(cLat, cLng, sLat, sLng) {
  const cLatRad = (Math.PI * cLat) / 180;
  const sLatRad = (Math.PI * sLat) / 180;
  const theta = cLng - sLng;
  const radtheta = (Math.PI * theta) / 180;

  let dist =
    Math.sin(cLatRad) * Math.sin(sLatRad) +
    Math.cos(cLatRad) * Math.cos(sLatRad) * Math.cos(radtheta);

  dist = Math.acos(dist);
  dist = (dist * 180) / Math.PI;
  dist = dist * 60 * 1.1515;

  return dist;
}

module.exports = { getWeatherReport, getWeather, getDistance };
