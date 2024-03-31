import React from 'react'
import CoursesCard from './CoursesCard'
import certificate from './certificate.json'
import Lottie from 'lottie-react'
import "./courses.css"
import { useTypewriter, Cursor } from 'react-simple-typewriter' 


export const CourseHome = () => {
  const [typeEffect] = useTypewriter({
    words: ['Explore Our Online Bengali Courses.','First 100 Students Will Get 20% Discount. Hurry up!!!','Learn from Experts and Get Certified!','DSA,ML,DL,OOP,OS and Hands on Programming Languages.','Web Development, Mobile App Development,Cyber Security,UI/UX and Many More !!!'],
    loop: {},
    typeSpeed: 150,
    deleteSpeed: 20,
    delaySpeed:1000,
  })
  return (
    <>
      <div className="containerflexsB ">
        <div className="coursehead">
          <div className="certificate">
            <Lottie animationData={certificate} />
          </div>
          <div className='typing'>
            <p className='explore'>{typeEffect}<Cursor/></p>
          </div>
        </div>
      </div>
      <CoursesCard />
    </>
  )
}
export default CourseHome
