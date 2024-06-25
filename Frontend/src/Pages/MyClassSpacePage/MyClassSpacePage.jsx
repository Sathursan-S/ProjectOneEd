import React, { useState, useEffect } from 'react';
import './MyClassSpacePage.css';
import MyClassSpaceCard from '../../Components/MyClassSpaceCard/MyClassSpaceCard';
import newToClassSpaceImage from '../../Images/new-to-class-space.png'
import EnrolledClassCard from '../../Components/EnrolledClassCard/EnrolledClassCard';
import image from '../../Images/Card.png'
import CreateClassModal from '../../Components/CreateClassModal/CreateClassModal';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getClasses } from '../../Actions/CreateClassAction';

const MyClassSpacePage = () => {
  const { classSpaceId } = useParams();
  
  const classSpaceName = "Physics Science - 2024";
  const [activeSection, setActiveSection] = useState('My classes');
  
  const [isModalOpen, setModalOpen] = useState(false);
  const classes = useSelector((state) => state.classReducer.classes);
  
  const dispatch = useDispatch();
   const toggleModal = () => {
        setModalOpen(!isModalOpen);
    };
    useEffect(() => {
      dispatch(getClasses(classSpaceId));
    }, []);

    
    
  return (
    <div className='MyClassSpacePage'>
      <header className="header">
        <h1>{classSpaceName}</h1>
        <div className="search-create-container">
          <input type="text" placeholder="Search class" className="search-input" />
          <button className="search-button"></button>
          <button className="create-class-button Button" onClick={toggleModal}>+ Create class</button>
        </div>
      </header>
      <div className="tabs">
        <button
          className={activeSection === 'My classes' ? 'active' : ''}
          onClick={() => setActiveSection('My classes')}
        >
          My classes
        </button>
        <button
          className={activeSection === 'User Groups' ? 'active' : ''}
          onClick={() => setActiveSection('User Groups')}
        >
          User Groups
        </button>
        <button
          className={activeSection === 'Manage Status' ? 'active' : ''}
          onClick={() => setActiveSection('Manage Status')}
        >
          Manage Status
        </button>
        <button
          className={activeSection === 'Join Requests' ? 'active' : ''}
          onClick={() => setActiveSection('Join Requests')}
        >
          Join Requests
        </button>
      </div>
      <hr style={{width:"100%"}}></hr>
      <div className="section">
        {activeSection === 'My classes' && <div className="enrolled-classes">
              {classes.length > 0 ? (
                  classes.map((classInfo) => (
                  <EnrolledClassCard
                    
                    
                    subject={classInfo.className}
                    grade={classInfo.gradeCategory}
                      teacher={classInfo.instructorName}
                      studentCount={classInfo.studentCount}
                      requestCount={classInfo.requestCount}
              
                    />
              ))
              
              ) : (
                     <div>
            {/* Existing content... */}

            <div className="new-to-class-space">
                <img src={newToClassSpaceImage} alt="" />
                <span className='ready-to-go'>Woah! Ready to go...</span>
                <span className='create-your-first-class-space'>create your first class in a few more steps</span>
                <button className='create-button Button' onClick={toggleModal}>+ Create class</button>
            </div>

            
           
        </div>
                  
              )}
              
              
           
          </div>}
        {activeSection === 'User Groups' && (
          <div>
            <h2>User Groups</h2>
            <p>Display list of classmates</p>
          </div>
        )}
        {activeSection === 'Manage Status' && (
          <div>
            <h2>Manage Status</h2>
            <p>Display list of assignments</p>
          </div>
        )}
        {activeSection === 'Join Requests' && (
          <div>
            <h2>Join Requests</h2>
            <p>Display list of resources</p>
          </div>
        )}
      </div>
       {isModalOpen && (
                <CreateClassModal classSpaceId={classSpaceId} onClose={toggleModal}>
                    <div>
                        <label>Subject</label>
                        <input type="text" placeholder="Enter subject" />
                    </div>
                </CreateClassModal>
            )} 

  </div>
  );
  
  
};

export default MyClassSpacePage;
