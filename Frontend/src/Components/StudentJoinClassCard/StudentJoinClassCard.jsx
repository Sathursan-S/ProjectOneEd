import React from 'react'
import './StudentJoinClassCard.css'

const StudentJoinClassCard = ({subject, day, date, timeFrom, timeTo}) => {
  return (
      <div className='StudentJoinClassCard'>
          <span>{subject}</span>
          <span>{day},{date}</span>
          <span>{timeFrom}-{timeTo}</span>
          <button className='Button'>Join now</button>

    </div>
  )
}

export default StudentJoinClassCard