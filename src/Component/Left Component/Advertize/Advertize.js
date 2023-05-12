import React from 'react'
import logo from '../whatsapp.png'
import  left from './Advertize.module.css' 

export default function Advertize() {
    return (
        <div className={left.advertise}>
            <h3>More students Like You</h3>
            <p>If you feel FunctionUp is helping you in shaping your career, we want our new admissions to have the same motivation as yours.</p>
            <button>
                <img src={logo} alt="whatsapp logo" />
                <span>Share Now</span>
            </button>
        </div>
    )
}
