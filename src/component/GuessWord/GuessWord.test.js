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
    
})