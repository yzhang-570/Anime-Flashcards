import {React} from 'react'
import "../Flashcard.css"

const Flashcard = ({ currentCard, cardState, flipCard, correct}) => {

  if(!currentCard) {
    return null
  }

  return (
    <div onClick={flipCard} className={`flashcard-div ${correct}`}>
      {
        cardState == 0 ? 
        <img src={currentCard[cardState]}/> :
        <h2>{currentCard[cardState]}</h2>
      }
    </div>
  )

}

export default Flashcard
