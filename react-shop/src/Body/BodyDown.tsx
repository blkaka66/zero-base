import React from 'react';
import getProducts from '../getApi';
import styles from './BodyDown.module.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Product } from '../getApi';
interface BodyDownProps {
  theme:boolean;
}


export default function BodyDown(theme:BodyDownProps): JSX.Element {
  const products = getProducts();
  const clothProducts = classifyProducts('clothing', products, 4);
  const jewerlyProducts = classifyProducts('jewelery', products, 4);
  const digitalProducts = classifyProducts('electronics', products, 4);
 
  return (
    <div className={`${styles.container} ${theme.theme ? styles.darkHeader : styles.lightHeader}`}>

      <div className={styles.ProductTitle}>
        <span>패션</span>
      </div>
      <CategoryGridDiv products={clothProducts} styles={styles} />

      <div className={styles.ProductTitle}>
        <span>액세서리</span>
      </div>
      <CategoryGridDiv products={jewerlyProducts} styles={styles} />
      
      <div className={styles.ProductTitle}>
        <span>디지털</span>
      </div>
      <CategoryGridDiv products={digitalProducts} styles={styles} />
    </div>
  );
}

export function CategoryGridDiv({ products, styles }: { products: Product[]; styles: any }): JSX.Element {
  return (
    <>
      <div className={styles.CategoryGridDiv}>
        {products.map((product) => (
          <CategoryDiv key={product.id} product={product} styles={styles} />
        ))}
      </div>
    </>
  );
}

export function CategoryDiv({ product, styles }: { product: Product; styles: any }): JSX.Element {
  const navigate = useNavigate(); // Hook from React Router for programmatically navigating

  const moveToDetail = () => {
    navigate(`/product/${product.id}`); // Navigate to the product detail page with the product id as URL parameter
  }
  return (
    <>
      <Link to = {`/product/${product.id}`}className={styles.CategoryDiv} onClick={moveToDetail}>
        <div className={styles.imageContainer}>
          <img src={product.image} />
        </div>
        <div className={styles.discript}>
          <div className={styles.title}>{product.title}</div>
          <span className={styles.price}>${product.price}</span>
        </div>
      </Link>
    </>
  );
}

export function classifyProducts(productName: string, products: Product[], index: number) {
  if (productName === 'clothing') {
    return products.filter((product) => product.category.indexOf('clothing') !== -1).slice(0, index);
  } else {
    return products.filter((product) => product.category === productName).slice(0, index);
  }
}
