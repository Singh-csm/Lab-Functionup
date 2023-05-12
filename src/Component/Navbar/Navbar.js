import React, { useState } from 'react'
import nav from './Navbar.module.css'
import { Link } from 'react-router-dom'
import { CgMenu, CgClose } from "react-icons/cg";

export default function Navbar() {

    const [show, setShow] = useState(false)

    return (
        <nav className={nav.main}>
            <div className={nav.left}>
                <div>
                    <img className={nav.logo} src="https://lab.functionup.org/_next/static/media/logo.6da03344.svg" alt="logo" />
                </div>

                <div className={nav.logoContainer} >
                    <h1 className={nav.fu}>FunctionUp  </h1>
                    <p className={nav.bc} >Placement Bootcamp</p>
                </div>

            </div>

            <div className={`  ${show ? nav.Active_Links : nav.right} `}>
                <li className={nav.common}><Link to="/"> Home</Link></li>
                <li className={nav.common}><Link to="/profile">Profile</Link></li>
                <li className={nav.common}><Link to="/submission">Daily Submission Tracking</Link></li>
                <img className={nav.trophy} src="https://lab.functionup.org/_next/static/media/trophy.bc54b88f.svg" alt="trophy" />
                <li className={nav.leader}> <Link to="/leaderboard">LeaderBoard</Link></li>
                <li className={nav.common}><Link to="/extra-milestone">Extra Milestone</Link></li>
                <li className={nav.common}><Link to="/notes">Notes</Link></li>
                <li className={nav.common}><Link to="/leaves">Leaves</Link></li>
                <li className={nav.common}><Link to="/project-evaluation">Project Evaluation</Link></li>

                <img className={nav.profileImg} src="https://user-images.githubusercontent.com/118621709/235505359-08d69f80-39f9-42c8-9909-2e07d01db56a.png" alt="profile" />
                <li className={nav.log}><Link to="/profile">Log in</Link></li>

            </div>

            <div className={nav.mobile_navbar_btn}>
                <div>
                    {
                        show ? (
                            <span className={nav.close} onClick={() => setShow(false)}>
                                <CgClose />
                            </span>
                        ) : (
                            <span className={nav.menu} onClick={() => setShow(true)}>
                                <CgMenu />
                            </span>
                        )
                    }

                </div>
            </div>
        </nav>
    )
}
