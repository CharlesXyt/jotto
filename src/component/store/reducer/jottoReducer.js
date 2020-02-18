import * as actionTypes from '../action/actionTypes'


const initialState = {
    success:false,
    secretWord:null,
    guessedWords:[]

}

const reducer = (state=initialState,actions) => {

    switch(actions.type){
        case actionTypes.CORRECT_GUESS:
            return {
                ...state,
                success:true,
            }
        case actionTypes.GUESS_WORD:
            return {
                ...state,
                guessedWords:[...state.guessedWords,actions.payload]
            }
        default:
            return state
    }
}


export default reducer;