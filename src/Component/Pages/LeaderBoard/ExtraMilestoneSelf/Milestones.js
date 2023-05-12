import React from 'react'
import Miles from './ExtraMilestone.module.css'

export default function Milestones() {
    return (
        <div className={Miles.extra}>
            <div className={Miles.main_heading} >
                <div className={Miles.heading}>
                    <h3>Extra Milestone</h3>
                </div>
                <div className={Miles.view}>
                    <p>View All</p>
                </div>
            </div>
          <div className={Miles.achievement}>
          <div className={Miles.achieve}>
                <h5>Job-Application Form</h5>
                <div className={Miles.develop}>
                    <div className={Miles.developer}>
                        <p className={Miles.grey}>Developed by</p>
                        <p className={Miles.black}>Chandrashekhar Singh Mourya</p>
                    </div>
                    <div className={Miles.time}>
                        <p className={Miles.grey}>Time Taken</p>
                        <p className={Miles.black}>1 days</p>
                    </div>
                </div>
            </div>
            <div className={Miles.achieve}>
                <h5>API from excel sheet.</h5>
                <div className={Miles.develop}>
                    <div className={Miles.developer}>
                        <p className={Miles.grey}>Developed by</p>
                        <p className={Miles.black}>Chandrashekhar Singh Mourya</p>
                    </div>
                    <div className={Miles.time}>
                        <p className={Miles.grey}>Time Taken</p>
                        <p className={Miles.black}>2 days</p>
                    </div>
                </div>
            </div>
            <div className={Miles.achieve}>
                <h5>Developer Landing Page</h5>
                <div className={Miles.develop}>
                    <div className={Miles.developer}>
                        <p className={Miles.grey}>Developed by</p>
                        <p className={Miles.black}>Chandrashekhar Singh Mourya</p>
                    </div>
                    <div className={Miles.time}>
                        <p className={Miles.grey}>Time Taken</p>
                        <p className={Miles.black}>3 days</p>
                    </div>
                </div>
            </div>
          </div>
        </div>
    )
}
