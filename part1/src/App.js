import React, { useState } from 'react'

const History = (props) => {

  if (props.good && props.neutral && props.bad === 0) {
    return (
      <div>
        <br></br>
        There is no feedback. Be the first to leave one!
      </div>
    )
  }
  return (
    <div>
      <h2>Statistics:</h2>
      Good: {props.good}
      <br></br>
      Neutral: {props.neutral}
      <br></br>
      Bad: {props.bad}
      <br></br>
      All: {props.good + props.bad + props.neutral}
      <br></br>
      Average:{props.good + props.bad + props.neutral/3}
      <br></br>
      Positive: {(props.good + props.bad + props.neutral * 100) / 15 + "%"}
  
    </div>
  )
}
const LastFeetback = (props) =>{
  return (
  <div>Last feetback: {props.allClicks.join(" ")} 
  <button onClick={props.clearHistory}>Clen</button>
  </div>
  )

}


const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral]= useState(0)
  const [bad, setBad] = useState(0) 
  const [allClicks, setAll] = useState([])

 
  const historyGood = () => {
    setAll(allClicks.concat("good"))
    setGood(good + 1)
  }
  const historyNeutral = () => {
    setAll(allClicks.concat('neutral'))
    setNeutral(neutral + 1)
  }
  const historyBad = () => {
    setAll(allClicks.concat('bad'))
    setBad(bad + 1)
  }
 const clearHistory= () =>{
   setAll([]);
 }
  return (
    <div>
      <h1>Give Feedback</h1>
      <button onClick={historyGood}>Good
      </button>
      <button onClick={historyNeutral}>Neutral</button>
      <button onClick={historyBad}>Bad</button>
      <br></br>
      <History allClicks={allClicks} good={good}  neutral={neutral} bad={bad}/>
      <LastFeetback  allClicks={allClicks} clearHistory={clearHistory}  />
    </div>
  )
}

export default App