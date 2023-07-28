import React from 'react';
import axios from 'axios';
import '../styles/Inventory.css';
import { useState, useEffect } from 'react';

const Inventory = () => {
  const [pistol, setPistol] = useState([]);
  const [shotgun , setShotgun] = useState([]);
  const [SMG , setSMG] = useState([]);
  const [Assaultrifle , setAssaultrifle] = useState([]);
  const [Rifle , setRifle] = useState([]);
  const [special , setSpecial] =useState([]);
  useEffect(() => {
    Fetchdetails();
  }, []);

  const Fetchdetails = async () => {
    try {
      const response = await axios.get('http://localhost:4000/Pistol');
      const pistol = response.data;
      const response1 = await axios.get('http://localhost:4000/ShotGun')
      const ShotGun = response1.data;
      const response2 = await axios.get('http://localhost:4000/SMG');
      const SMG = response2.data;
      const response3 = await axios.get('http://localhost:4000/Assault-Rifle');
      const AssaultRiffle = response3.data;
      const response4 = await axios.get('http://localhost:4000/Rifle');
      const Rifle = response4.data;
      const response5 = await axios.get('http://localhost:4000/Special');
      const Specialweapons= response5.data;
      
      setPistol(pistol);
      setShotgun(ShotGun);
      setSMG(SMG);
      setAssaultrifle(AssaultRiffle);
      setRifle(Rifle);
      setSpecial(Specialweapons);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div id='inventorybg'>
     
       <h3 id='weapons'>Pistols</h3>
      <div className="card-container" id='card-container'>
        {pistol.map((pistols) => (
          <div key={pistols.id} className="card" id='card'>
            <img src={pistols.image} alt="" height={200} width={200} id='pistolimg' />
          </div>
        ))}
        
      </div>
      <h3 id='weapons'>ShotGun</h3>
      <div className="card-container" id='card-container'>
        {shotgun.map((shotgun) => (
          <div key={shotgun.id} className="card" id='card'>
            <img src={shotgun.image} alt="" height={200} width={200} id='pistolimg' />
          </div>
        ))}
        
      </div>
      <h3 id='weapons'>SMG</h3>
      <div className="card-container" id='card-container'>
        {SMG.map((SMG) => (
          <div key={SMG.id} className="card" id='card'>
            <img src={SMG.image} alt="" height={200} width={200} id='pistolimg' />
          </div>
        ))}
        
      </div>
      <h3 id='weapons'>Assault Rifle</h3>
      <div className="card-container" id='card-container'>
        {Assaultrifle.map((Assault) => (
          <div key={Assault.id} className="card" id='card'>
            <img src={Assault.image} alt="" height={200} width={200} id='pistolimg' />
          </div>
        ))}
        
      </div>
      <h3 id='weapons'>Rifle</h3>
      <div className="card-container" id='card-container'>
        {Rifle.map((Rifle) => (
          <div key={Rifle.id} className="card" id='card'>
            <img src={Rifle.image} alt="" height={200} width={200} id='pistolimg' />
          </div>
        ))}
        
      </div>
      <h3 id='weapons'>Special Weapons</h3>
      <div className="card-container" id='card-container'>
        {special.map((specials) => (
          <div key={specials.id} className="card" id='card'>
            <img src={specials.Image} alt="" height={200} width={200} id='pistolimg' />
          </div>
        ))}
        
      </div>
    </div>
  );
};

export default Inventory;
