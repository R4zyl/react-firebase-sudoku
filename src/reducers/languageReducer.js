import {
    CHANGE_LANGUAGE_ENG,
    CHANGE_LANGUAGE_HUN,
    UNLOAD_STORE,
  } from '../constants/actionTypes';
  
  const initialState = {
    language: 'hun',
  };
  
  export const languageReducer = (state = initialState, action) => {
    if (action.type === CHANGE_LANGUAGE_ENG) {
      return {
        ...state,
        language: 'eng',
      };
    }
    if (action.type === CHANGE_LANGUAGE_HUN) {
      return {
        ...state,
        language: 'hun',
      };
    }
    if (action.type === UNLOAD_STORE) {
      return initialState;
    }
    return state;
  }