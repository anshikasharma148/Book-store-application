import React from 'react';
import "./Login.style.css";
import aboutimg from "../../assets/aboutimg.jpg";
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';



const Login = () => {
  return (

    <React.Fragment>
    <Navbar />
    <div className="Login-Container">
        <div className='Login-Image-Container'>
            <img src={aboutimg} alt='Authentication-Background'/>
        </div>
        <div className='Login-Content-Container'>
            <div>
                <h2>Login</h2>
                <p>Login With Email and Password</p>

                <form  className='Content-Wrapper'>

                    
                    <div className='login-input-form-container'>
                        <label className='login-input'>Email :</label>
                        <input type='Email' placeholder='Enter Your Email' className='login-input'/>
                    </div>

                    
                    <div className='login-input-form-container'>

                        <label className='login-input'>Enter Password :</label>
                        <input type='Password' className='login-input'    placeholder='Enter your Password'/>
                    </div>
                    <div>
                        <input type='submit' className='login-button' value="Login"/>
                    </div>
                    <p>Are you a New User? </p><Link to="/Register">Register</Link>
                </form>
            </div>
        </div>
        
    </div>

    </React.Fragment>
  )
}

export default Login;