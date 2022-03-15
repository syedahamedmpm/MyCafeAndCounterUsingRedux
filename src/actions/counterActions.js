import { INCREMENT_COUNT,DECREMENT_COUNT } from './types';

export const incCount = count => ({
    type: INCREMENT_COUNT,
    payload: count
});

export const decCount = count => ({
    type: DECREMENT_COUNT,
    payload: count
});