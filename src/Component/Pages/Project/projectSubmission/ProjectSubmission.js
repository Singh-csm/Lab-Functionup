import React, { useState } from 'react';
import projSub from './projectSubmission.module.css';

export default function ProjectSubmission() {
  const [projectLink, setProjectLink] = useState('');

  const handleSubmission = () => {
    alert('Okay! Thank you for submitting.');
    setProjectLink('');
  };

  const handleInputChange = (e) => {
    setProjectLink(e.target.value);
  };

  return (
    <div className={projSub.projectSubmission_container}>
      <p>Enter Project Link here</p>
      <input type="text" value={projectLink} onChange={handleInputChange} />
      <div>
        <button onClick={handleSubmission}>Submit</button>
        <span>Submission limit exceeded</span>
      </div>
    </div>
  );
}
