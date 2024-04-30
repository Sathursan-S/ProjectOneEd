import React, {useState} from 'react'
import './StudentHomePage.css';
import image from '../../Images/Card.png'

import EnrolledClassCard from '../../Components/EnrolledClassCard/EnrolledClassCard';
import Greeting from '../../Components/Greeting/Greeting';
import UpComingClass from '../../Components/UpComingClass/UpComingClass';
import PendingFee from '../../Components/PendingFee/PendingFee';
import { FaArrowRight } from 'react-icons/fa';
import RecentlyAccesedClasses from '../../Components/RecentlyAccesedClasses/RecentlyAccesedClasses';
import StudentJoinClassCard from '../../Components/StudentJoinClassCard/StudentJoinClassCard';
const StudentHomePage = () => {
    const [isLearningSpace, setLearningSpace] = useState(true);
    const [isJoinClasses, setJoinClasses] = useState(false);
    const [isEnrolledClasses, setEnrolledClasses] = useState(false);
    const [isPayments, setPayments] = useState(false);

    const openEnrolledClasses = () => {
        setJoinClasses(false);
        setLearningSpace(false);
        setPayments(false);
        setEnrolledClasses(true);
       
    };
    const openLearningSpace = () => {
        setJoinClasses(false);
        setPayments(false);
        setEnrolledClasses(false);
        setLearningSpace(true);
       
    };
    const openJoinClasses = () => {
        
        setPayments(false);
        setEnrolledClasses(false);
        setLearningSpace(false);
        setJoinClasses(true);
       
    };
    const openPayment = () => {
        setJoinClasses(false);
        setLearningSpace(false);
        setEnrolledClasses(false);
        setPayments(true);
       
    };
  return (
      <div className={isLearningSpace || isJoinClasses ? "My-classes-bacgroundcolor":'StudentHomePage'}>
          <div className="student-home-page-header">
              <div className='student-home-page-title'>
                  <span >Learning Space</span>
              </div>
            
            <div className="student-home-page-navbar">
                  <button className={isLearningSpace ? "underline" :""} onClick={openLearningSpace}>Learning Space</button>
                  <button className={isJoinClasses ? "underline" :""} onClick={openJoinClasses}>Join Classes</button>
              <button className={isEnrolledClasses ? "underline" :""} onClick={openEnrolledClasses}>Entrolled Classes</button>
              <button className={isPayments ? "underline" :""} onClick={openPayment}>Payments</button>
              </div>
              
          </div>
          <hr />
          {isLearningSpace && <div className="my-claases">
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
                      <UpComingClass
                          subject='Combined Mathematics'
                          timeFrom="01.00 PM"
                          timeTo="02.00 PM"
                          day='Monday'
                          date='30/03/2024'
                      />
                      <UpComingClass
                          subject='Combined Mathematics'
                          timeFrom="01.00 PM"
                          timeTo="02.00 PM"
                          day='Monday'
                          date='30/03/2024'
                      />
                      <UpComingClass
                          subject='Combined Mathematics'
                          timeFrom="01.00 PM"
                          timeTo="02.00 PM"
                          day='Monday'
                          date='30/03/2024'
                      />
                      <UpComingClass
                          subject='Combined Mathematics'
                          timeFrom="01.00 PM"
                          timeTo="02.00 PM"
                          day='Monday'
                          date='30/03/2024'
                      />
                      <UpComingClass
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
                  <div className="pending-fee">
                    <span className='upcoming-classes-title'>Pending Fee</span>

                      <PendingFee month='October' fee='LKR 1500'/>
                      <PendingFee month='October' fee='LKR 1500'/>
                      <PendingFee month='October' fee='LKR 1500'/>
                      <PendingFee month='October' fee='LKR 1500' />
                      
                      <div className="view-all-button">
                          <button>View all   <FaArrowRight/></button>
                      </div>
                  </div>
              </div>
          </div>}


          {isEnrolledClasses && <div className="enrolled-classes">
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
                  <StudentJoinClassCard
                      subject="Combined Maths"
                      date="30/04/2024"
                      day="Monday"
                      timeFrom="7.00PM"
                      timeTo="8.00PM"
                  />
                  <StudentJoinClassCard
                      subject="Combined Maths"
                      date="30/04/2024"
                      day="Monday"
                      timeFrom="7.00PM"
                      timeTo="8.00PM"
                  />
                  <StudentJoinClassCard
                      subject="Combined Maths"
                      date="30/04/2024"
                      day="Monday"
                      timeFrom="7.00PM"
                      timeTo="8.00PM"
                  />
                  <StudentJoinClassCard
                      subject="Combined Maths"
                      date="30/04/2024"
                      day="Monday"
                      timeFrom="7.00PM"
                      timeTo="8.00PM"
                  />
              </div>
          </div>}
          

          
    </div>
  )
}

export default StudentHomePage