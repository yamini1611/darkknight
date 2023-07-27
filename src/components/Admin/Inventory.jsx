import React from 'react';
import axios from 'axios';
import '../styles/Inventory.css'
import { useState ,useEffect } from 'react';
const Inventory = () => {
  const [pistol , setPistol] =useState([]);

  useEffect(() =>
  {
    Fetchdetails();
  })

  const Fetchdetails = async () => {
    try {
      const response = await axios.get('http://localhost:4000/Pistol');
      const userData = response.data;

     
      setPistol(userData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  return (
    <div>
        <h1>Inventory</h1>
       
 
        {pistol.map((pistols) => (
          
   <div key={pistols.id}  >
         <div className='col-4'>

            <div className="card " >
            <img src={pistols.image} alt='' height={200} width={200}></img>
            </div>
            </div>
 </div>
        ))}
        </div>
      
  )
}

export default Inventory