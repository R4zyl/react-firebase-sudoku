import {
  CHANGE_EASY1,
  CHANGE_EASY2,
  CHANGE_EASY3,
  CHANGE_EASY4,
  CHANGE_EASY5,
  RESET_BOARD_ACTION,
} from '../constants/actionTypes';

export const changeEasy1Action = (payload) => ({
  type: CHANGE_EASY1,
  payload:payload
});

export const changeEasy2Action = (payload) => ({
  type: CHANGE_EASY2,
  payload:payload
});

export const changeEasy3Action = (payload) => ({
  type: CHANGE_EASY3,
  payload:payload
});
export const changeEasy4Action = (payload) => ({
  type: CHANGE_EASY4,
  payload:payload
});
export const changeEasy5Action = (payload) => ({
  type: CHANGE_EASY5,
  payload:payload
});

export const resetBoardAction = () => ({
  type: RESET_BOARD_ACTION,
});
