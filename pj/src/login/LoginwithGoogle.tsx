import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


interface User {
  uid: string;
}

async function isAdmin(user: User | null, setIsAdmin: (isAdmin: boolean) => void,navigate: (path: string) => void){
  console.log("Checking if user is admin...");
  if (user !== null) {
    const userDoc = await firebase.firestore().collection("members").doc(user.uid).get();
    if (userDoc.exists) {
        console.log("^^^^")
      const userData = userDoc.data();

      if (userData && userData.isAdmin === true) {
        setIsAdmin(true);
        console.log("관리자계정");
      } else {
        setIsAdmin(false);
        console.log("일반유저계정");
      }
      navigate("/main");
    }
    else{
      alert("회원 정보가 없습니다. 회원가입을 하십시오");
    }
  }
}

const signInWithGoogle = (setIsAdmin: (isAdmin: boolean) => void, setLoggedIn: (isLoggedIn: boolean) => void, navigate: (path: string) => void) => {

  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider).then((result) => {
    const user = result.user;

    if(user){
      setLoggedIn(true);
      isAdmin(user, setIsAdmin, () => navigate("/main"));

    }

  }).catch((error) => {
    console.log(error);
  });
};

export { signInWithGoogle };
