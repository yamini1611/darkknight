import React, { useEffect, useState } from 'react';
import '../styles/HomePage.css';
import toast, { Toaster } from 'react-hot-toast';
import BatModal from '../Modal/Modal';
import { Button } from 'react-bootstrap';
import DKCard from '../Card/Card';


const Homepage = () => {
  const [modalShow, setModalShow] = useState(false);
  const [welcomeBack,setWelcomeBack] = useState(true);
var count=0;

useEffect(()=>{

  if(welcomeBack&&count===0){
    toast(
      "Welcome back Sire!" ,
      {
        duration: 4000,
        style: {
          borderRadius: '5px',
          background: '#333',
          color: '#fff',
        }
      }
    )
    count++
    setWelcomeBack(false)
  }
},[])


  return (
    <div className=' vh-100 batfont container-fluid'>
<h1 className='display-3 text-white'>Rule the empire</h1>


<DKCard></DKCard>

<div className='mx-auto justify-content-center text-center'>
    {/* <h3 >Enter into the crime reports</h3>
    <Button variant="secondary" onClick={() => setModalShow(true)}>
        Enter
      </Button>
  
      <BatModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      /> */}
       <div>
      <Toaster />
    </div>

</div>

    </div>
  )
}

export default Homepage