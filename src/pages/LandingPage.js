import React from 'react';
import {NavigationBar} from "../components/navbar";
import {Footer} from "../components/footer";
import styled from "styled-components";
import 'react-slideshow-image/dist/styles.css';
import {Slide} from 'react-slideshow-image';
import horse1 from '../assets/horse1.jpg';
import horse2 from '../assets/horse2.jpg';
import horse3 from '../assets/horse3.jpeg';
import horse4 from '../assets/horse4.jpg';


const Styles = styled.div`
    .sidenav {
        opacity:0.8;
        background-color:#808080;
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
`

const LandingPage = () => {

    return (
        <Styles>
            <div className="">
                <NavigationBar/>
                <div className="d-flex" style={{position: "relative", overflow: "auto"}}>
                    <div style={{color: "white"}} className="sidenav p-4">
                        <form>
                            <label>Horse Type</label>
                            <select className="form-control horse-type" id="horse-type"
                                    aria-label="Default select example">
                                <option selected>Open this select menu</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>

                            <label className="my-3">Sex</label>
                            <select className="form-control horse-type" id="horse-type"
                                    aria-label="Default select example">
                                <option selected>Open this select menu</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>

                            <label className="my-3">Price</label>
                            <select className="form-control horse-type" id="horse-type"
                                    aria-label="Default select example">
                                <option selected>Open this select menu</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>

                            <label className="my-3">Keyword</label>
                            <input className="form-control" placeholder="Urgent, Must Go, etc..."/>

                            <button className="btn btn-success form-control my-3">Submit</button>
                        </form>

                    </div>
                    <div className="mainarea">
                        <div className="p-5" style={{backgroundColor: "#E9ECEF"}}>
                            <div className="row">
                                <div className="col-md-12">
                                    <h1 style={{fontWeight: "lighter"}}>Horse Market</h1>
                                </div>

                                <div className="col-md-12">
                                    <button className="btn btn-outline-primary mr-2">Sell a horse</button>
                                    <button className="btn btn-outline-success">Buy a horse</button>
                                </div>
                            </div>
                        </div>
                        <div className="p-5">
                            <div className="row">
                                <div className="col-md-12">
                                    <h4 style={{color: "#348824"}}>Featured Listings</h4>
                                </div>
                                <div className="col-md-12">
                                    <Slide>
                                        <div className="each-slide">
                                            <div className='row justify-content-center'>
                                                <div className="card shadow col-md-2 mx-5">
                                                    <img className="px-1 py-3" src={horse1} alt={"img"}/>
                                                    <div className="p-1">
                                                        <p style={{color: "green"}}>$ 100</p>
                                                        <p>2 year old stud!</p>
                                                        <p style={{color: "#BABABC"}}>Private Seller - 9 mi</p>
                                                    </div>
                                                </div>
                                                <div className="card shadow col-md-2 mx-5">
                                                    <img className="px-1 py-3" src={horse2} alt={"img"}/>
                                                    <div className="p-1">
                                                        <p>$ 100</p>
                                                        <p>2 year old Mare</p>
                                                        <p style={{color: "#BABABC"}}>Private Seller - 9 mi</p>
                                                    </div>
                                                </div>
                                                <div className="card shadow col-md-2 mx-5">
                                                    <img className="px-1 py-3" src={horse3} alt={"img"}/>
                                                    <div className="p-1">
                                                        <p>$ 100</p>
                                                        <p>100k Winning Stud</p>
                                                        <p style={{color: "#BABABC"}}>Private Seller - 9 mi</p>
                                                    </div>
                                                </div>
                                                <div className="card shadow col-md-2 mx-5">
                                                    <img className="px-1 py-3" src={horse4} alt={"img"}/>
                                                    <div className="p-1">
                                                        <p>$ 100</p>
                                                        <p>100k Wining Mare</p>
                                                        <p style={{color: "#BABABC"}}>Private Seller - 9 mi</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="each-slide">
                                            <div className='row justify-content-center'>
                                                <div className="card shadow col-md-2 mx-5">
                                                    <img className="px-1 py-3" src={horse1} alt={"img"}/>
                                                    <div className="p-1">
                                                        <p style={{color: "green"}}>$ 100</p>
                                                        <p>2 year old stud!</p>
                                                        <p style={{color: "#BABABC"}}>Private Seller - 9 mi</p>
                                                    </div>
                                                </div>
                                                <div className="card shadow col-md-2 mx-5">
                                                    <img className="px-1 py-3" src={horse2} alt={"img"}/>
                                                    <div className="p-1">
                                                        <p>$ 100</p>
                                                        <p>2 year old Mare</p>
                                                        <p style={{color: "#BABABC"}}>Private Seller - 9 mi</p>
                                                    </div>
                                                </div>
                                                <div className="card shadow col-md-2 mx-5">
                                                    <img className="px-1 py-3" src={horse3} alt={"img"}/>
                                                    <div className="p-1">
                                                        <p>$ 100</p>
                                                        <p>100k Winning Stud</p>
                                                        <p style={{color: "#BABABC"}}>Private Seller - 9 mi</p>
                                                    </div>
                                                </div>
                                                <div className="card shadow col-md-2 mx-5">
                                                    <img className="px-1 py-3" src={horse4} alt={"img"}/>
                                                    <div className="p-1">
                                                        <p>$ 100</p>
                                                        <p>100k Wining Mare</p>
                                                        <p style={{color: "#BABABC"}}>Private Seller - 9 mi</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="each-slide">
                                            <div className='row justify-content-center'>
                                                <div className="card shadow col-md-2 mx-5">
                                                    <img className="px-1 py-3" src={horse1} alt={"img"}/>
                                                    <div className="p-1">
                                                        <p style={{color: "green"}}>$ 100</p>
                                                        <p>2 year old stud!</p>
                                                        <p style={{color: "#BABABC"}}>Private Seller - 9 mi</p>
                                                    </div>
                                                </div>
                                                <div className="card shadow col-md-2 mx-5">
                                                    <img className="px-1 py-3" src={horse2} alt={"img"}/>
                                                    <div className="p-1">
                                                        <p>$ 100</p>
                                                        <p>2 year old Mare</p>
                                                        <p style={{color: "#BABABC"}}>Private Seller - 9 mi</p>
                                                    </div>
                                                </div>
                                                <div className="card shadow col-md-2 mx-5">
                                                    <img className="px-1 py-3" src={horse3} alt={"img"}/>
                                                    <div className="p-1">
                                                        <p>$ 100</p>
                                                        <p>100k Winning Stud</p>
                                                        <p style={{color: "#BABABC"}}>Private Seller - 9 mi</p>
                                                    </div>
                                                </div>
                                                <div className="card shadow col-md-2 mx-5">
                                                    <img className="px-1 py-3" src={horse4} alt={"img"}/>
                                                    <div className="p-1">
                                                        <p>$ 100</p>
                                                        <p>100k Wining Mare</p>
                                                        <p style={{color: "#BABABC"}}>Private Seller - 9 mi</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Slide>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        </Styles>
    );
}

export default LandingPage;