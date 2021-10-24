import React from 'react';
import { easyArray, easySolution } from './GameArrays';

export const SolvedEasy = () => {
  
  const solutionArray = [];

  for (let i = 0; i < easyArray.length; i++) {
    for (let j = 0; j < easyArray.length; j++) {
      if (easyArray[i][j] === 0) {
        solutionArray.push(
          <div className="solutionCell">{easySolution[i][j]} </div>
        );
      } else {
        solutionArray.push(<div className="cell">{easyArray[i][j]} </div>);
      }
    }
  }
  return solutionArray;
};
