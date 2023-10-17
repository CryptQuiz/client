import React from 'react'
import AddQuiz from './components/AddQuiz'
import Statistics from './components/Statistics'
const page = () => {
  return (
    <div className='flex flex-row p-14 bg-red-600 h-full w-full'>
      <div>      
        <AddQuiz/>
        <Statistics/>
      </div>

      </div>
  )
}

export default page