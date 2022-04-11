import React from 'react';
import CityList from './CityList';
import { Heading, Text } from '@chakra-ui/react'

function App() {
  return (
    <div className="App">
    <Text
      bgGradient="linear(to-l, #ffeb3b, #FF0080)"
      bgClip="text"
      fontSize="6xl"
      fontWeight="extrabold"
    >
        Weather Report
      </Text>
      <CityList/>
    </div>
  );
}

export default App;
