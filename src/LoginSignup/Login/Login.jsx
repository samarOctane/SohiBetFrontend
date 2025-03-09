import React, { useState, useEffect } from "react";
import "./Login.css";
import UsersAccount from "../../Games/Aviator/UsersAccounts/UsersAccount";

const Login = () => {
  const [message, setMessage] = useState("");
  const [money, setMoney] = useState(localStorage.getItem("money") || "");
  const [username, setUsername] = useState(localStorage.getItem("username") || "");

  const [user, setUser] = useState({ email: "", password: "" });

  useEffect(() => {
    // Check if user is already logged in (token exists in localStorage)
    const token = localStorage.getItem("token");
    if (token) {
      setMessage("Login successful!");
    }
  }, []);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("username", data.username);
        localStorage.setItem("money", data.money);

        setUsername(data.username);
        setMoney(data.money);
        setMessage("Login successful!");
      } else {
        alert(data.message);
      }
    } catch (err) {
      setMessage("An error occurred. Please try again.");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    localStorage.removeItem("money");

    setUsername("");
    setMoney("");
    setMessage("");
  };

  return (
    <div className="login-container">
      {message ? (
        <>
          <UsersAccount username={username} money={money} />
          <button onClick={handleLogout} className="logout-button">Logout</button>
        </>
      ) : (
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
            <button type="submit" className="login-button">
              Login
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Login;
