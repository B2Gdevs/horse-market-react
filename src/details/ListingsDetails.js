import React, {useState} from 'react';
import {NavigationBar} from "../components/navbar";
import styled from "styled-components";
import {Footer} from "../components/footer";
import horse1 from "../assets/horse1.jpg";
import horse2 from "../assets/horse2.jpg";
import horse3 from "../assets/horse3.jpeg";

import {MdLocationOn} from 'react-icons/md';
import {AiFillHeart} from 'react-icons/ai';
import {AiOutlineMail} from 'react-icons/ai';
import {Modal, Button} from 'antd';
import {Carousel} from 'antd';
import 'antd/dist/antd.css';

const Styles = styled.div`
    .slider {
        width: 500px;
        height: 300px;
    }
    .price {
        margin: 0; 
        padding: 0;
    }
    .contact-seller-icon {
        font-size: 20px;
    }
    .model-seller-name {
        color: #343A41;
    }
`
const ListingsDetails = () => {

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

    const contentStyle = {
        height: '160px',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#364d79',
    };

    return (
        <Styles>
            <div className="">
                <div className="container my-4">
                    <div className="row">

                        <div className="col-md-6 offset-md-1 my-4">
                            <div className="row">
                                <div className="col-md-12">

                                    <Carousel autoplay>
                                        <div>
                                            <img className={"w-100"} src={horse1} />
                                        </div>
                                        <div>
                                            <img className={"w-100"} src={horse1}/>
                                        </div>
                                        <div>
                                            <img className={"w-100"} src={horse1} />
                                        </div>
                                        <div>
                                            <img className={"w-100"} src={horse1} />
                                        </div>
                                    </Carousel>,

                                </div>
                            </div>

                            <div className="row my-5 pl-3 pr-5">
                                <div className="mr-auto">
                                    <h5>Listing Heading</h5>
                                    <p className={"price"}>$ 33,000</p>
                                    <AiFillHeart/>
                                </div>
                                <div className="">
                                    <p>Austin, Texas <span><MdLocationOn/></span></p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="row">
                                <div className="col-md-12">
                                    <img className="my-4" src={horse1} alt={"img"}/>
                                </div>
                                <div className="col-md-12">
                                    <img className="my-4" src={horse1} alt={"img"}/>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="row">
                        <div className="col-md-6">
                            <p>Registered Name</p>
                            <hr/>
                            <p>Sire</p>
                            <hr/>
                            <p>Dam</p>
                            <hr/>
                            <p>Height</p>
                            <hr/>
                            <p>Sex</p>
                            <hr/>
                        </div>
                        <div className="col-md-6">
                            <p>Age</p>
                            <hr/>
                            <p>Color</p>
                            <hr/>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-12">
                            <h5>Description</h5>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                Ipsum
                                has been the industry's standard dummy text ever since the 1500s, when an unknown
                                printer took a galley of type and scrambled it to make a type specimen book.been the
                                industry's standard dummy text ever since the 1500s, when an unknown
                                printer took a galley of type and scrambled it to make a type specim dummy text ever
                                since the 1500s, when an unknown
                                printer took a galley of type and scrambled it to make a type specimen book.been the
                                industry's standard dummy text ever since the 1500s, when an unknown
                                printer took a galley of type and scrambled it to make a type spec</p>
                        </div>
                    </div>

                    <div className="row">
                        <button className={"btn btn-success mx-auto"} onClick={showModal}>
                            <span><AiOutlineMail className={"mx-2 contact-seller-icon"}/></span>Contact
                            Seller
                        </button>

                        <Modal title="" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                            <p className={"model-seller-name"}>Seller name</p>
                            <hr/>
                            <textarea className={'form-control'} placeholder={"Modal text goes here"}/>
                        </Modal>
                    </div>

                </div>
            </div>
        </Styles>

    );
}
export default ListingsDetails;