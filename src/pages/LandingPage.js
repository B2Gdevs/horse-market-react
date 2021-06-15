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
import {Link} from "react-router-dom";
import SlideData from "../details/SlideData";


const Styles = styled.div`
    .sidenav {
        opacity:0.8;
        background-color:#808080;
        width:20%;
        height:700px;
        overflow: auto;
        color: white;
    }
    .mainarea {
        opacity:0.8;
        width:100%;
        height:700px;
        overflow: auto;
    }
    .page-wrapper {
        position : relative;
        overflow: auto;
    }
    .top-section {
        background-color: #E9ECEF;
    }
    .horse-heading {
        font-weight: lighter;
    }
    .feature-listing-heading {
        color: #348824;
    }
`

const LandingPage = () => {
    const horseData = [
        {
            image: horse1,
            desc: "2 year old stud!",
            location: "Private Seller - 9 mi",
            price: "$ 29"
        },
        {
            image: horse2,
            desc: "2 year old stud!",
            location: "Private Seller - 9 mi",
            price: "$ 29"
        }
        , {
            image: horse3,
            desc: "2 year old stud!",
            location: "Private Seller - 9 mi",
            price: "$ 29"
        }
        , {
            image: horse4,
            desc: "2 year old stud!",
            location: "Private Seller - 9 mi",
            price: "$ 29"
        }
    ]

    function Slides({horseData, pagination}) {
        console.log('uass')
        let slideCode = []
        for(let i=0; i<Math.ceil(horseData.length/pagination); i=i+pagination) {
            slideCode.push(<SlideData horseData={horseData.slice(i, i+pagination)}/>)
        }
        return slideCode
    }
    return (
        <Styles>
            <div className="">
                <div className="d-flex page-wrapper">
                    <div className="sidenav p-4">
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
                        <div className="p-5 top-section">
                            <div className="row">
                                <div className="col-md-12">
                                    <h1 className={"horse-heading"}>Horse Market</h1>
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
                                    <h4 className={"feature-listing-heading"}>Featured Listings</h4>
                                </div>
                                <div className="col-md-12">
                                    <Slide>
                                        <Slides horseData={horseData} pagination={2} />
                                    </Slide>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </Styles>
    );
}

export default LandingPage;

