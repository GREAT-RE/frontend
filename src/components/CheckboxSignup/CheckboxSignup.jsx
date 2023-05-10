import React from "react";
import './CheckboxSignup.css'

const CheckboxSignup = () => {
  return (
    <div className="checkbox-signup-container">

  <form>
  <label className="checkbox-label">
    <input className="terms" type="checkbox" name="terms" value="true" />
    <span className="checkbox-text">
      By creating an account you are agreeing to accept the<br />
      <a href="#" className="terms-link">Terms and Conditions</a> and<br />
      <a href="#" className="privacy-link">Privacy Policy</a>
    </span>
  </label>
        <label className="checkbox-label">
          <input  className=""type="checkbox" name="newsletter" value="true" />
          I'd like to receive e-mails and promotions from Home in LX.
        </label>
        
        <p>Already have an account? <a href="#">Sign up</a></p>

      </form>

    </div>
  );
};

export default CheckboxSignup;
