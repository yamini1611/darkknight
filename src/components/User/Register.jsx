import React, { useState, useEffect } from 'react';
import '../styles/Register.css';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { ToastContainer  , toast} from 'react-toastify';
const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const naviagte = useNavigate();
  const [errors, setErrors] = useState({});
  const [registeredUsers, setRegisteredUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/Register")
      .then((response) => response.json())
      .then((data) => setRegisteredUsers(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isValidName = (name) => {
    const nameRegex = /^[A-Za-z]{1,30}$/;
    return nameRegex.test(name);
  };

  const isValidCode = (code) => {
    const codeRegex = /^\d{6}$/;
    return codeRegex.test(code);
  };

  const handleRegister = (e) => {
    e.preventDefault();

    setErrors({});
    const validationErrors = {};

    if (name.trim() === "") {
      validationErrors.name = "Required";
    } else if (!isValidName(name)) {
      validationErrors.name = "Set a valid name";
    }
    if (email.trim() === "") {
      validationErrors.email = "Required Field";
    } else if (!isValidEmail(email)) {
      validationErrors.email = "Enter a valid email";
    }
    if (code.trim() === "") {
      validationErrors.code = "Required Field";
    } else if (!isValidCode(code)) {
      validationErrors.code = "Vigilance Code can have 6 digits";
    }

    if (Object.keys(validationErrors).length === 0) {
      const emailExists = registeredUsers.some((user) => user.email === email);
      const codeExists = registeredUsers.some((user) => user.code === code);

      if (emailExists) {
       toast.error("Email already exists!");
      } else if (codeExists) {
        toast.error("Please choose another code");
      } else {

        const newUser = {
          id: Date.now(),
          name,
          email,
          code,
        };

        fetch("http://localhost:4000/Register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newUser),
        })
          .then((response) => {
            if (response.ok) {
              setName("");
              setEmail("");
              setCode("");
              toast.success("Registration Successful");
              naviagte('/login')
            }
          })
          .catch((error) => {
            console.error("Error during registration:", error);
          });
      }
    } else {
      setErrors(validationErrors);
    }
  };


  return (
    <div className='register-container'>
      <div className='form-container'>
        <h2>Register</h2>
        <form onSubmit={handleRegister}>
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              placeholder='Enter your Name'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {errors.name && <span className="error">{errors.name}</span>}
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder='Email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && <span className="error">{errors.email}</span>}
          </div>
          <div>
            <label htmlFor="code">Vigilance Code</label>
            <input
              type="text"
              id="code"
              placeholder='Create your six digit Vigilance code'
              value={code}
              onChange={(e) => setCode(e.target.value)}
            />
            {errors.code && <span className="error">{errors.code}</span>}
          </div>
          <button type="submit">Register</button>
          <div className="login-link">
            Already have an account? <Link to='/Login'>Login</Link>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Register;
