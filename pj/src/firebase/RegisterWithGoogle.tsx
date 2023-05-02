import { useState } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

function SignupWithGoogle(): JSX.Element {
  const [nickname, setNickname] = useState("");

  const handleSignupWithGoogle = async () => {
    try {
      const provider = new firebase.auth.GoogleAuthProvider();
      const userCredential = await firebase.auth().signInWithPopup(provider);
      const user = userCredential.user;
      const uid = user?.uid;

      // Add the user's details to Firestore
      await firebase.firestore().collection("members").doc(uid!).set({
        email: user?.email,
        nickname: nickname,
        isAdmin: false,
      });
      
      console.log("구글로 회원가입 성공");
    } catch (error) {
      console.log("구글로 회원가입 실패: ", error);
    }
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    handleSignupWithGoogle();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="닉네임을 입력하세요"
        value={nickname}
        onChange={(event) => setNickname(event.target.value)}
      />
      
      <button type="submit">구글로 회원가입</button>
    </form>
  );
}

export default SignupWithGoogle;
