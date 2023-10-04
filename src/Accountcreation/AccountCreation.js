import React from 'react';
import './accountcreation.css';

function AccountCreation() {
  return (
      <div className="image-container">
        <img id="img" src="/images/img.png" alt="" />


      <div className="dd">
        <div className="container">
          <form
            ireactd="accountcreation"
            className="accountcreation" 
            method="POST"
            action="/register"
            autoComplete="off"
          >
            <h1>Hi, create an account for free!</h1>
            <input type="text" name="name" id="name" placeholder="Name" required />
            <input type="email" name="email" id="email" placeholder="Email" required />
            <input type="password" name="password" id="password" placeholder="Password" required />
            <input
              type="password"
              name="confirm_password"
              id="confirm_password"
              placeholder="Confirm Password"
              required
            />
            <button className="createaccount" type="submit">
            Create Account
            </button>
            <div className="or">Or</div>
            <button id="loginButton" className="login" type="button">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AccountCreation;
