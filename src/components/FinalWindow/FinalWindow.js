import React from 'react'
import './FinalWindow.css'

export default function FinalWindow({isFinished, whoWon, onRestart}) {

  return (
    <div className={`final-window${isFinished ? '' : 'final-window_hidden'}`}>
      <p className={`final-window__text${isFinished ? '' : ' final-window__text_hidden'}`}>
        {whoWon === 'cross' 
          ? 'Крестики победили!' 
          : whoWon === 'zero' 
            ? 'Нолики победили!'
            : 'Ничья!'
        }
      </p>
      <button 
        className={`final-window__restart-button${isFinished ? '' : ' final-window__restart-button_hidden'}`}
        onClick={onRestart}
      >
        Снова!
      </button>
    </div>
  )
}
