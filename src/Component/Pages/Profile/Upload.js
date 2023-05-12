import React from 'react'
import pro from './Profile.module.css'

export default function Upload() {
    return (
        <div>
            <h3>Upload Resume</h3>
            <p className={pro.small}>In order to be eligible for placement, your resume need to be approved.</p>
            <div className={pro.upload}>
                <div className={pro.upload_btn}> <button>Upload</button>  </div>
                <div> <img src=" https://lab.functionup.org/_next/static/media/uploadButton.c6acaab0.svg" alt="upload" /></div>
            </div>
            <p className={pro.lastP}>Supported Format - Pdf only</p>
            <button className={pro.btn}>Submit</button>
        </div>
    )
}
