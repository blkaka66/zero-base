import { isAdminAtom, isLoggedInAtom } from "../state/login";
import { useRecoilValue } from 'recoil';

function MainPage(): JSX.Element {
  const isAdmin = useRecoilValue(isAdminAtom);
  const isLogged = useRecoilValue(isLoggedInAtom);
 console.log(isAdmin+"^^^^")
 console.log(isLogged+"######")

  return (
    <>
    asdasd
    </>
  )
}

export default MainPage;
