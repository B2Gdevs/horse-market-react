import React, {useEffect, useState} from 'react';
import {NavigationBar} from "../components/navbar";
import styled from "styled-components";
import {Footer} from "../components/footer";
import {Modal} from "antd";
import 'antd/dist/antd.css';
import {useInput} from "../input-hook";
import {useLocation} from "react-router-dom";

const Styles = styled.div`
   .breadcrumb-text {
        color: #5A9AD6;
   }
   .progress-bar {
        width: 66.6%
   }
   .progress {
        height: 5px
   }    
`

const BuyListing = props => {

    const [isModalVisible, setIsModalVisible] = useState(false);
    const location = useLocation();

    const [listingData, setListingData] = useState(location.state.listingData);

    const {value: name, bind: bindName, reset: resetName} = useInput('');
    const {value: cardNumber, bind: bindCardNumber, reset: resetCardNumber} = useInput('');

    const {value: billingAddress, bind: bindBillingAddress, reset: resetBillingAddress} = useInput('');
    const {value: cardholder, bind: bindCardholder, reset: resetCardholder} = useInput('');
    const {value: city, bind: bindCity, reset: resetCity} = useInput('');

    const {value: expiration, bind: bindExpiration, reset: resetExpiration} = useInput('');
    const {value: zip, bind: bindZip, reset: resetZip} = useInput('');

    const {value: cvv, bind: bindCVV, reset: resetCVV} = useInput('');
    const {value: country, bind: bindCountry, reset: resetCountry} = useInput('');


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
                <div className="row mt-5">
                    <div className="col-md-6 offset-md-3 text-center">
                        <div className="progress">
                            <div className="progress-bar" role="progressbar"
                                 aria-valuenow="25"
                                 aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <div className="row">
                            <div className="col-md-4 breadcrumb-text">
                                Create a Listing
                            </div>
                            <div className="col-md-4 breadcrumb-text">
                                Subscription
                            </div>
                            <div className="col-md-4 breadcrumb-text">
                                Checkout
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container p-5">

                    <div className="text-center">
                        <h1>Checkout</h1>
                    </div>
                    <div className="row card p-4 shadow">
                        <div className="d-flex">
                            <p className={"mr-auto"}>Amount Due Today</p>
                            <p>$ {listingData.AmountDueToday}</p>
                        </div>
                        <div className="d-flex">
                            <p className={"mr-auto"}>Subscription Subtotal</p>
                            <p>$ {listingData.SubscriptionSubtotal}</p>
                        </div>
                        <div className="d-flex">
                            <p className={"mr-auto"}>Shipping</p>
                            <p>$ {listingData.Shipping}</p>
                        </div>
                        <div className="d-flex">
                            <p className={"mr-auto"}>Promos & Discount</p>
                            <p>$ {listingData.PromosAndDiscount}</p>
                        </div>
                        <div className="d-flex">
                            <p className={"mr-auto"}>Sales Tax</p>
                            <p>$ {listingData.SalesTax}</p>
                        </div>
                        <div className="d-flex">
                            <p className={"mr-auto"}>Next Billing Date</p>
                            <p>$ {listingData.NextBillingDate}</p>
                        </div>
                        <div className="d-flex">
                            <p className={"mr-auto"}>Subscription can be cancelled at any time from within your user
                                dashboard</p>
                        </div>
                    </div>

                    <div className="row my-5">
                        <div className="col-md-6">
                            <h1>Billing Information</h1>
                            <label>Full Name</label>
                            <input {...bindName} className={"form-control"} placeholder={"Full name"}/>

                            <label>Billing Address</label>
                            <input {...bindBillingAddress} className={"form-control"} placeholder={"Billing Address"}/>

                            <label>City</label>
                            <input {...bindCity} className={"form-control"} placeholder={"City"}/>

                            <label>Zip</label>
                            <input {...bindZip} className={"form-control"} placeholder={"Zip"}/>

                            <label>Country</label>
                            <input {...bindCountry} className={"form-control"} placeholder={"Country"}/>
                        </div>
                        <div className="col-md-6">
                            <h1>Card Information</h1>

                            <label>Card Number</label>
                            <input {...bindCardNumber} className={"form-control"} placeholder={"Card Number"}/>

                            <label>Cardholder Name</label>
                            <input {...bindCardholder} className={"form-control"} placeholder={"Cardholder Name"}/>

                            <label>Expiration Date</label>
                            <input {...bindExpiration} className={"form-control"} placeholder={"Expiration Date"}/>

                            <label>CVV</label>
                            <input {...bindCVV} className={"form-control"} placeholder={"CVV"}/>
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
            </div>

        </Styles>
    );

}

export default BuyListing;