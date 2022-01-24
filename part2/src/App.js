import React from 'react'
import Course from "./components/Course"

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    },
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]


function calculatePart(index) {
 return courses[index].parts.reduce((sum, part) => {
    return sum + part.exercises
  }, 0)
}   


 

  return (
    <div>
      <h2>{courses[0].name}</h2>
      {courses[0].parts.map(part =>
        <Course key={part.id} courses={part} />)}
      <h4 >Total of {calculatePart(0)} exercises</h4>
      <h2>{courses[1].name}</h2>
      {courses[1].parts.map(part => <Course key={part.id} courses={part} />)}
      <h4>Total of {calculatePart(1)} exercises</h4>
    </div>
  )
}
export default App