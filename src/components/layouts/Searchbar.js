import React, { useRef } from "react";
import { connect } from 'react-redux'
import { searchLogs } from "../../actions/logAction";
import PropTypes from 'prop-types'


const Searchbar = ({ searchLogs }) => {
	const text = useRef('')
	
	const onChange = e => {
		searchLogs(text.current.value)
	}

	return (
		<nav style={{ marginBottom: '30px' }} className='blue'>
			<div className='nav-wrapper'>
				<form>
					<div className='input-field'>
						<input id='search' type='search' placeholder='Search logs...' ref={text} onChange={onChange}/>
						<label className='label-icon' htmlFor='search'>
							<i className='material-icons'>search</i>
						</label>
						<i className='material-icons'>close</i>
					</div>
				</form>
			</div>
		</nav>
	);
};

Searchbar.propTypes = {
	searchLogs: PropTypes.func.isRequired,
}

export default connect(null, { searchLogs })(Searchbar);
