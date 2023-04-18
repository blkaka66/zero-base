
import styles from "./header.module.css";
import Tabs from "./Tab/Tab";

import { useState } from "react";
import { useSelector } from 'react-redux';
import { RootState } from '../RootState';
import { Link } from "react-router-dom";
import getProducts, { Product } from "../getApi";
const TabList = [
  { index:0 ,label: 'React Shop', link: '/react-shop' },
  { index:1 , label: '패션', link: '/fashion' },
  { index:2 ,label: '액세서리', link: '/accessories' },
  { index:3 ,label: '디지털', link: '/digital' },
];

function Header(): JSX.Element {
  const cartItems = useSelector((state: RootState) => state.cart.cartItems);
  let sumCart=0;
  for(let i=0;i<cartItems.length;i++){
    sumCart+=cartItems[i].cartCount;
  }

  const [searchResult, setSearchResult] = useState<Product[]>([]); 
  const [searchQuery, setSearchQuery] = useState("");
  const product = getProducts();
  const submit = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const query = event.currentTarget.value;
    setSearchQuery(query);
    const upperQuery= query.toUpperCase();
    if(upperQuery.length>0){
      const searchResult = searchProduct(upperQuery,product);
      setSearchResult(searchResult);
    }
    
    
  };



  return (
    <header>
   
      <nav>
        <ul>
          
          {TabList.map((tab) => (
            <Tabs
              key={tab.label}
              title={tab.label}
              link={tab.link}
              index={tab.index}
            />
          ))}
        </ul>
        <ul>
            {/* <li><a ><img src={imageSrc} alt={imageAlt}/></a></li> */}
            <li><input type="text" placeholder="검색" onKeyUp={submit} /></li>
            {searchResult.length > 0 && (
            <ul className={styles.searchResultList}>
              {searchResult.map((product) => (
                <Link to={`/product/${product.id}`} className={styles.searchResult} key={product.id}>{product.title}</Link>
              ))}
            </ul>
              )}

        </ul>
        
      </nav>
      

    </header>
  );
}

function searchProduct(query: string,product:Product[]){
  const searchResult= product.filter((product)=> product.title.toUpperCase().indexOf(query) !==-1);
  return searchResult;
}


export default Header;
