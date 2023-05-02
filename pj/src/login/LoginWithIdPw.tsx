import { useState } from "react";
import firebase from "firebase/compat/app";

import "firebase/compat/auth";
import './LoginWithIdPw.css';
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from 'recoil';
import { isAdminAtom, isLoggedInAtom } from "../state/login";

interface User {
  uid: string;
}

async function isAdmin(user: User | null, setIsAdmin: (isAdmin: boolean) => void){
  if (user) {
    const userDoc = await firebase.firestore().collection("members").doc(user.uid).get();
    if (userDoc.exists) {
      const userData = userDoc.data();
      if (userData && userData.isAdmin) {
        setIsAdmin(true);
        console.log("관리자계정");
      }
      else{
        setIsAdmin(false);
        console.log("일반유저계정")
      }
    }

  }
}  

function Login(): JSX.Element {
  const setLoggedIn = useSetRecoilState(isLoggedInAtom);
  const navigate = useNavigate();
  const setIsAdmin = useSetRecoilState(isAdminAtom);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  
  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
      setLoggedIn(true);
      navigate("/main");
      console.log("아이디로 로그인성공");

      const user = firebase.auth().currentUser;
      if (user !== null) {
        isAdmin(user, setIsAdmin);
      }
      

    } catch (error) {
      alert("회원 정보가 없습니다. 회원가입을 하십시오");
      console.log("아이디로 로그인 실패 ", error);
    }
  };


  return (
    <form onSubmit={handleLogin}>
      <span>id</span>
      <input 
        type="email"
        placeholder="아이디를 입력하세요"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        className="id"
      />
      <span className="pw">pw</span>
      <input
        type="password"
        placeholder="비밀번호를 입력하세요"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        className="pw"
      />
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;
