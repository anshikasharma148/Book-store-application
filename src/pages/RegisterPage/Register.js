import React from 'react';
import "./Register.style.css";
import contactimg from "../../assets/contactimg.jpg";
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';

const Register = () => {
  return (
    <React.Fragment>
    <Navbar />
    <div className="Register-Container">
        <div className='Register-Image-Container'>
            <img src={contactimg} alt='Authentication-Background'/>
        </div>
        <div className='Register-Content-Container'>
            <div>
                <h2>Register New User</h2>
                <p>Register With Email and Password</p>

                <form  className='Content-Wrapper'>

                    <div className='Register-input-form-container'>
                            <label className='Register-input'>Name :</label>
                            <input type='text' placeholder='Enter Your Name' className='Register-input'/>
                    </div>
                    
                    <div className='Register-input-form-container'>
                        <label className='Register-input'>Email :</label>
                        <input type='Email' placeholder='Enter Your Email' className='Register-input'/>
                    </div>

                    
                    <div className='Register-input-form-container'>

                        <label className='Register-input'>Enter Password :</label>
                        <input type='Password' className='Register-input'    placeholder='Enter your Password'/>
                    </div>
                    <div>
                        <input type='submit' className='Register-button' value="Register"/>
                    </div>

                    <p>Already Existing User?</p><Link to="/Login">Login</Link>

                    

                </form>
            </div>
        </div>
        
    </div>
    </React.Fragment>
  )
}

export default Register;