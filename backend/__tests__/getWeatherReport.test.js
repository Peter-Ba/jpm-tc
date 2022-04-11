const { getWeatherReport, getWeather, getDistance } = require('../getWeatherReport');

describe('API call for weather report per city', () => {
  test('a collection of cities', () => {
    expect(getWeatherReport()).toEqual(1);
  });
  // returns an array
  // array is not empty

  test('a collection of cities', () => {
    expect(getWeather()).toEqual(1);
  });

// returns an object
// object is not empty
// object has two properties, city and weather
// only values allowed for weather are:
// 'Sunny', 'Stormy', 'Cold', 'Chilly', 'Monsoon'


  test('a collection of cities', () => {
    expect(getDistance()).toEqual(1);
  });
// input lat1, lon1, lat2, lon2
// returns a decimal/integer

});

