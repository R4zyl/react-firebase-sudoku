import React, { useState } from 'react';
import { Translator } from '../index';
import { db } from '../../firebase';
import { useDispatch } from 'react-redux';
import { collection, addDoc } from 'firebase/firestore';
import { hideFooterAction } from '../../actions';

export const EmailSubscriptionForm = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const validateUserInput = () => {
    if (!email) {
      throw Error('Please fill out your email.');
    }
  };

  const handleSubmit = async (submitEvent) => {
    submitEvent.preventDefault();
    try {
      validateUserInput();
      try {
        const docRef = await addDoc(collection(db, 'emails'), {
          email: email,
        });
        alert(
          'Köszönjük, hogy feliratkoztál, sok sikert a napi feladványokhoz!'
        );
        dispatch(hideFooterAction());
        console.log(docRef);
      } catch (e) {
        alert('Something went wrong:', e);
      }
    } catch (error) {
      alert(error);
    }
  };

  const handleNoClick = () => {
    dispatch(hideFooterAction());
  };

  return (
    <div className="emailFormContainer">
      <form className="emailForm" onSubmit={handleSubmit}>
        <p className="emailTitle">
          {Translator(
            'Iratkozz fel hírlevelünkre, és emailben is elküldjük neked a napi sudoku feladataidat!',
            'Subscribe to our newsletter and we will send you your daily exercises per email!'
          )}
        </p>
        <input
          type="email"
          placeholder="Email"
          required
          value={email}
          onChange={(changeEvent) => {
            setEmail(changeEvent.target.value);
          }}
        />
        <button type="submit">{Translator('Feliratkozom', 'Subscribe')}</button>
        <button onClick={handleNoClick}>
          {Translator('Nem, köszönöm', 'No, thank you')}
        </button>
      </form>
    </div>
  );
};
