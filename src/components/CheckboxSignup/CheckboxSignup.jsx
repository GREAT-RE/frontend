import React from "react";
import './CheckboxSignup.css'

const CheckboxSignup = () => {
  return (
    <div className="checkbox-signup-container">


      <form>
        <label className="checkbox-label" >
          <input className="terms" type="checkbox" name="terms" value="true" />
          By creating an account you are agreeing to accept the 
          <br />
          <a href="#">Terms and conditions</a> and <a href="#">Privacy policy</a>
        </label>

        <label className="checkbox-label">
          <input  classname=""type="checkbox" name="newsletter" value="true" />

  <form>
  <label className="checkbox-label">
    <input className="terms" type="checkbox" name="terms" value="true" />
    <span className="checkbox-text">
      By creating an account you are agreeing to accept the<br />
      <a href="https://example.com" className="terms-link">Terms and Conditions</a><span className="and"> and </span>
      <a href="https://example.com" className="privacy-link">Privacy Policy</a><br />
    </span>
  </label>
        <label className="checkbox-label2">
          <input  className="recEmails"type="checkbox" name="newsletter" value="true" />
          <span className="checkbox-text2">

          I'd like to receive e-mails and promotions from Home in LX.
          </span>
        </label>
        
        <p>Already have an account? <a href="https://example.com" className="signASK">Sign up</a></p>

      </form>

    </div>
  );
};

export default CheckboxSignup;
