import {
    HIDE_FOOTER,
    SHOW_FOOTER,
  } from '../constants/actionTypes';
  
  export const hideFooterAction = () => ({
      type: HIDE_FOOTER,
    });
  
  export const showFooterAction = () => ({
      type: SHOW_FOOTER,
  });