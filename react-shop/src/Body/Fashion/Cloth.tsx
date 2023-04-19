
import styles from './Cloth.module.css'
import { classifyProducts,CategoryGridDiv } from '../BodyDown';
import getProducts from "../../getApi"

interface ClothProps {

  theme:boolean;
}


function Cloth(theme:ClothProps): JSX.Element  {
  const products = getProducts();

  const clothProducts = classifyProducts('clothing',products,products.length);

  return (
    <>
       <div className={`${styles.container} ${theme.theme ? styles.darkHeader : styles.lightHeader}`}>
        <div className={styles.ProductTitle}><span>패션</span></div>
        <CategoryGridDiv products={clothProducts} styles={styles} />
      </div>
    </>
  );
}



export default Cloth;