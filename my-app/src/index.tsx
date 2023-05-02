import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {App} from './App/app';
import reportWebVitals from './reportWebVitals';
import {FirebaseInit} from './firebase/InitFirebase';
import {Routes, Route, BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root')!);

root.render(
  <React.StrictMode>

    <BrowserRouter>
      <Routes>
        <FirebaseInit />
        <Route path="/" element={<App></App>}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


reportWebVitals();
