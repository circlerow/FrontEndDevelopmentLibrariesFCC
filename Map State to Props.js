const state = [];

// Change code below this line
const mapStateToProps = (state) => {
    return {
        messages: state
    }
}
// Change code above this line
const store = Redux.createStore(
    messageReducer
);
        