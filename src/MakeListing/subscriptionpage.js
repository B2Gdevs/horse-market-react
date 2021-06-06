import React from 'react';
import {NavigationBar} from "../components/navbar";
import styled from "styled-components";
import {Footer} from "../components/footer";

const Styles = styled.div`
    .card-header-text h1,h5{
        color: #2E64EE !important;
    }
    .choose-plan {
        color: #2E64EE;
        text-align: center
    }
    .choose-plan a {
        text-decoration: none;
    }
    .choose-plan:hover {
        color: white;
        background-color:green
    }
    .breadcrumb-text {
        color: #5A9AD6;
   }
   .progress-bar {
        width: 100%
   }
   .progress {
        height: 5px
   }    
`

const SubscriptionPage = () => {
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
                <div className="container my-5">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="card shadow pt-5">

                                <div className="text-center px-5 card-header-text">
                                    <h5>Basic</h5>
                                    <h1>$ 1 Per Month</h1>
                                    <h5>End Subscription whenever you want</h5>
                                </div>

                                <ul className="list-group mt-4">
                                    <li className="list-group-item">6 Photos</li>
                                    <li className="list-group-item">Basic Listing feature</li>
                                    <a href={"/buy-listing"} style={{textDecoration: "none"}}>
                                        <li className="list-group-item choose-plan">Choose Plan
                                        </li>
                                    </a>
                                </ul>

                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card shadow pt-5 ">

                                <div className="text-center px-5 card-header-text">
                                    <h5>Upcoming Plan</h5>
                                    <h1>$ 5 Per Month</h1>
                                    <h5>End Subscription whenever you want</h5>
                                </div>

                                <ul className="list-group mt-4">
                                    <li className="list-group-item">Youtube video link space</li>
                                    <li className="list-group-item">10 Photos</li>
                                    <li className="list-group-item">Basic listing features</li>
                                    <a href={"/buy-listing"} style={{textDecoration: "none"}}>
                                        <li className="list-group-item choose-plan">Choose Plan
                                        </li>
                                    </a>
                                </ul>

                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card shadow pt-5">

                                <div className="text-center px-5 card-header-text">
                                    <h5>Upcoming Plan</h5>
                                    <h1>$ 10 Per Month</h1>
                                    <h5>End Subscription whenever you want</h5>
                                </div>

                                <ul className="list-group mt-4">
                                    <li className="list-group-item">Featured Ad space</li>
                                    <li className="list-group-item">Multiple Youtube Video Link Space</li>
                                    <li className="list-group-item">20 Photos</li>
                                    <li className="list-group-item">Basic listing features</li>
                                    <a href={"/buy-listing"} style={{textDecoration: "none"}}>
                                        <li className="list-group-item choose-plan">Choose Plan
                                        </li>
                                    </a>
                                </ul>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </Styles>
    );

}

export default SubscriptionPage;