

import { combineReducers } from 'redux';
import cartReducer from './Cart/CartReducer';

// 각 리듀서들을 결합하여 rootReducer를 생성z
const rootReducer = combineReducers({
  cart: cartReducer,
  
});

export default rootReducer;