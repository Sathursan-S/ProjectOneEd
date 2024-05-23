import React, {useState, useEffect} from 'react'
import './InstructorHomePage.css';
import { useSelector } from 'react-redux';

import newToClassSpaceImage from '../../Images/new-to-class-space.png'
import { FaSearch } from 'react-icons/fa';
import EnrolledClassCard from '../../Components/EnrolledClassCard/EnrolledClassCard';
import Greeting from '../../Components/Greeting/Greeting';
import UpComingClass from '../../Components/UpComingClass/UpComingClass';
import PendingFee from '../../Components/PendingFee/PendingFee';
import { FaArrowRight } from 'react-icons/fa';
import RecentlyAccesedClasses from '../../Components/RecentlyAccesedClasses/RecentlyAccesedClasses';
import StudentJoinClassCard from '../../Components/StudentJoinClassCard/StudentJoinClassCard';
import InstructorUpcomingClassCard from '../../Components/InstructorUpcomingClassCard/InstructorUpcomingClassCard';
import InstructorJoinClassCard from '../../Components/InstructorJoinClassCard/InstructorJoinClassCard';
import MyClassSpaceCard from '../../Components/MyClassSpaceCard/MyClassSpaceCard';
import CreateClassSpaceModal from '../../Components/CreateClassSpaceModel/CreateClassSpaceModal';


