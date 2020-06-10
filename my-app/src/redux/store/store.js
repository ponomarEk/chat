import { applyMiddleware, createStore } from "redux";
import { myReducer } from '../reducer/myReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";

export const store = createStore( myReducer ,composeWithDevTools(applyMiddleware(thunk)));
