import React from 'react';
import { useSelector } from 'react-redux';
import { HeaderLoggedIn, HeaderLoggedOut } from '../index';
import '../../styles/Header.css';export const Header = () => {
  const { user } = useSelector((state) => state.userData);

  return user ? <HeaderLoggedIn /> : <HeaderLoggedOut />;
};
