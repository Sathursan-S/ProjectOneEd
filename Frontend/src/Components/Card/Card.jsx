import React from 'react'
import { FaStar } from 'react-icons/fa';
import './Card.css'

const Card = ({image,subject,grade,teacher,medium,enrolls,fee}) => {
  return (
      <div className='Card'>
          abv
          <div className="card-image">
              <img src={image} alt="" />
          </div>
          <div className="card-details">
              <div className="card-details-1">
                  <span className="card-subject">{subject}</span>
                  <span className="card-grade">{grade}</span>
                  <span className="card-teacher">{ teacher}</span>
              </div>
              <hr/>
              <div className="card-details-2">
                  <div className="card-enroll">
                      <span>Enrolled Students</span>
                      <span>{ enrolls}</span>
                  </div>
                  <div className="card-medium">
                      <span>Medium</span>
                      <span>{ medium}</span>
                  </div>
              </div>
              <hr />
              <div className="card-details-3">
                  <span>Monthly fee</span>
                  <span>{ fee}</span>
              </div>
              <hr />
              <div className="card-details-4">
                  <span>An error occurred. Either the engine you
                      requested does not exist or there was
                      another issue processing your request.
                      If this issue persists please contact us
                      through our help center at help.openai.com.
                  </span>
              </div>
          </div>
          <div className=" card-button">
              <button className='Button card-butt'>Show details</button>
              <div className="card-stars">
                  <FaStar />
                  <FaStar />
                  <FaStar />
              </div>
          </div>
    </div>
  )
}

export default Card