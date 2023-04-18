
import "./header.css";
import Tabs from "./Tab/Tab";


import { useSelector } from 'react-redux';
import { RootState } from '../RootState';
import { Link } from "react-router-dom";

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
            <li><input type="text" placeholder="검색" /></li>
            <Link to={`/cart`}>장바구니{sumCart}</Link>
            

        </ul>
      </nav>

    </header>
  );
}

export default Header;
