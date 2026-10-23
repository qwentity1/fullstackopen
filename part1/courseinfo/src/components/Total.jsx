export function Total({ parts }) {
  const totalExercises = parts.reduce((prev, acc) => prev + acc.exercises, 0)
  return <p>Number of exercises {totalExercises}</p>
}
