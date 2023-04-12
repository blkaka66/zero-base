
import { SET_SELECTED_TAB } from './actions.js';

const initialState = {
  selectedTabIdx: 0,
};

const tabsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SELECTED_TAB:
      return {
        ...state,
        selectedTabIdx: action.payload,
      };
    default:
      return state;
  }
};

export default tabsReducer;