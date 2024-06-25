import React from 'react'
import { useSelector } from 'react-redux'
import './RequestCard.css'

const RequestCard = ({studentName}) => {
    
  return (
      <div className='RequestCard'>
          <div className="student-name">
              <span className='student-name'>{ studentName}</span>
              
          </div>
          <div className=" accept-button">
              <button className='accept-but Button'>Accept Request</button>
              <button className='cancel-now-but '>Cancel</button>
          </div>
      </div>
  )
}

export default RequestCard