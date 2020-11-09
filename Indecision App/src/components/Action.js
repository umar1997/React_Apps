import React from 'react';

// We can implicitly return our JSX without returning
const Action = (props) => (
	<div>
		<button
			className='big-button'
			onClick={props.handlePick}
			disabled={!props.hasOptions}
		>
			What should I do?
		</button>
	</div>
);

export default Action;
