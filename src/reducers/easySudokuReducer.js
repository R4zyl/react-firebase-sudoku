import {
  SAVE_ARRAY_STATE,
  RESET_BOARD_ACTION,
} from '../constants/actionTypes';

const initialState = {
  controlArray:{
0:0,
1:0,
2:0,
3:0,
4:0,
5:0,
6:0,
7:0,
8:0,
9:0,
10:0,
11:0,
12:0,
13:0,
14:0,
15:0,
16:0,
17:0,
18:0,
19:0,
20:0,
21:0,
22:0,
23:0,
24:0,
25:0,
26:0,
27:0,
28:0,
29:0,
30:0,
31:0,
32:0,
33:0,
34:0,
35:0,
36:0,
37:0,
38:0,
39:0,
40:0
},
};

export const easySudokuReducer = (state = initialState, action) => {
  if (action.type === SAVE_ARRAY_STATE) {
    return {
      ...state,
       controlArray: action.payload,
    };
  }
  if (action.type === RESET_BOARD_ACTION) {
    return initialState
  }
  return state;
};
