import  { useState } from "react";
import firebase from "firebase/compat/app";


const registerMembers = async (email: string, password: string, NickName: string , isAdmin:boolean) => {
  try {

    const existingNickname = await firebase.firestore().collection("members").where("NickName", "==", NickName).get();
    if (!existingNickname.empty) {
      console.log("닉네임중복");
      alert("닉네임중복");
      return;
    }

    const existingID = await firebase.firestore().collection("members").where("email", "==", email).get();
    if (!existingID.empty) {
      console.log("이메일중복");
      alert("이메일중복");
      return;
    }

    const userCredential = await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password);
    const userId = userCredential.user?.uid;

    await firebase.firestore().collection("members").doc(userId!).set({
      NickName:NickName,
      email: email,
      isAdmin:isAdmin,
    });

    console.log("회원가입 성공");
  } catch (error) {
    console.log("회원가입 실패: ", error);
    
  }
};

function RegisterMember(): JSX.Element {
  console.log("******")
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [NickName, setNickName] = useState("");
  const isAdmin = false;
  console.log("^^^^^")

  const handleSubmit = (event:any) => {
    event.preventDefault();
    registerMembers(email, password, NickName,isAdmin);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="아이디"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <input
        type="password"
        placeholder="비밀번호(6글자 이상)"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <input
        type="text"
        placeholder="닉네임"
        value={NickName}
        onChange={(event) => setNickName(event.target.value)}
      />
     
      <button type="submit">회원가입</button>
    </form>
  );
}

export default RegisterMember;
