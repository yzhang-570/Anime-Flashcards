import {React, useState} from 'react'
import Flashcard from "./Flashcard.jsx"
import "./App.css"

/*key represents card-front, value represents card-back*/
const cardInfo = [
  ["https://staticg.sportskeeda.com/editor/2022/03/5d035-16466484525958-1920.jpg", "Demon Slayer: Kimetsu no Yaiba", "easy"],
  ["https://static1.cbrimages.com/wordpress/wp-content/uploads/2024/02/screenshot-2024-02-28-at-8-22-25-pm.jpg", "Attack on Titan", "hard"],
  ["https://thereviewmonster.blog/wp-content/uploads/2024/04/screenshot-2024-04-01-222412.png?w=1024", "Frieren", "easy"],
  ["https://arumjournal.com/wp-content/uploads/2024/02/screenshot-2024-02-24-at-9.39.55e280afam.png?w=1024&h=666&crop=1", "The Apothecary Diaries", "easy"],
  ["https://preview.redd.it/7iu0u6g1ca961.png?width=640&crop=smart&auto=webp&s=aef0dc0f8d27afcbb0666ec9978c37f4ecb6f88f", "Jujutsu Kaisen", "medium"],
  ["https://preview.redd.it/uqph30l6izi81.jpg?width=640&crop=smart&auto=webp&s=d2c53ba9bd896f7b604525d7399ab7ee41e7803e", "Yuri on Ice", "hard"],
  ["https://bloodgodpod.com/wp-content/uploads/2021/08/neon-genesis-evangelion.jpg", "Evangelion", "easy"],
  ["https://staticg.sportskeeda.com/editor/2022/12/56a11-16699120846653-1920.jpg", "Blue Lock", "medium"],
  ["https://pbs.twimg.com/media/E445x53XIAAdrLK.jpg", "Chainsaw Man", "medium"],
  ["https://toonamifaithful.com/wp-content/uploads/2018/09/SAO3-Stills-1.jpg", "Sword Art Online", "hard"]
]

const App = () => {
  // ["Start!", "Press the next arrow to start the flashcards :)"]
  const [currentCard, setCurrentCard] = useState()

  /*0 represents front, 1 represents back*/
  const [cardState, setCardState] = useState(0)

  /*chooses a random card and sets currentCard to selected card*/
  const displayNextCard = () => {
    var cardNumber = 0
    do {
      cardNumber = parseInt(Math.random() * cardInfo.length)
    }
    while(cardInfo[cardNumber] == currentCard)

    setCurrentCard(cardInfo[cardNumber])

    setCardState(0)
  }

  const flipCard = () => {
    cardState === 0 ? setCardState(1) : setCardState(0)
    // setCardState((cardState + 1) % 2) /*0 -> 1, 1 -> 0; stays within index range*/
  }

  return (
    <>
      {
        currentCard ? (
        <div className={"background " + currentCard[2]}>
          <div className="heading">
            <h1>Guess the anime!</h1>
            <h2>Can you name the following titles based on a screenshot?</h2>
            <p>Number of cards: 10</p>
          </div>
          <Flashcard currentCard={currentCard} cardState={cardState} flipCard={flipCard}/>
          <button onClick={displayNextCard}>→</button>
        </div>
        ) :
        (
          <div className={"background"}>
            <div className="heading">
              <h1>Guess the anime!</h1>
              <h2>Can you name the following titles based on a screenshot?</h2>
              <p>Number of cards: 10</p>
            </div>
            <button onClick={displayNextCard}>→</button>
          </div>
        )
      }
    </> 
  )
}

export default App
