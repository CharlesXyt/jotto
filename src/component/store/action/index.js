import * as actionTypes from './actionTypes'
import {getLetterMatchCount} from '../../../helper/index'





export const dispatchCorrectGuess = () => {
    return {
        type:actionTypes.CORRECT_GUESS,
    }
}

export const dispatchGuess = (guessedWord,letterMatchCount) => {
    return {
        type:actionTypes.GUESS_WORD,
        payload:{
            guessedWord,letterMatchCount
        }
    }
}


export const correctGuess = (guessWord) => {
    return (dispatch,getState) =>{
        const secretWord = getState().secretWord;
        const letterMatchCount = getLetterMatchCount(guessWord,secretWord)
        dispatch(dispatchGuess(guessWord,letterMatchCount))
        if(guessWord === secretWord){
            dispatch(dispatchCorrectGuess())
        }
    }
}