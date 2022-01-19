import React, { useState } from 'react'

const History = (props) => {

  if ((props.good) === 0 && (props.neutral) === 0 && (props.bad) === 0) {
    return (
      <div>
        <br></br>
        "Doesn't exist feedback, be the first to leave one"
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
      Average:{props.good + props.bad + props.neutral / 3}
      <br></br>
      Positive: {(props.good + props.bad + props.neutral * 100) / 15 + "%"}

    </div>
  )
}
const LastFeedback = (props) => {
  return (
    <div>Last feedback: {props.allClicks.join(" ")}
    </div>
  )

}


const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
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
  const clearHistory = () => {
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
      <History allClicks={allClicks} good={good} neutral={neutral} bad={bad} />
      <LastFeedback allClicks={allClicks} />
      <button onClick={clearHistory}>Clear</button>
      <AppAnecdoteRandom />
    </div>
  )
}


const AppAnecdoteRandom = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients',
    'Adding manpower to a late software project makes it later!'
  ]
  const [selected, setSelected] = useState(0)
  const [vote, setVote] = useState([0, 0, 0, 0, 0, 0, 0])

  const votes = () => {
    const vot = [...vote]
    vot[selected] += 1
    setVote(vot)
  }
  const randomAnecdotes = () => {
    let random = Math.floor(Math.random(selected) * anecdotes.length);
    setSelected(random)
  }


  return (
    <div>
      <h1>Anecdotes:</h1>
      <h3>{anecdotes[selected]}</h3>

      This anecdote has: {vote[selected]} votes
      <br></br>
      <br></br>
      <button onClick={randomAnecdotes}>random</button>
      <button onClick={votes}>Votes</button>
    </div>
  )
}
export default App