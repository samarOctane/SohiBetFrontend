import React, { useState } from "react";
import "./Login.css";
import UsersAccount from "../../Games/Aviator/UsersAccounts/UsersAccount";

const Login = () => {
  const [message, setMessage] = useState("");

  const [user, setUser] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://sohibetbackend.onrender.com/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      const data = await response.json();
      if (response.ok) {
        localStorage.setItem("token", data.token);
        setMessage("Login successful!")
        // alert("Login successful!");
      } else {
        alert(data.message);
      }
    } catch (err) {
      setMessage("An error occurred. Please try again.")
      // alert("An error occurred. Please try again.");
    }
  };

  return (
    <div className="login-container">

      {message ? <UsersAccount/> :
        <div className="login-box">
          <h2 className="login-title">Login</h2>
          <form onSubmit={handleSubmit} className="login-form">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={user.email}
              onChange={handleChange}
              required
              className="login-input"
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={user.password}
              onChange={handleChange}
              required
              className="login-input"
            />
            <button
              type="submit"
              className="login-button"
            >
              Login
            </button>
          </form>

        </div>
      }
    </div>
  );
};

export default Login;
