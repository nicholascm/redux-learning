
var expect = require('expect'); 
// var Redux = require('redux'); 
// var createStore = Redux.createStore; 
var createStore = require('./store.js'); 

// the entire state of your UI an dapplication is represented in an object

// the state is redundant - an action is a minimal representation of the change to the data
// must have a 'type' property that is a string

// components don't know how something happens, they just dispatch an action
// the only way to change the state is by dispatching an action
// an action is just a plain js object 


// reducer function

// redux applications have function that takes state and action and returns next state of application
// MUST be pure 

const counter = (state = 0, action) => {
    switch(action.type) {
        case 'INCREMENT':
            return state + 1; 
        case 'DECREMENT':
            return state - 1; 
        default:
            return state; 
    } 
}

const store = createStore(counter); 

console.log(store.getState()); 

store.dispatch({type: 'INCREMENT'}); 
console.log(store.getState()); 


const render = () => {
    console.log('The new state is', store.getState()); 
}

store.subscribe(render); 
render(); 

setTimeout(() => {
    store.dispatch({ type: 'INCREMENT' }); 
}, 1000)


// tests 

expect(
    counter(0, { type: 'INCREMENT' })
).toEqual(1); 

expect(
    counter(1, { type: 'INCREMENT' })
).toEqual(2); 

expect(
    counter(2, { type: 'DECREMENT' })
).toEqual(1); 

console.log('Tests Passed'); 