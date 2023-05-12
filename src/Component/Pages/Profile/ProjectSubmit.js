import React from 'react'
import pro from './Profile.module.css'

export default function ProjectSubmit() {
    return (
        <div>
            <h3>Project Details & Links</h3>
            <div className={pro.link_add}>
                <p>Links</p>
                <button className={pro.add_btn}>Add new</button>
            </div>
            <div >
                <div className={pro.link_div}> <img src="https://lab.functionup.org/_next/static/media/linkedinLogo.9bbcf6a0.svg" alt="link" /> <button className={pro.add}>Add</button> </div>
                <div className={pro.link_div}> <img src="https://lab.functionup.org/_next/static/media/githubLogo.6871fdc2.svg" alt="git" /> <button className={pro.add}>Add</button> </div>
            </div>
            <div className={pro.link_bottom}>
                <p>Projects</p>
                <button className={pro.add_btn}>Add new</button>
            </div>
        </div>
    )
}

