import { INCREMENT_COUNT, DECREMENT_COUNT } from '../actions/types';

const initialState = 0;

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_COUNT:
      return state + 1;
    case DECREMENT_COUNT:
      return state - 1;
    default:
      return state;
  }
};

export default counterReducer;
