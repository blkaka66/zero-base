import logo from './logo.svg';
import './App.css';
import firebase from "firebase/app";
import "firebase/firestore";
import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBSN1kHlm3FAXLB423cMC65ydljGKCNK0w",
  authDomain: "my-first-project-9dc23.firebaseapp.com",
  projectId: "my-first-project-9dc23",
  storageBucket: "my-first-project-9dc23.appspot.com",
  messagingSenderId: "368595372011",
  appId: "1:368595372011:web:f012d2babae32cdba77bae",
  measurementId: "G-C1XE4JGN3J"
};
firebase.initializeApp(firebaseConfig);


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Editasdasd <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
