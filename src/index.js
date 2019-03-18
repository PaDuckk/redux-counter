import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';

// Action type
const INCREMENT = "INCREMENT";
// const INCREMENT = "INCREMENT";


// Action
function increase (diff) {
    return {
        type: INCREMENT,
        addBy: diff
    }
}
const initialState = {
    value: 0
}
// Reducer
const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT:
            return Object.assign({}, state, {
                value: state.value + action.addBy
            });
        default: 
            return state;
    }
}

// store
const store = createStore(counterReducer);

// counter app
class App extends React.Component {
    
    onClick = () => {
        this.props.store.dispatch(increase(1));
    }

    
    render() {
        const { store } = this.props;
        const style = {
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            cursor: 'pointer'
        }
        return(
            <div onClick={this.onClick} style={style}>
                <h1>{store.getState().value}</h1>
            </div>
        );
    }
}

const render = () => ReactDOM.render(<App store={store}/>, document.getElementById('root'));
store.subscribe(render);

render();
