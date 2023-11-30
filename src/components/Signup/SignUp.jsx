import React from 'react'
import "./signup.css"
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'
import { API } from '../../Api';

const SignUp = () => {
    const [data, setData] = useState({
        username: "",
        email: "",
        password: "",
    }
    );
    const [error, setError] = useState("");

    const navigate = useNavigate();
    const handleChange = ({ currentTarget: input }) => {
        setData({ ...data, [input.name]: input.value });
        // console.log(data);
    };


    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            // const url = "https://auth-server-saravana.vercel.app/user/register";
            const api = `${API}/user/register`
            await axios.post(api, data);
            navigate("/login");
            // console.log(res.message);
        } catch (error) {
            if (
                error.response &&
                error.response.status >= 400 &&
                error.response.status <= 500
            ) {
                setError(error.response.data.message);
            }
        }

    }
    return (
        <React.Fragment>
            <div className="background">
                <div className="shape"></div>
                <div className="shape"></div>
            </div>
            <form onSubmit={handleSubmit}>
                <h1>Create Account</h1>
                <Box sx={{ '& > :not(style)': { m: 1 } }}>

                    <Box id="username" sx={{ display: 'flex', alignItems: 'center' }}>
                        <AccountCircle />

                        <TextField
                            type="text"
                            id="input-with-sx"
                            label="Enter Your Name"
                            variant="outlined"
                            name="username"
                            value={data.username}
                            onChange={handleChange}
                            required
                        />
                    </Box>

                    <div id="password_email" style={{ display: "block" }} >
                        <TextField
                            id="outlined-basic"
                            type="email"
                            label="Enter Your Email"
                            variant="outlined"
                            name='email'
                            value={data.email}
                            onChange={handleChange}
                            required
                        />
                        <TextField
                            id="outlined-basic"
                            type="password"
                            label="Password"
                            variant="outlined"
                            name='password'
                            value={data.password}
                            onChange={handleChange}
                            required
                        />
                        {error && <div className='error_msg'>{error}</div>}
                        <Button type='submit' variant="contained">Register</Button>

                        <Link to="/login">
                            <Button variant="contained" color="error">Login</Button>
                        </Link>
                    </div>
                </Box>
            </form>
        </React.Fragment>
    )
}

export default SignUp