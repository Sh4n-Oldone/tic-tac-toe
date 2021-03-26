import React, { useEffect, useState } from 'react'
import './Cell.css'

export default function Cell({position, isPlayerCross, handleClick, newGame}) {

  const [isEnabled, setIsEnabled] = useState(true)
  const [cellStatus, setCellStatus] = useState('')
  const handleCellClick = (pos, figure) => {
    setIsEnabled(false)
    handleClick(pos, figure)
    if(isPlayerCross) {
      setCellStatus('cross')
    } else {
      setCellStatus('zero')
    }
  }

  useEffect(() => {
    if (newGame) {
      setIsEnabled(true)
      setCellStatus('')
    }
  }, [newGame])

  return (
    <div 
      className={`cell${isPlayerCross && isEnabled
        ? ' x_hover' 
        : isEnabled
          ? ' zero_hover'
          : ''
      }${cellStatus === 'cross' 
          ? ' cell-x' 
          : cellStatus === 'zero' 
            ? ' cell-zero' 
            : ''
        }${isEnabled 
          ? '' 
          : ' cell_disabled'}`}
      onClick={() => {handleCellClick(position, isPlayerCross ? 'cross' : 'zero')}}
    />
  )
}
