import {Routes, Route, BrowserRouter } from "react-router-dom";
import styles from './App.module.css'

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
  return (
    <>
    <Provider store={store}>
      <div className={styles.body}>
      <BrowserRouter>
          <Header/>
          <Routes>
            <Route path="/" element={<Body/>}></Route>
            <Route path="/cart" element={<ShopCart/>}></Route>
            <Route path="/react-shop" element={<Body/>}></Route>
            <Route path="/fashion" element={<Cloth/>}></Route>
            <Route path="/accessories" element={<Jewerely/>}></Route>
            <Route path="/digital" element={<Digital/>}></Route>
            <Route path="/product/:id" element={<ProductDetail />} />
          </Routes>
      </BrowserRouter>
    </div>
    </Provider>
    </>

  )
}

export default App
