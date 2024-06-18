import React from 'react'
import './InstructorUpcomingClassCard.css'
const InstructorUpcomingClassCard = ({subject, timeFrom, timeTo,day , date }) => {
  return (
      <div className='UpComingClass'>
          <div className="subject-time">
              <span className='subject'>{ subject}</span>
              <span className='time'>{timeFrom} - { timeTo}</span>
              <span className='time'>{day}  { date}</span>
          </div>
          <div className=" join-now-button">
              <button className='Button'>Start now</button>
          </div>
    </div>
  )
}

export default InstructorUpcomingClassCard