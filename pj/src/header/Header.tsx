import styles from "./Header.module.css";

import { useSetRecoilState } from 'recoil';
import { isAdminAtom, isLoggedInAtom } from "../state/login";
import { Link } from "react-router-dom";

function Header(props: any): JSX.Element {
    const setIsAdmin = useSetRecoilState(isAdminAtom);
    const setLoggedIn = useSetRecoilState(isLoggedInAtom);
    console.log("헤드")
    return (
        //로그아웃 버튼은 setLoggedIn이 true일때만 보이게하기
        <div className={styles.header}>
             <button>로그인</button>
            <button onClick={() => logOut(setIsAdmin,setLoggedIn)} >로그아웃</button>
            <Link to={`/admin-menu`}>관리자 메뉴</Link>
        </div>
      );
    }
    
function logOut(setIsAdmin: (isAdmin: boolean) => void,setLoggedIn: (isAdmin: boolean) => void){
    setLoggedIn(false);
    setIsAdmin(false);
    console.log("로그아웃 되었습니다");
}

export default Header;