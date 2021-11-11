import React, { useEffect } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import Searchbar from './components/layouts/Searchbar';
import Logs from './components/logs/Logs';

import './App.css';

const App = () => {
	useEffect(() => {
		// initializes materialize js
		M.AutoInit();
	});
	return (
		<div className='App'>
			<Searchbar />
			<div className="container">
               <Logs />
			</div>
		</div>
	);
};

export default App;
