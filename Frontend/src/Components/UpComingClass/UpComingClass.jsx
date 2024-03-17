import React from 'react'
import './UpComingClass.css'
const UpComingClass = ({subject, timeFrom, timeTo }) => {
  return (
      <div className='UpComingClass'>
          <div className="subject-time">
              <span className='subject'>{ subject}</span>
              <span className='time'>{timeFrom} - { timeTo}</span>
          </div>
          <div className=" join-now-button">
              <button className='Button'>Join now</button>
          </div>
    </div>
  )
}

export default UpComingClass