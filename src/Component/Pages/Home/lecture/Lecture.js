import React from 'react'
import lect from './lecture.module.css'

export default function Lecture() {
  const handleJoinNowClick = () => {
    window.location.href = 'https://google.com'; // replace with your desired URL
  };

  return (
    <div className={lect.lecture_container}>
      <div>
        <h3>Lecture on Resume Building Day 159 will start on 14 May, at 12:00 pm.</h3>
        <button type='submit' onClick={handleJoinNowClick}>Join Now</button>
      </div>

      <div className={lect.photo}>
        <img src="https://lab.functionup.org/_next/static/media/lecture.45244f30.svg" alt="" />
      </div>
    </div>
  );
}
