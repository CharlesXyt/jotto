import React from 'react'
import PropTypes from 'prop-types'

const GuessWords = (props) => {
    return (
        <div data-test="component-guessword">
            {props.guessedWords.length === 0 ? <span data-test="guessword-instruction">Try to guess the secret word</span> : null }
        </div>
    )
}

GuessWords.propTypes = {
    guessedWords:PropTypes.arrayOf(
        PropTypes.shape({
            guessedWord:PropTypes.string.isRequired,
            letterMatchCount:PropTypes.number.isRequired
        })
    ).isRequired,
    success:PropTypes.bool.isRequired,
    secretWord:PropTypes.string.isRequired
}


export default GuessWords