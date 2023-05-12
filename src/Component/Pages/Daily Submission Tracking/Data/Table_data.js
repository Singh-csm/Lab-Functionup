import React, { useState } from 'react'
import data from './Table_data.module.css'
import { IoIosArrowDown , IoIosArrowUp } from 'react-icons/io';


export default function Table_data({ id, Lecture, DeadLine }) {
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
                <div className={data.doc}>documentLinkAssignment</div>
                <div className={data.submit} >
                    <input className={data.input} type="text" placeholder='Enter Submission Link Here' />
                    <button className={data.btn}>Submit</button>
                </div>
            </div>}
        </div>
    )
}
