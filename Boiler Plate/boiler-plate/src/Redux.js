import { createStore } from 'redux';

// This function is called the reducer
// Reducer chooses what to do with the state on the basis of the action
const countReducer = (state = { count: 0 }, action) => {
	switch (action.type) {
		case 'INCREMENT':
			const incrementBy =
				typeof action.incrementBy === 'number' ? action.incrementBy : 1; // Dont need this if using Action generator
			return {
				count: state.count + incrementBy,
			};
		case 'DECREMENT':
			return {
				count: state.count - 1,
			};
		case 'RESET':
			return {
				count: 0,
			};
		default:
			return state;
	}
};

const store = createStore(countReducer);

store.getState(); // Returns current state

// Actions change the current state, they do this by sending an object to the store
// Always need to give type in Actions but an give extra stuff too
store.dispatch({
	type: 'INCREMENT',
	incrementBy: 5, // Dynamic Info Added
});

store.dispatch({
	type: 'DECREMENT',
});

store.dispatch({
	type: 'RESET',
});

// This gets called every time the store changes
store.subscribe(() => {});

// To unsubscribe/ not get called when the store changes
// call the function between actions and being an action it will only be called that once
const unsubscribe = store.subscribe(() => {});

// Action Generators that generate action objects

const incrementCount = (payload = {}) => {
	return {
		type: 'INCREMENT',
		incrementBy:
			typeof payload.incrementBy === 'number' ? payload.incrementBy : 1,
	};
};

store.dispatch(incrementCount({ incrementBy: 5 }));
