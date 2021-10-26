import { useEffect } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';

import './App.css';

const App = () => {
	useEffect(() => {
		// initializes materialize js
		M.AutoInit();
	});
	return (
		<div className='App'>
			<h1>Hello Motherfucker!!!!</h1>
		</div>
	);
};

export default App;
