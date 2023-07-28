import React, { useContext, useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { UserContext } from '../Context/Context';
import '../styles/Login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [code, setcode] = useState('');
    const { user, handleLogin } = useContext(UserContext);
    const handleSubmit = (e) => {
        e.preventDefault();
        handleLogin(email, code);
        if (user.loggedIn) {
            return <>
                <Navigate to="/" />;
            </>
        }
    };

    if (user.loggedIn) {
        return <>
            <Navigate to="/" />;
        </>
    }

    return (
        <section className="vh-110" id="close" style={{ fontSize: 22.1, fontFamily: "Product Sans,Arial,Helvetica,sans-serif" }}>
            <div className="container py-5 h-100">
                <div className="col col-xl-10">
                    <div className="row g-0">
                        <div className="col-md-6 col-lg-7 d-flex align-items-center">
                            <div className="card-body p-4 p-lg-5 text-black">
                                <form onSubmit={handleSubmit}>
                                    <h5 className="fw-normal mb-3 pb-3" style={{ letterSpacing: '1px', fontSize: 30 }}>
                                        Sign into your account
                                    </h5>
                                    <div className="form-outline mb-4">
                                        <label className="form-label" htmlFor="form2Example17">
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            id="form2Example17"
                                            className="form-control form-control-lg"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                    </div>
                                    <div className="form-outline mb-4">
                                        <label className="form-label" htmlFor="form2Example27">
                                            code
                                        </label>
                                        <input
                                            type="password"
                                            id="form2Example27"
                                            className="form-control form-control-lg"
                                            value={code}
                                            onChange={(e) => setcode(e.target.value)}
                                        />
                                    </div>

                                    <div className="pt-1 mb-4">
                                        <button className="btn btn-dark btn-lg btn-block" type="submit" >
                                            Login
                                        </button>
                                    </div>
                                </form>
                                <p className="mb-5 pb-lg-2" style={{ color: '#393f81' }}>
                                    Don't have an account? <Link to="/Register" style={{ color: '#393f81' }}>Register here</Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;