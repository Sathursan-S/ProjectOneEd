import React from 'react'
import './EnrolledClassCard.css'
import { FaEdit, FaTrash } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const EnrolledClassCard = ({ requestCount,image, subject, grade, teacher, studentCount }) => {
  const user = useSelector((state) => state.authReducer.authData);
  const navigate = useNavigate();
  console.log(user);
  const myClassPage = () => { 
    navigate('/my-class-page');    
  };
  const classViewPage = () => { 
    navigate('/class-view-page');    
  };
  return (
    <div className='EnrolledClassCard' onClick={user.role === 'INSTRUCTOR'? myClassPage: classViewPage}>
         
      <div className="card-image" style={{ backgroundImage: `url(${image})` }}>
        {user.role === 'INSTRUCTOR' &&
          <>
          <button className='card-edit-button' ><FaEdit /></button>
          <button className='card-trash-button'><FaTrash /></button>
        </>}
      </div>
      {user.role === 'INSTRUCTOR' &&
        <div className="card-details">
              <div className="card-details-0">
                  <span className="card-name">Class</span>
                  <span className="card-student-count">{studentCount} Students</span>
              </div>
        </div>}
          <div className="card-details">
              <div className="card-details-1">
                  <span className="card-subject">{subject}</span>
                  <span className="card-grade">{grade}</span>
          {user.role === 'STUDENT' &&  <span className="card-teacher">{teacher}</span>}
        </div>
        {user.role === 'INSTRUCTOR' &&
          <>
          <div className="join-requests">
            <span className='request-count'>{requestCount}</span>
              <span className='join-request'> Join requests</span>
              
          </div>
          </>
        }
            
          </div>
    </div>
  )
}

export default EnrolledClassCard