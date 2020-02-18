import * as actionTypes from '../action/actionTypes'
import jottoReducer from './jottoReducer'

test('returns default initial state of false when no action is passes',() => {
    const newState = jottoReducer(undefined,{})
    expect(newState.success).toBe(false)
})

test('returns state of true when CORRECT_GUESS action is passes',() => {
    const newState = jottoReducer(undefined,{type:actionTypes.CORRECT_GUESS})
    expect(newState.success).toBe(true)
})