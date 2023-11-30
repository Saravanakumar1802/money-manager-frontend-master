import React from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import TextField from '@mui/material/TextField';
import { API } from '../../Api';

const VerifyOtp = () => {
    const [data, setData] = useState();
    // console.log(data);
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // const url = `http://localhost:4003/user/loginhelp/tokenauth/${data}`;
            const api=`${API}/user/loginhelp/tokenauth/${data}`
            await axios.post((api));
            window.location = "/loginhelp/ResetPassword"
        } catch (error) {
            // console.log(error);
            alert("Invalid OTP")
        }
    }
    return (
        <React.Fragment>
            <div className="background">
                <div className="shape"></div>
                <div className="shape"></div>
            </div>
            <form onSubmit={handleSubmit}>
                <h3>OTP Verification</h3>
                <h5>We will send you an email with instructions on how to reset your password.</h5>
                <Box sx={{ '& > :not(style)': { m: 0.1 } }}>

                    <div id="password_email" style={{ display: "block" }} >
                        <TextField
                            id="outlined-basic"
                            type="text"
                            label="Enter Your OTP"
                            variant="outlined"
                            name='email'

                            onChange={((e) => { setData(e.target.value) })}
                            required
                        />
                        <Button type='submit' variant="contained">Verify OTP</Button>

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

export default VerifyOtp