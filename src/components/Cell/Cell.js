import React, { useEffect, useState } from 'react'
import './Cell.css'

export default function Cell({position, isPlayerCross, status, handleClick}) {
  function cellClassName(cellName) {
    if (cellName === 'FstRowFstCol' || 
        cellName === 'SecRowFstCol' ||
        cellName === 'ThrdRowFstCol' ||
        cellName === 'FstRowSecCol' ||
        cellName === 'SecRowSecCol' ||
        cellName === 'ThrdRowSecCol' ||
        cellName === 'FstRowThrdCol' ||
        cellName === 'SecRowThrdCol' ||
        cellName === 'ThrdRowThrdCol'
    ) {
      return cellName
    }
    return 'noCell'
  }

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
      onClick={() => {handleCellClick(cellClassName(position), isPlayerCross ? 'cross' : 'zero')}}
    />
  )
}
