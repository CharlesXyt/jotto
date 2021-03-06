import React from 'react'
import {shallow} from 'enzyme'
import {findByTestAttr,storeFactory} from '../../../test/testUtils'
import Input from './Input'

const setup = (initialState={}) => {
    const store = storeFactory(initialState)
    const wrapper = shallow(<Input store={store}/>).dive().dive()
    return wrapper
}

setup();

describe('render',()=>{
    describe('word has not been guessed',()=>{

        let wrapper
        beforeEach(() =>{
            const initialState = {success:false}
            wrapper = setup(initialState)
        })

        test('renders without error',()=>{
            const component = findByTestAttr(wrapper,'component-input')
            expect(component.length).toBe(1)
        })

        test('render inputbox',()=>{
            const component = findByTestAttr(wrapper,'input-box')
            expect(component.length).toBe(1)
        })

        test('render submit button',()=>{
            const component = findByTestAttr(wrapper,'submit-button')
            expect(component.length).toBe(1)
        })
    })
    describe('word has been guessed',()=>{

        let wrapper
        beforeEach(() =>{
            const initialState = {success:true}
            wrapper = setup(initialState)
        })

        test('renders without error',()=>{
            const component = findByTestAttr(wrapper,'component-input')
            expect(component.length).toBe(1)
        })
        test('',()=>{
            const component = findByTestAttr(wrapper,'input-box')
            expect(component.length).toBe(0)
        })
        test('',()=>{
            const component = findByTestAttr(wrapper,'submit-button')
            expect(component.length).toBe(0)
        })
    })
    
})

describe('update state',()=>{
    test('',()=>{
        
    })
})