import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyB1UzBwgI9AWH7C6C0E2uAutNKooqzZRFA",
  authDomain: "back2basics-b86cd.firebaseapp.com",
  databaseURL: "https://back2basics-b86cd.firebaseio.com",
  projectId: "back2basics-b86cd",
  storageBucket: "back2basics-b86cd.appspot.com",
  messagingSenderId: "580501464005",
  appId: "1:580501464005:web:4b7ba585c814b7c9c661ac",
  measurementId: "G-MXNBRQ0E65"
};

firebase.initializeApp(firebaseConfig)

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
