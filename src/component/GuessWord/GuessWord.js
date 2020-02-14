import React from 'react'
import PropTypes from 'prop-types'

const GuessWords = (props) => {

    let content
   

    if(props.guessedWords.length === 0){
        content = <span data-test="guessword-instruction">Try to guess the secret word</span>
    }else{
        const guessedWordRows = props.guessedWords.map((word,index) => (
            <tr data-test="guessed-word-node" key={index}>
                <td>{word.guessedWord}</td>
                <td>{word.letterMatchCount}</td>
            </tr>
        ))
        content = (
            <div data-test="guessed-word-nodes">
                <h3>Guess Words</h3>
                <table>
                    <thead>
                        <tr><th>Guess</th><th>Matching Letters</th></tr>
                    </thead>
                    <tbody>
                        {guessedWordRows}
                    </tbody>
                </table>
            </div>
        )
    }

    return (
        <div data-test="component-guessword">
            {content}
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