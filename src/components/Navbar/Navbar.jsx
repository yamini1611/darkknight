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
                const response = await fetch('http://localhost:3500/Register');
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
                            <button><Link to="/">UserPage</Link></button>
                            <button className="nav-link mt-1" onClick={handleLogoutClick}>Logout</button>
                            {userData.length > 0 && (
                                <li className="nav-item" style={{ marginLeft: 600 }}>
                                    <h3 style={{ fontSize: 22.1, fontFamily: "Product Sans,Arial,Helvetica,sans-serif", color: "grey", marginTop: 11 }}><i className="fa-solid fa-user fa-flip" ></i>{userData.find(u => u.email === user.code)?.name}</h3>
                                </li>
                            )}
                        </>
                    )
                        : (
                            <>
                                {isAdmin && (
                                    <>
                                        <button><Link to="/adminpage">AdminPage</Link></button>
                                        <button className="nav-link mt-1" onClick={handleLogoutClick}>Logout</button>

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

