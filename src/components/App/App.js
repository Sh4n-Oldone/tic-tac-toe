import React, { useEffect, useState } from 'react'
import { getRow, getColumn, getMoreItems, getValuesString } from '../../utils/objectSlices'
import { isThereEmptyValue } from '../../utils/isThereEmptyValue'
import Cell from '../Cell/Cell'
import FinalWindow from '../FinalWindow/FinalWindow'
import './App.css'

export default function App() {
  const [isPlayerCross, setIsPlayerCross] = useState(true)

  const cells = [ 'a1', 'a2', 'a3', 'b1', 'b2', 'b3', 'c1', 'c2', 'c3']
  const defaultCells = { 
    a1: '', a2: '', a3: '', 
    b1: '', b2: '', b3: '', 
    c1: '', c2: '', c3: '' 
  }
  const [cellsStatus, setCellsStatus] = useState(defaultCells)

  const [isFinished, setIsFinished] = useState(false)
  const [whoWon, setWhoWon] = useState('')

  const handleCellClick = (cellPosition, cellStatus) => {
    setIsPlayerCross(!isPlayerCross)
    setCellsStatus(prevStatus => ({
      ...prevStatus,
      [cellPosition]: cellStatus
    }))
    console.log(cellsStatus)
  }

  const winningStatus = () => {
    const arrayOfWinCombinations = [
      getValuesString(getRow(cellsStatus, 0, 3)),
      getValuesString(getRow(cellsStatus, 3, 6)),
      getValuesString(getRow(cellsStatus, 6, 9)),

      getValuesString(getColumn(cellsStatus, 1)),
      getValuesString(getColumn(cellsStatus, 2)),
      getValuesString(getColumn(cellsStatus, 3)),

      getValuesString(getMoreItems(cellsStatus, ['a1', 'b2', 'c3'])),
      getValuesString(getMoreItems(cellsStatus, ['a3', 'b2', 'c1']))
    ]

    if (arrayOfWinCombinations.includes('crosscrosscross')) {
      setWhoWon('cross')
      setIsFinished(true)
    }
    if (arrayOfWinCombinations.includes('zerozerozero')) {
      setWhoWon('zero')
      setIsFinished(true)
    }
    if (
        !isThereEmptyValue(cellsStatus) && 
        !arrayOfWinCombinations.includes('crosscrosscross') && 
        !arrayOfWinCombinations.includes('zerozerozero')
        ) {
      setWhoWon('draw')
      setIsFinished(true)
    }
  }

  const handleRestart = () => {
    setWhoWon('')
    setIsFinished(false)
    setCellsStatus({ ...defaultCells })
    setIsPlayerCross(true)
    console.log(cellsStatus)
  }

  useEffect(() => {
    winningStatus()
  }, [cellsStatus])

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
        whoWon={whoWon}
      />

    </div>
  )
}
