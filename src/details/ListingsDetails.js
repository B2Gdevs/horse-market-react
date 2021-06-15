import React, {useState, useEffect} from 'react';
import {NavigationBar} from "../components/navbar";
import styled from "styled-components";
import {Footer} from "../components/footer";
import horse1 from "../assets/horse1.jpg";
import horse2 from "../assets/horse2.jpg";
import horse3 from "../assets/horse3.jpeg";
import axios from 'axios';
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

    const [horseData, setHorseData] = useState(
        {
            "images": [horse1, horse1, horse1, horse1],
            "price": "33,000",
            "location": "Austin, Texas",
            "name": "name",
            "sire": "placeholder",
            'Dam': "placeholder",
            "height": "placeholder",
            "sex": "placeholder",
            "age": "placeholder",
            "color": "placeholder"
        },
    )

    useEffect(() => {
        // axios.get(`127.0.0.1:8000/horseListingDetails/${id}`)
        //     .then(function (response) {
        //         setHorseData(response.data)
        //     })
    });

    return (
        <Styles>
            <div className="">
                <div className="container my-4">
                    <div className="row">

                        <div className="col-md-6 offset-md-1 my-4">
                            <div className="row">
                                <div className="col-md-12">

                                    <Carousel autoplay>
                                        {horseData.images.map((imgSrc) => (
                                            <div>
                                                <img className={"w-100"} src={imgSrc}/>
                                            </div>
                                        ))}
                                    </Carousel>

                                </div>
                            </div>

                            <div className="row my-5 pl-3 pr-5">
                                <div className="mr-auto">
                                    <h5>Listing Heading</h5>
                                    <p className={"price"}>$ {horseData.price}</p>
                                    <AiFillHeart/>
                                </div>
                                <div className="">
                                    <p>{horseData.location}<span><MdLocationOn/></span></p>
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
                        <div className="col-md-6 px-3">
                            <div className="row">
                                <p className={"mr-auto"}>Registered Name</p>
                                <p>{horseData.name}</p>
                            </div>

                            <hr/>
                            <div className="row">
                                <p className={"mr-auto"}>Sire</p>
                                <p>{horseData.sire}</p>
                            </div>

                            <hr/>
                            <div className="row">
                                <p className={"mr-auto"}>Dam</p>
                                <p>{horseData.Dam}</p>
                            </div>
                            <hr/>
                            <div className="row">
                                <p className={"mr-auto"}>Height</p>
                                <p>{horseData.height}</p>
                            </div>
                            <hr/>
                            <div className="row">
                                <p className={"mr-auto"}>Sex</p>
                                <p>{horseData.sex}</p>
                            </div>
                            <hr/>
                        </div>
                        <div className="col-md-6 px-3">
                            <div className="row">
                                <p className={"mr-auto"}>Age</p>
                                <p>{horseData.age}</p>
                            </div>
                            <hr/>
                            <div className="row">
                                <p className={"mr-auto"}>Color</p>
                                <p>{horseData.color}</p>
                            </div>
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