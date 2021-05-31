import React, {useState} from 'react';
import {NavigationBar} from "../components/navbar";
import styled from "styled-components";
import {Footer} from "../components/footer";
import horse1 from "../assets/horse1.jpg";
import {Modal} from "antd";
import computer from "../assets/computer.jpg";
import avatar from "../assets/avatar.jpg";
import list from "../assets/list.jpg";

const Styles = styled.div`
    .sidenav {
        opacity:0.8;
        width:20%;
        height:700px;
        overflow: auto;
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
`
const ManageListing = () => {
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
                <NavigationBar/>
                <div className="d-flex">
                    <div style={{color: "gray"}} className="sidenav d-flex">
                        <div className="" style={{height: "700", width: "30%", backgroundColor: "#343A40"}}>
                            <div className="row mt-4 ml-2">
                                <div className="col-md-12">
                                    <img style={{width: "30px", height: "30px"}} src={computer}/>
                                </div>
                                <div className="col-md-12 my-5">
                                    <img style={{width: "30px", height: "30px"}} src={avatar}/>
                                </div>
                                <div className="col-md-12">
                                    <img style={{width: "30px", height: "30px"}} src={list}/>
                                </div>
                            </div>
                        </div>
                        <div className="" style={{height: "700", width: "50%", backgroundColor: "#329329"}}>
                            <div className="row mt-4 ml-2">
                                <div className="col-md-12 side-bar-text">
                                    <p style={{margin: 0, padding: 0}}>Dashboard</p>
                                </div>
                                <div className="col-md-12 my-5 side-bar-text">
                                    <p style={{margin: 0, padding: 0}}>Edit Profile</p>
                                </div>
                                <div className="col-md-12 side-bar-text">
                                    <p style={{margin: 0, padding: 0}}>Your Listings</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mainarea pt-5">
                        <div className="container my-5">
                            <div className="text-center">
                                <h1>Manage Your Listings</h1>
                                <p>Here you can manage your listings such as editing or deleting</p>
                            </div>

                            <div className="row">
                                <div className="mr-auto d-flex">
                                    <input placeholder={"Search Listings"} className={"form-control"}/>
                                    <button className={"btn"} style={{border: "1px solid black"}}>Search</button>

                                    <button className={"btn btn-success ml-3 w-100"}>Create a listing</button>
                                </div>
                                <div className="">
                                    <p>Number of active listings: 8</p>
                                </div>
                            </div>

                            <div className="row my-3">

                                <div className="col-md-4">
                                    <div className="card shadow">
                                        <img className="px-1 py-3" src={horse1} alt={"img"}/>
                                        <ul className="list-group">
                                            <li className="list-group-item">Cras justo odio</li>
                                            <li className="list-group-item">Dapibus ac facilisis in</li>
                                            <li className="list-group-item">Morbi leo risus</li>
                                            <li className="list-group-item">
                                                <div className="row">
                                                    <div className="col-md-6 text-center border-right">
                                                        <p style={{color: "#359328"}}>Edit Listing</p>
                                                    </div>
                                                    <div className="col-md-6 text-center">
                                                        <p style={{color: "red"}} onClick={showModal}>Delete</p>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="card shadow">
                                        <img className="px-1 py-3" src={horse1} alt={"img"}/>
                                        <ul className="list-group">
                                            <li className="list-group-item">Cras justo odio</li>
                                            <li className="list-group-item">Dapibus ac facilisis in</li>
                                            <li className="list-group-item">Morbi leo risus</li>
                                            <li className="list-group-item">
                                                <div className="row">
                                                    <div className="col-md-6 text-center border-right">
                                                        <p style={{color: "#359328"}}>Edit Listing</p>
                                                    </div>
                                                    <div className="col-md-6 text-center">
                                                        <p style={{color: "red"}} onClick={showModal}>Delete</p>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="card shadow">
                                        <img className="px-1 py-3" src={horse1} alt={"img"}/>
                                        <ul className="list-group">
                                            <li className="list-group-item">Cras justo odio</li>
                                            <li className="list-group-item">Dapibus ac facilisis in</li>
                                            <li className="list-group-item">Morbi leo risus</li>
                                            <li className="list-group-item">
                                                <div className="row">
                                                    <div className="col-md-6 text-center border-right">
                                                        <p style={{color: "#359328"}}>Edit Listing</p>
                                                    </div>
                                                    <div className="col-md-6 text-center">
                                                        <p style={{color: "red"}} onClick={showModal}>Delete</p>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                            </div>

                            <Modal title="" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                                <div className="text-center">
                                    <p>Are you sure you want to delete<br/> "Horse Name" Listing?</p>
                                    <p>Once you delete this listing your subscription for this ad will be cancelled and
                                        the listing information will not be able to be recovered</p>
                                </div>
                            </Modal>

                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        </Styles>
    );
}

export default ManageListing;