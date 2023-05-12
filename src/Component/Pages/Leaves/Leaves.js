import React from 'react'
import leaves from './Leaves.module.css'
import Leftcomponent from '../../Left Component/Leftcomponent'
import LeaveForm from './leaveForm/LeaveForm'
import LeaveApplied from './leaveApplied/LeaveApplied'

export default function Leaves() {
  return (
    <div className='main_background'>
      <Leftcomponent/>

      <div className={leaves.leaves_container}>
        <LeaveForm/>
        <LeaveApplied/>
      </div>
      
    </div>
  )
}
