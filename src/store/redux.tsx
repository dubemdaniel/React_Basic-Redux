import {legacy_createStore as createStore } from 'redux';

interface IState {
    counter: number
    showCounter?: boolean
}

const initialState:IState = {counter: 0, showCounter : true}

const counterReducer = (state = initialState, action:any):IState => {
    switch(action.type){
        case "INCREMENT":
            return {counter : state.counter +1};
        case "DECREMENT" :
            return {counter : state.counter -1 };
        default:
            return state;
    }
}

const store = createStore(counterReducer)

export default store;