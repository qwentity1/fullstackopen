import { useState } from 'react'

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h2>give feedback</h2>
      <div>
        <button onClick={() => setGood((prev) => prev + 1)}>good</button>
        <button onClick={() => setNeutral((prev) => prev + 1)}>neutral</button>
        <button onClick={() => setBad((prev) => prev + 1)}>bad</button>
      </div>
      <h2>statistics</h2>
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
      </div>
    </div>
  )
}

export default App
