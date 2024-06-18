import React from 'react'
import './InstructorJoinClassCard.css'

const InstructorJoinClassCard = ({subject, day, date, timeFrom, timeTo}) => {
  return (
      <div className='StudentJoinClassCard'>
          <span>{subject}</span>
          <span>{day},{date}</span>
          <span>{timeFrom}-{timeTo}</span>
          <button className='Button'>Start now</button>

    </div>
  )
}

export default InstructorJoinClassCard