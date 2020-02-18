import React from 'react';
import {storeFactory} from '../../../test/testUtils'
import {correctGuess} from './action/index'

describe('guessWord action dispatcher',()=>{

    const secretWord="party"
    const unsuccessWord = "train"

    describe('no guessed words',()=>{
        let store;
        const initialState = {secretWord,success:false,guessedWords:[]}
        beforeEach(()=>{
            store = storeFactory(initialState)
        })
        test('update correctly for unsuccessful guess',()=>{
            store.dispatch(correctGuess(unsuccessWord))
            const newState = store.getState()
            const expectState = {
                ...initialState,
                success:false,
                guessedWords:[
                    {
                        guessedWord:unsuccessWord,
                        letterMatchCount:3
                    }
                ]
            }
            expect(newState).toEqual(expectState)
        })
        test('update correctly for successful guess',()=>{
            store.dispatch(correctGuess(secretWord))
            const newState = store.getState()
            const expectState = {
                ...initialState,
                success:true,
                guessedWords:[
                    {
                        guessedWord:secretWord,
                        letterMatchCount:5
                    }
                ]
            }
            expect(newState).toEqual(expectState)
        })
    })

    describe('some guessed words',()=>{
        const guessedWords = [{guessedWord:'agile',letterMatchCount:1}]
        let store
        const initialState = {secretWord,guessedWords,success:false}
        beforeEach(()=>{
            store = storeFactory(initialState)
        })

        test('update correctly for unsuccessful guess',()=>{
            store.dispatch(correctGuess(unsuccessWord))
            const newState = store.getState()
            const expectState = {
                ...initialState,
                success:false,
                guessedWords:[
                    ...guessedWords,
                    {
                        guessedWord:unsuccessWord,
                        letterMatchCount:3
                    }
                ]
            }
            
            expect(newState).toEqual(expectState)
        })
        test('update correctly for successful guess',()=>{
            store.dispatch(correctGuess(secretWord))
            const newState = store.getState()
            const expectState = {
                ...initialState,
                success:true,
                guessedWords:[
                    ...guessedWords,
                    {
                        guessedWord:secretWord,
                        letterMatchCount:5
                    }
                ]
            }
            expect(newState).toEqual(expectState)
        })
    })
})