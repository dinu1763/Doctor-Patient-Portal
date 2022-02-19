import React from 'react';
import "./navbar.css";
import Button from "@mui/material/Button";
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
export const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="container">
                <div className="left">
                    <img src="https://upload.wikimedia.org/wikipedia/en/6/64/Practo_new_logo.png" className='logo' alt="" />
                    <span>All Patients</span>
                    <span>Medicines</span>
                    <span>Video Consult</span>
                    <span>Lab Tests</span>
                </div>


                <input type="text" placeholder='Search Patients' className='input' >

                </input>
                <SearchOutlinedIcon className='icon'></SearchOutlinedIcon>


                <div className="right">
                    <Button variant="contained" color="primary">
                        Sign In
                    </Button>
                </div>
            </div>
            <hr />
        </div>
    )
}
