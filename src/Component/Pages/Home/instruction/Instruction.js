import React from 'react'
import inst from './instruction.module.css'

export default function Instruction() {
    return (
        <div className={inst.instruction_container}>

            <div className={inst.lecture}>
                <h3>Lecture instructions</h3>

                <p>1. Lecture duration is of 44 min.</p>
                <p>2. You can pause this lecture for a total of 5 min. So use it wisely, like to make notes, to write code etc.</p>
                <p>3. During the lecture you will get breaks at 25 min respectively.</p>
                <p>4. Each break will be of 5 minute(s). Use it to refresh yourself.</p>

            </div>

            <div className={inst.general}>
                <h3>General instructions</h3>

                <p>1. Once you reach the end of the lecture, you wont be able to access it again.</p>
                <p>2. From time to time during the lecture you will get "mark attendance" box. Dont miss it.</p>
                <p>3. If you want to code during the lecture, pause the lecture.</p>
                <p>4. You wont get "mark attendance" box if the lecture is paused. So Don't worry about it.</p>

            </div>

            <div className={inst.checkList}>
                <h3>Check List</h3>

                <p>1. Check your cohort name in the profile section to make sure you are in the right cohort.</p>
                <p>2. Make sure that your internet connectivity is good.</p>
                <p>3. Make sure that the time on your system is correct.</p>
                <p>4. Correct time is Apr 03, 10:41:35 and your system time is Apr 03, 10:41:35. Correct it if they are different.</p>

            </div>

            <div className={inst.dos}>
                <h3>Dos and Donts</h3>

                <p>1. Watch the lecture on full screen for better clarity.</p>
                <p>2. Don’t access the lecture on mobile.</p>
                <p>3. Don’t open lecture on multiple devices. You will get logged out.</p>
                <p>4. Access the lecture on chrome only. You might face issues in other browsers</p>

            </div>

        </div>
    )
}
