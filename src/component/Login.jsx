import React, { useState } from "react";
export function Login (props) {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(email);
    }
    return(
        <div className="auth-form-container">
            <h2>Login</h2>
        <form onSubmit={handleSubmit} className="login-form"> 
            <label htmlFor="email">email </label>
            <input value={email} onChange= {(e) => setEmail(e.target.value)}type="email" placeholder="Enter your email" id="email" name="email"/>
            <label htmlFor="password">password </label>
            <input value={pass} onChange = {(e) => setPass(e.target.value)} type="password" placeholder="***********" id="password" name="password"/>
            <button type="submit">Log In </button>

        </form>
        <button className="link-btn" onClick={() => props.onFormSwitch('Sign_in')}> Don't have an account? Sign in here. </button>
        </div>
    )
}
