import React from 'react';

const Todo = ({ title, subTitle, setProps }) => {
	return (
		<div>
			<h1>{title}</h1>
			<h3>{subTitle}</h3>
			<button
				onClick={() =>
					setProps({
						title,
						subTitle: 'Sub Title From Child',
					})
				}
			>
				Change Title
			</button>
		</div>
	);
};

export default Todo;
