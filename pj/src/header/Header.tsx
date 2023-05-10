import styles from "./Header.module.css";

import { useRecoilState, useSetRecoilState } from 'recoil';
import { isAdminAtom, isLoggedInAtom } from "../state/login";
import { Link } from "react-router-dom";

function Header(props: any): JSX.Element {
    const setIsAdmin = useSetRecoilState(isAdminAtom);
    const setLoggedIn = useSetRecoilState(isLoggedInAtom);

    const isAdmin = useRecoilState(isAdminAtom)[0];
    const isLoggedIn = useRecoilState(isLoggedInAtom)[0];
    

    return (
        <div className={styles.header}>
            {!isLoggedIn && <Link to={`/`}>로그인</Link>}
            {isLoggedIn && <button onClick={() => logOut(setIsAdmin, setLoggedIn)}>로그아웃</button>}
            {isAdmin && <Link to={`/admin-menu`}>관리자 메뉴</Link>}
        </div>
      );
    }
    
function logOut(setIsAdmin: (isAdmin: boolean) => void,setLoggedIn: (isAdmin: boolean) => void){
    setLoggedIn(false);
    setIsAdmin(false);
    console.log("로그아웃 되었습니다");
}

export default Header;