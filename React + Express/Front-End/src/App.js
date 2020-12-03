import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
	constructor() {
		super();
		this.state = {
			weather: 'None',
		};
	}

	onHandleClick = () => {
		axios.get('/getWeather').then((response) => {
			this.setState(() => ({ weather: response.data.temp }));
		});
	};

	render() {
		return (
			<div>
				<h1>The Weather In New York is: {this.state.weather}</h1>
				<button onClick={this.onHandleClick}>Get weather!</button>
			</div>
		);
	}
}

export default App;
