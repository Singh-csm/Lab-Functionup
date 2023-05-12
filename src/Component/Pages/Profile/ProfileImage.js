import React from 'react'
import pro from './Profile.module.css'

export default function ProfileImage() {
  return (
    <div className={pro.img_div}>
                        <div>
                            <img src="https://lab.functionup.org/_next/static/media/camera-icon.a380c1b4.svg" alt="profile img" />
                        </div>
                        <p>Upload Photo</p>
                    </div>
  )
}
