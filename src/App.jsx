import {React, useState} from 'react'
import Flashcard from "./components/Flashcard.jsx"
import "./App.css"
import Heading from "./components/Heading.jsx"

/*key represents card-front, value represents card-back*/
import cardInfo from "./data/data.js"

const App = () => {

  /*Holds an array containing information (img source, name, bg color) for current card*/
  const [currentCard, setCurrentCard] = useState(-1)
  const [cardNumber, setCardNumber] = useState(-1) //index of current card in data array

  /*0 represents front, 1 represents back*/
  const [cardState, setCardState] = useState(0) //front/back of card
  const [guessText, setGuessText] = useState("") //input field text
  const[correct, setCorrect] = useState("null")

  const displayNextCard = () => {
    var index = cardNumber
    if(index + 1 < cardInfo.length) {
      console.log("cardNumber before: " + cardNumber)
      index += 1
    }

    //cardNumber is not updated yet within same function call
    //bc state is immutable in the same render

    //all state are set to their updated value AFTER new render

    //use a separate variable like index
    //if you want to use an updated value in the SAME render

    setCardNumber(index)
    setCurrentCard(cardInfo[index])
    setCardState(0)
    setCorrect("null")
  }

  // console.log(cardNumber)

  const displayPrevCard = () => {
    var index = cardNumber
    if(index - 1 >= 0) {
      console.log("cardNumber before: " + cardNumber)
      index -= 1
    }

    setCardNumber(index)
    setCurrentCard(cardInfo[index])
    setCardState(0)
    setCorrect("null")
  }

  const flipCard = () => {
    cardState === 0 ? setCardState(1) : setCardState(0)
  }

  const handleSubmit = (e) => {
    e.preventDefault() //prevent refresh on submit
    var newGuessText = guessText + ""
    var correctAns = currentCard[1] + ""

    if(cardState == 0) {
      console.log(correctAns)
      console.log(newGuessText.toLowerCase())
      if(correctAns.toLowerCase().includes(newGuessText.toLowerCase())) {
        flipCard()
        setCorrect("correct-color")
      }
      else {
        setCorrect("false-color")
      }
      setGuessText("")
    }
    else {
      alert("no cheating :), flip the card back and try again")
      setGuessText("")
      setCardState(0)
    }

  }

  return (
    <>
      {
        cardNumber == -1 && currentCard && currentCard == -1 ? 
        //if cards have not been loaded
        (
          <div className={"background"}>
            <Heading />
            <button className="nav-button" onClick={displayNextCard}>→</button>
          </div>
        )
        :
        (
        //if cards have loaded
        <div className={"background " + currentCard[2]}>
          <Heading />

          <Flashcard currentCard={currentCard} cardState={cardState} flipCard={flipCard} correct={correct}/>

          <form onSubmit={handleSubmit}>
            <>
              <input type="text" value={guessText} onChange={(e) => {setGuessText(e.target.value)}} placeholder="Type your guess here :)"></input>
              <button className="submit-button" type="submit">Submit Answer</button>
            </>
            {/*ignore error message, it's just bc of the > bracket*/}
            {correct=="false-color" && <p id="false-msg">Incorrect. Try again :></p>}
            {correct=="correct-color" && <p id="correct-msg">Correct!</p>}
          </form>

          <div className="button-div">
            {
              //determine if BACK button should be greyed out
              cardNumber == 0 ? (
                <button className="nav-button-greyed" onClick={displayPrevCard}>←</button>
              )
              :
              (
                <button className="nav-button" onClick={displayPrevCard}>←</button>
              )
            }
            {
              //determine if FORWARD button should be greyed out
              cardNumber == cardInfo.length - 1 ? (
                <button className="nav-button-greyed" onClick={displayNextCard}>→</button>
              )
              :
              (
                <button className="nav-button" onClick={displayNextCard}>→</button>
              )
            }
          </div>
          
        </div>
        )
      }
    </> 
  )
  
}

export default App
















/*chooses a random card and sets currentCard to selected card*/
// ORIGINAL displayNextCard()
// const displayNextCard = () => {
//   //TODO: remove randomization
//   // var cardNumber = 0
//   // do {
//   //   cardNumber = parseInt(Math.random() * cardInfo.length)
//   // }
//   // while(cardInfo[cardNumber] == currentCard)

//   // console.log(cardNumber)
  
//   setCurrentCard(cardInfo[cardNumber])
//   setCardState(0)
// }