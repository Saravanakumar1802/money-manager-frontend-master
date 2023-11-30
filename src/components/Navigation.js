import { AppBar, Toolbar } from "@mui/material";
import DashboardIcon from '@mui/icons-material/Dashboard';
import { useNavigate } from "react-router-dom";
// import HomeIcon from '@mui/icons-material/Home';

export function Navigation() {

    const navigate = useNavigate();

    return (
        <div>
            <AppBar position="static" className="app-bar">
                <Toolbar className="nav-items">
                    <div className="logo-container" onClick={() => navigate("/")}>
                        <img src="https://img.icons8.com/?size=512&id=sPBQkuep9vDA&format=png"
                            alt="logo" width={"40"} height={"40"} className="img-class" /><br />
                        <span className="nav-logo-text">Money_Manager App</span>
                    </div>
                    <div className="nav-icons">
                        <button color="inherit" className='blue-btn' ><DashboardIcon /></button>
                        <button color="inherit" className='blue-btn' onClick={() => navigate(-1)} >🔙</button>
                        {/* <Button color="inherit" onClick={() => navigate("/addexp")}>Add Expenses</Button> */}
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    )
}