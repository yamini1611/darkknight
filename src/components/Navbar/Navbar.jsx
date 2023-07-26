import React, { useContext, useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../Context/Context';

const Navbar = () => {
    const Navigate = useNavigate();
    // const { user, handleLogout } = useContext(UserContext);
    // const [userData, setUserData] = useState([]);
    // const handleLogoutClick = () => {
    //     handleLogout();
    //     return <Navigate to="/Login" />;
    // };
    

    return (
        <div style={{ backgroundColor: 'black' }}>
            <div class="offcanvas offcanvas-start text-bg-dark" id="demo" >
                <div class="offcanvas-header">
                    <h1 class="offcanvas-title">DarkKnight </h1>
                    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas"></button>
                </div>
                <div class="offcanvas-body">
                    <Link to="" className="btn text-light">Logout</Link>
                    {/* <button class="btn btn-secondary" type="button">A Button</button> */}
                </div>
            </div>

            <button class="btn btn-danger" data-bs-toggle="offcanvas" data-bs-target="#demo" style={{ background: 'none' }}>
                <i class="fa-solid fa-bars"></i>
            </button>
        </div>
    )
}

export default Navbar