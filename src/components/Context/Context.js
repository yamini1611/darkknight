import React, { createContext, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../styles/Context.css';
import { Navigate } from 'react-router-dom';
export const UserContext = createContext();

const UserProvider = ({ children }) => {
    const [user, setUser] = useState({
        loggedIn: false,
        email: '',
        code: '',
    });

    const handleLogin = async (email, code) => {
        try {
            const response = await fetch('http://localhost:4000/Register');
            const data = await response.json();
            const registeredUser = data.find(user => user.email === email && user.code === code);
            if (registeredUser) {
                toast.success('Login successful!', {
                    position: 'top-right',
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    className: 'error-success',
                });
                setUser({
                    loggedIn: true,
                    email,
                    code,

                });
                <Navigate to="/Homepage" />
            } else {
                toast.error('Login failed', {
                    position: 'top-right',
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    className: 'error-toast',
                });
                setUser({
                    loggedIn: false,
                    email: '',
                    code: '',
                });
            }
        } catch (error) {
            console.error('Error fetching user data:', error);
            setUser({
                loggedIn: false,
                email: '',
                code: '',
            });
        }
    };
    const handleLogout = () => {
        toast.success('Logged out successful!', {
            position: 'top-center',
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            className: 'error-success',
        });
        setUser({
            loggedIn: false,
            email: '',
            code: '',
        });
        <Navigate to="/Homepage" />
    };

    return (
        <UserContext.Provider value={{ user, handleLogin, handleLogout }}>
            {children}
            <ToastContainer />
        </UserContext.Provider>
    );
};

export default UserProvider;