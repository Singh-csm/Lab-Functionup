import React from 'react'
import lf from './LeaveForm.module.css'
import AttachmentIcon from '@mui/icons-material/Attachment';
export default function LeaveForm() {
  return (
    <div className={lf.leaveForm_container}>
      <h2>Leave Management</h2>

      <h3>Apply for Leave</h3>

      <div className={lf.date}>
        <div >
          <p>From<span>*</span></p>
          <input type="date" required />
        </div>

        <div >
          <p>To<span>*</span></p>
          <input type="date" required />
        </div>
      </div>

      <div className={lf.subject}>
        <p>Subject for leave <span>*</span></p>
        <input type="text" required />
      </div>

      <div className={lf.reason}>
        <p>Enter Reason <span>*</span></p>
        <textarea rows="3"  required></textarea>
      </div>

      <div className={lf.filePart}>
        <p>Upload supported document to get leave</p>

        <p className={lf.filePara}>
          <AttachmentIcon />
          <span>Attach file</span>
        </p>
      </div>

      <button>Apply for Leave</button>

    </div>
  )
}
