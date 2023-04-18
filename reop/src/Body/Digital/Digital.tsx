
import styles from './Digital.module.css'
import { classifyProducts,CategoryGridDiv } from '../BodyDown';
import getProducts from "../../getApi"
import { Product } from '../../getApi';

// export interface Product {
//   id: number;
//   title: string;
//   price: number;
//   description: string;
//   category: string;
//   image: string;
// }

function Digital(): JSX.Element  {
  const products = getProducts();
  const digitalProducts = classifyProducts('electronics',products,products.length);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.ProductTitle}><span>디지털</span></div>
        <CategoryGridDiv products={digitalProducts} styles={styles} />
      </div>
    </>
  );
}



export default Digital