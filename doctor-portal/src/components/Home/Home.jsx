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
            <Patients />
        </div>
    )
}

export default Home