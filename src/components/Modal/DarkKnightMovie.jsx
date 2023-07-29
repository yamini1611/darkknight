import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import DarkKnightVideo from '../../components/assests/DarkKnightMovie.mp4';
import { MDBBtn, MDBIcon } from 'mdb-react-ui-kit';
import '../../components/styles/DarkKnightMovie.css';
import { useNavigate } from 'react-router-dom';

export default function DarkKnightMovie() {
    const values = [];
    const [fullscreen, setFullscreen] = useState(true);
    const [show, setShow] = useState(false);
    const [fade,setFade] = useState(false);
    function handleShow(breakpoint) {
        setFullscreen(breakpoint);
        setShow(true);
    }


    const videoFade=()=>{
        setFade(true)

    }

    const history=useNavigate();
    return (
        <>
<div className='background-color justify-content-center d-flex align-items-center mx-auto text-center'>
<MDBBtn style={{ backgroundColor: 'red' }} className='float-end m-5 col-lg-6 p-3  mx-auto' href='#' onClick={() => handleShow(true, 'xxl-down')}>
      <MDBIcon className='me-2' fab icon='' /> Enter  <i class="fa-solid fa-bolt-lightning"></i>
    </MDBBtn>
            <Modal className="background-color bg-black" show={show} fullscreen={fullscreen} >

                <video src={DarkKnightVideo} className='  mx-auto  bg-black'  style={{
          position: "fixed",
          width: "100%",
          left: 0,
          top: 0,
          opacity: fade ? 0 : 1,
          transition: "opacity, 2s ease-in-out",
          
          
        }} onEnded={()=>history("/adminpage")} autoPlay ></video>

            </Modal>
            </div>
        </>
    );
}