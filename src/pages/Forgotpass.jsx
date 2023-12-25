import React, { useState } from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import '../styles/forgot.css';

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState('');

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic for password recovery (e.g., send a reset email)
    console.log('Password recovery initiated for email:', email);
  };

  return (
    <>
      <Header />
      <div className="forgot-password-page">
        <h2>Forgot Password</h2>
        <p>Enter your email address to recover your password.</p>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">Recover Password</button>
        </form>
      </div>
      <Footer/>
    </>
  );
};

export default ForgotPasswordPage;
