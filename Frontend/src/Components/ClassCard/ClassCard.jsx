import React from 'react'

import './ClassCard.css'

const ClassCard = ({image,subject,grade,teacher,medium,enrolls,fee}) => {
  return (
      <div className='Class-Card'>
         
          <div className="class-card-image">
              <img src={image} alt="" />
          </div>
          <div className="card-details">

                  <span className="class-card-subject">{subject}</span>
              <span className="class-card-grade">{grade}</span>
              <div className='tme'>
                  <span className="class-card-teacher">{teacher}</span>
                  
                    <div className="class-card-medium">
                      <span>Medium</span>
                      <span>{ medium}</span>
                    </div>
                    <div className="class-card-enroll">
                      <span>Enrolled Students</span>
                      <span>{ enrolls}</span>
                    </div>

              </div>

                    <div className="class-card-fee">
                        <span>Monthly fee</span>
                  <span>{fee}</span>
                  <div className="published-butt">
                      <button>Published</button>
                  </div>
                        
                    </div>
              
             

              

              

          </div>
          <div className=" class-card-button">
              <button >Add to visit list</button>
              <button >Request admission</button>
          
          </div>
    </div>
  )
}

export default ClassCard