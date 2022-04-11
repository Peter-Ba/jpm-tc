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
  const getWeather = getWeather();
  const distance = getDistance(55.852059, 33.517941, -111.689978, -4.095055);

  it('returns array with at least one object', () => {
    expect(Array.isArray(report)).toBe(true);
    expect(report.length > 0).toBe(true);
    expect(report).toBe(result);
  });

  it('returns an object, with city and weather property', () => {
    const keys = Object.keys(getWeather);
    const regex = /Sunny|Stormy|Cold|Chilly|Monsoon/;

    expect(typeof getWeather).toBe('object');
    expect(!Array.isArray(getWeather)).toBe(true);
    expect(keys.includes('city')).toBe(true);
    expect(keys.includes('weather')).toBe(true);
    expect(regex.test(keys)).toBe(true);
  });

  it('returns a calculated distance between lat/lon points', () => {
    expect(typeof distance).toBe('number');
    expect(distance).toEqual(10982.59452677817);
  });

});

