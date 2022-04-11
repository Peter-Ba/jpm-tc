import { useEffect, useState } from 'react';
import CityBio from './CityBio'

function CityList() {
  const [weather, setWeather] = useState([]);

  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setWeather(data));
  }, []);

  const weatherList = weather.map((city, idx) => (
     <CityBio key={idx} report={city}/>
  ))

  return (
      <div>
        { weatherList }
      </div>
  );
}

export default CityList;