import React, { useEffect, useState } from 'react'
import Cell from '../Cell/Cell'
import FinalWindow from '../FinalWindow/FinalWindow'
import './App.css'

export default function App() {
  const [isPlayerCross, setIsPlayerCross] = useState(true)
  const [cellsStatus, setCellsStatus] = useState({
    a1: '',
    a2: '',
    a3: '',
    b1: '',
    b2: '',
    b3: '',
    c1: '',
    c2: '',
    c3: ''
  })

  const [isFinished, setIsFinished] = useState(false)
  const [isWon, setIsWon] = useState(false)

  const handleCellClick = (cellPosition, cellStatus) => {
    setIsPlayerCross(!isPlayerCross)
    setCellsStatus(prev => ({
      ...prev,
      [cellPosition]: cellStatus
    }))
    console.log(isWon)
  }

  const handleRestart = () => {
    setIsWon(false)
    setIsFinished(false)
    setCellsStatus({
      a1: '',
      a2: '',
      a3: '',
      b1: '',
      b2: '',
      b3: '',
      c1: '',
      c2: '',
      c3: ''
    })
  }

  return (
    <div className="App">
      <div className='board'>
        <Cell
          position='FstRowFstCol' 
          status={cellsStatus.FstRowFstCol}
          handleClick={handleCellClick}
          isPlayerCross={isPlayerCross}
        />
        <Cell
          position='FstRowSecCol' 
          status={cellsStatus.FstRowSecCol}
          handleClick={handleCellClick}
          isPlayerCross={isPlayerCross}
        />
        <Cell
          position='FstRowThrdCol' 
          status={cellsStatus.FstRowThrdCol}
          handleClick={handleCellClick}
          isPlayerCross={isPlayerCross}
        />

        <Cell
          position='SecRowFstCol' 
          status={cellsStatus.SecRowFstCol}
          handleClick={handleCellClick}
          isPlayerCross={isPlayerCross}
        />
        <Cell
          position='SecRowSecCol' 
          status={cellsStatus.SecRowSecCol}
          handleClick={handleCellClick}
          isPlayerCross={isPlayerCross}
        />
        <Cell
          position='SecRowThrdCol' 
          status={cellsStatus.SecRowThrdCol}
          handleClick={handleCellClick}
          isPlayerCross={isPlayerCross}
        />

        <Cell
          position='ThrdRowFstCol' 
          status={cellsStatus.ThrdRowFstCol}
          handleClick={handleCellClick}
          isPlayerCross={isPlayerCross}
        />
        <Cell
          position='ThrdRowSecCol' 
          status={cellsStatus.ThrdRowSecCol}
          handleClick={handleCellClick}
          isPlayerCross={isPlayerCross}
        />
        <Cell
          position='ThrdRowThrdCol' 
          status={cellsStatus.ThrdRowThrdCol}
          handleClick={handleCellClick}
          isPlayerCross={isPlayerCross}
        />
      </div>
      
      <FinalWindow 
        onRestart={handleRestart}
        isFinished={isFinished}
        isWon={isWon}
      />

    </div>
  )
}
