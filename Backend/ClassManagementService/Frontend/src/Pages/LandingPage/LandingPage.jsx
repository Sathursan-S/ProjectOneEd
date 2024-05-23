import React, { useState, useEffect } from 'react';
import './LandingPage.css'
import Hero from '../../Components/Hero/Hero';
import Features from '../../Components/Features/Features';
import Card from '../../Components/Card/Card';
import image from '../../Images/Card.png'
import paymentimg from '../../Images/Untitled-3.png'
import feature4 from '../../Images/Untitled-4.png'
import createclass from '../../Images/createclass.png'
import getadmission from '../../Images/getadmition.png'
import Testimonial from '../../Components/Testimonial/Testimonial';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const LandingPage = () => {

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 2
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
};

return (
    <div className='landing-page' >
      <div className="hero">
        <Hero />
      </div>
      <div className="features">
        <span>For empowering students</span>
        <hr />
        <Features/>
      </div>
            
      
      <div className="card">
        <span className='card-title'>Popular on SpaceEd</span>
        <hr />
        <div className="cards">

          <Card
            image={image}
            subject="Combined Maths"
            grade='2024 Batch - Advanced Level'
            teacher='By Mr. R.Himosh (Bsc Engineering(Reading)) '
            enrolls='100'
            medium='Tamil'
            fee='LKR 1500'
          />
          <Card
            image={image}
            subject="Chemistry"
            grade='2024 Batch - Advanced Level'
            teacher='By Mr. S.Sathursan (Bsc Engineering(Reading)) '
            enrolls='1000'
            medium='Tamil'
            fee='LKR 2000'
            />
                  <Card
            image={image}
            subject="Physics"
            grade='2024 Batch - Advanced Level'
            teacher='By Mr. R.Himosh (Bsc Engineering(Reading)) '
            enrolls='100'
            medium='Tamil'
            fee='LKR 1500'
          />
          <Card
            image={image}
            subject="Combined Maths"
            grade='2024 Batch - Advanced Level'
            teacher='By Mr. R.Himosh (Bsc Engineering(Reading)) '
            enrolls='100'
            medium='Tamil'
            fee='LKR 1500'
          />

        </div>
        <div className="explore-button">
          <button className='Button'>Explore more</button>
        </div>
      </div>
      <div className="instructor-features">
        <span>Are you an instructor?</span>
        <hr />
        <div className="feature-items">
          <div className="rectangle">
            <div className="fectImg">
              <img src={createclass} />
            </div>
    
            <div className='txt'>
              <span>Create classes</span>
              <span>Explore classes that suits you perfects</span>
            </div>
    
          </div>

          <div className="rectangle">
            <div className="fectImg">
              <img src={getadmission}/>
            </div>
    
            <div className='txt'>
              <span>Get admissions</span>
              <span>Get your class admission in
                few taps and join into your desire
                classes</span>
            </div>
    
            </div>

          <div className="rectangle">
            <div className="fectImg">
              <img src={paymentimg} />
            </div>
    
            <div className='txt'>
              <span>Verify payments</span>
              <span>Pay your class fee through spaceed and
                keep your class live
              </span>
            </div>
    
              </div>

          <div className="rectangle">
            <div className="fectImg">
              <img src={feature4} />
            </div>
    
            <div className='txt'>
              <span>Share knowledge</span>
              <span>Learn from real time classes with
                user friendly experience with us
              </span>
            </div>
    
          </div>
        </div>
        <div className="explore-button">
            <button className='Button'>Create classes</button>
        </div>
      </div>
      <div className="testimonial-container">
        <span>What our users say</span>
        <hr />
        
        
    </div>
    <div className="Testimonials">
          <Carousel responsive={responsive}>
            <div><Testimonial/></div>
            <div><Testimonial/></div>
            <div><Testimonial/></div>
            <div><Testimonial/></div>
        </Carousel>;
      </div>
      
    </div>
  )
}

export default LandingPage