import { useState } from 'react';
import { useSelector } from 'react-redux';
import  RootState  from '../RootState';
import { Product } from '../getApi';
import styles from './ShopCart.module.css';
import { useDispatch } from 'react-redux';
import { addToCart,removeFromCart,clearCart } from '../Cart/CartActions';
import { useEffect } from 'react';
interface ShopCartProps {

  theme:boolean;
}

function ShopCart(theme:ShopCartProps): JSX.Element  {
  const cartItems = useSelector((state: RootState) => state.cart.cartItems);
  const dispatch = useDispatch();
  const HandleclearCart = () => {
    // 카트 초기화

    dispatch(clearCart());
  };
  // const [sum, setSum] = useState(0);
  // let res= 0;
  // for(let i=0;i<cartItems.length;i++){
  //   res+=cartItems[i].cartCount * cartItems[i].price;
  // }
  // setSum(res);

  const [sum, setSum] = useState(0);
  let res = 0;
  useEffect(() => {
    for(let i = 0; i < cartItems.length; i++) {
      console.log(cartItems);
      res += cartItems[i].cartCount * cartItems[i].price;
    }
    res = Math.round(res);
    setSum((res/2));
  }, [cartItems]);

  
  return (
    <div className={`${styles.bodys} ${theme.theme ? styles.darkHeader : styles.lightHeader}`}>
         <div className={styles.sumResult}><span>총 :${sum}</span></div>
         <button className={styles.purchase} onClick={HandleclearCart}>구매하기</button> 
         <div className={styles.cartContainer}>
            {cartItems.map((product)=>(
                <FlexCart key={product.id} product={product} ></FlexCart>
            ))}
        </div>
    </div>
  )
}

function FlexCart({product}:{product: Product}): JSX.Element {
    const dispatch = useDispatch();
    const sumPrice= ((product.price * product.cartCount).toFixed());
    const handleAddToCart = () => {
        // 카트에 상품 추가
    
        dispatch(addToCart(product));
      };
    
      const handleRemoveFromCart = () => {
        // 카트에서 상품 제거
    
        dispatch(removeFromCart(product.id));
      };

      

    return(
       <div className={styles.container}>
        <div className={styles.imgContainer}>
        <img src={product.image} ></img>
        </div>
         <div className={styles.title}><span>{product.title }</span></div>
         <div className={styles.price}><span>${sumPrice}</span></div>
         <button className={styles.minus} onClick={handleRemoveFromCart}>-</button>
         <span className={styles.count}>{product.cartCount}</span>
         <button className={styles.plus} onClick={handleAddToCart}>+</button> 
      </div>
    )
}



export default ShopCart;