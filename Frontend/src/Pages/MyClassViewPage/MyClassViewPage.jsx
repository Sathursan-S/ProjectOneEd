import React, {useState } from 'react'
import './MyClassViewPage.css'
import cardimg from '../../Images/Card.png'
const MyClassViewPage = () => {
      const [activeSection, setActiveSection] = useState('My classes');

  return (
    <div className='MyClassViewPage'>
        
      <header className="header">
            <h1>Chemistry - 2024</h1>
            <div className="delete">
                <button className="delete-button Button">Delete</button>
            </div>
        </header>
        <div className="tabs">
            <button
            className={activeSection === 'Class details' ? 'active' : ''}
            onClick={() => setActiveSection('Class details')}
            >
            Class details
            </button>
            <button
            className={activeSection === 'Enrolled students' ? 'active' : ''}
            onClick={() => setActiveSection('Enrolled students')}
            >
            Enrolled students
            </button>
            <button
            className={activeSection === 'Payments' ? 'active' : ''}
            onClick={() => setActiveSection('Payments')}
            >
            Payments
            </button>
            <button
            className={activeSection === 'Join requests' ? 'active' : ''}
            onClick={() => setActiveSection('Join requests')}
            >
            Join Requests
            </button>
        </div>
        <hr style={{ width: "100%" }}></hr>
        <div className="section">
              {activeSection === 'Class details' &&
                  <>
                  <div className="my-class-card">
                      <div className="img" style={{ backgroundImage: `url(${cardimg})` }}>
                            <h1></h1>
                      </div>
                      <div className="my-card-details">
                          <span className='published'>published</span>
                          <span className="my-class-name">Chemistry - Theory</span>
                          <span className="batch">2024 Batch - A/L</span>
                          <span className="medium">Created by Vithusan</span>
                          <span className="medium">Medium Tamil</span>
                          <span className="medium">Enrolled students 100</span>
                          <span className="monthly-fee">Monthly fee LKR 1500</span>
                      </div>
                    </div>
                    <div className="my-class-discription">
                      <span>Description</span>
                      <hr />
                      <span className='description'>
                          Welcome to our comprehensive online
                            course on Digital Marketing Fundamentals!
                            In this dynamic and interactive program,
                            you will embark on a journey to acquire
                            essential skills and knowledge to thrive
                          in the ever-evolving world of digital marketing.
                        </span>
                    </div>
                    <div className="my-class-syllabus">
                      <span>Syllabus</span>
                      <hr />
                        <div className="syllabus-lessions">
                            <span className="class-small-circle"></span>
                            <span className='syllabuses'>Foundational Concepts: Gain a solid
                                understanding of the core principles of
                                digital marketing, including SEO, social
                                media marketing, email marketing, and
                                content strategy.
                          </span>
                          </div>
                    </div>
                    <div className="my-class-schedule">
                        <span>Schedule</span>
                        <hr />
                            <div className="schedule-lessions">
                                <span className="class-small-circle"></span>
                                <span className='schedules'>Monday 6.00 PM - 7.00 PM</span>
                            </div>
                            <div className="schedule-lessions">
                                <span className="class-small-circle"></span>
                                <span className='schedules'>Wednesday 6.00 PM - 7.00 PM</span>
                            </div>
                            <div className="schedule-lessions">
                                <span className="class-small-circle"></span>
                                <span className='schedules'>Friday 6.00 PM - 7.00 PM</span>
                            </div>
                  </div>
              </>}
        </div>
    </div>
  )
}

export default MyClassViewPage