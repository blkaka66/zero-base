
export const SET_SELECTED_TAB = 'SET_SELECTED_TAB';

export const setSelectedTab = (index) => ({
  type: SET_SELECTED_TAB,
  payload: index,
});

export default setSelectedTab;