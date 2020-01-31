import React from 'react';
import logo from './logo.svg';
import './App.css';
import firebase from 'firebase/app';
import 'firebase/database';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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

const firebaseConfig = {
  apiKey: "AIzaSyBdTkdXSYAUdiiXAFlVaaAgJ_QQaZfdyHI",
  authDomain: "onthego-101.firebaseapp.com",
  databaseURL: "https://onthego-101.firebaseio.com",
  projectId: "onthego-101",
  storageBucket: "onthego-101.appspot.com",
  messagingSenderId: "768309926661",
  appId: "1:768309926661:web:7ff6e9a9e622d97c3f756c",
  measurementId: "G-8RNRCGX4PZ"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.database().ref();

export {db};
export default App;
