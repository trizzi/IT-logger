import React, { useEffect } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import Searchbar from './components/layouts/Searchbar';
import Logs from './components/logs/Logs';
import AddBtn from './components/layouts/AddBtn';
import AddLogModal from './components/logs/AddLogModal';

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
				<AddBtn />
				<AddLogModal />
				<Logs />
			</div>
		</div>
	);
};

export default App;
