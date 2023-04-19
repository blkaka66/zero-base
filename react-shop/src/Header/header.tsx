
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

interface HeaderProps {
  ThemeChange: () => void;
  theme:boolean;
}

function Header({theme,ThemeChange}: HeaderProps): JSX.Element {
  const [hide, setHide] = useState(false);
  const handleClick = () => {
    ThemeChange();
  };

  const cartItems = useSelector((state: RootState) => state.cart.cartItems);
  let sumCart=0;
  for(let i=0;i<cartItems.length;i++){
    sumCart+=cartItems[i].cartCount;
  }

  const [searchResult, setSearchResult] = useState<Product[]>([]); 
 
 
  const product = getProducts();
  const submit = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const query = event.currentTarget.value;
    
    if(query.length === 0){
      console.log("^^^")
      setHide(true);
    }
    else{
      console.log("&&&&&");
      setHide(false);
    }
    const upperQuery= query.toUpperCase();
    if(upperQuery.length>0){
      const searchResult = searchProduct(upperQuery,product);
      setSearchResult(searchResult);
    }
    
    
  };



  return (
    <header className={theme ? styles.darkHeader : styles.lightHeader}>
   
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
            <button onClick={handleClick}>흑백</button>
            <li><input type="text" placeholder="검색" onKeyUp={submit} /></li>
            {searchResult.length > 0 && (
            <ul className={`${styles.searchResultList} ${hide ? styles.hide: styles.show}  `}>
             
              {searchResult.map((product) => (
                <Link to={`/product/${product.id}`} className={styles.searchResult} key={product.id}>{product.title}</Link>
              ))}
            </ul>
              )}
            <Link to={`/cart`}><span>장바구니{sumCart}</span></Link>  
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
