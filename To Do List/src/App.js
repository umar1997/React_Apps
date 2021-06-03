import React, { useState } from 'react';
import './App.css';
import Todo from './components/Todo';

function App() {
	const [properties, setProperties] = useState({
		title: 'My Title',
		subTitle: 'My Sub Title',
	});

	return (
		<div className='App'>
			<Todo {...properties} setProps={setProperties} />
			<button
				onClick={() =>
					setProperties({
						...properties,
						title: 'Title Change from Parent',
					})
				}
			>
				Change Title Parent
			</button>
		</div>
	);
}

export default App;
