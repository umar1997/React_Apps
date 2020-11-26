import React, { Component } from 'react';
import { Provider } from 'react-redux';

import 'normalize.css/normalize.css'; // Same stuff for different browsers
import './styles/styles.scss';

import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';

const store = configureStore();

store.dispatch(
	addExpense({ description: 'Water Bill', amount: 2000, createdAt: 200 })
);

store.dispatch(
	addExpense({ description: 'Gas Bill', amount: 3000, createdAt: 100 })
);

console.log(store.getState());

class App extends Component {
	render() {
		return (
			<div>
				<Provider store={store}>
					<AppRouter />
				</Provider>
			</div>
		);
	}
}

export default App;
