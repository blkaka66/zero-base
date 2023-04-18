// rootReducer.ts 파일

import { combineReducers } from 'redux';
import cartReducer from './Cart/CartReducer';
// 다른 리듀서들도 필요에 따라 추가로 임포트

// 각 리듀서들을 결합하여 rootReducer를 생성z
const rootReducer = combineReducers({
  cart: cartReducer,
  // 다른 리듀서들도 필요에 따라 추가
});

export default rootReducer;