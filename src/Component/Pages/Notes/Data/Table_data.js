import React, { useState } from 'react'
import data from './Table_data.module.css'
import { IoIosArrowDown , IoIosArrowUp } from 'react-icons/io';


export default function Table_data({ id, Lecture, DeadLine, Qstn }) {
    const [show, setShow] = useState(false)
    return (
        <div className={data.main}>
            <div className={data.row}>
                <div className={data.no}>{id}.</div>
                <div className={data.Lecture}>{Lecture} submission</div>
                <div className={data.deadline}>Deadline is :{DeadLine}</div>
                <p className={data.toogle_btn} onClick={() => setShow(!show)}>{show ? <IoIosArrowUp/> : < IoIosArrowDown/>}</p>
            </div>
            {show && <div className={data.toogle} >
                <div className={data.doc}>{Qstn}</div>
                <div className={data.field}><input className={data.in} type="text" placeholder='Write Your Explanation Here' /></div>
                <p>minimum 30 words</p>
                <button className={data.btn}>Save & Update</button>
                
            </div>}

        </div>
    )
}
