import React, {useState} from 'react';
import {NavigationBar} from "../components/navbar";
import styled from "styled-components";
import {Footer} from "../components/footer";
import {Modal} from "antd";
import 'antd/dist/antd.css';
import { useHistory } from "react-router-dom";

const Styles = styled.div`

`

const BuyListing = () => {

    const [isModalVisible, setIsModalVisible] = useState(false);
    const history = useHistory();
    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
        history.push('/');

    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    return (
        <Styles>
            <div className="">
                <NavigationBar/>
                <div className="container p-5">

                    <div className="text-center">
                        <h1>Checkout</h1>
                    </div>
                    <div className="row card p-4 shadow">
                        <div className="d-flex">
                            <p className={"mr-auto"}>Amount Due Today</p>
                            <p>$ 1.00</p>
                        </div>
                        <div className="d-flex">
                            <p className={"mr-auto"}>Subscription Subtotal</p>
                            <p>$ 1.00</p>
                        </div>
                        <div className="d-flex">
                            <p className={"mr-auto"}>Shipping</p>
                            <p>$ 0.00</p>
                        </div>
                        <div className="d-flex">
                            <p className={"mr-auto"}>Promos & Discount</p>
                            <p>$ 0.00</p>
                        </div>
                        <div className="d-flex">
                            <p className={"mr-auto"}>Sales Tax</p>
                            <p>$ 1.00</p>
                        </div>
                        <div className="d-flex">
                            <p className={"mr-auto"}>Next Billing Date</p>
                            <p>$ 0.00</p>
                        </div>
                        <div className="d-flex">
                            <p className={"mr-auto"}>Subscription can be cancelled at any time from within your user
                                dashboard</p>
                            <p>$ 1.00</p>
                        </div>
                    </div>

                    <div className="row my-5">
                        <div className="col-md-6">
                            <h1>Billing Information</h1>
                            <label>Full Name</label>
                            <input className={"form-control"} placeholder={"Full name"}/>

                            <label>Billing Address</label>
                            <input className={"form-control"} placeholder={"Billing Address"}/>

                            <label>City</label>
                            <input className={"form-control"} placeholder={"City"}/>

                            <label>Zip</label>
                            <input className={"form-control"} placeholder={"Zip"}/>

                            <label>Country</label>
                            <input className={"form-control"} placeholder={"Country"}/>
                        </div>
                        <div className="col-md-6">
                            <h1>Card Information</h1>

                            <label>Card Number</label>
                            <input className={"form-control"} placeholder={"Card Number"}/>

                            <label>Cardholder Name</label>
                            <input className={"form-control"} placeholder={"Cardholder Name"}/>

                            <label>Expiration Date</label>
                            <input className={"form-control"} placeholder={"Expiration Date"}/>

                            <label>CVV</label>
                            <input className={"form-control"} placeholder={"CVV"}/>
                            <p>3 digit number pin at the back of card</p>
                        </div>
                        <div className="col-md-12 text-center my-3">
                            <button onClick={showModal} className={"btn btn-outline-success"}>Place Ad</button>

                            <Modal title="" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                                <div className="text-center">
                                    <h5><b>Thanks you for your bussiness!</b></h5>
                                    <p>Your listing has been posted and we hope
                                    your experience with us is an enjoyable one. You can manage your listings
                                    in your dashboard</p>
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

export default BuyListing;