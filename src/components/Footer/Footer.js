import React, { useEffect, useRef } from 'react';
import { EmailSubscriptionForm } from '../index';
import '../../styles/Footer.css';
import { gsap } from 'gsap';
import { useSelector } from 'react-redux';

export const Footer = () => {
  const footerRef = useRef();
  const { visibility } = useSelector((state) => state.footerVisibility);
  const handleFooterMouseEnter = () => {
    gsap.fromTo(
      footerRef.current,
      { y: '5vh' },
      { delay: 0, duration: 0.5, x: '0vw', y: '0vh' }
    );
  };
  const handleFooterMouseLeave = () => {
    gsap.fromTo(
      footerRef.current,
      { y: '0vh' },
      { delay: 0, duration: 0.5, x: '0vw', y: '5vh' }
    );
  };

  useEffect(() => {
    gsap.fromTo(
      footerRef.current,
      { x: '60vw', y: '5vh' },
      { delay: 0.3, duration: 1, x: '0vw', y: '5vh' }
    );
  }, []);

  if (visibility === true) {
    return (
      <div
        ref={footerRef}
        onMouseEnter={handleFooterMouseEnter}
        onMouseLeave={handleFooterMouseLeave}
        className="footerContainer"
      >
        <EmailSubscriptionForm />
      </div>
    );
  } else {
    return <div></div>;
  }
};
