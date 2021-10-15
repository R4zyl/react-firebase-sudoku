import {
  CHANGE_EASY1,
  CHANGE_EASY2,
  CHANGE_EASY3,
  CHANGE_EASY4,
  CHANGE_EASY5,
  RESET_BOARD_ACTION,
} from '../constants/actionTypes';

const initialState = {
  easy1: 0,
  easy2: 0,
  easy3: 0,
  easy4: 0,
  easy5: 0,
};

export const easySudokuReducer = (state = initialState, action) => {
  if (action.type === CHANGE_EASY1) {
    return {
      ...state,
      easy1: action.payload,
    };
  }
  if (action.type === CHANGE_EASY2) {
    return {
      ...state,
      easy2: action.payload,
    };
  }
  if (action.type === CHANGE_EASY3) {
    return {
      ...state,
      easy3: action.payload,
    };
  }
  if (action.type === CHANGE_EASY4) {
    return {
      ...state,
      easy4: action.payload,
    };
  }
  if (action.type === CHANGE_EASY5) {
    return {
      ...state,
      easy5: action.payload,
    };
  }
  if (action.type === RESET_BOARD_ACTION) {
    return initialState;
  }
  return state;
};
