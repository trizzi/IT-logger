import React from 'react'
import Moment from 'react-moment'
import PropTypes from 'prop-types'

const Logitem = ({log}) => {
    return (
        <li className="collection-item">
            <div>
                <a href="#edit-log-modal" className={`modal-trigger ${log.attention ? 'red-text' : 'blue-text'}`}>{log.message}</a><br />
                <span className="grey-text">
                    <span className="black-text">ID #{log.id} last seen by {''}</span>
                    <span className="black-text">{log.tech}</span>on{''}
                    <Moment format='MMMM Do YYYY,  h:mm:ss a'>{ log.date}</Moment>
                </span>
                <a href='#!' className="secondary-content">
                    <i className='material-icons grey-text'></i>
                </a>
            </div>
        </li>
    )
}

Logitem.propTypes = {
log:PropTypes.object.isRequired,
}

export default Logitem
