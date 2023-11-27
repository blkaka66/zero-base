import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

function SignUp(): JSX.Element  {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = async () => {
    try {
      const auth = getAuth();
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      // 회원가입 성공 시 처리
      console.log('회원가입 성공:', userCredential.user);
    } catch (error) {
      // 회원가입 실패 시 처리
      console.error('회원가입 실패:', error);
    }
  };

  return (
    <form className="signup-form">
      {/* 이메일 입력란 */}
      <div className="form-group">
        <label htmlFor="email">이메일</label>
        <input
          type="email"
          id="email"
          placeholder="이메일을 입력하세요"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <span>이메일을 입력하세요</span>
      </div>
      {/* 비밀번호 입력란 */}
      <div className="form-group">
        <label htmlFor="password">비밀번호</label>
        <input
          type="password"
          id="password"
          placeholder="비밀번호를 입력하세요"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <span>비밀번호를 입력하세요</span>
      </div>
      {/* 가입 버튼 */}
      <button type="button" onClick={handleSignUp}>
        가입
      </button>
    </form>
  );
}

export default SignUp