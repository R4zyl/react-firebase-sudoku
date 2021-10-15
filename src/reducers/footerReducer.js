import {
    HIDE_FOOTER,
    SHOW_FOOTER,
  } from '../constants/actionTypes';
  
  const initialState = {
    visibility: true,
  };
  
  export const footerReducer = (state = initialState, action) => {
    if (action.type === HIDE_FOOTER) {
      return {
        ...state,
        visibility: false,
      };
    }
    if (action.type === SHOW_FOOTER) {
      return {
        ...state,
        visibility: true,
      };
    }
    return state;
  }