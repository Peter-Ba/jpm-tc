function CityBio(props) {
  return (
  <div>
    <strong>{props.report.city}</strong>
    <div>{props.report.weather}</div>
  </div>
  )
}


export default CityBio;