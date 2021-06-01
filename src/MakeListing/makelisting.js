import React from 'react';
import {NavigationBar} from "../components/navbar";
import styled from "styled-components";
import {Footer} from "../components/footer";
import horse1 from "../assets/horse1.jpg";
import { Link } from "react-router-dom";

const Styles = styled.div`


`

const MakeListing = () => {
    return (
        <Styles>
            <div className="">
                <NavigationBar/>
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
                                <input placeholder={"Your name"} className={"form-control"}/>
                                <label>Your Email</label>
                                <input placeholder={"Your email"} className={"form-control"}/>
                                <label>Your Address</label>
                                <input placeholder={"Your address"} className={"form-control"}/>
                                <label>City</label>
                                <input placeholder={"city"} className={"form-control"}/>
                            </div>
                            <div className="col-md-6">
                                <label>State</label>
                                <input placeholder={"State"} className={"form-control"}/>
                                <label>Zip</label>
                                <input placeholder={"zip"} className={"form-control"}/>
                                <label>Phone</label>
                                <input placeholder={"Phone"} className={"form-control"}/>
                            </div>
                        </div>
                    </div>

                    <div className="my-5">
                        <div className="text-center">
                            <h2>Horse Information</h2>
                            <p>Listing Title</p>
                            <input placeholder={"Headline"} className={"form-control w-50 mx-auto"}/>
                        </div>

                        <div className="row">
                            <div className="col-md-6">
                                <label>Horse Name</label>
                                <input placeholder={"Horse name"} className={"form-control"}/>
                                <label>Age</label>
                                <input placeholder={"Age"} className={"form-control"}/>
                                <label>Sex</label>
                                <input placeholder={"Sex"} className={"form-control"}/>
                                <label>Height</label>
                                <input placeholder={"Height"} className={"form-control"}/>
                                <label>Color</label>
                                <input placeholder={"Color"} className={"form-control"}/>
                            </div>
                            <div className="col-md-6">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                    <label className="form-check-label" htmlFor="flexCheckDefault">
                                        Horse is registered
                                    </label>
                                </div>
                                <label>Age</label>
                                <input placeholder={"age"} className={"form-control"}/>
                                <label>Sex</label>
                                <input placeholder={"sex"} className={"form-control"}/>
                                <label>Price</label>
                                <input placeholder={"price"} className={"form-control"}/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <label>Horse Description</label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>
                        </div>
                    </div>

                    <div className="my-5">
                        <h5>Images</h5>
                        <div className="d-flex">
                            <button className={"btn btn-outline-dark mr-3"}>Choose File</button>
                            <p className={"my-auto"}>No File Chosen</p>
                        </div>
                        <p>Add some appealings photos of your horse for sale!</p>
                        <div className="row">
                            <div className="col-md-4">
                                <img className="w-100" src={horse1} alt={"img"}/>
                                <div className="d-flex">
                                    <p className={"ml-auto"} style={{color: "red"}}>Remove</p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <img className="w-100" src={horse1} alt={"img"}/>
                                <div className="d-flex">
                                    <p className={"ml-auto"} style={{color: "red"}}>Remove</p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <img className="w-100" src={horse1} alt={"img"}/>
                                <div className="d-flex">
                                    <p className={"ml-auto"} style={{color: "red"}}>Remove</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4">
                                <img className="w-100" src={horse1} alt={"img"}/>
                                <div className="d-flex">
                                    <p className={"ml-auto"} style={{color: "red"}}>Remove</p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <img className="w-100" src={horse1} alt={"img"}/>
                                <div className="d-flex">
                                    <p className={"ml-auto"} style={{color: "red"}}>Remove</p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <img className="w-100" src={horse1} alt={"img"}/>
                                <div className="d-flex">
                                    <p className={"ml-auto"} style={{color: "red"}}>Remove</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <Link to='/subscription-page'>
                              <button className={"btn btn-outline-success mx-auto"}>Create</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>

        </Styles>
    );

}

export default MakeListing;