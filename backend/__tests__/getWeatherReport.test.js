const { getWeatherReport, getWeather, getDistance } = require('../getWeatherReport');

const result = [
  { "city": "Glasgow", "weather": "Cold" },
  { "city": "London", "weather": "Chilly" },
  { "city": "Brussels", "weather": "Chilly" },
  { "city": "Tokyo", "weather": "Monsoon" },
  { "city": "Honolulu", "weather": "Stormy" },
  { "city": "Los-Angeles", "weather": "Sunny" }
]

describe('API GET response for weather report per city', () => {
  const report = getWeatherReport();
  const weather = getWeather({ "Glasgow": [55.852059, -4.095055] });
  const distance = getDistance(55.852059, 33.517941, -111.689978, -4.095055);

  it('returns array with at least one object', () => {
    expect(Array.isArray(report)).toBe(true);
    expect(report.length > 0).toBe(true);
    expect(report).toEqual(result);
  });

  it('returns an object, with city and weather property', () => {
    const keys = Object.keys(weather);
    const regexKeys = /city|weather/;

    const weatherVals = Object.values(weather);
    const regexWeather = /Sunny|Stormy|Cold|Chilly|Monsoon/;

    expect(typeof weather).toBe('object');
    expect(!Array.isArray(weather)).toBe(true);
    expect(regexKeys.test(keys)).toBe(true);
    expect(regexWeather.test(weatherVals)).toBe(true);
  });

  it('returns a calculated distance between lat/lon points', () => {
    expect(typeof distance).toBe('number');
    expect(distance).toEqual(10982.59452677817);
  });

});

