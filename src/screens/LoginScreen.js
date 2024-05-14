import React, { useState } from 'react';
import './LoginScreen.css';
import logo from '../components/lg.png';

function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent page refresh

    // Implement login logic here (e.g., API call, validation)
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className="login-wrapper">
      <div className="login-form-container">
        <img src={logo} alt="ShopGuarded" className="login-logo" />
        <h2 className="login-title"> Login User</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="login-input"
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="login-input"
          required
        />

        <button type="submit" className="login-button" onClick={handleSubmit}>
          Login
        </button>

        <a href="#" className="signup-link">
          Don't have an account? Sign up
        </a>
      </div>
    </div>
  );
}

export default LoginScreen;
