

import styles from './App.module.css' ;
import { Link } from 'react-router-dom';
import { signInWithGoogle } from './login/LoginwithGoogle';
import Login from './login/LoginWithIdPw';
import { useNavigate } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { isAdminAtom, isLoggedInAtom } from "../src/state/login";
import { useEffect } from 'react';

export function App(): JSX.Element {
  const navigate = useNavigate();
  const setIsAdmin = useSetRecoilState(isAdminAtom);
  const setLoggedIn = useSetRecoilState(isLoggedInAtom);
  const isLoggedIn = useRecoilValue(isLoggedInAtom);

  
  useEffect(() => {
    if(isLoggedIn){
      navigate("/main");
    }
  }, []);

  return (
    <div className={styles.App}>
      <div className={styles.signUpDiv}>
        <Link to={`/signUp`}>회원가입 </Link>
        <Link to={`/signUpWithGoogle`}>구글로 회원가입</Link>
      </div>
      <div className={styles.signInDiv}>
        <Login></Login>
        <button onClick={() => signInWithGoogle(setIsAdmin, setLoggedIn ,() => navigate("/main"))} className={styles.signInWithGoogle}>구글로 로그인</button>
      </div>  
    </div>
  );
}

