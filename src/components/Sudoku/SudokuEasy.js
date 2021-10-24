import React from 'react';
import '../../styles/SudokuEasy.css';
import { useSelector, useDispatch } from 'react-redux';
import { easyArray, easyShort } from './GameArrays';
import { SolvedEasy } from './SolvedEasy';
import {
  resetBoardAction,
  saveArrayStateAction,
} from '../../actions/easySudokuActions';
import { useHistory } from 'react-router-dom';
import { useStopwatch } from 'react-timer-hook';

export const SudokuEasy = () => {
  let [state, setState] = React.useState();
  const { seconds, minutes, hours, days } =
    useStopwatch({ autoStart: true });
  const dispatch = useDispatch();
  const history = useHistory();
  const [mainSudoku, setMainSudoku] = React.useState('grid');
  const [solvedSudoku, setSolvedSudoku] = React.useState('none');
  let control = 0;
  let controlArray = [];
  const reduxArray = useSelector((state) => state.easyFields.controlArray);
  const generateRow = (gameMap, row) => {
    const returnArray = [];

    for (let i = row; i < row + 1; i++) {
      for (let j = 0; j < 9; j++) {
        if (gameMap[i][j] === 0) {
          controlArray.push(reduxArray[control]);
          state = { ...state, controlArray };
          let indexNumber = control;
          returnArray.push(
            <input
              className="inputCell"
              value={state.controlArray[indexNumber].value}
              defaultValue={reduxArray[indexNumber]}
              onChange={(changeEvent) => {
                if (validateInput(changeEvent.target.value) === false) {
                  alert(
                    'Please try to fill the fields out with numbers from 1-9'
                  );
                  history.go(0);
                } else {
                  controlArray.splice(indexNumber, 1, changeEvent.target.value);
                  handleSave();
                }
              }}
            ></input>
          );
          control += 1;
        } else {
          returnArray.push(<div className="cell">{gameMap[i][j]}</div>);
        }
      }
    }
    return <div className="rowContainer">{returnArray}</div>;
  };

  const handleSubmit = (submitEvent) => {
    submitEvent.preventDefault();
    console.log(state.controlArray);
    console.log(easyShort);
    let handler = []
    for (let i = 0; i < state.controlArray.length; i++) {
      if (state.controlArray[i] !== easyShort[i]) {
        handler.push(1)
      } else {
      }
    }
    if (handler.length===0) alert('congrats')
  };

  const validateInput = (input) => {
    if (input === '') {
      return true;
    } else if (input > 9 || input <= 0) {
      return false;
    }
    return true;
  };
  const handleSave = () => {
    dispatch(saveArrayStateAction(state));
  };
  const handleSolution = () => {
    setMainSudoku('none');
    setSolvedSudoku('grid');
  };

  const handleReset = () => {
    setMainSudoku('grid');
    setSolvedSudoku('none');
    dispatch(resetBoardAction());
    history.go(0);
  };
  return (
    <div>
      <div
        style={{
          textAlign: 'left',
          position: 'absolute',
          color: '#78B7EB',
          left: '50px',
          top: '50vh',
        }}
      >
        <div style={{ fontSize: '70px' }}>
          <span>{days}</span>:<span>{hours}</span>:<span>{minutes}</span>:
          <span>{seconds}</span>
        </div>
      </div>
      <div className="outerContainer" style={{ display: mainSudoku }}>
        <form onSubmit={handleSubmit}>
          <div>{generateRow(easyArray, 0)}</div>
          <div>{generateRow(easyArray, 1)}</div>
          <div>{generateRow(easyArray, 2)}</div>
          <div>{generateRow(easyArray, 3)}</div>
          <div>{generateRow(easyArray, 4)}</div>
          <div>{generateRow(easyArray, 5)}</div>
          <div>{generateRow(easyArray, 6)}</div>
          <div>{generateRow(easyArray, 7)}</div>
          <div>{generateRow(easyArray, 8)}</div>
          <button className="sudokuFormButton" type="submit">
            Check
          </button>
        </form>
      </div>
      <div className="solutionContainer" style={{ display: solvedSudoku }}>
        <SolvedEasy />
      </div>
      <div className="buttonContainer">
        <button className="sudokuButton" type="button" onClick={handleSolution}>
          Solution
        </button>
        <button className="sudokuButton" onClick={handleReset}>
          Reset
        </button>
      </div>
    </div>
  );
};
