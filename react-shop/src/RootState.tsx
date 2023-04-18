// RootState.ts 파일

import { CartState } from './Cart/CartReducer';
// 다른 리듀서의 상태 타입들도 필요에 따라 추가로 import

// RootState 타입 정의
export interface RootState {
  cart: CartState;
  // 다른 리듀서의 상태 타입들도 필요에 따라 추가
}

// RootState를 내보냄
export default RootState;
