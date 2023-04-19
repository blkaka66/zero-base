import { ADD_TO_CART, REMOVE_FROM_CART ,CLEAR_CART} from './CartActions';
import { Product } from '../getApi';


export interface CartState {
  cartItems: Product[];
}

const cartItemsFromStorage = localStorage.getItem('cartItems');//로컬스토리지에 저장돼있는 cartitems들고오기
const initialState: CartState = {//새로고침하거나 맨 처음 서버시작할때 cartitems할당
  cartItems: cartItemsFromStorage ? JSON.parse(cartItemsFromStorage) : [],//만약 cartitems비어있으면 빈 배열 할당
};

const cartReducer = (state = initialState, action: any) => {//cartaction에서 넘겨받은 action타입에따라 행동이 달라짐
  switch (action.type) {//만약 액션타입이
    case ADD_TO_CART://장바구니에 담기면
      const existingProductIndex = state.cartItems.findIndex(item => item.id === action.payload.id);//일단 장바구니에 같은 상품담겨있는지 확인
      let updatedCartItems = [...state.cartItems];//일단 배열 복사해서
      if (existingProductIndex !== -1) {//만약 담겨있으면
       
        updatedCartItems[existingProductIndex].cartCount += 1;//해당 product의 cartcoun++

        localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));//로컬스토리지에 바뀐거 저장
        console.log(JSON.parse(localStorage.getItem('cartItems') || '[]'));
        
      } else {//만약 cartitems에 product없으면
        updatedCartItems = [...state.cartItems, { ...action.payload, cartCount: 1 }]; //새로담기
        localStorage.setItem('cartItems', JSON.stringify(updatedCartItems)); //로컬스토리지에 바뀐거 저장
        
      }
      return {
        ...state,
        cartItems: updatedCartItems,//cartitems는 이제 updatedCartItems로 대체
      };

    case REMOVE_FROM_CART://장바구니에서 삭제면
      const existingProduct = state.cartItems.find(item => item.id === action.payload);//일단 삭제할 product가 존재하는지 확인
      if (existingProduct && existingProduct.cartCount > 1) {//존재하고 product가 2개이상이면
        let updatedCartItems = [...state.cartItems];//일단 배열복사해서
        const existingProductIndex = state.cartItems.findIndex(item => item.id === action.payload);//해당 product 의 index찾고
        updatedCartItems[existingProductIndex].cartCount -= 1;//cartcount-- 

        localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));//로컬스토리지에 저장

        return {
          ...state,
          cartItems: updatedCartItems,//리턴
        };
      } else {//만약 product가 1개면
        let updatedCartItems = [...state.cartItems];
        updatedCartItems=state.cartItems.filter(item => item.id !== action.payload);//그 product는 삭제
        localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
        return {
          ...state,
          cartItems: updatedCartItems,
        };
      };
      case CLEAR_CART:
      localStorage.removeItem('cartItems'); 
      return {
        ...state,
        cartItems: [],
      };

    default:
      return state;
  }
};

export default cartReducer;
