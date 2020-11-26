import React from 'react';
import { connect } from 'react-redux';

import { setTextFilter, sortByAmount, sortByDate } from './../actions/filters';

// Changing the value of redux store filters text by dispatching an action based on the e target (input)
const ExpenseListFilters = (props) => (
	<div>
		<input
			type='text'
			value={props.filters.text}
			onChange={(e) => {
				props.dispatch(setTextFilter(e.target.value));
			}}
		/>
		<select
			value={props.filters.sortBy}
			onChange={(e) => {
				e.target.value === 'date'
					? props.dispatch(sortByDate())
					: props.dispatch(sortByAmount());
			}}
		>
			<option value='date'>Date</option>
			<option value='amount'>Amount</option>
		</select>
	</div>
);

const mapStateToProps = (state) => {
	return {
		filters: state.filters,
	};
};

const ConnectedExpenseListFilters = connect(mapStateToProps)(
	ExpenseListFilters
);

export default ConnectedExpenseListFilters;
