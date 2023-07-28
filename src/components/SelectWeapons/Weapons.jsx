import React, { useEffect, useState } from 'react'
import '../../components/styles/Weapons.css';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const Weapons = () => {
const [pistols,setPistols] =useState('');
const [shotGun,setShotGun] =useState('');
const [SMG,setSMG] =useState('');
const [assaultRifle,setAssaultRifle] =useState('');
const [rifle,setRifle] =useState('');
const [specialWeapons,setspecialWeapons] =useState('');


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
     axios.get("http://localhost:4000/AssaultRifle")
    .then((response)=>{
      setAssaultRifle(response.data)
    });
     axios.get("http://localhost:4000/Rifle")
    .then((response)=>{
      setRifle(response.data)
    });
     axios.get("http://localhost:4000/SpecialWeapons")
    .then((response)=>{
      setspecialWeapons(response.data)
    })
  }

  useEffect(()=>{
    weaponsData();
  },[])
  return (
    <div className='background-color vh-100'>
        <h1 className='p-4 quick-sand text-white '>Select Weapons</h1>
        
{pistols.length>0 &&(
  <div className='row'>
    {pistols.map((pistol)=>(
      <div className='col-lg-3'>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={`${pistol.image}`} />
      <Card.Body>
        <Card.Title>{pistol.Name}</Card.Title>
        <Card.Text>
          Points:{pistol.points}
        </Card.Text>
        <Button variant="primary">Select</Button>
      </Card.Body>
    </Card>
    </div>
    ))}
    </div>
)}
    </div>
  )
}

export default Weapons