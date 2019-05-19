import { createStore, applyMiddleware } from 'redux';

import reducer from './reducers';

const logMiddleware = (store)=>(dispatch) => (action) => {
    console.log(action.type);
    console.log(store.getState());
    return dispatch(action);
}
const stringMiddleware = (store) => (dispatch)=>(action)=>{ // мы получаем не весь store а лишь 2 функции getState() и dispatch()
    if(typeof action==='string'){        
        return dispatch({type:action})
    };
    return dispatch(action);
}

const store = createStore(reducer, applyMiddleware(stringMiddleware,logMiddleware));
store.dispatch('HELLO_WORLD');

export default store;