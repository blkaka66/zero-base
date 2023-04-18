import { Product } from "../getApi";
// 카트에 상품을 추가하는 액션 타입
export const ADD_TO_CART = 'ADD_TO_CART';

// 카트에서 상품을 제거하는 액션 타입
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';

// 카트에 상품을 추가하는 액션 생성 함수
export const addToCart = (item: Product) => {
  return {
    type: ADD_TO_CART,
    payload: item,
  };
};

// 카트에서 상품을 제거하는 액션 생성 함수
export const removeFromCart = (id: number) => {
  return {
    type: REMOVE_FROM_CART,
    payload: id,
  };
};
