import React from 'react'
import pro from './Profile.module.css'

export default function KYC() {
    return (
        <div>
            <div> <h3>KYC Details</h3> </div>
            <div className={pro.cam}>
                <div><p className={pro.lastP}>AADHAR FRONT</p>
                    <div className={pro.gray_img_bg}><img src="https://lab.functionup.org/_next/static/media/camera-icon.a380c1b4.svg" alt="cam" /></div></div>
                <div><p className={pro.lastP}>AADHAR BACK</p>
                    <div className={pro.gray_img_bg}><img src="https://lab.functionup.org/_next/static/media/camera-icon.a380c1b4.svg" alt="cam" /></div></div>
                <div><p className={pro.lastP}>PAN CARD</p>
                    <div className={pro.gray_img_bg}><img src="https://lab.functionup.org/_next/static/media/camera-icon.a380c1b4.svg" alt="cam" /></div></div>
                <div><p className={pro.lastP}>CHEQUE</p>
                    <div className={pro.gray_img_bg}><img src="https://lab.functionup.org/_next/static/media/camera-icon.a380c1b4.svg" alt="cam" /></div></div> </div>
        </div>
    )
}
