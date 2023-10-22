import React, { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
const baseURL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:5001" // Use localhost for development
    : "https://xroadsports.com"; // Use the production URL for deployment {AWS SERVER}

const axiosInstance = axios.create({
  baseURL,
  timeout: 5000,
});

function LoginPage() {
  const [loginMessage, setLoginMessage] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Use useNavigate for navigation
  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    try {
      const response = await axiosInstance.post("/api/users/login", {
        email,
        password,
      });

      // If authentication is successful, you can navigate to the home page
      if (response.status === 200) {
        navigate("/home"); // Use navigate to navigate
      }
    } catch (error) {
      console.log("Response Status:", error.response.status); // Log the response status
      console.log("Response Data:", error.response.data); // Log the response data
      console.log(error.response.data.message);
      console.error("Authentication Failed");
      setLoginMessage(error.response.data.message);
    }
  };

  return (
    <div className="login-container">
      <h2> City National Bank Login</h2>
      {loginMessage && <p className="login-message">{loginMessage}</p>}
      <form onSubmit={handleLogin} method="post">
        <label htmlFor="Email">Email:</label>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          id="email"
          name="email"
          required
        />
        <label htmlFor="password">Password:</label>

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          id="password"
          name="password"
          required
        />

        <button onClick={handleLogin} className="login-button" type="submit">
          Login
        </button>

        {loginMessage && <p className="login-message">{loginMessage}</p>}
      </form>
      <p>Don't have an account?</p>
      <Link to="/signup">
        <button className="signup-button">Sign Up</button>
      </Link>
    </div>
  );
}

export default LoginPage;
