import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import '../../styles/Register.css';

export const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordRepeat, setPasswordRepeat] = useState('');
  const history = useHistory();
  const auth = getAuth();

  const validateUserInput = () => {
    if (!email && !password && !passwordRepeat) {
      throw Error('Please fill out all the required fields.');
    }
    if (password !== passwordRepeat) {
      throw Error(
        'The two password fields should match. Please check it again.'
      );
    }
    if (!email || !password) {
      throw Error(`${!email ? 'Email' : 'Password'} is required.`);
    }
  };

  const handleSubmit = async (submitEvent) => {
    submitEvent.preventDefault();
    validateUserInput();
    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        history.push('/')
      })
      .catch((error) => {
        console.log(error)
      });
  };

  return (
    <div className="registerBox">
      <div className="registerImg"></div>
      <form className="registerForm" onSubmit={handleSubmit}>
        <h1 className="registerTitle">Regisztráció</h1>
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
        <input
          type="password"
          placeholder="Repeat your password"
          minLength="6"
          value={passwordRepeat}
          onChange={(changeEvent) => {
            setPasswordRepeat(changeEvent.target.value);
          }}
        />
        <button data-testid="0001" type="submit">
          Regisztrálok
        </button>
      </form>
    </div>
  );
};
