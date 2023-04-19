
import styles from './Digital.module.css'
import { classifyProducts,CategoryGridDiv } from '../BodyDown';
import getProducts from "../../getApi"
import { Product } from '../../getApi';

interface DigitalProps {

  theme:boolean;
}


function Digital(theme:DigitalProps): JSX.Element  {
  const products = getProducts();
  const digitalProducts = classifyProducts('electronics',products,products.length);

  return (
    <>
      <div className={`${styles.container} ${theme.theme ? styles.darkHeader : styles.lightHeader}`}>
        <div className={styles.ProductTitle}><span>디지털</span></div>
        <CategoryGridDiv products={digitalProducts} styles={styles} />
      </div>
    </>
  );
}



export default Digital