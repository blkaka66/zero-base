import React from 'react'
import { useSelector } from 'react-redux';
import  RootState  from '../RootState';
import { Product } from '../getApi';
import styles from './ShopCart.module.css';
import { useDispatch } from 'react-redux';
import { addToCart,removeFromCart } from '../Cart/CartActions';
function ShopCart(): JSX.Element  {
  const cartItems = useSelector((state: RootState) => state.cart.cartItems);
  return (
    <div className={styles.bodys}>
         <div className={styles.cartContainer}>
            {cartItems.map((product)=>(
                <FlexCart key={product.id} product={product}></FlexCart>
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
         <button className={styles.gotoJang} onClick={handleRemoveFromCart}>-</button>
         <span className={styles.count}>{product.cartCount}</span>
         <button className={styles.asd} onClick={handleAddToCart}>+</button> 
      </div>
    )
}



export default ShopCart;