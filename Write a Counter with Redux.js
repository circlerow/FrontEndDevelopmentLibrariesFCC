const INCREMENT = 'INCREMENT'; // Define a constant for increment action types
const DECREMENT = 'DECREMENT'; // Define a constant for decrement action types

const counterReducer = (state = 0, action) => {// Define the counter reducer which will increment or decrement the state based on the action it receives
    switch(action.type){
        case INCREMENT:
            return state + 1;
        case DECREMENT:
            return state -1;
        default:
            return state;
    }
}
const incAction = ()=>{
    return {
        type:INCREMENT
    }
}

const decAction = ()=>{
    return{
        type:DECREMENT
    }
}

const store = Redux.createStore(counterReducer);// Define an action creator for incrementing