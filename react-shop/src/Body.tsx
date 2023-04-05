import axios from 'axios';
import { useEffect, useState } from 'react';

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

function App() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        const data = response.data;
        setProducts(data);
        console.log(data)
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Product List</h1>
      <Body products={products} />
    </div>
  );
}

interface BodyProps {
  products: Product[];
}

function Body(props: BodyProps): JSX.Element {
  const { products } = props;

  return (
    <div>
      <h2>Electronics</h2>
      <ul>
        {products
          .filter((product) => product.category === 'electronics')
          .map((product) => (
            <li key={product.id}>
              <img src={product.image} alt={product.title} />
              <h3>{product.title}</h3>
              <p>{product.price}</p>
            </li>
          ))}
      </ul>
      <h2>Clothing</h2>
      <ul>
        {products
          .filter((product) => product.category.indexOf('clothing') !== -1)
          .map((product) => (
            <li key={product.id}>
                {product.category}
              <img src={product.image} alt={product.title} />
              <h3>{product.title}</h3>
              <p>{product.price}</p>
            </li>
          ))}
      </ul>
  
     <h2>jewerly</h2>
     <ul>
      {products
       .filter((product) => product.category === 'jewelery')
         .map((product) => (
           <li key={product.id}>
              {product.category}
             <img src={product.image} alt={product.title} />
             <h3>{product.title}</h3>
             <p>{product.price}</p>
           </li>
         ))}
     </ul> 
  </div>
  );
}

export default App;
