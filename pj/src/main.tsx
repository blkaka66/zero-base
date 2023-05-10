import React from 'react'
import ReactDOM from 'react-dom/client'


import { RecoilRoot } from 'recoil';
import {FirebaseInit} from './firebase/InitFirebase';
import {Routes, Route, BrowserRouter } from "react-router-dom";
import {App} from './App.tsx';
import RegisterMember from './firebase/Register.tsx';
import Header from './header/Header.tsx';
import SignupWithGoogle from './firebase/RegisterWithGoogle.tsx';
import {MainPage} from './main/MainPage.tsx';
import AdminMenu from './admin-menu/AdminMenu.tsx';
import Board from './board/board.tsx';
import WriteContent from './makeContent/WriteContent.tsx';
import Content from './board/content.tsx';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(

    
   <RecoilRoot>
   <FirebaseInit/>
   <BrowserRouter>
   {/* header는 <Header/>이렇게해야 밑에애들이 자식취급안받음 */}
      <Header/>
      <Routes>
        <Route path="/" element={<App></App>}></Route>
        <Route path="/signUpWithGoogle" element={<SignupWithGoogle></SignupWithGoogle>}></Route>
        <Route path="/signUp" element={<RegisterMember></RegisterMember>}></Route>
        <Route path="/admin-menu" element={<AdminMenu></AdminMenu>}></Route>
        <Route path="/main" element={<MainPage></MainPage>}></Route>
        <Route path="/boards/:boardName" element={<Board></Board>}></Route>
        <Route path="/boards/:boardName/write" element={<WriteContent></WriteContent>}></Route>
        <Route path="/boards/:boardName/:docId" element={<Content></Content>}></Route>
      </Routes>
    </BrowserRouter>

   </RecoilRoot>

)
