
import React from 'react'
import "../../App.css"
import Structurecourse from '../course/Structurecourse'
import { Route, Routes } from 'react-router-dom'
import Profile from '../profile/Profile'
import Generalinstructionpage1 from './Generalinstructionpage1'
import Submission from '../DailySubmissionTracking/Submission'
import Milestone from '../ExtraMilestone/Milestone'
import Notes from '../Note/Notes'
import Leave from '../Leaves/Leave'

const Home = () => {
  return (
    <div className='container-main'> 
    
    <Structurecourse/>
    
      <Routes>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/' element={<Generalinstructionpage1/>}/>
        <Route path='/home' element={<Generalinstructionpage1/>}/>
        <Route path='/submission' element={<Submission/>}/>
        <Route path='/milestone' element={<Milestone/>}/>
        <Route path='/notes' element={<Notes/>}/>
        <Route path='/leaves' element={<Leave/>}/>
      </Routes>


    </div> 
  )
}

export default Home
