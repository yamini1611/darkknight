import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import DarkKnightVideo from '../../components/assests/DarkKnightMovie.mp4';
import { MDBBtn, MDBIcon } from 'mdb-react-ui-kit';
import '../../components/styles/DarkKnightMovie.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function DarkKnightMovie() {
    const [fullscreen, setFullscreen] = useState(true);
    const [show, setShow] = useState(false);
    const [fade, setFade] = useState(false);
    const [points, setPoints] = useState(0);
    const history = useNavigate();

    // these variables are for updating the status as completed
    var code,crimeType,dateTime,location,description,evidence,vehicles,suspect,contact,confidentiality;
    



    //this variable is for updating the current mission status
    const [missionID,setmissionID]=useState();

    axios.get("http://localhost:4000/MissionOn")
.then((response)=>{
    setmissionID(response.data[0].missionID)
})

    function handleShow(breakpoint) {
        setFullscreen(breakpoint);
        setShow(true);
    }

    const videoFade = () => {
        setFade(true);
    };



const handleVideoEnded = () => {
    const updatedPoints = points + 100; 
    setPoints(updatedPoints);
    postPointsToServer(updatedPoints);
    history('/adminpage');
};

 const complaintStatus = async()=>{
    console.log(missionID);
    handleShow(true, 'xxl-down')
   await axios.get(`http://localhost:4000/CrimeDetails/${missionID}`)
   .then((response)=>{
    console.log(response.data.code)
        code=(response.data.code);
        crimeType=(response.data.crimeType);
        dateTime=(response.data.dateTime);
        location=(response.data.location);
        description=(response.data.description);
        evidence=(response.data.evidence);
        vehicles=(response.data.vehicles);
        suspect=(response.data.suspect);
        contact=(response.data.contact);
        confidentiality=(response.data.confidentiality);
   })

   axios.put(`http://localhost:4000/CrimeDetails/${missionID}`,{
    code:code,
    crimeType:crimeType,
    dateTime:dateTime,
    location:location,
    description:description,
    evidence:evidence,
    vehicles:vehicles,
    suspect:suspect,
    contact:contact,
    confidentiality:confidentiality,
    status:true
   })
   
}

const postPointsToServer = (points) => {
    const url = 'http://localhost:4000/points';
    axios.post(url, { points })
        .then((response) => {
            console.log('Points successfully posted to server:', response.data);
        })
        .catch((error) => {
            console.error('Error posting points to server:', error);
        });
};

useEffect(()=>{

},[])


    return (
        <>
            <div className='background-color justify-content-center d-flex align-items-center mx-auto text-center'>
                <MDBBtn
                    style={{ backgroundColor: 'red' }}
                    className='float-end m-5 col-lg-6 p-3 mx-auto'
                    href='#'
                    onClick={() => complaintStatus()}
                >
                    <MDBIcon className='me-2' fab icon='' /> Enter{' '}
                    <i class='fa-solid fa-bolt-lightning'></i>
                </MDBBtn>
                <Modal className='background-color bg-black' show={show} fullscreen={fullscreen}>
                    <video
                        src={DarkKnightVideo}
                        className='mx-auto bg-black'
                        style={{
                            position: 'fixed',
                            width: '100%',
                            left: 0,
                            top: 0,
                            opacity: fade ? 0 : 1,
                            transition: 'opacity, 2s ease-in-out',
                        }}
                        onEnded={handleVideoEnded}
                        autoPlay
                    ></video>
                </Modal>
            </div>
            <div className='points'>
                Dark Coins: {points}
            </div>
        </>
    );
}
