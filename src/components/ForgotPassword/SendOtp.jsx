import React from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import TextField from '@mui/material/TextField';
import './ForgotPass.css'
import { API } from '../../Api';


const SendOtp = () => {
    const [data, setData] = useState({ email: "" });
    // console.log(data);
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // const url = "https://auth-server-saravana.vercel.app/user/loginhelp";
            const api=`${API}/user/loginhelp`
             await axios.post(api, data);
            window.location = '/loginhelp/otp/:token'
        } catch (error) {
            // console.log(error);
            alert("Invalid Email")
        }
    }

    return (
        <React.Fragment>
            <div className="background">
                <div className="shape"></div>
                <div className="shape"></div>
            </div>
            <form onSubmit={handleSubmit}>
                <h3>Forgot Password</h3>
                <h5>We will send you an email with instructions on how to reset your password.</h5>
                <Box sx={{ '& > :not(style)': { m: 0.1 } }}>

                    <div id="password_email" style={{ display: "block" }} >
                        <TextField
                            id="outlined-basic"
                            type="email"
                            label="Enter Your Email"
                            variant="outlined"
                            name='email'
                            value={data.email}
                            onChange={((e) => { setData({ email: e.target.value }) })}
                            required
                        />
                        <Button type='submit' variant="contained">Email Me</Button>

                        <div className='register-forgot-pass'>
                            <Link to="/login">
                                <Button variant="contained" color="error">Login</Button>
                            </Link>

                        </div>
                    </div>
                </Box>
            </form>


        </React.Fragment>
    )
}

export default SendOtp