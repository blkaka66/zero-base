import { useState } from "react";
import "./header.css";
import Tabs from "./Tab";
//import { ReactComponent as MyComponent  } from "./assets/sun.svg";

const TabList = [
  { index:0 ,label: 'React Shop', link: '/react-shop' },
  { index:1 , label: '패션', link: '/fashion' },
  { index:2 ,label: '액세서리', link: '/accessories' },
  { index:3 ,label: '디지털', link: '/digital' },
];


function Header(): JSX.Element {
 
  return (
    <header>
   
      <nav>
        <ul>
          {/* {TabList.map((tab ) => (
            <Tabs key={tab.label} title={tab.label} link={tab.link} index={tab.index} />
          ))} */}
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
            {/* //<li><a href={link}><img src={imageSrc} alt={imageAlt}/></a></li> */}
            

        </ul>
      </nav>

    </header>
  );
}

export default Header;
