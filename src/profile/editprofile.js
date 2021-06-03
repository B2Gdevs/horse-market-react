import React, {useState} from 'react';
import {NavigationBar} from "../components/navbar";
import styled from "styled-components";
import {Footer} from "../components/footer";
import {Modal} from "antd";

import avatar from '../assets/avatar.jpg'
import computer from '../assets/computer.jpg'
import list from '../assets/list.jpg'

const Styles = styled.div`
    .page-content {
        position: relative; 
        overflow: auto;
    }
    .sidenav {
        opacity:0.8;
        width:20%;
        height:700px;
        overflow: auto;
        color: gray;
    }
    .mainarea {
        opacity:0.8;
        width:100%;
        height:700px;
        overflow: auto;
    }
    .side-bar-text {
        color: white
        font-size: 18px;
    }
    .navbar-icons {
        width: 30px; 
        height: 30px;
    }
    .navbar-text {
        margin: 0; 
        padding: 0;        
    }
    .icon-col {
        height: 700px; 
        width: 30%; 
        background-color: #343A40;
    }
    .text-col {
        height: 700px; 
        width: 50%; 
        background-color: #329329;
    }
`
const EditProfile = () => {

    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };


    return (
        <Styles>
            <div className="">
                <div className="d-flex page-content" style={{}}>
                    <div className="sidenav d-flex">
                        <div className="icon-col" style={{}}>
                            <div className="row mt-4 ml-2">
                                <div className="col-md-12">
                                    <img className={"navbar-icons"} src={computer}/>
                                </div>
                                <div className="col-md-12 my-5">
                                    <img className={"navbar-icons"} src={avatar}/>
                                </div>
                                <div className="col-md-12">
                                    <img className={"navbar-icons"} src={list}/>
                                </div>
                            </div>
                        </div>
                        <div className="text-col" style={{}}>
                            <div className="row mt-4 ml-2">
                                <div className="col-md-12 side-bar-text">
                                    <p className={"navbar-text"}>Dashboard</p>
                                </div>
                                <div className="col-md-12 my-5 side-bar-text">
                                    <p className={"navbar-text"}>Edit Profile</p>
                                </div>
                                <div className="col-md-12 side-bar-text">
                                    <p className={"navbar-text"}>Your Listings</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mainarea pt-5">
                        <div className="container mt-5">
                            <div className="text-center">
                                <h1>Edit Your Information</h1>
                                <p>Here you can update your personal information and it will be updated to all your
                                    listings</p>
                            </div>
                            <div className="">
                                <div className="text-center">
                                    Your Information
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <label>Your Name</label>
                                        <input className={"form-control"} placeholder={"Your Name"}/>

                                        <label>Email</label>
                                        <input className={"form-control"} placeholder={"Email"}/>

                                        <label>Your Address</label>
                                        <input className={"form-control"} placeholder={"Your Address"}/>

                                        <label>City</label>
                                        <input className={"form-control"} placeholder={"City"}/>
                                    </div>
                                    <div className="col-md-6">
                                        <label>State</label>
                                        <input className={"form-control"} placeholder={"State"}/>

                                        <label>Zip</label>
                                        <input className={"form-control"} placeholder={"Zip"}/>

                                        <label>Phone</label>
                                        <input className={"form-control"} placeholder={"Phone"}/>
                                    </div>
                                </div>
                                <div className="row my-3">
                                    <div className="mx-auto">
                                        <button onClick={showModal} className={"btn btn-outline-success"}>Save Changes
                                        </button>
                                    </div>
                                    <Modal title="" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                                        <div className="text-center">
                                            <p>Are you sure you want to <br/> save your "Your Information" changes?</p>
                                        </div>
                                    </Modal>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </Styles>
    );

}

export default EditProfile;