import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const CrimeForm = ({ showModal, setShowModal }) => {
  const [crimeDetails, setCrimeDetails] = useState({
    code: '',
    crimeType: '',
    dateTime: '',
    location: '',
    description: '',
    evidence: '',
    vehicles: '',
    suspect: '',
    contact: '',
    confidentiality: '',
    emergency: '',
  });

  const [errors, setErrors] = useState({
    code: '',
    crimeType: '',
    dateTime: '',
    location: '',
    description: '',
    contact: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCrimeDetails({ ...crimeDetails, [name]: value });
    setErrors({ ...errors, [name]: '' }); 
  };

  const handleSubmit = () => {
    const mandatoryFields = ['code', 'crimeType', 'dateTime', 'location', 'description', 'contact'];
    let hasError = false;
    const updatedErrors = {};

    mandatoryFields.forEach((field) => {
      if (!crimeDetails[field]) {
        hasError = true;
        updatedErrors[field] = 'This field is required';
      }
    });

    if (hasError) {
      setErrors(updatedErrors);
      return;
    }

    fetch('http://localhost:4000/Register')
      .then((response) => response.json())
      .then((data) => {
        
        const codeExists = data.some((item) => item.code === crimeDetails.code);

        if (!codeExists) {
         
          alert('Invalid code. Please provide a valid code.');
        } else {
         
          fetch('http://localhost:4000/CrimeDetails', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(crimeDetails),
          })
            .then((response) => {
              if (response.ok) {
             
                console.log('Crime reported successfully');
                setShowModal(false);
                setCrimeDetails({
                  // Clear all fields by setting crimeDetails to an empty object
                  code: '',
                  crimeType: '',
                  dateTime: '',
                  location: '',
                  description: '',
                  evidence: '',
                  vehicles: '',
                  suspect: '',
                  contact: '',
                  confidentiality: '',
                  emergency: '',
                });
              } else {
               
                console.error('Failed to report the crime. Please try again later.');
              }
            })
            .catch((error) => {
              console.error('Error during crime reporting:', error);
            });
        }
      })
      .catch((error) => {
        console.error('Error fetching register data:', error);
      });
  };

  return (
    
    <Modal show={showModal} onHide={() => setShowModal(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Report a Crime</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formCode">
            <Form.Label>Code</Form.Label>
            <Form.Control
              type="text"
              name="code"
              value={crimeDetails.code}
              onChange={handleInputChange}
              required
              isInvalid={!!errors.code} // Add 'isInvalid' prop to indicate the field has an error
            />
            <Form.Control.Feedback type="invalid">{errors.code}</Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="formCrimeType">
            <Form.Label>Type of Crime</Form.Label>
            <Form.Control
              as="select"
              name="crimeType"
              value={crimeDetails.crimeType}
              onChange={handleInputChange}
              required
              isInvalid={!!errors.crimeType} 
            >
              <option value="">Select a type</option> 
              <option value="Murder">Murder</option>
              <option value="Kidnap">Kidnap</option>
              <option value="Theft">Theft</option>
              <option value="Others">Others</option>
            </Form.Control>
            <Form.Control.Feedback type="invalid">{errors.crimeType}</Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="formDateTime">
            <Form.Label>Date and Time of Incident</Form.Label>
            <Form.Control
              type="datetime-local"
              name="dateTime"
              value={crimeDetails.dateTime}
              onChange={handleInputChange}
              required 
              isInvalid={!!errors.dateTime} 
            />
            <Form.Control.Feedback type="invalid">{errors.dateTime}</Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="formLocation">
            <Form.Label>Location</Form.Label>
            <Form.Control
              type="text"
              name="location"
              value={crimeDetails.location}
              onChange={handleInputChange}
              required 
              isInvalid={!!errors.location} 
            />
            <Form.Control.Feedback type="invalid">{errors.location}</Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="formDescription">
            <Form.Label>Crime Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              name="description"
              value={crimeDetails.description}
              onChange={handleInputChange}
              required 
              isInvalid={!!errors.description} 
            />
            <Form.Control.Feedback type="invalid">{errors.description}</Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="formEvidence">
            <Form.Label>Evidence</Form.Label>
            <Form.Control
              type="text"
              name="evidence"
              value={crimeDetails.evidence}
              onChange={handleInputChange}
              required
              isInvalid={!!errors.evidence} 
            />
            <Form.Control.Feedback type="invalid">{errors.evidence}</Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="formVehicles">
            <Form.Label>Vehicles (Optional)</Form.Label>
            <Form.Control
              type="text"
              name="vehicles"
              value={crimeDetails.vehicles}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group controlId="formSuspect">
            <Form.Label>Suspect</Form.Label>
            <Form.Control
              type="text"
              name="suspect"
              value={crimeDetails.suspect}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group controlId="formContact">
            <Form.Label>Contact</Form.Label>
            <Form.Control
              type="text"
              name="contact"
              value={crimeDetails.contact}
              onChange={handleInputChange}
              required 
              isInvalid={!!errors.contact} 
            />
            <Form.Control.Feedback type="invalid">{errors.contact}</Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="formConfidentiality">
            <Form.Label>Confidentiality</Form.Label>
            <Form.Control
              as="select"
              name="confidentiality"
              value={crimeDetails.confidentiality}
              onChange={handleInputChange}
              required 
              isInvalid={!!errors.confidentiality} 
            >
              <option value="">Select an option</option> 
              <option value="public">Public</option>
              <option value="private">Private</option>
            </Form.Control>
            <Form.Control.Feedback type="invalid">{errors.confidentiality}</Form.Control.Feedback>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setShowModal(false)}>
          Close
        </Button>
        <Button variant="primary" onClick={handleSubmit}>
          Submit
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CrimeForm;
