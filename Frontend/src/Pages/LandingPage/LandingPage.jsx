import React from 'react'
import './LandingPage.css'
import Hero from '../../Components/Hero/Hero';
import Features from '../../Components/Features/Features';
import Card from '../../Components/Card/Card';
import image from '../../Images/Card.png'
const LandingPage = () => {
  return (
    <div className='landing-page' >
          <Hero />  
      <Features/>
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
      </div>
      
      
    </div>
  )
}

export default LandingPage