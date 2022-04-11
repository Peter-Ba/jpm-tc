const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 8000;
const { getWeatherReport } = require('./getWeatherReport')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api', (req, res) => {
  res.send(getWeatherReport());
});


app.listen(port, () => console.log(`🚀 Listening on port ${port} 🚀`));