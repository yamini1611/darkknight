import React, { useEffect, useState } from 'react';
import { useCoins } from '../Context/darkcoins'; // Import the useCoins function
import DKCard, { DkInvestigateCard } from '../Card/Card';
import '../../components/styles/Investigation.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Investigation = () => {
    const [CrimeDetails, setCrimeDetails] = useState([]);
    const { coins } = useCoins(); // Use the coins value from the context

    const fetchData = () => {
        axios.get("http://localhost:4000/CrimeDetails?status_like=false")
            .then((res) => {
                setCrimeDetails(res.data)
            })
            .catch((error) => {
                console.error('Error fetching crime details:', error);
            });
    }

    useEffect(() => {
        fetchData();
    }, [])

    return (
        <div className='DarkKnight-background min-vh-100'>
            <Link to='/adminpage' className='quick-sand text-white p-2 ' style={{ textDecoration: "none", fontSize: 23 }}>
                <i className="fa-solid fa-backward"></i> back
            </Link>

            <h1 className='display-3 text-white container-fluid'>Crime Reports</h1>
            
            <div>
                <div>
                    <h4 className='quick-sand p-2' id='point'>
                        BatCoins: {coins}
                    </h4>
                </div>
            </div>

            {CrimeDetails.length > 0 && (
                <div>
                    {CrimeDetails.map((detail) => (
                        <div key={detail.id}>
                            <DkInvestigateCard
                                id={detail.id}
                                files={detail.evidence}
                                code={detail.code}
                                time={detail.dateTime}
                                desc={detail.description}
                                contact={detail.contact}
                                crimeType={detail.crimeType}
                                confidentiality={detail.confidentiality}
                                emergency={detail.emergency}
                                description={detail.description}
                                location={detail.location}
                            />
                        </div>
                    ))}
                </div>
            )}
            {CrimeDetails.length === 0 && (
                <div>
                    <h1 className='display-4 text-center text-white'>
                        There are no crime reports yet!
                    </h1>
                </div>
            )}
        </div>
    )
}

export default Investigation;
