import React from 'react'
import left from './Submission.module.css'
import Course from '../Course_Structure/Course'

export default function Submission() {
  return (
    <div>
   
    <div className={left.submission}>
      <h3>Daily Assignment Submission</h3>
      <h4>What is JavaScript?</h4>
      <p className={left.gray}>Deadline is : 09 May,11:59 PM</p>
      <p>videoLinkAssignment</p>
      <input type="text" placeholder='Enter submission link here' />
      <button>Submit link</button>

      <h4>What is the use of isNaN function?</h4>
      <p className={left.gray}>Deadline is : 09 May,11:59 PM</p>
      <p>videoLinkAssignment</p>
      <input type="text" placeholder='Enter submission link here' />
      <button>Submit link</button>
      <h4>How can generic objects be created?</h4>
      <p className={left.gray}>Deadline is : 09 Mar,11:59 PM</p>
      <p>videoLinkAssignment</p>
      <input type="text" placeholder='Enter submission link here' />
      <button>Submit link</button>

      <h4>What is ‘this’ keyword in JavaScript?</h4>
      <p className={left.gray}>Deadline is : 09 May,11:59 PM</p>
      <p>videoLinkAssignment</p>
      <input type="text" placeholder='Enter submission link here' />
      <button>Submit link</button>

    </div>
    <Course/> 
    </div>
  )
}
