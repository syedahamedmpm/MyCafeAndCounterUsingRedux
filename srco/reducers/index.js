import orderReducer from './orderReducer'
import { combineReducers } from "redux";

export default combineReducers({
  orders: orderReducer
});