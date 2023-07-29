import React, { useState, useEffect } from 'react';
import '../styles/Register.css';
import { Link } from 'react-router-dom';

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");

  const [errors, setErrors] = useState({});
  const [registeredUsers, setRegisteredUsers] = useState([]);

  useEffect(() => {
    // Fetch the registered users data from the API
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
      // Check if the email already exists
      const emailExists = registeredUsers.some((user) => user.email === email);
      const codeExists = registeredUsers.some((user) => user.code === code);

      if (emailExists) {
        alert("Email already exists!");
      }
      else if (codeExists) {
        alert("Plese choose Another code");
      }
      else if (codeExists && emailExists) {
        alert("Credentials Not Valid!Please try Again");
      }

      else {
        // Proceed with registration if there are no errors

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
              console.log("Registration Successful");
            }
          })
          .catch((error) => {
            console.error("Error during registration:", error);
          });
      }
    } else {
      // If there are validation errors, set the errors state
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
              placeholder='create your six digit Vigilance code '
              value={code}
              onChange={(e) => setCode(e.target.value)}
            />
            {errors.code && <span className="error">{errors.code}</span>}
          </div>
          <button className='mt-5' type="submit" id="btnreg">Register</button>
          <button className='mt-5' type="submit" id="btnreg">Already Have an account?<Link to='/Login'>Login</Link></button>
        </form>
      </div>
    </div>
  );
};

export default Register;
