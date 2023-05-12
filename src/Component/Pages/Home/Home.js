import React from 'react'
import Leftcomponent from '../../Left Component/Leftcomponent'
import homeStyle from './home.module.css' 
import Refferal from './refferal/Refferal'
import Instruction from './instruction/Instruction'
import Lecture from './lecture/Lecture'


export default function Home() {
  return (
    <div className='main_background'>
      <Leftcomponent />

      <div className={homeStyle.main_container}>
        <Refferal/>
        <Lecture/>
        <Instruction/>
      </div>

    </div>
  )
}
