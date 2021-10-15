import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import { useHistory } from 'react-router-dom';
import { Translator, HeaderButton } from '../index';
import '../../styles/DropDown.css';

export const DropDown = ({ text }) => {
  const [state, setState] = React.useState({
    right: false,
  });
  const history = useHistory();

  const handleEasy = () => {
    history.push('/easysudoku');
  };
  const handleMedium = () => {
    history.push('/mediumsudoku');
  };
  const handleHard = () => {
    history.push('/hardsudoku');
  };
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ height: '13.8vh' }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <div className="servicesHolder">
        <HeaderButton
          className="servicesButton1"
          innerText={Translator('Könnyű', 'Easy')}
          onClickEvent={handleEasy}
        />
        <HeaderButton
          className="servicesButton2"
          innerText={Translator('Közepes', 'Medium')}
          onClickEvent={handleMedium}
        />
        <HeaderButton
          className="servicesButton3"
          innerText={Translator('Nehéz', 'Hard')}
          onClickEvent={handleHard}
        />
      </div>
    </Box>
  );

  return (
    <div className="servicesContainer">
      {['top'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button
            style={{
              backgroundColor: 'transparent',
              boxShadow: 'none',
              borderRadius: '0px',
              fontWeight: '400',
            }}
            onClick={toggleDrawer(anchor, true)}
          >
            <div className="dropDownButton">{text}</div>
          </Button>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
};
