import React, { useState } from 'react'
import './Cell.css'

export default function Cell({position, isPlayerCross, handleClick}) {

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

  return (
    <div 
      className={`cell${isPlayerCross 
        ? ' x_hover' 
        : ' zero_hover'
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
