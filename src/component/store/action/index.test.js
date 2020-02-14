import {correctGuess} from './'
import * as actionTypes from './actionTypes'

describe('correctGuess',() =>{
    test('return an action with type CORRECT_GUESS',()=>{
        const action = correctGuess();
        expect(action).toEqual({"type": actionTypes.CORRECT_GUESS})
    })
})