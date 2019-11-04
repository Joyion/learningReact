import {createStore} from 'redux';



const incrementCount = ({incrementBy = 1} = {}) => ({
    type: 'INCREMENT',
    incrementBy
})

const decrementCount = ({decrementBy = 1} = {}) => ({
        type: 'DECREMENT',
        decrementBy
});

const resetCount = ({set = 0} = {}) => ({
    type: 'RESET',
    set
})



const countReducer = (state = {count: 0}, action) => {
    switch(action.type){
        case 'INCREMENT': 
            return {
                count: state.count + action.incrementBy
            };
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            };
        case 'RESET': 
          return  {
                count: action.set
            }
        default: 
            return state;
    }
    
};

const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});


// store.dispatch({
//     type: 'INCREMENT',
//     incrementBy: 5
// });

store.dispatch(incrementCount({incrementBy: 5}));
store.dispatch(decrementCount({decrementBy: 10}));
store.dispatch(resetCount({set: 0}));
unsubscribe();



console.log(store.getState())
