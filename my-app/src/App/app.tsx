import './app.css';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { Link } from 'react-router-dom';


export function App(): JSX.Element {

  const signInWithGoogle = () => {
    console.log("로그인")
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider);
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>
          <button onClick={signInWithGoogle}>Sign in with Google</button>
          <Link to={`/signUp`}>Sign up </Link>
          {/* <button onClick={() => <RegisterMember />}>Sign up</button> */}
        </p>

     
      </header>
    </div>
  );
}

