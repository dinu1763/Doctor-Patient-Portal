import React from 'react'
import 'antd/dist/antd.css';
import "./patients.css";
import { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { Menu, Dropdown } from "antd";
import { Card, Avatar, Pagination } from 'antd';
import SortOutlinedIcon from '@material-ui/icons/SortOutlined';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';

const Patients = () => {
    const { Meta } = Card;
    const [page, setPage] = useState(1);
    const [patient, setPatient] = useState([]);
    const { token } = useContext(AuthContext)

    useEffect(() => getAllPatient(), [page]);

    let getAllPatient = () => {
        fetch(`http://localhost:2345/patient?page=${page}&size=3`)
            .then((d) => {
                // console.log(d.json());
                return d.json()
            })
            .then((d) => {
                // console.log(d.items);
                setPatient(d.items)
            });
    };
    console.log(patient);
    console.log(patient.length);

    return (
        <div><h1 style={{ textAlign: "center" }}><b>Patients Details</b></h1>
            <div className='sort'>
                <SortOutlinedIcon ></SortOutlinedIcon>
                <h3>Sort(Age)</h3>
            </div>
            {/* <h1>Name of the Patient : <b>{patient[0].first_name}</b></h1>
            <h2>Medicine Prescribed : <b>{patient[1].medicine} </b></h2>
            <h3>Age : {patient[0].age}</h3> */}
            <div className='patients-card'>

                < Card
                    style={{ width: 300 }}
                >
                    <Meta
                        avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                        title="Dinesh"
                        description="Dolo - 650"
                    />
                    <h4>Age : 27</h4>
                    <h5>Gender : Male</h5>
                </Card >

                < Card
                    style={{ width: 300 }}
                >
                    <Meta
                        avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                        title="Selvan"
                        description="Crocine"
                    />
                    <h4>Age : 66</h4>
                    <h5>Gender : female</h5>
                </Card >

                < Card
                    style={{ width: 300 }}
                >
                    <Meta
                        avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                        title="Bhaskar"
                        description="Dolo - 650"
                    />
                    <h4>Age : 27</h4>
                    <h5>Gender : Male</h5>
                </Card >

            </div >

            <div className='patients-card'>

                < Card
                    style={{ width: 300 }}
                >
                    <Meta
                        avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                        title="Akash"
                        description="Sputnik"
                    />
                    <h4>Age : 44</h4>
                    <h5>Gender : Male</h5>
                </Card >

                < Card
                    style={{ width: 300 }}
                >
                    <Meta
                        avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                        title="Prithvi"
                        description="Dolo - 650"
                    />
                    <h4>Age : 55</h4>
                    <h5>Gender : female</h5>
                </Card >

                < Card
                    style={{ width: 300 }}
                >
                    <Meta
                        avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                        title="Suraj"
                        description="Pills"
                    />
                    <h4>Age : 24</h4>
                    <h5>Gender : female</h5>
                </Card >



            </div>

            <div className='patients-card'>

                < Card
                    style={{ width: 300 }}
                >
                    <Meta
                        avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                        title="Ranjith"
                        description="Dolo-croc"
                    />
                    <h4>Age : 17</h4>
                    <h5>Gender : Male</h5>
                </Card >

                < Card
                    style={{ width: 300 }}
                >
                    <Meta
                        avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                        title="vignesh"
                        description="Vicks"
                    />
                    <h4>Age : 67</h4>
                    <h5>Gender : Male</h5>
                </Card >

                < Card
                    style={{ width: 300 }}
                >
                    <Meta
                        avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                        title="Kumari"
                        description="Paracetamol"
                    />
                    <h4>Age : 37</h4>
                    <h5>Gender : female</h5>
                </Card >


            </div>
            <div className='pagination'>
                <Pagination defaultCurrent={1} total={50} />
            </div></div>
    )
}

export default Patients


