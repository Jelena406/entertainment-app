import React, {useState} from 'react';
import {Link} from 'react-router-dom';

export default function SignUp() {
  const [state, setState] = useState({
    email: '',
    password: '',
    repeat: '',
    error: false,
  });
  const handleChange = (e) => {
    setState((prev) => ({...prev, [e.target.name]: e.target.value}));
  };

  const handleSubmit = () => {
    if (!state.email.length || !state.password.length || !state.repeat.length) {
      setState((prev) => ({...prev, error: true}));
    } else {
      setState((prev) => ({...prev, error: false}));
    }
  };

  return (
    <div className='auth'>
      <div className="card">
        <div>
          <img src="./assets/logo.svg" alt="" />
        </div>

        <div className="card-account">
          <h2>Sign Up</h2>
          <input onChange={handleChange} placeholder="Email address" type="text" id="e-address" name="e-address" className="input-email" />
          <div className="password">
            <input onChange={handleChange} placeholder="Password" type="password" id="pswd" name="pswd" />
            {state.error && <h4>Can't be empty</h4>}
          </div>
          <input placeholder="Repeat password" type="password" id="repeat" name="repeat" className="input-repeat" />
          <button onClick={handleSubmit}>Create an account</button>
          <div className="account">
            <h5>Already have an account?</h5>
            <Link to="sign-in">Login</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
