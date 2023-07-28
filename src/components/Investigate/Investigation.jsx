import React, { useEffect, useState } from 'react'
import DKCard, { DkInvestigateCard } from '../Card/Card';
import '../../components/styles/Investigation.css';
import axios from 'axios';


const Investigation = () => {
const [CrimeDetails,setCrimeDetails] = useState("")
    const fetchData=()=>{
        axios.get("http://localhost:4000/CrimeDetails")
        .then((res)=>{
setCrimeDetails(res.data)
        })
    }

    useEffect(()=>{
fetchData();
console.log(CrimeDetails)
    },[])
  return (
    <div className='DarkKnight-background vh-100'>

{CrimeDetails.length>0&&(
    <div>
        {CrimeDetails.map((detail)=>(
            <>
        <DkInvestigateCard code={detail.code} time={detail.time} desc={detail.description} contact={detail.contact} type={detail.Type} confidentiality={detail.confidentiality} emergency={detail.emergency} description={detail.description} location={detail.location} files={detail.files} ></DkInvestigateCard>
        </>
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