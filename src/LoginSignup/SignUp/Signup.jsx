import React, { useState } from "react";
import "./Signup.css";
import Login from '../Login/Login';
import { Link } from 'react-router-dom';
import UsersAccount from "../../Games/Aviator/UsersAccounts/UsersAccount";


const Signup = () => {
  const [message, setMessage] = useState("");

  const [user, setUser] = useState({ username: "", email: "", password: "" });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://sohibetbackend.onrender.com/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      const data = await response.json();
      if (response.ok) {
        // alert("Signup successful!");
        setMessage("Signup successful!")
      } else {
        alert(data.message);
      }
    } catch (err) {
      // alert("An error occurred. Please try again.");
      setMessage("An error occurred. Please try again.")
    }
  };

  return (
    <div className="signup-container">

      {message ? <UsersAccount/> :
        <div className="signup-box">
          <h2 className="signup-title">Signup</h2>
          <form onSubmit={handleSubmit} className="signup-form">
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={user.username}
              onChange={handleChange}
              required
              className="signup-input"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={user.email}
              onChange={handleChange}
              required
              className="signup-input"
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={user.password}
              onChange={handleChange}
              required
              className="signup-input"
            />
            <button
              type="submit"
              className="signup-button"
            >
              Signup
            </button>
          </form>

          <div>
            <Link to="/Login">
              <button className="logIn-button">Login</button>
            </Link>
          </div>
        </div>
      }
    </div>

  );
};

export default Signup;
