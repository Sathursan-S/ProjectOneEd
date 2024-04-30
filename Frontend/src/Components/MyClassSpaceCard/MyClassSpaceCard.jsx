import React from 'react'
import './MyClassSpaceCard.css'
import image from '../../Images/Card.png'

const MyClassSpaceCard = ({ classesCount, batch, classSpceDetails}) => {
  return (
    <div className='EnrolledClassCard'>
         
          <div className="card-image" style={{ backgroundImage: `url(${image})` }}>
                <button className='card-edit-button'>Edit</button>
            </div>
          <div className="card-details">
              <div className="class-counts">
                  <span>Class space</span>
                  <span>{classesCount} Classes</span>
              </div>
              <div className="card-details-1">
                  <span className="card-subject">{batch}</span>
                  
                  <span className="card-teacher">{ classSpceDetails}</span>
              </div>
            
          </div>
    </div>
  )
}

export default MyClassSpaceCard