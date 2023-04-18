
import styles from './Cloth.module.css'
import { classifyProducts,CategoryGridDiv } from '../BodyDown';
import getProducts from "../../getApi"




function Cloth(): JSX.Element  {
  const products = getProducts();

  const clothProducts = classifyProducts('clothing',products,products.length);

  console.log(clothProducts);
  return (
    <>
      <div className={styles.container}>
        <div className={styles.ProductTitle}><span>패션</span></div>
        <CategoryGridDiv products={clothProducts} styles={styles} />
      </div>
    </>
  );
}



export default Cloth;