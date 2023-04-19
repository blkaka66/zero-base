
import getProducts from '../getApi';
import styles from './BodyDown.module.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Product } from '../getApi';
interface BodyDownProps {
  theme:boolean;
}


export default function BodyDown(theme:BodyDownProps): JSX.Element {
  const products = getProducts();//product 받아오고
  const clothProducts = classifyProducts('clothing', products, 4);//4개씩 카테고리별로 데이터 받아오기
  const jewerlyProducts = classifyProducts('jewelery', products, 4);//4개씩 카테고리별로 데이터 받아오기
  const digitalProducts = classifyProducts('electronics', products, 4);//4개씩 카테고리별로 데이터 받아오기
 
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
  const navigate = useNavigate(); //상세페이지 가게 하려고

  const moveToDetail = () => {
    navigate(`/product/${product.id}`); // 누르면 링크가 이걸로바뀜
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
  if (productName === 'clothing') {//옷 찾아야하면
    return products.filter((product) => product.category.indexOf('clothing') !== -1).slice(0, index);//cloth 키워드 포함하는 상품가져오기
  } else {
    return products.filter((product) => product.category === productName).slice(0, index);
  }
}
