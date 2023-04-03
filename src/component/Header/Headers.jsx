import React from 'react'
import img from "../../IMG/img-2.jpg"
import "../.././App.css"

const Headers = () => {
  return (
    <div className='header-main'>
        <div className='header-image'>
            <img className='header-image' src={img} alt={img} />
        </div>

        <div>

        <p className='header-title'>Home</p>
        <p className='header-title'>Profile</p>
        <p className='header-title'>Daily Submission Tracking</p>
        <p className='header-title'>LeaderBoard</p>
        <p className='header-title'>Extra Milestone</p>
        <p className='header-title'>Notes</p>
        <p className='header-title'>Leaves</p>
        <p className='header-title'>Project Evaluation</p>
        
        </div>

        <div >
            <p className='name-header'>FunctionUp</p>
        </div>
      
    </div>
  )
}

export default Headers
