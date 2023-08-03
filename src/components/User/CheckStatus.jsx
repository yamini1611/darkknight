import React, { useState } from 'react';
import '../styles/CheckStatus.css'

const CheckStatus = () => {
  const [codeInput, setCodeInput] = useState('');
  const [statusMessage, setStatusMessage] = useState('');

  const handleCodeChange = (e) => {
    setCodeInput(e.target.value);
  };

  const checkStatus = () => {
    fetch('http://localhost:4000/CrimeDetails') 
      .then((response) => response.json())
      .then((data) => {
        const crime = data.find((crime) => crime.code === codeInput);
        if (crime) {
          if (crime.status) {
            setStatusMessage('Mission Completed');
          } else {
            setStatusMessage('Mission In Progress');
          }
        } else {
          setStatusMessage('Code not found');
        }
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setStatusMessage('Error fetching data');
      });
  };

  return (
    <div className="container1">
    <div className="check-status-container">
      <h2 className="check-status-heading">Check Status</h2>
      <input
        className="check-status-input"
        type="text"
        placeholder="Enter status code"
        value={codeInput}
        onChange={handleCodeChange}
      />
      <button className="check-status-button" onClick={checkStatus}>
        Check
      </button>
      <div className="check-status-message">{statusMessage}</div>
     
    </div>
    </div>
  );
};

export default CheckStatus;
