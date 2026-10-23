import { useState } from 'react'

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const addGood = () => {
    setGood((prev) => prev + 1)
  }
  const addNeutral = () => {
    setNeutral((prev) => prev + 1)
  }
  const addBad = () => {
    setBad((prev) => prev + 1)
  }

  const Button = ({ children, onClick }) => {
    return <button onClick={onClick}>{children}</button>
  }

  const Statistics = ({ good, neutral, bad }) => {
    const all = good + neutral + bad
    const average = (good - bad) / all || 0
    const positive = ((good + neutral * (1 / 2) - bad) / all) * 100 || 0
    return (
      <>
        <h2>statistics</h2>
        {all === 0 && <p>No feedback given</p>}
        {all > 0 && (
          <table>
            <tbody>
              <StatisticLine text={'good'} value={good} />
              <StatisticLine text={'neutral'} value={neutral} />
              <StatisticLine text={'bad'} value={bad} />
              <StatisticLine text={'all'} value={all} />
              <StatisticLine text={'average'} value={average} />
              <StatisticLine text={'positive'} value={positive + '%'} />
            </tbody>
          </table>
        )}
      </>
    )
  }
  const StatisticLine = ({ text, value }) => {
    return (
      <tr>
        <td>{text}</td>
        <td>{value}</td>
      </tr>
    )
  }
  return (
    <div>
      <h2>give feedback</h2>
      <div>
        <Button onClick={addGood}>good</Button>
        <Button onClick={addNeutral}>neutral</Button>
        <Button onClick={addBad}>bad</Button>
      </div>
      <Statistics good={good} bad={bad} neutral={neutral} />
    </div>
  )
}

export default App
