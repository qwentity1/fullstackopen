import { Part } from './Part'

export function Content({ parts }) {
  return (
    <>
      {parts.map((part) => (
        <Part key={part.name} name={part.name} exercises={part.exercises} />
      ))}
    </>
  )
}
