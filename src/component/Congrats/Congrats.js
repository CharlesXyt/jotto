import React from 'react'
import PropTypes from 'prop-types'

const Congrats = (props) => {
    return (
        <div data-test='component-congrats' className="alert alert-success">
            {props.success ? <span data-test="congrats-message">Congrats</span> : null}
        </div>
    )
} 

Congrats.propTypes = {
    success:PropTypes.bool.isRequired
}


export default Congrats;