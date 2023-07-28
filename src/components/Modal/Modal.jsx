import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';

export default function BatModal(props) {
  return (
    <div className='bg-dark'>
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header className='bg-dark text-white' closeButton>
      <h4 className='text-white'>Crime Details</h4>
      </Modal.Header>
      <Modal.Body className='bg-dark text-white'>
     <h3>A crime has taken place at {props.location}</h3>
     <h3>It's time to suit up!</h3>
     <h5>Category: {props.typeOfCrime}</h5>
     <h5>Time: {props.time}</h5>
     <h5>Location: {props.location}</h5>
     <h5>Description: {props.description}</h5>
     <h5>Contact: {props.contact}</h5>
     <h5>Confidentiality: {props.confidentiality}</h5>
     <h5>Emergency: {props.emergency}</h5>



<Link to="/weapons"><Button className=' mx-auto d-flex '>Suit Up!</Button></Link>
      </Modal.Body>

     
    </Modal>
    </div>
  );
}



  