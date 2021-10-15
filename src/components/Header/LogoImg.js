import React, { useRef, useEffect } from 'react';
import logoBackground from '../../assets/logo/logoBackground.png';
import S from '../../assets/logo/S.png';
import U1 from '../../assets/logo/U1.png';
import D from '../../assets/logo/D.png';
import O from '../../assets/logo/O.png';
import K from '../../assets/logo/K.png';
import U from '../../assets/logo/U.png';
import { useHistory } from 'react-router-dom';
import { gsap } from 'gsap';
import '../../styles/LogoImg.css';

export const LogoImg = ({ height }) => {
  const history = useHistory();
  const background = useRef();
  const Sref = useRef();
  const U1ref = useRef();
  const Dref = useRef();
  const Oref = useRef();
  const Kref = useRef();
  const Uref = useRef();

  useEffect(() => {
    gsap.fromTo(
      background.current,
      { opacity: 0, scale: 0 },
      { delay: 0.3, duration: 0.6, opacity: 1, scale: 1 }
    );
    gsap.fromTo(
      Sref.current,
      { opacity: 0 },
      { delay: 1, duration: 0.3, opacity: 1 }
    );
    gsap.fromTo(
      U1ref.current,
      { opacity: 0 },
      { delay: 1.4, duration: 0.3, opacity: 1 }
    );
    gsap.fromTo(
      Dref.current,
      { opacity: 0 },
      { delay: 1.8, duration: 0.3, opacity: 1 }
    );
    gsap.fromTo(
      Oref.current,
      { opacity: 0 },
      { delay: 2.2, duration: 0.3, opacity: 1 }
    );
    gsap.fromTo(
      Kref.current,
      { opacity: 0 },
      { delay: 2.6, duration: 0.3, opacity: 1 }
    );
    gsap.fromTo(
      Uref.current,
      { opacity: 0 },
      { delay: 3, duration: 0.3, opacity: 1 }
    );
  }, []);

  const handleMouseEnter = () => {
    gsap.fromTo(Sref.current, { x: 0 }, { delay: 0, duration: 0.3, x: '32px' });
    gsap.fromTo(U1ref.current, { x: 0 }, { duration: 0.3, x: '-32px' });
    gsap.fromTo(Dref.current, { y: 0 }, { duration: 0.3, y: '32px' });
    gsap.fromTo(
      Oref.current,
      { y: 0, x: 0 },
      { duration: 0.3, y: '32px', x: '-64px' }
    );
    gsap.fromTo(
      Kref.current,
      { y: 0, x: 0 },
      { duration: 0.3, y: '-32px', x: '64px' }
    );
    gsap.fromTo(Uref.current, { y: 0 }, { duration: 0.3, y: '-32px' });
  };
  const handleMouseLeave = () => {
    gsap.fromTo(Sref.current, { x: '32px' }, { delay: 0, duration: 0.3, x: 0 });
    gsap.fromTo(U1ref.current, { x: '-32px' }, { duration: 0.3, x: 0 });
    gsap.fromTo(Dref.current, { y: '-32px' }, { duration: 0.3, y: 0 });
    gsap.fromTo(
      Oref.current,
      { y: '32px', x: '-64px' },
      { duration: 0.3, y: 0, x: 0 }
    );
    gsap.fromTo(
      Kref.current,
      { y: '-32px', x: '64px' },
      { duration: 0.3, y: 0, x: 0 }
    );
    gsap.fromTo(Uref.current, { y: '-32px' }, { duration: 0.3, y: 0 });
  };
  const handleHome = () => {
    history.push('/');
  };

  return (
    <div className="logoImg">
      <div
        onClick={handleHome}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="logoHolder"
      >
        <img
          className="logoBackgroundImg"
          ref={background}
          src={logoBackground}
          height={height}
          alt="logo of world of sudoku"
        ></img>
        <img ref={Sref} src={S} height={height} alt=""></img>
        <img ref={U1ref} src={U1} height={height} alt=""></img>
        <img ref={Dref} src={D} height={height} alt=""></img>
        <img ref={Oref} src={O} height={height} alt=""></img>
        <img ref={Kref} src={K} height={height} alt=""></img>
        <img ref={Uref} src={U} height={height} alt=""></img>
      </div>
    </div>
  );
};
