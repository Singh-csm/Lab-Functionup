import React from 'react'
import pro from './Profile.module.css'

export default function Education() {
  return (
    <div className={pro.education}>
        <h3>Educational Details</h3>
        <button className={pro.add_btn}>Add new</button>
     </div>
  )
}
