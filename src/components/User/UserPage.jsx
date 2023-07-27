import React, { useState } from 'react';
import Swal from 'sweetalert2';
import '../styles/UserPage.css';
import { Link } from 'react-router-dom';

const UserPage = () => {
  const [crimeDetails, setCrimeDetails] = useState([]);

  const handleReportCrime = async () => {
    const step1 = await Swal.fire({
      title: 'GETIN',
      text: 'Please Enter Your Vigilence code',
      input: 'text',
      inputPlaceholder: 'Enter Your Vigilence code',
      showCancelButton: true,
      confirmButtonText: 'Next &rarr;',
      cancelButtonText: 'Cancel',
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      focusConfirm: false,
      preConfirm: (login) => {

        return login;
      },
    });

    if (step1.dismiss) return; 

    // Fetch 
    const response = await fetch("http://localhost:4000/Register");
    const registeredUsers = await response.json();

    
    const isValidCode = registeredUsers.some((user) => user.code === step1.value);

    if (!isValidCode) {
      Swal.fire('Invalid Code', 'Please enter a valid vigilance code', 'error');
      return;
    }

    const step2 = await Swal.fire({
      title: 'Report a Crime',
      text: 'Please provide details about the crime:',
      input: 'text',
      showCancelButton: true,
      confirmButtonText: 'Next &rarr;',
      cancelButtonText: 'Cancel',
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      focusConfirm: false,
      preConfirm: (crimeDetails) => {
        return crimeDetails;
      },
    });

    if (step2.dismiss) return; 

    const step3 = await Swal.fire({
      title: 'Upload Additional Details',
      text: 'Please upload an image or video file (optional):',
      input: 'file',
      showCancelButton: true,
      confirmButtonText: 'Submit',
      cancelButtonText: 'Cancel',
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      focusConfirm: false,
      preConfirm: (file) => {
        return file;
      },
    });

    if (step3.dismiss) return; 


    const newCrimeDetails = {
      code: step1.value,
      crimeDetails: step2.value,
      files: step3.value ? step3.value.name : null,
    };

    setCrimeDetails((prevDetails) => [...prevDetails, newCrimeDetails]);

    fetch("http://localhost:4000/CrimeDetails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newCrimeDetails),
    })
      .then((response) => {
        if (response.ok) {
          Swal.fire({
            title: 'All done!',
            html: `
              Your login: ${step1.value}<br>
              Crime Details: ${step2.value}<br>
              ${step3.value ? `Uploaded file: ${step3.value.name}` : 'No file uploaded'}
            `,
            confirmButtonText: 'Close',
            confirmButtonColor: '#3085d6',
          });
        } else {
          Swal.fire('Error', 'Failed to report the crime. Please try again later.', 'error');
        }
      })
      .catch((error) => {
        console.error("Error during crime reporting:", error);
        Swal.fire('Error', 'Failed to report the crime. Please try again later.', 'error');
      });
  };

  return (
    <>
      <div className='batfont'>
        <div className="container-fluid p-0">
          <div className="first">
            <h2 className="gfont text-center">The Batman Savage</h2>
            <Link to="/Register"><button className="become-batman-btn">Join</button></Link>
          </div>
        </div>
        <div className="container-fluid p-0">
          <div className="second text-center">
            <button id='btnstyle'
              className="btnreport bg-transparent"
              onClick={handleReportCrime}
            >
              Report
            </button>
          </div>
        </div>
        <div>
          <Link to="/adminpage">Boom</Link>
        </div>
      </div>
    </>
  );
};

export default UserPage;
