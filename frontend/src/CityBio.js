import { Box, WrapItem, Text } from "@chakra-ui/react"

function CityBio(props) {
  const textStyle = {
    'align': 'center',
    'fontSize': 'xl'
  }

  return (
    <WrapItem>
      <Box w="200px" h="200px" rounded='20px' 
        bgGradient="linear(to-t, gray.300, gray.500)">
        <Text {...textStyle}>{props.report.city}</Text>
        <Text {...textStyle}>Forecast: </Text>
        <Text {...textStyle}>{props.report.weather} </Text>
      </Box>
    </WrapItem>
  )
}


export default CityBio;