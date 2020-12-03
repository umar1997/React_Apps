const express = require('express');
let request = require('request');
const app = express();
const port = 5000;

app.get('/', (req, res) => {
	res.send('Weather App');
});

app.get('/getWeather', (req, res) => {
	request(
		'http://api.weatherstack.com/current?access_key=02f077ff420ae926370fac842ce53197&query=New York',
		function (error, response, body) {
			if (!error && response.statusCode == 200) {
				const parsedBody = JSON.parse(body);
				const temp = parsedBody['current']['temperature'];
				res.send({ temp });
			}
		}
	);
});

app.listen(port, () => {
	console.log(`Server running at http://localhost:${port}`);
});
