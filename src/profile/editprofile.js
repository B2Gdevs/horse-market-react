import React, {useState} from 'react';
import {NavigationBar} from "../components/navbar";
import styled from "styled-components";
import {Footer} from "../components/footer";
import {Modal} from "antd";

import avatar from '../assets/avatar.jpg'
import computer from '../assets/computer.jpg'
import list from '../assets/list.jpg'
import {useInput} from "../input-hook";
import ProfileSlider from "../components/ProfileSlider";

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
    const {value: name, bind: bindName, reset: resetName} = useInput('');
    const {value: state, bind: bindState, reset: resetState} = useInput('');

    const {value: email, bind: bindEmail, reset: resetEmail} = useInput('');
    const {value: zip, bind: bindZip, reset: resetZip} = useInput('');
    const {value: address, bind: bindAddress, reset: resetAddress} = useInput('');

    const {value: phone, bind: bindPhone, reset: resetPhone} = useInput('');
    const {value: city, bind: bindCity, reset: resetCity} = useInput('');

    const showModal = () => {
        console.log("Captured Info: ", name, state, email, zip, address, phone, city)
        resetName()
        resetState()
        resetEmail()
        resetZip()
        resetAddress()
        resetPhone()
        resetCity()
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
                    <ProfileSlider />
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
                                        <input {...bindName} className={"form-control"} placeholder={"Your Name"}/>

                                        <label>Email</label>
                                        <input {...bindEmail} className={"form-control"} placeholder={"Email"}/>

                                        <label>Your Address</label>
                                        <input {...bindAddress} className={"form-control"} placeholder={"Your Address"}/>

                                        <label>City</label>
                                        <input {...bindCity} className={"form-control"} placeholder={"City"}/>
                                    </div>
                                    <div className="col-md-6">
                                        <label>State</label>
                                        <input {...bindState} className={"form-control"} placeholder={"State"}/>

                                        <label>Zip</label>
                                        <input {...bindZip} className={"form-control"} placeholder={"Zip"}/>

                                        <label>Phone</label>
                                        <input {...bindPhone} className={"form-control"} placeholder={"Phone"}/>
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