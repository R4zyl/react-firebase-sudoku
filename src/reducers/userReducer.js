import {
  LOAD_USER_DATA,
} from '../constants/actionTypes';

const initialState = {
  user: null,
};

export const userReducer = (state = initialState, action) => {
  if (action.type === LOAD_USER_DATA) {
    return {
      ...state,
      user: action.payload,
    };
  }
  return state;
}