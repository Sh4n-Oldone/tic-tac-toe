import React from 'react'
import './Cell.css'

export default function Cell({position, status, handleClick}) {
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

  return (
    <div 
      className={`cell ${cellClassName(position)}
        ${status==='cross' 
          ? ' cell-x' 
          : status === 'zero' 
            ? ' cell-zero'
            : ''
        }`}
      onClick={() => {handleClick(cellClassName(position))}}
    />
  )
}
