import React from 'react'
import pro from './Profile.module.css'

export default function RightProfile() {
  return (
    <div className={pro.right}>
                        <h2>Cohot Details</h2>
                        <div className={pro.cohort}>
                            <p>Cohot Name : Californium</p>
                            <p>Roll No : fn-cal-23OYF </p>
                        </div>
                        <h4>Personal Details</h4>
                        <div className={pro.personal}>
                            <input type="text" placeholder='Enter Your Name' />
                            <input type="text" placeholder='Enter Your Email' />
                            <input type="text" placeholder='Enter Year Number' />
                        </div>
                        <h3>Residential Address</h3>
                        <div className={pro.residential}>
                            <div className={pro.vertical}>
                                <input type="text" placeholder='Enter Address - 1' />
                                <input type="text" placeholder='Enter Address - 2' />
                            </div>
                            <div className={pro.lastinput}>
                                <div>
                                    <input type="text" placeholder="Enter City" />
                                    <input type="text" placeholder="Enter Pincode" />
                                </div>
                                <div>
                                    <input type="text" placeholder='Enter Land Mark' />
                                    <select className={pro.drop}>
                                        <option value="Select">--Select Your State--</option>
                                        <option value="agartala">Madhya Pradesh</option>
                                        <option value="agartala">Himachal Pradesh</option>
                                        <option value="agartala">Goa</option>
                                        <option value="agartala">Karnataka</option>
                                        <option value="agartala">----etc---</option>
                                    </select>
                                </div>
                            </div>
                            <div >
                                <button className={pro.btn}>Submit</button>
                            </div>
                        </div>
                    </div>
  )
}