const InstructorHomePage = () => {
    const [isDashboard, setDashboard] = useState(true);
    const [isJoinClasses, setJoinClasses] = useState(false);
    const [isMyClassSpace, setMyClassSpace] = useState(false);
    const [isWallet, setWallet] = useState(false);
    const [isUserGroups, setUserGroups] = useState(false);
    const [upcomingClasses, setUpcomingClasses] = useState([]); 
    const [recentlyAccessedClasses, setRecentlyAccessedClasses] = useState([]); 
    const [instructorJoinClasses, setInstructorJoinClasses] = useState([]); 
    const [classSpaces, setClassSpaces] = useState([]); 
    const [isModalOpen, setModalOpen] = useState(false);

    const user = useSelector((state) => state.authReducer.authData.details);

    const toggleModal = () => {
        setModalOpen(!isModalOpen);
    };

    useEffect(() => {
        // Simulate fetching data from the DB
        fetchUpcomingClasses();
        fetchRecentlyAccessedClasses();
        fetchInstructorJoinClasses();
        fetchClassSpaces();
    }, []);

    const fetchClassSpaces = async () => {

        setClassSpaces([ // Uncomment to test data scenario
            // { classesCount:'4',batch:"Physical Science-24", classSpceDetails:'Theory classes for 24th morning batch' },
            // { classesCount:'4',batch:"Physical Science-24", classSpceDetails:'Theory classes for 24th morning batch' },
            // { classesCount:'4',batch:"Physical Science-24", classSpceDetails:'Theory classes for 24th morning batch' },
 
        ]);
    };
    const fetchInstructorJoinClasses = async () => {

        setInstructorJoinClasses([ // Uncomment to test data scenario
            // { subject: 'Math', timeFrom: '01:00 PM', timeTo: '02:00 PM', day: 'Monday', date: '30/03/2024' },
            // { subject: 'Math', timeFrom: '01:00 PM', timeTo: '02:00 PM', day: 'Monday', date: '30/03/2024' },
            // { subject: 'Math', timeFrom: '01:00 PM', timeTo: '02:00 PM', day: 'Monday', date: '30/03/2024' },
            // { subject: 'Math', timeFrom: '01:00 PM', timeTo: '02:00 PM', day: 'Monday', date: '30/03/2024' },
  
        ]);
    };
    const fetchUpcomingClasses = async () => {

        setUpcomingClasses([ // Uncomment to test data scenario
            // { subject: 'Math', timeFrom: '01:00 PM', timeTo: '02:00 PM', day: 'Monday', date: '30/03/2024' },
            // { subject: 'Math', timeFrom: '01:00 PM', timeTo: '02:00 PM', day: 'Monday', date: '30/03/2024' },
            // { subject: 'Math', timeFrom: '01:00 PM', timeTo: '02:00 PM', day: 'Monday', date: '30/03/2024' },
            // { subject: 'Math', timeFrom: '01:00 PM', timeTo: '02:00 PM', day: 'Monday', date: '30/03/2024' },
  
        ]);
    };
    const fetchRecentlyAccessedClasses = async () => {

        setRecentlyAccessedClasses([ // Uncomment to test data scenario
            // { subject:'Combined Mathematics' },

            // add more classes as needed
        ]);
    };

    const openEnrolledClasses = () => {
        setJoinClasses(false);
        setUserGroups(false);
        setDashboard(false);
        setWallet(false);
        setMyClassSpace(true);
       
    };
    const openUserGroups = () => {
        setJoinClasses(false);
        setDashboard(false);
        setWallet(false);
        setMyClassSpace(false);
        setUserGroups(true);
       
    };
    const openLearningSpace = () => {
        setJoinClasses(false);
        setUserGroups(false);
        setWallet(false);
        setMyClassSpace(false);
        setDashboard(true);
       
    };
    const openJoinClasses = () => {
        setUserGroups(false);
        setWallet(false);
        setMyClassSpace(false);
        setDashboard(false);
        setJoinClasses(true);
       
    };
    const openWallet = () => {
        setJoinClasses(false);
        setUserGroups(false);
        setDashboard(false);
        setMyClassSpace(false);
        setWallet(true);
       
    };
  return (
      <div className={isDashboard || isJoinClasses ? "My-classes-bacgroundcolor":'StudentHomePage'}>
          <div className="student-home-page-header">
              <div className='instructor-home-page-title'>
                  {isDashboard && <span >Dashboard</span>}
                  {isJoinClasses && <span >Join Classes</span>}
                  {isMyClassSpace && <span >My Class Space</span>}
                  {isUserGroups && <span >User Groups</span>}
                  {isWallet && <span >Wallet</span>}
                  <div className="search">
                      <input className='search-input' type="text" placeholder='Search class spaces'  />
                      <button className='search-button'  ><FaSearch /></button>
                  </div>
                  <div className="create">
                      <button className='Button'>+ Create</button>
                  </div>
              </div>
            
            <div className="student-home-page-navbar">
                  <button className={isDashboard ? "underline" :""} onClick={openLearningSpace}>Dashboard</button>
                  <button className={isJoinClasses ? "underline" :""} onClick={openJoinClasses}>Join Classes</button>
              <button className={isMyClassSpace ? "underline" :""} onClick={openEnrolledClasses}>My Class Space</button>
              <button className={isUserGroups ? "underline" :""} onClick={openUserGroups}>User Groups</button>
              <button className={isWallet ? "underline" :""} onClick={openWallet}>Wallet</button>
              </div>
              
          </div>
          <hr />
          {isDashboard && <div className="my-claases">
              <div className="my-classes-left">
                  <div className="greeting">
                      <Greeting firstName={user.userFirstName} lastName={user.userLastName} />
                  </div>
                  <div className="recently-accesed-classes">
                      <span className='upcoming-classes-title'>Recently accesed classes</span>
                      {recentlyAccessedClasses.length > 0 ? (
                          recentlyAccessedClasses.map((classInfo) => (
                              <RecentlyAccesedClasses subject={classInfo.subject}/>
                          ))) : (
                              <div className="no-classes-placeholder">
                                No recently accessed classes.
                            </div>
                          )}
                      
                      
                  </div>
              </div>
              <div className="my-classes-right">
                  <div className="upcoming-classes">
                      <span className='upcoming-classes-title'>Upcoming classes</span>
                      {upcomingClasses.length > 0 ? (
                          upcomingClasses.map((classInfo) => (
                                <>
                                <InstructorUpcomingClassCard
                                    key={classInfo.date} // Ensure key is unique
                                    subject={classInfo.subject}
                                    timeFrom={classInfo.timeFrom}
                                    timeTo={classInfo.timeTo}
                                    day={classInfo.day}
                                    date={classInfo.date}
                                />
                                
                                  </>
                            ))
                        ) : (
                            <div className="no-classes-placeholder">
                                No upcoming classes to display.
                            </div>
                        )}
                      <div className="view-all-button">
                          <button>View all   <FaArrowRight/></button>
                                  </div>
                  </div>
                  
              </div>
          </div>}


          {isMyClassSpace && <div className="enrolled-classes">
              {classSpaces.length > 0 ? (
                  classSpaces.map((classInfo) => (
                  <MyClassSpaceCard
                    
                    classesCount={classInfo.classesCount}
                    batch={classInfo.batch}
                    classSpceDetails={classInfo.classSpceDetails}
              
                    />
              ))
              
              ) : (
                     <div>
            {/* Existing content... */}

            <div className="new-to-class-space">
                <img src={newToClassSpaceImage} alt="" />
                <span className='ready-to-go'>Woah! Ready to go...</span>
                <span className='create-your-first-class-space'>create your first class space in a few more steps</span>
                <button className='create-button Button' onClick={toggleModal}>+ Create</button>
            </div>

            
            {isModalOpen && (
                <CreateClassSpaceModal onClose={toggleModal}>
                    
                    <h4>Create class space</h4>
                   
                </CreateClassSpaceModal>
            )} 
        </div>
                  
              )}
              
              
           
          </div>}

        {isWallet && <div className="payments">
              PAYMENTS
          </div>}
        {isJoinClasses && <div className="join-classes">
              <div className="filterButton">
                  
              </div>
              <div className="joinClassCards">
                  {instructorJoinClasses.length > 0 ? (
                      instructorJoinClasses.map((classInfo) => (
                          <InstructorJoinClassCard
                                    key={classInfo.date} // Ensure key is unique
                                    subject={classInfo.subject}
                                    timeFrom={classInfo.timeFrom}
                                    timeTo={classInfo.timeTo}
                                    day={classInfo.day}
                              date={classInfo.date}
                          />
                          
                  ))
                  ): (
                      <div className="no-classes-placeholder">
                                No classes to start.
                            </div>
                  )}
                  
              </div>
          </div>}
          {isUserGroups && (
              <div className="user-groups">
                  USER GROUPS
            </div>
          )}
          

          
    </div>
  )
}

export default InstructorHomePage