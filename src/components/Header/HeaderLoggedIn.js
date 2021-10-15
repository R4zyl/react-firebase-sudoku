import React from 'react';
import { LanguageSwitcher, Translator, LogoImg } from '../index';
import { useHistory } from 'react-router-dom';
import { DropDown } from './DropDown';
import { auth } from '../../firebase';
import logoutIcon from '../../assets/logOutIcon.png';

export const HeaderLoggedIn = () => {
  const history = useHistory();

  const handleLogOut = () => {
    auth.signOut();
    history.push('/');
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
        <img
          className="logoutIcon"
          src={logoutIcon}
          onClick={handleLogOut}
          alt="log out"
        ></img>
      </div>
      <div className="flagsHolder">
        <LanguageSwitcher height="25px" className="languageImgDesktop" />
      </div>
    </div>
  );
};
