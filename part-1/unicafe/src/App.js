import { useState } from 'react'

const Header = props => <h2>{props.value}</h2>

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const StatisticLine = props => <p>{props.text}: {props.value}</p>

const Statistics = (props) => {
  if (props.clicks.total === 0) {
    return (
      <div>
        No feedback given
      </div>
    )
  }

  return (
    <div>
      <Header value="Stats" />
      <StatisticLine text="Good" value={props.clicks.good} />
      <StatisticLine text="Neutral" value={props.clicks.neutral} />
      <StatisticLine text="Bad" value={props.clicks.bad} />
      <StatisticLine text="Total" value={props.clicks.total} />
    </div>
  )
}

const App = () => {
  const [clicks, setClicks] = useState({
    good: 0, 
    neutral: 0, 
    bad: 0, 
    total: 0
  })

  const handleGood = () => {
    setClicks({
      ...clicks, 
      good: clicks.good + 1, 
      total: clicks.total + 1
    })
  }


  const handleNeutral = () =>
    setClicks({
      ...clicks, 
      neutral: clicks.neutral + 1, 
      total: clicks.total + 1
    })

  const handleBad = () =>
    setClicks({
      ...clicks, 
      bad: clicks.bad + 1, 
      total: clicks.total + 1
    })

  return (
    <div>
      <Header value="Give feedback" />
      <Button handleClick={handleGood} text="Good"/>
      <Button handleClick={handleNeutral} text="Neutral" />
      <Button handleClick={handleBad} text="Bad" />
      <hr />
      <Statistics clicks={clicks}/>
    </div>
  )
}

export default App