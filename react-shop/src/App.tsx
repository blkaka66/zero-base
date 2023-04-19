import {Routes, Route, BrowserRouter } from "react-router-dom";
import styles from './App.module.css'
import { useState } from "react";
import Header from './Header/header';
import Body from './Body/Body';
import Digital from './Body/Digital/Digital';
import Cloth from "./Body/Fashion/Cloth";
import Jewerely from "./Body/Jewerely/Jewerely";
import ProductDetail from "./ProductDetail/ProductDetail";
import { Provider } from 'react-redux'; 
import store from "./store";
import ShopCart from "./ShopCart/ShopCart";


function App(): JSX.Element  {
  const [isBlackTheme, setIsBlackTheme] = useState(true);//테마 결정하는 상태변수

  const ThemeChange = () => {

    setIsBlackTheme(!isBlackTheme);//흑백 버튼 누르면 isBlackTheme 상태 반대로 됨
  };

  return (
    <>
    <Provider store={store}>
      <div className={styles.body}>
      <BrowserRouter>
          <Header theme={isBlackTheme} ThemeChange={ThemeChange}/>
          <Routes>
            <Route path="/" element={<Body theme={isBlackTheme}/>}></Route>
            <Route path="/cart" element={<ShopCart theme={isBlackTheme}/>}></Route>
            <Route path="/react-shop" element={<Body theme={isBlackTheme}/>}></Route>
            <Route path="/fashion" element={<Cloth theme={isBlackTheme}/>}></Route>
            <Route path="/accessories" element={<Jewerely theme={isBlackTheme}/>}></Route>
            <Route path="/digital" element={<Digital theme={isBlackTheme}/>}></Route>
            <Route path="/product/:id" element={<ProductDetail theme={isBlackTheme}/>} />
          </Routes>
      </BrowserRouter>
    </div>
    </Provider>
    </>

  )
}

export default App
