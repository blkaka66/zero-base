import React, { useState, useEffect } from 'react';
import getProducts from '../getApi';
import { useParams } from 'react-router-dom';
import styles from './ProductDetail.module.css';
import {  useDispatch } from 'react-redux';
import { addToCart,removeFromCart } from '../Cart/CartActions';
import { Product } from '../getApi';
// export interface Product {
//   id: number;
//   title: string;
//   price: number;
//   description: string;
//   category: string;
//   image: string;
//   rating:{
//     count:number;
//     rate:number;
//   }
// }

function ProductDetail(): JSX.Element {
  const [productInfo, setProductInfo] = useState<Product | null>(null);
  const { id } = useParams<{ id: string }>();
  const products = getProducts();

  const dispatch = useDispatch();
  const productId = Number(id);
  useEffect(() => {
    const fetchData = async () => {
      const info = getProductsById(products, productId);
      setProductInfo(info[0]);
    };
    fetchData();
  }, [products, productId]);

  if (!productInfo) {
    // 로딩 중 처리
    return <></>;
  }
  const handleAddToCart = () => {
    // 카트에 상품 추가

    dispatch(addToCart(productInfo));
  };

  const handleRemoveFromCart = () => {
    // 카트에서 상품 제거

    dispatch(removeFromCart(productInfo.id));
  };
  return (
    
      <div className={styles.bodys}>
        <div className={styles.imgContainer}>
          <img src={productInfo.image} ></img>
        </div>
        <div className={styles.title}><span>{productInfo.title}</span></div>
        <div className={styles.discrpit}><span>{productInfo.description}</span></div>
        <div className={styles.rating}><span>{productInfo.rating.rate}/{productInfo.rating.count}참여</span></div>
        <div className={styles.price}><span>${productInfo.price}</span></div> 
        <button className={styles.gotoJang} onClick={handleRemoveFromCart}>장바구니에 담기</button>
        <button className={styles.asd} onClick={handleAddToCart}>장바구니로 이동</button>  
      </div>
    
  );
}

export function getProductsById(products: Product[], id: number) {
 
  return products.filter((product) => product.id === id);
  
}


export default ProductDetail;
