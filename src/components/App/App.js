import React, { useState } from 'react'
import Cell from '../Cell/Cell'
import FinalWindow from '../FinalWindow/FinalWindow'
import './App.css'

export default function App() {
  const [isPlayerCross, setIsPlayerCross] = useState(true)

  const cells = [ 'a1', 'a2', 'a3', 'b1', 'b2', 'b3', 'c1', 'c2', 'c3']
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
    setCellsStatus(prevStatus => ({
      ...prevStatus,
      [cellPosition]: cellStatus
    }))
    console.log(cellsStatus)
  }

  const handleRestart = () => {
    setIsWon(false)
    setIsFinished(false)
  }

  return (
    <div className="App">
      <div className='board'>

        {cells.map( cell => 
            <Cell 
              key={cell.toString()}
              position={cell} 
              handleClick={handleCellClick} 
              isPlayerCross={isPlayerCross}
            />
          )}

      </div>
      
      <FinalWindow 
        onRestart={handleRestart}
        isFinished={isFinished}
        isWon={isWon}
      />

    </div>
  )
}
