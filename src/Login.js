import React, { useState } from 'react'
import './Login.css'
import { Link, useHistory } from 'react-router-dom'
import { auth } from './firebase';

const Login = () => {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = (e) => {
        e.preventDefault();
        auth
        .signInWithEmailAndPassword(email, password)
        .then((auth) => {
            history.push('/');
        })
        .catch(error => alert(error.message));

    };

    const register = e => {
        e.preventDefault();

        auth
        .createUserWithEmailAndPassword(email, password)
        .then((auth) => {
            console.log(auth);
            if (auth) {
                history.push('/');
            }
        })
        .catch(error => alert(error.message));
    };
 
    return (
        <div className='login'>
            <Link to='/'>
            <img className='login-logo' src='https://i.pinimg.com/originals/31/d1/3c/31d13c99ee841869ca44ef54ba956272.png' alt='' /></Link>

            <div className='login-container'>
                <h1>Sign In</h1>
                <form>
                    <h5>Email</h5>
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)} />
                    <h5>Password</h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)} />

                    <button type='submit' className='login-signInButton' onClick={signIn}>Sign In</button>
                </form>

                <p>
                    By signing in you agree to the conditions of Use and Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice
                </p>

                <button className='login-registerButton' onClick={register}>Create your Account</button>
            </div>   
        </div>
    )
}

export default Login
