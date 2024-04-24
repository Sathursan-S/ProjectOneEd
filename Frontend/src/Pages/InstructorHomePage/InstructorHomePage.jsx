import React, {useState} from 'react'
import './InstructorHomePage.css';
import image from '../../Images/Card.png'
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
const InstructorHomePage = () => {
    const [isDashboard, setDashboard] = useState(true);
    const [isJoinClasses, setJoinClasses] = useState(false);
    const [isMyClassSpace, setMyClassSpace] = useState(false);
    const [isPayments, setPayments] = useState(false);
    const [isUserGroups, setUserGroups] = useState(false);

    const openEnrolledClasses = () => {
        setJoinClasses(false);
        setUserGroups(false);
        setDashboard(false);
        setPayments(false);
        setMyClassSpace(true);
       
    };
    const openUserGroups = () => {
        setJoinClasses(false);
        setDashboard(false);
        setPayments(false);
        setMyClassSpace(false);
        setUserGroups(true);
       
    };
    const openLearningSpace = () => {
        setJoinClasses(false);
        setUserGroups(false);
        setPayments(false);
        setMyClassSpace(false);
        setDashboard(true);
       
    };
    const openJoinClasses = () => {
        setUserGroups(false);
        setPayments(false);
        setMyClassSpace(false);
        setDashboard(false);
        setJoinClasses(true);
       
    };
    const openPayment = () => {
        setJoinClasses(false);
        setUserGroups(false);
        setDashboard(false);
        setMyClassSpace(false);
        setPayments(true);
       
    };
  return (
      <div className={isDashboard || isJoinClasses ? "My-classes-bacgroundcolor":'StudentHomePage'}>
          <div className="student-home-page-header">
              <div className='instructor-home-page-title'>
                  {isDashboard && <span >Dashboard</span>}
                  {isJoinClasses && <span >Join Classes</span>}
                  {isMyClassSpace && <span >My Class Space</span>}
                  {isUserGroups && <span >User Groups</span>}
                  {isPayments && <span >Payments</span>}
                  <div className="search">
                      <input type="text" placeholder='Search class spaces'  />
                      <button   ><FaSearch /></button>
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
              <button className={isPayments ? "underline" :""} onClick={openPayment}>Payments</button>
              </div>
              
          </div>
          <hr />
          {isDashboard && <div className="my-claases">
              <div className="my-classes-left">
                  <div className="greeting">
                  <Greeting name="Himosh Ravithas"/>
                  </div>
                  <div className="recently-accesed-classes">
                      <span className='upcoming-classes-title'>Recently accesed classes</span>
                      <RecentlyAccesedClasses subject='Combined Mathematics'/>
                      <RecentlyAccesedClasses subject='Information Technology'/>
                      <RecentlyAccesedClasses subject='Physics'/>
                      <RecentlyAccesedClasses subject='Chemistry'/>
                      
                  </div>
              </div>
              <div className="my-classes-right">
                  <div className="upcoming-classes">
                      <span className='upcoming-classes-title'>Upcoming classes</span>
                      <InstructorUpcomingClassCard
                          subject='Combined Mathematics'
                          timeFrom="01.00 PM"
                          timeTo="02.00 PM"
                          day='Monday'
                          date='30/03/2024'
                      />
                      <InstructorUpcomingClassCard
                          subject='Combined Mathematics'
                          timeFrom="01.00 PM"
                          timeTo="02.00 PM"
                          day='Monday'
                          date='30/03/2024'
                      />
                      <InstructorUpcomingClassCard
                          subject='Combined Mathematics'
                          timeFrom="01.00 PM"
                          timeTo="02.00 PM"
                          day='Monday'
                          date='30/03/2024'
                      />
                      <InstructorUpcomingClassCard
                          subject='Combined Mathematics'
                          timeFrom="01.00 PM"
                          timeTo="02.00 PM"
                          day='Monday'
                          date='30/03/2024'
                      />
                      <InstructorUpcomingClassCard
                          subject='Combined Mathematics'
                          timeFrom="01.00 PM"
                          timeTo="02.00 PM"
                          day='Monday'
                          date='30/03/2024'
                      />
                      <div className="view-all-button">
                          <button>View all   <FaArrowRight/></button>
                      </div>
                  </div>
                  
              </div>
          </div>}


          {isMyClassSpace && <div className="enrolled-classes">
              <EnrolledClassCard
                  image={image}
              subject="A/L ICT - Paper class"
              grade='2024 Batch - Advanced Level'
              teacher='Himosh  '
                    />
              <EnrolledClassCard
                  image={image}
              subject="A/L ICT - Paper class"
              grade='2024 Batch - Advanced Level'
              teacher='Himosh  '
                    />
              <EnrolledClassCard
                  image={image}
              subject="A/L ICT - Paper class"
              grade='2024 Batch - Advanced Level'
              teacher='Himosh  '
                    />
              <EnrolledClassCard
                  image={image}
              subject="A/L ICT - Paper class"
              grade='2024 Batch - Advanced Level'
              teacher='Himosh  '
                    />
              <EnrolledClassCard
                  image={image}
              subject="A/L ICT - Paper class"
              grade='2024 Batch - Advanced Level'
              teacher='Himosh  '
                    />
              <EnrolledClassCard
                  image={image}
              subject="A/L ICT - Paper class"
              grade='2024 Batch - Advanced Level'
              teacher='Himosh  '
                    />
              <EnrolledClassCard
                  image={image}
              subject="A/L ICT - Paper class"
              grade='2024 Batch - Advanced Level'
              teacher='Himosh  '
                    />
          </div>}

        {isPayments && <div className="payments">
              PAYMENTS
          </div>}
        {isJoinClasses && <div className="join-classes">
              <div className="filterButton">
                  
              </div>
              <div className="joinClassCards">
                  <InstructorJoinClassCard
                      subject="Combined Maths"
                      date="30/04/2024"
                      day="Monday"
                      timeFrom="7.00PM"
                      timeTo="8.00PM"
                  />
                  <InstructorJoinClassCard
                      subject="Combined Maths"
                      date="30/04/2024"
                      day="Monday"
                      timeFrom="7.00PM"
                      timeTo="8.00PM"
                  />
                  <InstructorJoinClassCard
                      subject="Combined Maths"
                      date="30/04/2024"
                      day="Monday"
                      timeFrom="7.00PM"
                      timeTo="8.00PM"
                  />
                  <InstructorJoinClassCard
                      subject="Combined Maths"
                      date="30/04/2024"
                      day="Monday"
                      timeFrom="7.00PM"
                      timeTo="8.00PM"
                  />
                  <InstructorJoinClassCard
                      subject="Combined Maths"
                      date="30/04/2024"
                      day="Monday"
                      timeFrom="7.00PM"
                      timeTo="8.00PM"
                  />
                  <InstructorJoinClassCard
                      subject="Combined Maths"
                      date="30/04/2024"
                      day="Monday"
                      timeFrom="7.00PM"
                      timeTo="8.00PM"
                  />
                  <InstructorJoinClassCard
                      subject="Combined Maths"
                      date="30/04/2024"
                      day="Monday"
                      timeFrom="7.00PM"
                      timeTo="8.00PM"
                  />
                  <InstructorJoinClassCard
                      subject="Combined Maths"
                      date="30/04/2024"
                      day="Monday"
                      timeFrom="7.00PM"
                      timeTo="8.00PM"
                  />
                  <InstructorJoinClassCard
                      subject="Combined Maths"
                      date="30/04/2024"
                      day="Monday"
                      timeFrom="7.00PM"
                      timeTo="8.00PM"
                  />
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