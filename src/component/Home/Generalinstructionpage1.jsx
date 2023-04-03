import React from 'react'
import "../../App.css"
import img from "../../IMG/img-1.jpg"
const Generalinstructionpage1 = () => {
  return (

<div className='small-2'>
    <div className='small-10'>
            
            <h4 className='labsmall'>{"No lecture now. Please check later."}</h4>
            <img className='img-1 labsmall'  src={img} alt="img" />
    </div>

    <div className='small-20'>
            <h3 className='labsmall'>General Instructions!</h3>
            <h6 className='labsmall'>{"Once you reach the end of the lecture, you wont be able to access it again."}</h6>
            <h6 className='labsmall'>{`From time to time during the lecture you will get "mark attendance" box. Dont miss it.`}</h6>

            <h3 className='labsmall'>Check List</h3>
            <h6 className='labsmall'>{`Check your cohort name in the profile section to make sure you are in the right cohort.`}</h6>
    </div>
</div>

  )
}

export default Generalinstructionpage1
