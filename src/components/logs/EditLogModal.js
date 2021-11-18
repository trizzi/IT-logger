import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { updateLogs } from '../../actions/logAction'
import PropTypes from 'prop-types'

import M from 'materialize-css/dist/js/materialize.min.js'

const EditLogModal = ({ current, updateLogs}) => {
    const [message, setMessage] = useState('')
    const [attention, setAttention] = useState(false)
    const [tech, setTech] = useState('')

    useEffect(()=>{
        if(current){
            setMessage(current.message)
            setTech(current.tech)
            setAttention(current.attention)
        }
    }, [current])

    const onSubmit = () => {
        if (message === '' || tech === '') {
            M.toast({html: 'Please enter a message or tech'})
        }else {
              console.log(message, tech, attention)
              const updLog = {
                  id: current.id,
                  message,
                  attention,
                  tech,
                  date: new Date()
              }
              updateLogs(updLog)
              M.toast({html: `Log updated by ${tech}`})
         // Clear all fields
        setMessage('')
        setTech('')
        setAttention(false)
        }
    }



    return (
        <div id="edit-log-modal" className='modal' style={modalStyle}>
            <div className="modal-content">
                <h4>Enter System Log</h4>
                <div className='row'>
                    <div className="input-field">
                        <input type='text'
                            name='message'
                            value={message}
                            onChange={e => setMessage(e.target.value)}
                        />
                      
                    </div>
                </div>

                <div className="row">
                    <div className="input-field">
                        <select
                            name='tech'
                            value={tech}
                            className="browser-default"
                            onChange={e=> setTech(e.target.value)}
                        >
                        <option value='' disabled>
                            Select Technician
                        </option>
                        <option value='John Doe'>John Doe</option>
                        <option value='Sam Smith'>Sam Smith</option>
                        <option value='Sarah Wilson'>Sarah Wilson </option>
                        </select>
                        </div>
                </div>
                       <div className="row">
                <div className="input-field">
                    <p>
                        <label>
                            <input
                                type="checkbox"
                                className='filled-in'
                                checked={attention}
                                value={attention}
                                onChange={e=>setAttention(!attention)}
                            />
                            <span>Needs Attention</span>
                        </label>
                    </p>
                </div>
              </div>
            </div>

            <div className='modal-footer'>
                <a href='#!'
                    onClick={onSubmit}
                    className='modal-close waves-effect blue waves-light btn'>
                    Enter
                </a>
         </div>
        </div>
    )
}
const modalStyle = {
    width: '75%',
    height: '75%'
}

EditLogModal.propTypes = {
    current: PropTypes.object,
    updateLogs: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
    current: state.log.current
})

export default connect(mapStateToProps, { updateLogs })(EditLogModal)
