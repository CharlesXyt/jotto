import React from 'react'
import {findByTestAttr,checkProps} from '../../../test/testUtils'
import {shallow} from 'enzyme'
import GuessWord from './GuessWord'
import GuessWords from './GuessWord'

const defaultProps = {
    guessedWords:[{
        guessedWord:'train',
        letterMatchCount:3
    }],
    success:true,
    secretWord:"tttt"
}

const setup = (props={}) => {
    const setupProps = {...defaultProps,...props}
    return shallow(<GuessWord {...setupProps}/>)
}




test('does not throw warning with expected props',() => {
    checkProps(GuessWords,defaultProps)
})

describe('if there are no words guessed',() => {
    let wrapper
    beforeEach(()=>{
        wrapper = setup({guessedWords:[]})
    })
    test('GuessWord render without error',() => {
        const component = findByTestAttr(wrapper,"component-guessword")
        expect(component.length).toBe(1);
    
    })

    test('render intruction to guess a word',() => {
        const component = findByTestAttr(wrapper,"guessword-instruction")
        expect(component.text().length).not.toBe(0);
    
    })
})

describe('if there are words guessed',() => {
    let wrapper

    const guessedWords = [
        {guessedWord:'train',letterMatchCount:3},
        {guessedWord:'agile',letterMatchCount:1},
        {guessedWord:'party',letterMatchCount:5}
    ]

    beforeEach(()=>{
        wrapper = setup({
            guessedWords:guessedWords
        })
    })
    test('GuessWord render without error',() => {
        const component = findByTestAttr(wrapper,"component-guessword")
        expect(component.length).toBe(1);
    
    })

    test('render guessword without error',() => {
        const component = findByTestAttr(wrapper,"guessed-word-nodes")
        expect(component.length).toBe(1);
    
    })

    test('the number of words is correct',() => {
        const component = findByTestAttr(wrapper,"guessed-word-node")
        expect(component.length).toBe(guessedWords.length);
    
    })
})