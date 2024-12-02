import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function LogIn({}){
    const [state,setState]= useState({
        email: '',
        password: '',
        error: false
    })
    const handleChange=(e)=>{
    setState(prev=>({...prev,[e.target.name]:e.target.value}))
    }

    const handleSubmit = ()=>{
        if(!state.email.length || !state.password.length){
            setState(prev=>({...prev,error: true}))
        }else{
            setState(prev=>({...prev,error: false}))

        }
    }
return (
<>
<div className='card'>
<div>
<img src="./assets/logo.svg" alt="" />   
</div>

<div className='card-account'>
<h2>Login</h2>
<input onChange={handleChange} placeholder='Email address' type="text" id="e-address" name="email" className='input-email' />
<div className='password'>
<input onChange={handleChange} placeholder='Password' type="password" id="pswd" name="password"/>
{state.error &&<h4>Can't be empty</h4>}
</div>
<button onClick={handleSubmit}>Login to your account</button>
<div className='account'>
<h5>Don't have an account?</h5>
<Link to='/sign-up'>Sign up</Link>
</div>
</div>
</div>
</>  
)    
}