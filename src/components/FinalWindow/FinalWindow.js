import React from 'react'
import './FinalWindow.css'

export default function FinalWindow({isFinished, isWon}) {

  return (
    <div className={`final-window${isFinished ? '' : 'final-window_hidden'}`}>
      <p className={`final-window__text${isFinished ? '' : ' final-window__text_hidden'}`}>
        {isWon 
          ? 'Вы победили!' 
          : 'Вы проиграли'
        }
      </p>
      <button 
        className={`final-window__restart-button${isFinished ? '' : ' final-window__restart-button_hidden'}`}
        
      >
        Снова!
      </button>
    </div>
  )
}
