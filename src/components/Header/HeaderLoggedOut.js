import React from 'react';
import { LanguageSwitcher, Translator, LogoImg } from '../index';
import { useHistory } from 'react-router-dom';
import { DropDown } from './DropDown';
export const HeaderLoggedOut = () => {
  const history = useHistory();

  const handleLogin = () => {
    history.push('/login');
  };

  return (
    <div className="headerContainer">
      <LogoImg height={'100px'} />
      <div className="navHolderDesktop">
        <DropDown
          text={Translator(
            'Napi Sudoku',
            'Daily Sudoku'
          )}
        />
        
        <div className="flagsHolder">
          <LanguageSwitcher height="25px" className="languageImgDesktop" />
          
        </div>
      </div><button
          onClick={handleLogin}
          alt="sign in"
          className="loginButton"
        >{Translator('Bejelentkezés','Sign in')}</button>
    </div>
  );
};
