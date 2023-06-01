import React, { useState } from "react";

export function Sign_in (props){
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');


    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(email);
    }
    return (
        <div className="auth-form-container">
                <h2>SignIn</h2>
            <form className="signin-form" onSubmit={handleSubmit}>
                <label htmlFor="name"> Full name </label>
                    <input value={name} onChange={(e) => setName (e.target.value)} name="name" id="name" placeholder="full name"/>
                    <label htmlFor="email">email </label>
                    <input value={email} onChange= {(e) => setEmail (e.target.value)} type="email" name="email"/>
                    <label htmlFor="password">password </label>
                    <input value={pass} onChange={(e) => setPass (e.target.value)} type="password" placeholder="***********" id="password" name="password"/>
                    <button type="submit"> Sign In</button>

            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('login')}> Alredy have an account? Login in here. </button>
        </div>
    )
}
