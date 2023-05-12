import React from 'react'
import Ms from './ProjectMilestone.module.css'
import Leftcomponent from '../../Left Component/Leftcomponent'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function Projectmilestone() {
  return (
    <div className='main_background'>
      <Leftcomponent />

      <div className={Ms.main_container}>
        <div className={Ms.details}>
          <div className={Ms.main_heading} >
            <div className={Ms.heading}>
              <h3>Extra Milestone</h3>
            </div>
            <div className={Ms.view}>
              <button
              
              >Add Your Milestone</button>

            </div>
          </div>
          <div className={Ms.project_main_container}>
            <div className={Ms.projectdetails}>
              <div className={Ms.proname}>
                <div className={Ms.projectname}>
                  <h5>Job-Application Form</h5>
                </div>
                <div className={Ms.approval}>
                  <p>Pending Approval</p>
                </div>
              </div>
              <div className={Ms.develop}>
                <div className={Ms.developer}>
                  <p className={Ms.grey}>Developed by</p>
                  <p className={Ms.black}>Chandrashekhar Singh Mourya</p>
                </div>
                <div className={Ms.time}>
                  <p className={Ms.grey}>Time Taken</p>
                  <p className={Ms.black}>1 days</p>
                </div>
              </div>
              <div className={Ms.language}>
                <p>HMTL</p>
                <p>CSS</p>
                <p>JavaScript</p>
              </div>
              <div className={Ms.description}>
                <p>
                This is the application form for admission of school/college
                </p>
              </div>
              <div className={Ms.link}>
                <div>
                  <p>Project Link </p>
                </div>
                <div>
                  <span><ArrowForwardIcon /></span>
                </div>
              </div>
            </div>
            <div className={Ms.projectdetails}>
              <div className={Ms.proname}>
                <div className={Ms.projectname}>
                  <h5>Chrome Web Extension</h5>
                </div>
                <div className={Ms.approval}>
                  <p>Pending Approval</p>
                </div>
              </div>
              <div className={Ms.develop}>
                <div className={Ms.developer}>
                  <p className={Ms.grey}>Developed by</p>
                  <p className={Ms.black}>Chandrashekhar Singh Mourya</p>
                </div>
                <div className={Ms.time}>
                  <p className={Ms.grey}>Time Taken</p>
                  <p className={Ms.black}>2 days</p>
                </div>
              </div>
              <div className={Ms.language}>
                <p>HMTL</p>
                <p>CSS</p>
                <p>JavaScript</p>
              </div>
              <div className={Ms.description}>
                <p>
                In this project I have created a Chrome web extension with the help of simple popup.html and manifest.json and used fetch API to fetch data for my extension and also styled the extension with the help of CSS : so yes! this extension is completed and it's ready to be deployed
                </p>
              </div>
              <div className={Ms.link}>
                <div>
                  <p>Project Link </p>
                </div>
                <div>
                  <span><ArrowForwardIcon /></span>
                </div>
              </div>
            </div>
            <div className={Ms.projectdetails}>
              <div className={Ms.proname}>
                <div className={Ms.projectname}>
                  <h5>API from excel sheet.</h5>
                </div>
                <div className={Ms.approval}>
                  <p>Pending Approval</p>
                </div>
              </div>
              <div className={Ms.develop}>
                <div className={Ms.developer}>
                  <p className={Ms.grey}>Developed by</p>
                  <p className={Ms.black}>Chandrashekhar Singh Mourya</p>
                </div>
                <div className={Ms.time}>
                  <p className={Ms.grey}>Time Taken</p>
                  <p className={Ms.black}>3 days</p>
                </div>
              </div>
              <div className={Ms.language}>
                <p>HMTL</p>
                <p>CSS</p>
                <p>JavaScript</p>
              </div>
              <div className={Ms.description}>
                <p>
                I have made REST APIs by using Google Sheets and App Script. API from excel sheet.
                </p>
              </div>
              <div className={Ms.link}>
                <div>
                  <p>Project Link </p>
                </div>
                <div>
                  <span><ArrowForwardIcon /></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
