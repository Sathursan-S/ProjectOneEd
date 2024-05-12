import React from 'react';
import { FaStar } from 'react-icons/fa';
import './Card.css';
import { Link } from 'react-router-dom';
import classImg from '../../Images/Card.png';

const Card = () => {
  const cardData = [
    {
      image: classImg,
      subject: "Mathematics",
      grade: "Grade 10",
      teacher: "Mr. Smith",
      medium: "English",
      enrolls: 50,
      fee: "$50/month"
    },
    {
      image: classImg,
      subject: "Science",
      grade: "Grade 8",
      teacher: "Ms. Johnson",
      medium: "English",
      enrolls: 40,
      fee: "$40/month"
    },
    {
      image: classImg,
      subject: "Science",
      grade: "Grade 8",
      teacher: "Ms. Johnson",
      medium: "English",
      enrolls: 40,
      fee: "$40/month"
    },
    {
      image: classImg,
      subject: "Science",
      grade: "Grade 8",
      teacher: "Ms. Johnson",
      medium: "English",
      enrolls: 40,
      fee: "$40/month"
    },
    {
      image: classImg,
      subject: "Science",
      grade: "Grade 8",
      teacher: "Ms. Johnson",
      medium: "English",
      enrolls: 40,
      fee: "$40/month"
    },
    // Add more objects as needed
  ];

  return (
    <div className="card-container">
      <div className="card-header">
        <h1>Explore classes on SpaceEd</h1>
      </div>
      <div className="class-card-container">

      {cardData.map((data, index) => {
        const { image, subject, grade, teacher, enrolls, medium, fee } = data;
        return (
          <div className="class-card-content" key={index}>
            {/* <div className='class-card-image'> */}
              <img src={image} alt='cardimage' />
            {/* </div> */}
            <div className='card-details'>
              <div className='card-details-1'>
                <span className='card-subject'>{subject}</span>
                <span className='card-grade'>{grade}</span>
                <span className='card-teacher'>{teacher}</span>
              </div>
              <hr />
              <div className='card-details-2'>
                <div className='card-enroll'>
                  <span>Enrolled Students</span>
                  <span>{enrolls}</span>
                </div>
                <div className='card-medium'>
                  <span>Medium</span>
                  <span>{medium}</span>
                </div>
              </div>
              <hr />
              <div className='card-details-3'>
                <span>Monthly fee</span>
                <span>{fee}</span>
              </div>
              <hr />
              <div className='card-details-4'>
                <span>An error occurred. Either the engine you requested does not exist or there was another issue processing your request. If this issue persists please contact us through our help center at help.openai.com.</span>
              </div>
            </div>
            <div className='card-button'>
              <Link to='/class-view'>
                <button className='Button card-butt'>Show details</button>
              </Link>
              <div className='card-stars'>
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
            </div>
          </div>
        )
      })}
      </div>
    </div>
  );
};

export default Card;
