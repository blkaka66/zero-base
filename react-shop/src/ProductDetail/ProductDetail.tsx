import { useState, useEffect } from 'react';
import getProducts from '../getApi';
import { useParams,Link } from 'react-router-dom';
import styles from './ProductDetail.module.css';
import {  useDispatch } from 'react-redux';
import { addToCart,removeFromCart } from '../Cart/CartActions';
import { Product } from '../getApi';
interface ProductDetailProps {

  theme:boolean;
}



function ProductDetail(theme:ProductDetailProps): JSX.Element {
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
    
    <div className={`${styles.bodys} ${theme.theme ? styles.darkHeader : styles.lightHeader}`}>
        <div className={styles.imgContainer}>
          <img src={productInfo.image} ></img>
        </div>
        <div className={styles.title}><span>{productInfo.title}</span></div>
        <div className={styles.discrpit}><span>{productInfo.description}</span></div>
        <div className={styles.rating}><span>{productInfo.rating.rate}/{productInfo.rating.count}참여</span></div>
        <div className={styles.price}><span>${productInfo.price}</span></div> 
        <button className={styles.addtoJang} onClick={handleAddToCart}>장바구니에 담기</button>
        <Link to={`/cart`} className={styles.gotoJang} ><span>장바구니로 이동</span></Link>  
      </div>
    
  );
}

export function getProductsById(products: Product[], id: number) {
 
  return products.filter((product) => product.id === id);
  
}


export default ProductDetail;
