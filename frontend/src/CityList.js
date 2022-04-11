import { useEffect, useState } from 'react';
import { Spinner, WrapItem, Center, Wrap } from '@chakra-ui/react'
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
    <Wrap spacing='30px'>
      { weatherList ? weatherList : <Spinner size='xl' /> }
    </Wrap> 
  );
}

export default CityList;