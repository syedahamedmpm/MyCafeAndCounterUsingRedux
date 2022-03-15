import orderReducer from "./orderReducer";
import counterReducer from "./counterReducer";
import { combineReducers } from "redux";

export default combineReducers({
    orders: orderReducer,
    counters : counterReducer

});
