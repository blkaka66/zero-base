import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import Header from './header/Header.tsx'
import {Routes, Route ,BrowserRouter} from "react-router-dom";
import GamePage from './gamePage/GamePage.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<App></App>}></Route>
      <Route path="/gamepage" element={<GamePage ></GamePage>}></Route>
    </Routes>
  </BrowserRouter>
)
