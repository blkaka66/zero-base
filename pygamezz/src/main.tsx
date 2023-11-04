import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import Header from './header/Header.tsx'
import {Routes, Route, BrowserRouter } from "react-router-dom";
import gamePage from './gamePage/gamePage.tsx'
import { deleteApp } from 'firebase/app'
import { GoogleAuthProvider } from 'firebase/auth/cordova'
import { CACHE_SIZE_UNLIMITED } from 'firebase/firestore'
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Header/>
    <Routes>
      <Route path="/" element={<App></App>}></Route>
      <Route path="/gamePage" element={<gamePage ></gamePage>}></Route>
    </Routes>
  </React.StrictMode>,
)
