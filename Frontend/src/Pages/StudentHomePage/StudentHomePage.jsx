import React, {useState} from 'react'
import './StudentHomePage.css';
import image from '../../Images/Card.png'

import EnrolledClassCard from '../../Components/EnrolledClassCard/EnrolledClassCard';
import { faL } from '@fortawesome/free-solid-svg-icons';
import Greeting from '../../Components/Greeting/Greeting';
import UpComingClass from '../../Components/UpComingClass/UpComingClass';
const StudentHomePage = () => {
    const [isMyClasses, setMyClasses] = useState(true);
    const [isEnrolledClasses, setEnrolledClasses] = useState(false);
    const [isPayments, setPayments] = useState(false);

    const openEnrolledClasses = () => {
        setMyClasses(false);
        setPayments(false);
        setEnrolledClasses(true);
       
    };
    const openMyClasses = () => {
        
        setPayments(false);
        setEnrolledClasses(false);
        setMyClasses(true);
       
    };
    const openPayment = () => {
        setMyClasses(false);
        setEnrolledClasses(false);
        setPayments(true);
       
    };
  return (
      <div className={isMyClasses ? "My-classes-bacgroundcolor":'StudentHomePage'}>
          <div className="student-home-page-header">
              <div className='student-home-page-title'>
                  <span >Learning Space</span>
              </div>
            
            <div className="student-home-page-navbar">
                  <button className={isMyClasses ? "underline" :""} onClick={openMyClasses}>My Classes</button>
              <button className={isEnrolledClasses ? "underline" :""} onClick={openEnrolledClasses}>Entrolled Classes</button>
              <button className={isPayments ? "underline" :""} onClick={openPayment}>Payments</button>
              </div>
              
          </div>
          <hr />
          {isMyClasses && <div className="my-claases">
              <div className="my-classes-left">
                  <div className="greeting">
                  <Greeting name="Himosh Ravithas"/>
                </div>
              </div>
              <div className="my-classes-right">
                  <div className="upcoming-classes">
                      <span className='upcoming-classes-title'>Upcoming classes</span>
                      <UpComingClass
                          subject='Combined Mathematics'
                          timeFrom="01.00 PM"
                        timeTo="02.00 PM"
                      />
                      <UpComingClass
                          subject='Combined Mathematics'
                          timeFrom="01.00 PM"
                        timeTo="02.00 PM"
                      />
                      <UpComingClass
                          subject='Combined Mathematics'
                          timeFrom="01.00 PM"
                        timeTo="02.00 PM"
                      />
                      <UpComingClass
                          subject='Combined Mathematics'
                          timeFrom="01.00 PM"
                        timeTo="02.00 PM"
                      />
                      <UpComingClass
                          subject='Combined Mathematics'
                          timeFrom="01.00 PM"
                        timeTo="02.00 PM"
                      />
                  </div>
                  <div className="pending-fee">
                      
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
          

          
    </div>
  )
}

export default StudentHomePage