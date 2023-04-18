
import styles from './Jewerely.module.css'
import { classifyProducts,CategoryGridDiv } from '../BodyDown';
import getProducts from "../../getApi"

function Jewerely(): JSX.Element  {
  const products = getProducts();
  const jeweleryProducts = classifyProducts('jewelery',products,products.length);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.ProductTitle}><span>액세서리</span></div>
        <CategoryGridDiv products={jeweleryProducts} styles={styles} />
      </div>
    </>
  );
}



export default Jewerely;