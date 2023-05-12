import React from 'react'
import proj from './project.module.css'
import Leftcomponent from '../../Left Component/Leftcomponent'
import ProjectSubmission from './projectSubmission/ProjectSubmission'

export default function Project() {
  return (
    <div className='main_background'>
      <Leftcomponent />

      <div className={proj.project_container}>

      <ProjectSubmission/>

      </div>
    </div>
  )
}
