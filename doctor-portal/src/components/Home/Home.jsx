import React from 'react'
import { Navbar } from '../Navbar/Navbar'
import "./home.css";
import { Card, Avatar, Pagination } from 'antd';
import 'antd/dist/antd.css';
import Patients from '../Patients/Patients';

const Home = () => {

    return (
        <div>
            <Navbar />
            <br />
            <h1 style={{ textAlign: "center" }}> Doctors Can Click on Sign In to View all the Patients Details Associated</h1>
            <img src="https://www.certifiedfinancialguardian.com/images/blog-wp-login.png" alt="" />
        </div>
    )
}

export default Home