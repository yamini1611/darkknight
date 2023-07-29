import React, { useEffect, useState } from 'react'
import '../../components/styles/Weapons.css';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Container } from '@mui/material';
import { ToastContainer, toast } from 'react-toastify';
import Badge from '@mui/material/Badge';
import MyVideoComponent from '../Modal/DarkKnightMovie';
import DarkKnightMovie from '../Modal/DarkKnightMovie';

const Weapons = () => {
const [pistols,setPistols] =useState('');
const [shotGun,setShotGun] =useState('');
const [SMG,setSMG] =useState('');
const [assaultRifle,setAssaultRifle] =useState('');
const [rifle,setRifle] =useState('');
const [specialWeapons,setspecialWeapons] =useState('');

const [select,setSelect] = useState(false);
const [chooseWeapons,setChooseWeapons] = useState('');

const selectHandler=()=>{
  if(!select){
    setSelect(true)
  }else setSelect(false)
}
const [fullscreen, setFullscreen] = useState(true);
const [show, setShow] = useState(false);


function handleShow(breakpoint) {
  setFullscreen(breakpoint);
  setShow(true);
}
  const weaponsData=()=>{
    axios.get("http://localhost:4000/Pistol")
    .then((response)=>{
          setPistols(response.data)
    });
    axios.get("http://localhost:4000/ShotGun")
    .then((response)=>{
      setShotGun(response.data)
    }) ;
    axios.get("http://localhost:4000/SMG")
    .then((response)=>{
      setSMG(response.data)
    });
     axios.get("http://localhost:4000/Assault-Rifle")
    .then((response)=>{
      setAssaultRifle(response.data)
    });
     axios.get("http://localhost:4000/Rifle")
    .then((response)=>{
      setRifle(response.data)
    });
     axios.get("http://localhost:4000/Special")
    .then((response)=>{
      setspecialWeapons(response.data)
    })
  }

  const selectWeapons=(weap)=>{
    console.log(weap.name)
    axios.get("http://localhost:4000/selectWeapons")
    .then((response)=>{
      setChooseWeapons(response.data)
      console.log(response.data)
    })
    axios.post("http://localhost:4000/selectWeapons",{
      weaponName:weap.Name,
      image:weap.image
    })
    .then(()=>{
      toast.success('Weapon selected!', {
        position: 'top-center',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        className: 'error-success',
    })
    
    })
    .catch((error)=>{
      console.log(error)
    })
  }

  const handleWeapons=(e)=>{
    selectWeapons(e);
  }
  

  useEffect(()=>{
    weaponsData();
    
  },[])
  return (
    <div className='background-color pb-5 '>
        <h1 className='p-4 quick-sand text-white '>Select Weapons</h1>

        <Badge badgeContent={chooseWeapons.length} className='float-end me-3' color="primary">
        <i class="fa-solid fa-gun text-white "></i>    </Badge>{pistols.length>0 &&(
  <div className='background-color text-white quick-sand'>
  <Container>
  <div className='row  background-color'>
    <h1>Pistols</h1>
    {pistols.map((pistol)=>(
      <div className='col-lg-4 mt-5'>
        <Card style={{ width: '18rem',height:'23rem' }}>
      <Card.Img variant="top" src={`${pistol.image}`}  style={{ width: '18rem',height:'21rem' }}/>
      <Card.Body>
        <Card.Title>{pistol.Name}</Card.Title>
        <Card.Text>
          Damage level: <span className='text-success'><b>Low</b></span>
        </Card.Text>
        <Button className='bg-black' onClick={()=>handleWeapons(pistol)} >Add</Button>

      </Card.Body>
    </Card>
    {console.log(select)}
    </div>
    
    ))}
    </div>
    <div className='row  background-color'>
    <h1 className='m-3'>Shotguns</h1>
    {shotGun.map((shot)=>(
      <div className='col-lg-4 mt-2'>
        <Card style={{ width: '18rem',height:'23rem' }}>
      <Card.Img variant="top" src={`${shot.image}`}  style={{ width: '18rem',height:'21rem' }}/>
      <Card.Body>
        <Card.Title>{shot.Name}</Card.Title>
        <Card.Text>
        Damage level: <b className='text-warning'>High</b>
        </Card.Text>
        <Button className='bg-black' onClick={()=>handleWeapons(shot)} >Add</Button>
      </Card.Body>
    </Card>
    </div>
    
    ))}
    </div>
    <div className='row  background-color'>
    <h1 className='m-3'>SMGs</h1>
    {SMG.map((Submg)=>(
      <div className='col-lg-4 mt-2'>
        <Card style={{ width: '18rem',height:'23rem' }}>
      <Card.Img variant="top" src={`${Submg.image}`}  style={{ width: '18rem',height:'21rem' }}/>
      <Card.Body>
        <Card.Title>{Submg.Name}</Card.Title>
        <Card.Text>
        Damage level: <b className='text-secondary'> Medium</b>
        </Card.Text>
        <Button className='bg-black' onClick={()=>handleWeapons(Submg)} >Add</Button>
      </Card.Body>
    </Card>
    </div>
    
    ))}
    </div>
    <div className='row  background-color'>
    <h1 className='m-3'>Assault Rifle</h1>
    {assaultRifle.map((assault)=>(
      <div className='col-lg-4 mt-2'>
        <Card style={{ width: '18rem',height:'23rem' }}>
      <Card.Img variant="top" src={`${assault.image}`}  style={{ width: '18rem',height:'21rem' }}/>
      <Card.Body>
        <Card.Title>{assault.Name}</Card.Title>
        <Card.Text>
        Damage level:  <b className='text-warning'>High</b>
        </Card.Text>
        <Button className='bg-black' onClick={()=>handleWeapons(assault)} >Add</Button>
      </Card.Body>
    </Card>
    </div>
    
    ))}
    </div>
    <div className='row  background-color'>
    <h1 className='m-3'>Rifles</h1>
    {rifle.map((rif)=>(
      <div className='col-lg-4 mt-2'>
        <Card style={{ width: '18rem',height:'23rem' }}>
      <Card.Img variant="top" src={`${rif.image}`}  style={{ width: '18rem',height:'21rem' }}/>
      <Card.Body>
        <Card.Title>{rif.Name}</Card.Title>
        <Card.Text>
        Damage level:  <b className='text-danger'>Extremely high</b>
        </Card.Text>
        <Button className='bg-black' onClick={()=>handleWeapons(rif)} >Add</Button>
      </Card.Body>
    </Card>
    </div>
    
    ))}
    </div>
    <div className='row  background-color'>
    <h1 className='m-3'>Special Weapons</h1>
    {specialWeapons.map((spl)=>(
      <div className='col-lg-4 mt-2'>
        <Card style={{ width: '18rem',height:'23rem' }}>
      <Card.Img variant="top" src={`${spl.image}`}  style={{ width: '18rem',height:'21rem' }}/>
      <Card.Body>
        <Card.Title>{spl.Name}</Card.Title>
        <Card.Text>
        Damage level:  <b className='text-danger'>Deadly <i class="fa-solid fa-skull"></i></b>
        </Card.Text>
        <Button className='bg-black' onClick={()=>handleWeapons(spl)} >Add</Button>
      </Card.Body>
    </Card>
    </div>
    
    ))}

    </div>
    
    </Container>
   
    </div>
)}
<DarkKnightMovie className="background-color" show={show} fullscreen={fullscreen} onHide={() => setShow(false)} />
<ToastContainer />
    </div>
  )
}

export default Weapons