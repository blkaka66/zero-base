import getProducts from "../getApi"
import styles from "./BodyDown.module.css";


interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

export default function BodyDown(): JSX.Element {
  const products = getProducts();
  const clothProducts = classifyProducts('clothing',products);
  const jewerlyProducts = classifyProducts('jewelery',products);
  const digitalProducts = classifyProducts('electronics',products);
  return (
    <div className={styles.container}>
      <div className={styles.ProductTitle}><span>패션</span></div>
      <CategoryGridDiv products={clothProducts}/>
      <div className={styles.ProductTitle}><span>액세서리</span></div>
      <CategoryGridDiv products={jewerlyProducts}/>
      <div className={styles.ProductTitle}><span>디지털</span></div>
      <CategoryGridDiv products={digitalProducts}/>
    </div>
  );
  }

export function CategoryGridDiv({ products }: { products: Product[] }): JSX.Element{
  return(
    <>
    
      <div className={styles.CategoryGridDiv}>
        {products.map((product) => (
          <CategoryDiv key={product.id} product={product} />
        ))}
      </div>
    </>
  );
}

export function CategoryDiv({product} : {product:Product}): JSX.Element{

  return(
    <>
      <div className={styles.CategoryDiv}>
        <div className={styles.imageContainer}><img src={product.image}></img></div>
        <div className={styles.discript}>
          <div className={styles.title}>{product.title}</div>
          <span className={styles.price}>${product.price}</span>
        </div>
      </div>
    </>
  );
}

export function classifyProducts(productName:string,products: Product[]){
  if(productName == 'clothing'){
    return products.filter((product) => product.category.indexOf('clothing') !== -1).slice(0,4);
  }
  else{
    return  products.filter((product) => product.category === productName).slice(0,4);
  }
}

