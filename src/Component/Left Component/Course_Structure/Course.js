import React from 'react'
import left from './Course.module.css'
import lock from '../lock.png'

export default function Course() {
  return (
    <div className={left.course_structure}>
    <h3>Course Structure</h3>
    <div className={left.course}>
        <p><img src={lock} alt="lock" />introduction</p>
        <span>+</span>
    </div>

    <hr />
    <div className={left.course}>
        <p> <img src={lock} alt="lock" />Node installation</p>
        <span>+</span>
    </div>
    <hr />
    <div className={left.course}>
        <p><img src={lock} alt="lock" />ReactJs</p>
        <span>+</span>
    </div>
    <hr />
    <div className={left.course}>
        <p> <img src={lock} alt="lock" />MongoDB</p>
        <span>+</span>
    </div>
    <hr />
    <div className={left.course}>
        <p><img src={lock} alt="lock" />ExpressJs</p>
        <span>+</span>
    </div>
    <hr />
    <div className={left.course}>
        <p><img src={lock} alt="lock" />Project 1</p>
        <span>+</span>
    </div>
    <hr />
    <div className={left.course}>
        <p><img src={lock} alt="lock" />Project 2</p>
        <span>+</span>
    </div>
    <hr />
    <div className={left.course}>
        <p><img src={lock} alt="lock" />Project 3</p>
        <span>+</span>
    </div>
    <hr />
    <div className={left.course}>
        <p><img src={lock} alt="lock" />Project 4</p>
        <span>+</span>
    </div>
    <hr />
    <div className={left.course}>
        <p><img src={lock} alt="lock" />Project 5</p>
        <span>+</span>
    </div>
    <hr />
    <div className={left.course}>
        <p><img src={lock} alt="lock" />Placement Pool</p>
        <span>+</span>
    </div>
    <hr />
</div>
  )
}
