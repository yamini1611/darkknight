import React, { useState } from 'react';
import '../styles/Register.css';
//edited by harita
import { Link } from 'react-router-dom';

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");

  const [errors, setErrors] = useState({});

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isValidName = (name) => {
    const nameRegex = /^[A-Za-z]{1,30}$/;
    return nameRegex.test(name);
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

    if (Object.keys(validationErrors).length === 0) {
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
          // Handle the response
          if (response.ok) {
            // Registration successful
            // Reset the form
            setName("");
            setEmail("");
            setCode("");
            console.log("Registration Successful");
          }
        })
        .catch((error) => {
          console.error("Error during registration:", error);
        });
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className='regmain'>
      <div className=' batfont'>
        <h2>Register</h2>
        <form onSubmit={handleRegister}>
          <div>

            <input
              type="text"
              placeholder='Enter your Name'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {errors.name && <span className="error">{errors.name}</span>}
          </div>
          <div>

            <input
              type="email"
              placeholder='Email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && <span className="error">{errors.email}</span>}
          </div>
          <div>

            <input
              type="text"
              placeholder='create your six digit Vigilence code '
              value={code}
              onChange={(e) => setCode(e.target.value)}
            />
          </div>
          <button className='mt-5' type="submit" id="btnreg">Register</button>
          {/* edited by harita */}
          <div><Link to='/Login'>Login</Link></div>
        </form>
      </div>
    </div>
  );
};

export default Register;
