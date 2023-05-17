import styles from "./Header.module.css";

import { useRecoilState, useSetRecoilState } from 'recoil';
import { isAdminAtom, isLoggedInAtom, nickNameAtom ,idAtom} from "../state/login";
import { Link } from "react-router-dom";

function Header(props: any): JSX.Element {
    const setIsAdmin = useSetRecoilState(isAdminAtom);
    const setLoggedIn = useSetRecoilState(isLoggedInAtom);
    const setnickName = useSetRecoilState(nickNameAtom);
    const setID = useSetRecoilState(idAtom);

    const isAdmin = useRecoilState(isAdminAtom)[0];
    const isLoggedIn = useRecoilState(isLoggedInAtom)[0];


    return (
        <div className={styles.header}>
            {!isLoggedIn && (
                <Link to={`/`} className={`${styles.button} ${styles.logIn}`}>
                <span className={styles.spans}>Login</span>
                </Link>
            )}
            {isLoggedIn && (
                <button onClick={() => logOut(setIsAdmin, setLoggedIn,setnickName,setID)} className={`${styles.button} ${styles.logOut}`}>
                Logout
                </button>
            )}
            {isAdmin && (
                <Link to={`/admin-menu`} className={`${styles.button} ${styles.adminMenu}`}>
                <span className={styles.spans}>Admin Menu</span>
                </Link>
            )}
        </div>

      );
    }
    
function logOut(setIsAdmin: (isAdmin: boolean) => void,setLoggedIn: (isLoggedIn: boolean) => void,setnickName: (nickName: string) => void,setID: (ID: string) => void){
    setLoggedIn(false);
    setIsAdmin(false);
    setnickName("");
    setID("");
    console.log("로그아웃 되었습니다");
}

export default Header;