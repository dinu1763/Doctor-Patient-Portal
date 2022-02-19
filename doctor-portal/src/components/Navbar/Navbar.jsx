import React from 'react';
import "./navbar.css";
import Button from "@mui/material/Button";
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import { Link } from 'react-router-dom';
export const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="container">
                <div className="left">
                    <img src="https://upload.wikimedia.org/wikipedia/en/6/64/Practo_new_logo.png" className='logo' alt="" />
                    <span> <Link to="/patient" style={{ color: "black" }}> All Patients</Link></span>
                    <span>Medicines</span>
                    <span>Video Consult</span>
                    <span>Lab Tests</span>
                </div>


                <input type="text" placeholder='Search Patients' className='input' >

                </input>
                <SearchOutlinedIcon className='icon'></SearchOutlinedIcon>


                <div className="right">
                    <Link to="/login">
                        <Button variant="contained" color="primary">
                            Sign In
                        </Button>
                    </Link>
                </div>
            </div>
            <hr />
        </div>
    )
}
