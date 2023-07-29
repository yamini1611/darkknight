// UserPage.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import CrimeForm from './CrimeForm'; // Import the newly created component
import '../styles/UserPage.css';

const UserPage = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className='batfont'>
        <div className="container-fluid p-0">
          <div className="first">
            <h1>The Batman's EndGame!</h1>
            <h2 className="gfont text-center" id='textpg1'>Crime can't hide from the watchful eyes of Batman – Report and reveal!</h2>
            <div className="explore-container">
              <button id='Explorebtn'>Explore</button>
            </div>
            <Link to="/Register"><button className="become-batman-btn">Join</button></Link>
          </div>
        </div>
        <div className="container-fluid p-0">
          <div className="second text-center">
            <h2 className="gfont text-center" id='textpg1'>
              Be the hero Batman needs – report crime today!</h2>
            <button id='btnstyle' className="btnreport bg-transparent" onClick={() => setShowModal(true)}>
              <span>Report</span>
            </button>
          </div>
        </div>
        <div>
          <Link to="/adminpage">Boom</Link>
        </div>
      </div>

      {/* Render the CrimeForm component */}
      <CrimeForm showModal={showModal} setShowModal={setShowModal} />
    </>
  );
};

export default UserPage;
