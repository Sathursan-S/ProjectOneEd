import React from 'react'
import ClassCard from '../../Components/ClassCard/ClassCard'
import image from '../../Images/Card.png'
import './ClassViewPage.css'

const ClassViewPage = () => {
    return (
        <div className='ClassViewPage'>
            
            <div className="class-card">
                <ClassCard
                    image={image}
                    subject="Combined Maths"
                    grade='2024 Batch - Advanced Level'
                    teacher='By Mr. R.Himosh (Bsc Engineering(Reading)) '
                    enrolls='100'
                    medium='Tamil'
                    fee='LKR 1500'
                />
            </div>
            <div className="class-details">

            </div>
            
        </div>
  )
}

export default ClassViewPage