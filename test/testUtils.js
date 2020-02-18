import checkPropTypes from 'check-prop-types'
import {createStore,applyMiddleware, compose} from 'redux'
import rootReducer from '../src/component/store/reducer/jottoReducer'
import thunk from 'redux-thunk'

export const storeFactory = (initialState) =>{
    
    return createStore(rootReducer,initialState,compose(applyMiddleware(thunk)))
}


export const findByTestAttr = (wrapper,val) =>{
    return wrapper.find(`[data-test="${val}"]`)
}

export const checkProps = (component,conformingProps) => {
    const propError = checkPropTypes(component.propTypes,conformingProps,'prop',component.name)
    expect(propError).toBeUndefined();
}