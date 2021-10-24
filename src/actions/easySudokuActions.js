import {
  SAVE_ARRAY_STATE,
  RESET_BOARD_ACTION
} from '../constants/actionTypes';

export const saveArrayStateAction = (payload) => ({
  type: SAVE_ARRAY_STATE,
  payload:payload.controlArray
});

export const resetBoardAction = () => ({
  type: RESET_BOARD_ACTION,
});