import React from 'react'
import left from './left.module.css'
import Submission from './Submission/Submission'

import Advertize from './Advertize/Advertize'

export default function Leftcomponent() {
    return (
        <div className={left.left_container}>

            <Submission/>
   
            <Advertize/>

        </div>
    )
}
