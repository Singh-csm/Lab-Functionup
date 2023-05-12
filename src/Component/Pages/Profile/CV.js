import React from 'react'
import pro from './Profile.module.css'

export default function CV() {
    return (
        <div>
            <h3>Upload Video CV</h3>
            <p className={pro.small}>In order to be eligible for placement, your video cv need to be approved.</p>
            <div className={pro.input}>
                <img src="https://lab.functionup.org/_next/static/media/videoCvIcon.c6ec0147.svg" alt="input" />
                <input placeholder='Paste Google Drive Link' type="text" />
            </div>
            <p className={pro.lastP}>Make sure your link is not private link</p>
            <button className={pro.btn}>Submit</button>
        </div>
    )
}
