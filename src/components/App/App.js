import React, { useState } from 'react';
import Cell from '../Cell/Cell';
import FinalWindow from '../FinalWindow/FinalWindow';
import './App.css';

export default function App() {

  const [cellsStatus, setCellsStatus] = useState({
    FstRowFstCol: '',
    FstRowSecCol: '',
    FstRowThrdCol: '',
    SecRowFstCol: '',
    SecRowSecCol: '',
    SecRowThrdCol: '',
    ThrdRowFstCol: '',
    ThrdRowSecCol: '',
    ThrdRowThrdCol: ''
  })

  const handleCellClick = (position) => {

    // setCellsStatus({pos: 'cross'})
  }

  return (
    <div className="App">
      <div className='board'>
        <Cell
          position='FstRowFstCol' 
          status={cellsStatus.FstRowFstCol}
          handleClick={handleCellClick}
        />
        <Cell
          position='FstRowSecCol' 
          status={cellsStatus.FstRowSecCol}
          handleClick={handleCellClick}
        />
        <Cell
          position='FstRowThrdCol' 
          status={cellsStatus.FstRowThrdCol}
          handleClick={handleCellClick}
        />

        <Cell
          position='SecRowFstCol' 
          status={cellsStatus.SecRowFstCol}
          handleClick={handleCellClick}
        />
        <Cell
          position='SecRowSecCol' 
          status={cellsStatus.SecRowSecCol}
          handleClick={handleCellClick}
        />
        <Cell
          position='SecRowThrdCol' 
          status={cellsStatus.SecRowThrdCol}
          handleClick={handleCellClick}
        />

        <Cell
          position='ThrdRowFstCol' 
          status={cellsStatus.ThrdRowFstCol}
          handleClick={handleCellClick}
        />
        <Cell
          position='ThrdRowSecCol' 
          status={cellsStatus.ThrdRowSecCol}
          handleClick={handleCellClick}
        />
        <Cell
          position='ThrdRowThrdCol' 
          status={cellsStatus.ThrdRowThrdCol}
          handleClick={handleCellClick}
        />
      </div>
      <FinalWindow />
    </div>
  );
}
