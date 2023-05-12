import React from 'react'
import pro from './Profile.module.css'
import Leftcomponent from '../../Left Component/Leftcomponent'
import ProfileImage from './ProfileImage'
import RightProfile from './RightProfile'
import Education from './Education'
import KYC from './KYC'
import Upload from './Upload'
import ProjectSubmit from './ProjectSubmit'
import CV from './CV'

export default function Profile() {

    return (
        <div className="main_background" >

            <Leftcomponent />
            <div className={pro.container}>
                <div className={pro.profile_container}>
                    <ProfileImage />
                    <RightProfile />
                </div>
                <div className={pro.sectionMain}>
                    <Education />
                </div>
                <div className={pro.sectionMain}>
                    <KYC />
                </div>
                <div className={pro.sectionMain}>
                    <ProjectSubmit/>
                </div>
                < div className={pro.sectionMain}>
                    <Upload/>
                </div>

                <div className={pro.sectionMain}>
                    <CV/>
                </div>
            </div>
        </div>

    )
}