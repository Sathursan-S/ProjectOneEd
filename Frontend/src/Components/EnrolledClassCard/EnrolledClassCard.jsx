import React from 'react'
import './EnrolledClassCard.css'
const EnrolledClassCard = ({ image, subject, grade, teacher }) => {
  return (
    <div className='EnrolledClassCard'>
         
          <div className="card-image">
              <img src={image} alt="" />
          </div>
          <div className="card-details">
              <div className="card-details-1">
                  <span className="card-subject">{subject}</span>
                  <span className="card-grade">{grade}</span>
                  <span className="card-teacher">{ teacher}</span>
              </div>
            
          </div>
    </div>
  )
}

export default EnrolledClassCard