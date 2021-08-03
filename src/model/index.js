//CONFIGURATION OF STORE

import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";

import Reducer from "./reducers/index.js";

export default createStore(Reducer, applyMiddleware(thunkMiddleware));
