import { useState } from 'react'

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const Statistics = ({ good, neutral, bad }) => {
    const all = good + neutral + bad
    const average = (good - bad) / all || 0
    const positive = ((good + neutral * (1 / 2) - bad) / all) * 100 || 0
    return (
      <>
        <h2>statistics</h2>
        {all === 0 && <p>No feedback given</p>}
        {all > 0 && (
          <div>
            <div>
              <span>good</span> <span>{good}</span>
            </div>
            <div>
              <span>neutral</span> <span>{neutral}</span>
            </div>
            <div>
              <span>bad</span> <span>{bad}</span>
            </div>
            <div>
              <span>all</span> <span>{all}</span>
            </div>
            <div>
              <span>average</span> <span>{average}</span>
            </div>
            <div>
              <span>positive</span> <span>{positive}%</span>
            </div>
          </div>
        )}
      </>
    )
  }
  return (
    <div>
      <h2>give feedback</h2>
      <div>
        <button onClick={() => setGood((prev) => prev + 1)}>good</button>
        <button onClick={() => setNeutral((prev) => prev + 1)}>neutral</button>
        <button onClick={() => setBad((prev) => prev + 1)}>bad</button>
      </div>
      <Statistics good={good} bad={bad} neutral={neutral} />
    </div>
  )
}

export default App
