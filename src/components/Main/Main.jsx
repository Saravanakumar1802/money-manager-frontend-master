import React from 'react'
import './main.css'
import wallpaper from '../../assets/mainPic.jpg'
import { Link } from "react-router-dom";
import Button  from '@mui/material/Button';
const Main = () => {
    return (
        <React.Fragment>
            <div className="container">

                    <img className="img-contaier" src={wallpaper} alt="Natural-img" />
             
                
                <div id='name'>❤️Welcome !!!</div>
                <Link to='/'>
                <Button className='main-btn' type='btn' variant="contained">LOGOUT</Button>
                </Link>
                
            </div>
        </React.Fragment>
    )
}

export default Main