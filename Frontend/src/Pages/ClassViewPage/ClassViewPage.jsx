import React from 'react'
import ClassCard from '../../Components/ClassCard/ClassCard'
import image from '../../Images/Card.png'
import './ClassViewPage.css'
import ClassSchedule from '../../Components/ClassSchedule/ClassSchedule'

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
                <div className="class-description">
                    <span>Description</span>
                    <hr />
                    <span className='description'>Welcome to our comprehensive online
                        course on Digital Marketing Fundamentals!
                        In this dynamic and interactive program,
                        you will embark on a journey to acquire
                        essential skills and knowledge to thrive
                        in the ever-evolving world of digital marketing.
                    </span>
                </div>
                <div className="class-syllabus">
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
                    <div className="syllabus-lessions">
                        <span className="class-small-circle"></span>
                        <span className='syllabuses'>Practical Skills Development: Through
                            hands-on exercises and real-world case
                            studies, you'll develop practical skills
                            that can be immediately applied to enhance
                            your digital marketing efforts.
                        </span>
                    </div>
                    <div className="syllabus-lessions">
                        <span className="class-small-circle"></span>
                        <span className='syllabuses'>Industry Insights: Stay up-to-date with the
                            latest industry trends, best practices,
                            and emerging technologies in the digital
                            marketing landscape.
                        </span>
                    </div>
                </div>
                <div className="class-schedule">
                    <span>Schedule</span>
                    <hr />
                    <div className="schedules">
                        <ClassSchedule
                            day="Monday"
                            start="8.00 pm"
                            end="10.pm"
                        />
                         <ClassSchedule
                            day="Monday"
                            start="8.00 pm"
                            end="10.pm"
                        />
                        <ClassSchedule
                            day="Monday"
                            start="8.00 pm"
                            end="10.pm"
                        />
                    </div>
                </div>
                <div className="class-review">
                    <span>Review</span>
                    <hr />
                    <div className="reviews">

                    </div>
                </div>
                <div className="class-report-issue">
                    <button className='Button report-button'>Report issue</button>
                </div>
            </div>
            
        </div>
  )
}

export default ClassViewPage