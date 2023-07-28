import React, { useContext, useState, useEffect } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { UserContext } from '../Context/Context';

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
            <div className="offcanvas offcanvas-start text-bg-dark" id="demo" >
                <div className="offcanvas-header">
                    <h1 className="offcanvas-title">DarkKnight </h1>
                    <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas"></button>
                </div>
                <div className="offcanvas-body">
                    {user.loggedIn && !isAdmin ? (
                        <>
                            <button><Link to="/">UserPage</Link></button>
                            {/* <button onClick={handleLogoutClick}>Logout</button> */}
                            <Link className="nav-link mt-1" to="/Login" onClick={handleLogoutClick}>Logout</Link>

                        </>
                    )
                        : (
                            <>
                                {!isAdmin && (
                                    <>
                                        <button><Link to="/adminpage">AdminPage</Link></button>
                                        {/* <button onClick={handleLogoutClick}>Logout</button> */}
                                        <Link className="nav-link mt-1" to="/Login" onClick={handleLogoutClick}>Logout</Link>

                                    </>
                                )}
                            </>
                        )}

                </div>
            </div>
            <button className="btn btn-danger" data-bs-toggle="offcanvas" data-bs-target="#demo" style={{ background: 'none' }}>
                <i className="fa-solid fa-bars"></i>
            </button>
        </div>
    )
}

export default Navbar