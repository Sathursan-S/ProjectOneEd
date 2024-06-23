import React, { useState, useEffect } from 'react';
import './MyClassSpacePage.css';
import MyClassSpaceCard from '../../Components/MyClassSpaceCard/MyClassSpaceCard';
import newToClassSpaceImage from '../../Images/new-to-class-space.png'
import EnrolledClassCard from '../../Components/EnrolledClassCard/EnrolledClassCard';
import image from '../../Images/Card.png'
import CreateClassModal from '../../Components/CreateClassModal/CreateClassModal';

const MyClassSpacePage = () => {
  const classSpaceName = "Physics Science - 2024";
  const [activeSection, setActiveSection] = useState('My classes');
  const [classes, setClasses] = useState([]); 
  const [isModalOpen, setModalOpen] = useState(false);

   const toggleModal = () => {
        setModalOpen(!isModalOpen);
    };
    useEffect(() => {
        fetchClasses();
    }, []);

    const fetchClasses = async () => {

        setClasses([ // Uncomment to test data scenario
          //   { image:image,
          //     subject:"A/L ICT - Paper class",
          //     grade:'2024 Batch - Advanced Level',
          //   teacher: 'Himosh  ',
          //   studentCount: 10,
          //   requestCount: 5
          // },
          
          //   { image:image,
          //     subject:"A/L ICT - Paper class",
          //     grade:'2024 Batch - Advanced Level',
          //   teacher: 'Himosh  ',
          //   studentCount: 10,
          //   requestCount: 5
          // },
          
          //   { image:image,
          //     subject:"A/L ICT - Paper class",
          //     grade:'2024 Batch - Advanced Level',
          //     teacher: 'Himosh  ',
          //     studentCount: 10,
          //   requestCount: 5},
            
 
        ]);
    };

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
                  classSpaces.map((classInfo) => (
                  <EnrolledClassCard
                    
                    image={classInfo.image}
                    subject={classInfo.subject}
                    grade={classInfo.grade}
                      teacher={classInfo.teacher}
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
                <CreateClassModal onClose={toggleModal}>
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
