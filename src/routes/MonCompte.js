import Header from "../components/Header";
import "../stylesheets/MonCompte.css";
import React, { useState, useEffect } from 'react';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCZEIPuEeVVu0McEoOfAZBhT90vKUeGgAY",
  authDomain: "maison-namaste.firebaseapp.com",
  projectId: "maison-namaste",
  storageBucket: "maison-namaste.appspot.com",
  messagingSenderId: "10742182164",
  appId: "1:10742182164:web:2478734c2af66ff4021201",
  measurementId: "G-2XKMT7BH81"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function Login() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      console.log('Login attempt with:', username, password);
    };

    return ( 
      <>
      <Header />
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nom d'utilisateur :</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Mot de passe :</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Se connecter</button>
      </form>

      </>
    );
  }

  export default Login;