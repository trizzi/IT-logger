import React from 'react'
import { connect } from 'react-redux'
import { getTechs } from '../../actions/techAction'
import PropTypes from 'prop-types'

const TechSelectOptions = ({ tech:{ techs, loading },getTechs}) => {
    return (
        !loading && techs !== null && techs.map(t => (
            <option
              key={t.id} value={`${t.firstName} ${t.lastName}`}
            >{t.firstName} {t.lastName}</option>
        ))
    )
}

TechSelectOptions.propTypes = {
   tech: PropTypes.object.isRequired,
   getTechs: PropTypes.func.isRequired, 
}

const mapStateToProps = state => ({
    tech: state.tech
})

export default connect(mapStateToProps, {getTechs})(TechSelectOptions)
