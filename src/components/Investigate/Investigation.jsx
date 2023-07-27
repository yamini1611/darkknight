import React, { useState } from 'react'
import { DkInvestigateCard } from '../Card/Card';
import '../../components/styles/Investigation.css';
import axios from 'axios';


const Investigation = () => {
const [CrimeDetails,setCrimeDetails] = useState("")
    const fetchData=()=>{
        axios.get("http://localhost:4000/Crimes")
        .then((res)=>{
setCrimeDetails(res.data)
        })
    }
  return (
    <div className='DarkKnight-background vh-100'>

{CrimeDetails.length>0&&(
    <div>
        {CrimeDetails.map((detail)=>(
        <DkInvestigateCard ></DkInvestigateCard>
        ))}
        </div>
        )}
        {CrimeDetails.length===0&&(
            <div>
                <h1 className='display-4 text-center text-white'>There are no crime reports yet!</h1></div>
        )}
    </div>
  )
}

export default Investigation