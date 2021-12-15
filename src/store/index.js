import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";
import rootReducer from '../reducers';

//takes callback, middleware
const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(thunk)
)); //allow async actions

export default store;






