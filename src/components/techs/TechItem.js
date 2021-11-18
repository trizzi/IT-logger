import React from 'react'
import { connect } from 'react-redux'
import { deleteTech } from '../../actions/techAction'
import PropTypes from 'prop-types'

import M from 'materialize-css/dist/js/materialize.min.js'

const TechItem = ({tech: {id, firstName, lastName}, deleteTech}) => {   
    const onDelete = () => {
        deleteTech(id)
        M.toast({html: 'Tech Deleted!'})
    }
    return (
        <li className='collection-item'>
            <div>
                {firstName} {lastName}
                <a href='#!' className='secondary-content' onClick={onDelete}>
                    <i className='material-icons grey-text'>delete </i>
                </a>
            </div>
        </li>
    )
}

TechItem.propTypes = {
tech: PropTypes.object.isRequired,
deleteTech: PropTypes.func.isRequired,
}

export default connect(null, { deleteTech })(TechItem)
