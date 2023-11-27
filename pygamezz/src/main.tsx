import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import Header from './header/Header.tsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import gamePage from './GamePage/GamePage.tsx'
import SignUp from './signUp/SignUp.tsx'
import InitFireBase from './InitFireBase.tsx'
// import { deleteApp } from 'firebase/app'
// import { GoogleAuthProvider } from 'firebase/auth/cordova'
// import { CACHE_SIZE_UNLIMITED } from 'firebase/firestore'
import {useRef } from 'react';
import { Firestore } from 'firebase/firestore/lite'



ReactDOM.createRoot(document.getElementById('root')!).render(
    <>
    <InitFireBase >
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<App></App>}></Route>
        <Route path="/signUp" element={<SignUp></SignUp>}></Route>
        <Route path="/gamePage" element={<gamePage ></gamePage>}></Route> 
      </Routes>
    </Router>
    </InitFireBase>
    </>
)
