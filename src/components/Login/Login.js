import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import '../../styles/Login.css';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();
  const auth = getAuth();

  const validateUserInput = () => {
    if (!email && !password) {
      throw Error('Email and password are required');
    }
    if (!email || !password) {
      throw Error(`${!email ? 'Email' : 'Password'} is required.`);
    }
  };

  const handleSubmit = async (submitEvent) => {
    submitEvent.preventDefault();
    validateUserInput();
      await signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode)
    console.log(errorMessage)
  });
  };
  
  const handleRegister = () => {
    history.push('/register')
  }

  return (
    <div className="loginBox">
      <div className="loginImg">
      </div>
      <form className="loginForm" onSubmit={handleSubmit}>
        <h1 className="loginTitle">Bejelentkezés</h1>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(changeEvent) => {
            setEmail(changeEvent.target.value);
          }}
        />
        <input
          type="password"
          placeholder="Password"
          minLength="6"
          value={password}
          onChange={(changeEvent) => {
            setPassword(changeEvent.target.value);
          }}
        />
        <button data-testid="0001" type="submit">
          Bejelentkezem
        </button>
        <div className="register" onClick={handleRegister}>Regisztrálok</div>
      </form>
    </div>
  );
};
