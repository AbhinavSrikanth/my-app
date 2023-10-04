import React, { useState } from 'react';
import './accountcreation.css';

function AccountCreation() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  async function handleFormSubmit(event) {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert('Passwords do not match. Please try again');
      return;
    }

    try {
      const response = await fetch('http://127.0.0.1:5000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: name,
          email: email,
          password: password,
          confirm_password: confirmPassword
        })
      });

      if (response.ok) {
        const data = await response.json();
        alert(data.message);
      } else {
        const errorData = await response.json();
        alert('Error: ' + errorData.error);
      }
    } catch (error) {
      console.log('Error:', error);
      alert('An error occurred. Please try again later.');
    }
  }

  return (
    <div className="account-creation-container">
      <div className="image-container">
        <img id="img" src="/images/img.png" alt="" />
      </div>
      <div className="form-container">
        <form
          onSubmit={handleFormSubmit}
          className="accountcreation"
          method="POST"
          action="/register"
          autoComplete="off"
        >
          <h1>Hi, create an account for free!</h1>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="password"
            name="confirm_password"
            id="confirm_password"
            placeholder="Confirm Password"
            required
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <button className="createaccount" type="submit">
            Create Account
          </button>
          <div className="or">Or</div>
          <button id="loginButton" className="login" type="button" onClick={() => { /* Handle Login Button Click */ }}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default AccountCreation;
