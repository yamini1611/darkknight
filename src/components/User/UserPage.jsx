import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import CrimeForm from './CrimeForm'; 
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
            <Link to="/explore"><button id='Explorebtn'>Explore</button></Link>
            </div>
            <Link to="/Register"><button className="become-batman-btn">Join</button></Link>
          </div>
        </div>
        <div className="container-fluid p-0">
          <div className="second text-center">
            <div className='row container'>
              <div className='col-lg-6'>
                <h2 className="gfont text-center  " id='textpg1'>
                  Be the hero Batman needs – report crime today!</h2>
                <button id='btnstyle' className="btnreport bg-transparent " onClick={() => setShowModal(true)}>
                  <span>Report</span>
                </button>
              </div>
             
            </div>
          </div>
        </div>

        <div>

        </div>

      </div>

      <CrimeForm showModal={showModal} setShowModal={setShowModal} />
    </>
  );
};

export default UserPage;
