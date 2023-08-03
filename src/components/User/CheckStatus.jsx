// CheckStatus.js
import React, { useState } from 'react';
import '../styles/CheckStatus.css';

const CheckStatus = () => {
  const [codeInput, setCodeInput] = useState('');
  const [statusMessage, setStatusMessage] = useState('');
  const [messageToBatman, setMessageToBatman] = useState('');

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
            setStatusMessage('Your Mission is Completed Successfully');
          } else {
            setStatusMessage('Your Mission is In Progress');
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

  const handleSendMessage = () => {
    // Here, you can do whatever you want with the message, e.g., send it to the server
    console.log('Message to Batman:', messageToBatman);
    setMessageToBatman(''); // Clear the message after sending for a better user experience
  };

  return (
    <div className="container1">
      <div className="check-status-container">
        <h2 className="check-status-heading mt-n5">Crime Status</h2>
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
        {statusMessage === 'Your Mission is Completed Successfully' && (
          <div>
            <textarea
              className="message-to-batman"
              placeholder="Send your Feedback to Batman..."
              value={messageToBatman}
              onChange={(e) => setMessageToBatman(e.target.value)}
            />
            <button className="send-button" onClick={handleSendMessage}>
              Send
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CheckStatus;
