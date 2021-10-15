import React, { useState, useEffect } from 'react';
import '../../styles/SudokuEasy.css';
import { useSelector, useDispatch } from 'react-redux';
import {
  changeEasy1Action,
  changeEasy2Action,
  changeEasy3Action,
  changeEasy4Action,
  changeEasy5Action,
  resetBoardAction,
} from '../../actions/easySudokuActions';
import { useStopwatch } from 'react-timer-hook';
import { styled, Box } from '@mui/system';
import ModalUnstyled from '@mui/core/ModalUnstyled';

const StyledModal = styled(ModalUnstyled)`
  position: fixed;
  z-index: 1300;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Backdrop = styled('div')`
  z-index: -1;
  position: fixed;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  -webkit-tap-highlight-color: transparent;
`;

const style = {
  width: 600,
  bgcolor: 'white',
  border: '2px solid #000',
  p: 2,
  px: 4,
  pb: 3,
};

export const SudokuEasy = () => {
  const dispatch = useDispatch();
  const [solution, setSolution] = useState('false');
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
    pause();
  };
  const handleClose = () => {
    setOpen(false);
    reset();
  };

  const { seconds, minutes, hours, days, reset, pause } = useStopwatch({
    autoStart: true,
  });
  const first = useSelector((state) => state.easyFields.easy1);
  const second = useSelector((state) => state.easyFields.easy2);
  const third = useSelector((state) => state.easyFields.easy3);
  const fourth = useSelector((state) => state.easyFields.easy4);
  const fifth = useSelector((state) => state.easyFields.easy5);

  useEffect(() => {
    if (
      first === '4' &&
      second === '9' &&
      third === '7' &&
      fourth === '8' &&
      fifth === '1' &&
      solution === false
    ) {
      handleOpen();
      dispatch(resetBoardAction());
    } else {
    }
  }, [
    first,
    second,
    third,
    fourth,
    fifth,
    minutes,
    seconds,
    dispatch,
    reset,
    pause,
    solution,
    handleOpen,
  ]);

  const handleRestart = () => {
    reset();
    dispatch(resetBoardAction());
  };

  const handleSolve = () => {
    setSolution(true);
    dispatch(changeEasy1Action('4'));
    dispatch(changeEasy2Action('9'));
    dispatch(changeEasy3Action('7'));
    dispatch(changeEasy4Action('8'));
    dispatch(changeEasy5Action('1'));
  };

  return (
    <div>
      <div style={{ textAlign: 'center' }}>
        <div style={{ fontSize: '70px' }}>
          <span>{days}</span>:<span>{hours}</span>:<span>{minutes}</span>:
          <span>{seconds}</span>
        </div>
      </div>
      <div>
        <StyledModal
          aria-labelledby="unstyled-modal-title"
          aria-describedby="unstyled-modal-description"
          open={open}
          onClose={handleClose}
          BackdropComponent={Backdrop}
        >
          <Box sx={style}>
            <h2 id="unstyled-modal-title">Congratulations!</h2>
            <p id="unstyled-modal-description">
              You have solved the puzzle in exactly {minutes} minutes and{' '}
              {seconds} seconds!
            </p>
          </Box>
        </StyledModal>
      </div>
      <div className="sudokuButtonsContainer">
        <button onClick={handleRestart}>Restart</button>
        <button onClick={handleSolve}>Solution</button>
      </div>
      <div className="outerContainer">
        <div className="div1">
          <input
            value={first}
            onChange={(changeEvent) => {
              setSolution(false);
              dispatch(changeEasy1Action(changeEvent.target.value));
            }}
          ></input>
        </div>
        <div className="div2">
          <input
            value={second}
            onChange={(changeEvent) => {
              setSolution(false);
              dispatch(changeEasy2Action(changeEvent.target.value));
            }}
          ></input>
        </div>
        <div className="div3">
          <input className="disabled" disabled placeHolder="2" />{' '}
        </div>
        <div className="div4">
          <input className="disabled" disabled placeHolder="3" />
        </div>
        <div className="div5">
          <input className="disabled" disabled placeHolder="5" />{' '}
        </div>
        <div className="div6">
          <input
            value={third}
            onChange={(changeEvent) => {
              setSolution(false);
              dispatch(changeEasy3Action(changeEvent.target.value));
            }}
          />
        </div>
        <div className="div7">
          <input
            value={fourth}
            onChange={(changeEvent) => {
              setSolution(false);
              dispatch(changeEasy4Action(changeEvent.target.value));
            }}
          />
        </div>
        <div className="div8">
          <input
            value={fifth}
            onChange={(changeEvent) => {
              setSolution(false);
              dispatch(changeEasy5Action(changeEvent.target.value));
            }}
          />
        </div>
        <div className="div9">
          <input className="disabled" disabled placeHolder="6" />{' '}
        </div>
      </div>
    </div>
  );
};
