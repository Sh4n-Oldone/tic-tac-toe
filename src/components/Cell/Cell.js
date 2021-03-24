import React, { useState } from 'react'
import './Cell.css'

export default function Cell({position, isPlayerCross, status, handleClick}) {

  const [isEnabled, setIsEnabled] = useState(true)

  const handleCellClick = (pos, figure) => {
    setIsEnabled(false)
    handleClick(pos, figure)
  }

  return (
    <div 
      className={`cell${isPlayerCross 
        ? ' x_hover' 
        : ' zero_hover'
      }${status === 'cross' 
          ? ' cell-x' 
          : status === 'zero' 
            ? ' cell-zero'
            : ''
        }${isEnabled 
          ? '' 
          : ' cell_disabled'}`}
      onClick={() => {handleCellClick(position, isPlayerCross ? 'cross' : 'zero')}}
    />
  )
}
