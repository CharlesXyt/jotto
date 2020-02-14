import * as actionTypes from '../action/actionTypes'


const initialState = {
    success:false
}

const reducer = (state=initialState,actions) => {

    switch(actions.type){
        case actionTypes.CORRECT_GUESS:
            return {
                ...state,
                success:true
            }
        default:
            return state
    }
}


export default reducer;