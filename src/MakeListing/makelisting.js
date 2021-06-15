import React, {useState} from 'react';
import {NavigationBar} from "../components/navbar";
import styled from "styled-components";
import {Footer} from "../components/footer";
import horse1 from "../assets/horse1.jpg";
import { Link } from "react-router-dom";
import { useInput } from '../input-hook';
import { useHistory } from "react-router";

const Styles = styled.div`
   input[type="file"] {
        display: none;
   }
   
   .remove-button {
        color: red
   }
   .breadcrumb-text {
        color: #5A9AD6;
   }
   .progress-bar {
        width: 33.3%
   }
   .progress {
        height: 5px
   }   
`

const MakeListing = () => {
    const horseData = [
        {
            image: horse1,
        },
        {
            image: horse1,
        },
        {
            image: horse1,
        },
        {
            image: horse1,
        },
        {
            image: horse1,
        },
        {
            image: horse1,
        }
    ]

    const listingData = {
        "AmountDueToday" : "1.00",
        "SubscriptionSubtotal" : "1.00",
        "Shipping" : "1.00",
        "PromosAndDiscount" : "1.00",
        "SalesTax" : "1.00",
        "NextBillingDate" : "1.00",
    }
    let history = useHistory();
    const {value: name, bind: bindName, reset: resetName} = useInput('');
    const {value: state, bind: bindState, reset: resetState} = useInput('');

    const {value: email, bind: bindEmail, reset: resetEmail} = useInput('');
    const {value: zip, bind: bindZip, reset: resetZip} = useInput('');

    const {value: address, bind: bindAddress, reset: resetAddress} = useInput('');
    const {value: phone, bind: bindPhone, reset: resetPhone} = useInput('');

    const {value: city, bind: bindCity, reset: resetCity} = useInput('');
    const {value: title, bind: bindTitle, reset: resetTitle} = useInput('');

    const {value: horseName, bind: bindHorseName, reset: resetHorseName} = useInput('');
    const {value: horseAge, bind: bindHorseAge, reset: resetHorseAge} = useInput('');

    const {value: horseSex, bind: bindHorseSex, reset: resetHorseSex} = useInput('');
    const {value: horseHeight, bind: bindHorseHeight, reset: resetHorseHeight} = useInput('');

    const {value: horsePrice, bind: bindHorsePrice, reset: resetHorsePrice} = useInput('');
    const {value: horseColor, bind: bindHorseColor, reset: resetHorseColor} = useInput('');

    const {value: horseDesc, bind: bindHorseDesc, reset: resetHorseDesc} = useInput('');


    const handleSubmit = () => {
        console.log("Captured info: ", name, state, email, zip, address, phone, city,
            title, horseName, horseAge, horseSex, horseHeight, horsePrice, horseColor,
            horseDesc)
        resetName()
        resetState()
        resetEmail()
        resetZip()
        resetAddress()
        resetPhone()
        resetCity()
        resetTitle()
        resetHorseName()
        resetHorseAge()
        resetHorseSex()
        resetHorseHeight()
        resetHorsePrice()
        resetHorseColor()
        resetHorseDesc()

        history.push({
           pathname: '/buy-listing',
           state: { listingData: listingData }
       });
    }

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
                        <h1>Sell a Horse</h1>
                        <p>Please only list on horse .. . Additional horses listed in the same ad will be subject to
                            additional ...</p>
                    </div>
                    <div className="my-5">
                        <div className="text-center">
                            <h2>Your Information</h2>
                        </div>

                        <div className="row">
                            <div className="col-md-6">
                                <label>Your Name</label>
                                <input {...bindName} placeholder={"Your name"} className={"form-control"}/>
                                <label>Your Email</label>
                                <input {...bindEmail} placeholder={"Your email"} className={"form-control"}/>
                                <label>Your Address</label>
                                <input {...bindAddress} placeholder={"Your address"} className={"form-control"}/>
                                <label>City</label>
                                <input {...bindCity} placeholder={"city"} className={"form-control"}/>
                            </div>
                            <div className="col-md-6">
                                <label>State</label>
                                <input {...bindState} placeholder={"State"} className={"form-control"}/>
                                <label>Zip</label>
                                <input {...bindZip} placeholder={"zip"} className={"form-control"}/>
                                <label>Phone</label>
                                <input {...bindPhone} placeholder={"Phone"} className={"form-control"}/>
                            </div>
                        </div>
                    </div>

                    <div className="my-5">
                        <div className="text-center">
                            <h2>Horse Information</h2>
                            <p>Listing Title</p>
                            <input {...bindTitle} placeholder={"Headline"} className={"form-control w-50 mx-auto"}/>
                        </div>

                        <div className="row">
                            <div className="col-md-6">
                                <label>Horse Name</label>
                                <input {...bindHorseName} placeholder={"Horse name"} className={"form-control"}/>
                                <label>Age</label>
                                <input {...bindHorseAge} placeholder={"Age"} className={"form-control"}/>
                                <label>Sex</label>
                                <input {...bindHorseSex} placeholder={"Sex"} className={"form-control"}/>
                                <label>Height</label>
                                <input {...bindHorseHeight} placeholder={"Height"} className={"form-control"}/>
                                <label>Color</label>
                                <input {...bindHorseColor} placeholder={"Color"} className={"form-control"}/>
                            </div>
                            <div className="col-md-6">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                    <label className="form-check-label" htmlFor="flexCheckDefault">
                                        Horse is registered
                                    </label>
                                </div>
                                <label>Sex</label>
                                <input {...bindHorseSex} placeholder={"sex"} className={"form-control"}/>
                                <label>Price</label>
                                <input {...bindHorsePrice} placeholder={"price"} className={"form-control"}/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <label>Horse Description</label>
                                <textarea {...bindHorseDesc} className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>
                        </div>
                    </div>

                    <div className="my-5">
                        <h5>Images</h5>
                        <div className="d-flex">
                            <form>
                                <label className="btn btn-outline-dark">
                                    <input type="file"/>
                                    Choose File
                                </label>
                            </form>
                        </div>
                        <p>Add some appealings photos of your horse for sale!</p>
                        <div className="row">
                            {horseData.map((data) => (
                                <div className="col-md-4">
                                    <img className="w-100" src={data.image} alt={"img"}/>
                                    <div className="d-flex">
                                        <button className={"ml-auto remove-button btn"}>Remove</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="row">
                            <Link to='/subscription-page'>
                              <button className={"btn btn-outline-success mx-auto"}>Create</button>
                            </Link>
                            <button onClick={handleSubmit} className={"btn btn-outline-success mx-auto"}>Create</button>
                        </div>
                    </div>
                </div>
            </div>

        </Styles>
    );

}

export default MakeListing;