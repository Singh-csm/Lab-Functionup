import React from 'react'
import Leftcomponent from '../../Left Component/Leftcomponent'
import Lead from './Leaderboard.module.css'
import Milestones from './ExtraMilestoneSelf/Milestones'
import Leader from './LeaderBoard/Leader'

export default function Leaderboard() {
  return (
    <div className='main_background'>
      <Leftcomponent />

      <div className={Lead.main_container}>
        <Milestones />
        <Leader />
      </div>

    </div>
  )
}
