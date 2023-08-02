import React, { useContext, useState, useEffect } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { UserContext } from '../Context/Context';
import '../styles/Navbar.css';
const Navbar = () => {
    const { user, handleLogout } = useContext(UserContext);
    const isAdmin = user.email === 'admin@gmail.com' && user.code === '123098';
    const [userData, setUserData] = useState([]);
    const handleLogoutClick = () => {
        handleLogout();
        return <Navigate to="/Login" />;
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:4000/Register');
                const data = await response.json();
                setUserData(data);
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        fetchData();
    }, []);


    return (
        <div style={{ backgroundColor: 'black' }}>
            <div className="offcanvas offcanvas-start" id="demo"  >
                <div className="offcanvas-header">
                    <h1 className="offcanvas-title text-white" style={{ fontSize: '25px' }}>DarkKnight </h1>
                    <button type="button" className="btn-close btn-close-white" style={{ fontSize: '10px' }} data-bs-dismiss="offcanvas"></button>
                </div>
                <div className="offcanvas-body">
                    {user.loggedIn && !isAdmin ? (
                        <>
                            <div className='row'>
                                <div className='col-0'>
                                    <button className='btn btn-outline-success'><Link to="/"  style={{ textDecoration: "none", color: "white" }}>UserPage</Link></button>
                                </div>
                                <div className='col-0' style={{ paddingTop: 5 }}>
                                    <button className=" btn btn-outline-danger" onClick={handleLogoutClick}>Logout</button>
                                   
                                </div>
                                <div className='col' style={{paddingTop:8}}>
                                <Link to="/check-status">
                <button  className='btn btn-outline-info'>Check Status</button>
              </Link>
                                </div>
                            </div>


                        </>
                    )
                        : (
                            <>
                                {isAdmin && (
                                    <>
                                        <div className='row'>
                                            <div className='col-0'>
                                                <button className='btn btn-outline-success'><Link to="/adminpage" style={{ textDecoration: "none", color: "white" }}>AdminPage</Link></button>

                                            </div>
                                            <div className='col' style={{ paddingTop: 5 }}>
                                                <button className=" btn btn-outline-danger " onClick={handleLogoutClick}>Logout</button>

                                            </div>
                                        </div>

                                    </>
                                )}
                            </>
                        )}

                </div>
            </div>
            <button className="btn" data-bs-toggle="offcanvas" data-bs-target="#demo" style={{ background: 'none' }}>
                {/* <i className="fa-solid fa-bars"></i> */}
                <i className='fas fa-ghost' style={{ fontSize: '23px', color: 'red' }}></i>
            </button>
        </div>
    )
}

export default Navbar

