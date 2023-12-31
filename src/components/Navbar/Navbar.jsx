import React, { useContext, useState, useEffect } from 'react';
import { Link, Navigate, useLocation } from 'react-router-dom';
import { UserContext } from '../Context/Context';
import '../styles/Navbar.css';
import logo from '../assests/batman-logo.png';

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

  const location = useLocation();
  const isGooglePage = location.pathname === '/';

  return (
    <>
      {isGooglePage ? null : (
        <div style={{ backgroundColor: 'black' }}>
          <div className="offcanvas offcanvas-start" id="demo" style={{ width: 180 }}>
            <div className="offcanvas-header">
              <button
                type="button"
                className="btn-close btn-close-white"
                style={{ fontSize: '10px' }}
                data-bs-dismiss="offcanvas"
              ></button>
            </div>
            <div className="offcanvas-body">
              {user.loggedIn && !isAdmin ? (
                <>
                  <div className='row'>
                    <div className='col-0'>
                      <Link
                        to="/Homepage"
                        style={{ textDecoration: "none", color: "white", fontSize: 25 }}
                      >
                        UserPage  <i className="fa-solid fa-user-tie"></i>
                      </Link>
                    </div>
                    <div className='col-0' style={{ paddingTop: 5 }}>
                      <h1 style={{ textDecoration: "none", color: "white", fontSize: 25 }} onClick={handleLogoutClick}>
                        Logout<i className="fa-solid fa-right-from-bracket"></i>
                      </h1>
                    </div>
                    <div className='col' style={{ paddingTop: 8 }}>
                      <Link to="/check-status" style={{ textDecoration: "none" }}>
                        <h3 style={{ textDecoration: "none", color: "white", fontSize: 25 }} >Check Status</h3>
                      </Link>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  {isAdmin && (
                    <>
                      <div className='row'>
                        <div className='col-0'>
                          <Link
                            to="/adminpage"
                            style={{ textDecoration: "none", color: "white", fontSize: 25 }}
                          >
                            Admin <i className="fa-solid fa-user-secret"></i>
                          </Link>
                        </div>
                        <div className='col' style={{ paddingTop: 5 }}>
                          <Link
                            to="/Homepage"
                            style={{ textDecoration: "none", color: "white", fontSize: 25 }}
                            onClick={handleLogoutClick}
                          >
                            Logout  <i className="fa-solid fa-right-from-bracket"></i>
                          </Link>
                        </div>
                        <div className='col-0' style={{ paddingTop: 5 }}>
                          <Link
                            to="/Feedback"
                            style={{ textDecoration: "none", color: "white", fontSize: 25 }}

                          >
                            Feedback <i class="fa-solid fa-comment-dots"></i>
                          </Link>
                        </div>
                      </div>
                    </>
                  )}
                </>
              )}
            </div>
          </div>
          <button
            className="btn"
            data-bs-toggle="offcanvas"
            data-bs-target="#demo"
            style={{ background: 'none', marginBottom: 15 }}
          >
            <div className='d-flex'>
              <img src={logo} alt='' height={80} width={80} ></img>
              <h2 id='logo' style={{ marginLeft: 500, marginTop: 20 }} >darkknight</h2>
            {/* <i class="fa-solid fa-bars text-white"></i> */}
            <img src={logo} alt='' height={80} width={80} ></img>
            <h2 id='logo' style={{marginLeft:500, marginTop:20}} >darkknight</h2>
           
            </div>
          </button>
        </div>
      )}
    </>
  );
}

export default Navbar;
