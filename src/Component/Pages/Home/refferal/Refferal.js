import React, { useState } from 'react';
import reff from './refferal.module.css';
import logo from './whatsapp.png';

export default function Referral() {
  const [friendNumber, setFriendNumber] = useState('');

  const handleNumberChange = (event) => {
    setFriendNumber(event.target.value);
  };

  const handleCopyClick = () => {
    const referralLink = `https://example.com/referral?friendNumber=${friendNumber}`;
    navigator.clipboard.writeText(referralLink);
    alert('Referral link copied to clipboard!');
  };

  return (
    <div className={reff.refferal_container}>
      <h3>Help your friend to get a job</h3>
      <p>
        We will consider referrals from our students on top priority and process
        their applications 3 times faster than normal ones.
      </p>
      <div className={reff.input_container}>
        <span>
          <span>+91 -</span>
          <input
            type="text"
            placeholder="Enter Friend's WhatsApp Number"
            value={friendNumber}
            onChange={handleNumberChange}
          />
        </span>
        <button onClick={handleCopyClick}>
          <img src={logo} alt="whatsapp logo" />
          <span>Copy link &amp; Share</span>
        </button>
      </div>
    </div>
  );
}
