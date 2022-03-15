import { INCREMENT_COUNT, DECREMENT_COUNT, RESET_COUNT } from '../actions/types';

const initialState = 0;

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_COUNT:
      return state + 1;
    case DECREMENT_COUNT:
      return state - 1;
      case RESET_COUNT:
      return state = initialState;
    default:
      return state;
  }
};

export default counterReducer;
