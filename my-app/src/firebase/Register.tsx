import React, { useState } from "react";
import { registerMembers } from './InitFirebase';


function RegisterMember(): JSX.Element {
  console.log("******")
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [NickName, setNickName] = useState("");
  console.log("^^^^^")

  const handleSubmit = (event:any) => {
    event.preventDefault();
    registerMembers(email, password, NickName);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <input
        type="text"
        placeholder="NickName"
        value={NickName}
        onChange={(event) => setNickName(event.target.value)}
      />
     
      <button type="submit">Register</button>
    </form>
  );
}

export default RegisterMember;
