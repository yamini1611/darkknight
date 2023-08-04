import React, { useContext, useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { UserContext } from '../Context/Context';
import '../styles/Login.css'; // Assuming you have custom styles for Login component

const Login = () => {
    const [email, setEmail] = useState('');
    const [code, setCode] = useState('');
    const { user, handleLogin } = useContext(UserContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        handleLogin(email, code);
        if (user.loggedIn) {
            return <Navigate to="/Homepage" />;
        }
    };

    if (user.loggedIn) {
        return <Navigate to="/Homepage" />;
    }

    return (
        
        <section className="vh-100 regmain bg-secondary d-flex align-items-center justify-content-center">
            <div className="container py-5">
                <div className="row justify-content-center">
                    <div className="col-md-6 col-lg-5">
                        <div className="card shadow">
                            <div className="card-body p-4">
                            <Link to='/Homepage' className='quick-sand text-white p-2 ' style={{ textDecoration: "none", fontSize: 23 }}><i class="fa-solid fa-backward"></i> back</Link>

                                <form onSubmit={handleSubmit}>
                                    <h5 className="mb-4 text-center text-dark">Sign into your account</h5>
                                    <div className="mb-3">
                                        <label htmlFor="email" className="form-label text-dark fs-7">
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            className="form-control"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="code" className="form-label text-dark fs-7">
                                            Code
                                        </label>
                                        <input
                                            type="password"
                                            id="code"
                                            className="form-control"
                                            value={code}
                                            onChange={(e) => setCode(e.target.value)}
                                        />
                                    </div>
                                    <div className="d-grid gap-2">
                                        <button className="btn btn-danger" type="submit">
                                            Login
                                        </button>
                                    </div>
                                </form>
                                <p className="mt-3 mb-0 text-center text-dark fs-7">
                                    Don't have an account? <Link to="/Register">Register here</Link>
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
