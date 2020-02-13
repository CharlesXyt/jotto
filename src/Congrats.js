import React from 'react'

export default (props) => {
    return (
        <div data-test='component-congrats'>
            {props.success ? <span data-test="congrats-message">Congrats</span> : null}
        </div>
    )
} 