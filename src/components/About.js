import React from 'react'
import profileImage from '../images/programmer.png'
 const About = () =>  {
  return (
    <>
        <div className='container user-profile'>
        <img src={profileImage} alt="Profile" style={{ width: '200px', height: '200px' }} />
        </div>
    </>
  )
}
export default About;