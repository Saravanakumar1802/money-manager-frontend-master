import React from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import TextField from '@mui/material/TextField';
import { API } from '../../Api';

const ResetPassword = () => {
    const [data, setData] = useState({ password: "" });
    // console.log(data);
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // const url = `https://auth-server-saravana.vercel.app/user/loginhelp/resetpassword`;
            const api=`${API}/user/loginhelp/resetpassword`
            await axios.post(api, data);
            window.location = "/"
        } catch (error) {
            // console.log(error);
            alert("try different Password")
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

                <Box sx={{ '& > :not(style)': { m: 0.1 } }}>

                    <div id="password_email" style={{ display: "block" }} >
                        <TextField
                            id="outlined-basic"
                            type="password"
                            label="Enter Your New password"
                            variant="outlined"
                            name='password'
                            onChange={((e) => { setData({ password: e.target.value }) })}
                            required
                        />
                        <Button type='submit' variant="contained">Reset Password</Button>

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

export default ResetPassword