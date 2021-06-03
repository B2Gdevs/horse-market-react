import React, {useState} from 'react';
import {NavigationBar} from "../components/navbar";
import styled from "styled-components";
import {Footer} from "../components/footer";

import 'react-slideshow-image/dist/styles.css';
import {Slide} from 'react-slideshow-image';
import horse1 from '../assets/horse1.jpg';
import horse2 from '../assets/horse2.jpg';
import horse3 from '../assets/horse3.jpeg';
import horse4 from '../assets/horse4.jpg';
import 'antd/dist/antd.css';
import {AiOutlineHeart} from 'react-icons/ai';
import {HiLocationMarker} from 'react-icons/hi';
import MultiSelectFilter from "../components/FilterItems/multiSelectFilter";
import SingleSelectFilter from "../components/FilterItems/singleSelectFilter";

const Styles = styled.div`
    #matched-listings {
        font-size: 25px;
    }

    #shown-listings {
        font-size: 25px;
    }

    .sort {
        background-color: #6d7a86;
    }

    .sort-title {
        margin-top: 25px;
        padding-top: 10px;
        padding-bottom: 10px;
        background-color: #464e57;
    }

    .sort-area {
        margin-top: 15px;
    }

    .search-filter-area {
        margin-bottom: 15px;
        padding-bottom: 2px;
    }

    .featured-listings-title h4 {
        margin-top: 50px;
        margin-left: 0x;
        color: green;
    }

    .search-filter-area {
        background-color: #343A40;
    }

    .right-span {
        float: right;
    }

    .filter-text {
        color: white;
    }
    .filter-text i {
        color: #56606a;
    }

    .sort-text {
        color: white;
    }

    .filter-item-title {
        background-color: #6d7a86;
    }

    .listings-filter {
        margin: 0;
        padding: 0;
    }

    .filter-margin {
        margin-left: 10px;
        margin-right: 10px;
    }

    .filter-item-wrapper {
        padding-top: 5px;
        padding-bottom: 5px;
    }

    .filter-button {
        padding-left: 15px;
        padding-right: 15px;
        margin-top: 10px;
        margin-bottom: 10px;
    }

    .filter-item-display {
        background-color: #3f474e;
        border-top: 2px solid #343A40;
    }

    .filter-item-ack {
        font-size: 12px;
    }

    .collapse {
        margin-top: 5px;
        margin-bottom: 5px;
    }
  `
const ListingsSearch = () => {

    return (
        <Styles>
            <div className="">
                <div className="my-5">
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

                <div className="my-5 container">
                    <div className="row g-0">
                        <div className="col-md-3 mt-auto mb-3" style={{margin: 0, padding: 0}}>
                            <div className="">
                                <div className="filter-item-title">
                                    <div className="filter-item-wrapper filter-margin">
                                        <span className="filter-text">Filter</span>
                                        <span className="filter-text right-span"><i
                                            className="fa fa-trash"></i> Search</span>
                                    </div>
                                </div>
                                <MultiSelectFilter className='location'/>
                                <SingleSelectFilter className='keyword'/>
                                <SingleSelectFilter className='type'/>
                                <SingleSelectFilter className='make'/>
                                <SingleSelectFilter className='model'/>
                                <SingleSelectFilter className='trim'/>
                            </div>
                        </div>
                        <div className="col-md-9" style={{margin: 0, padding: 0}}>
                            <div className="p-3">
                                <div className="row p-3" style={{backgroundColor: "#464F58", color: "white"}}>
                                    <div className="row mx-auto">
                                        Showing 1 out of 1 Matches
                                    </div>
                                </div>
                                <div className="row p-3" style={{backgroundColor: "#6D7985", color: "white"}}>
                                    <p>Sort</p>
                                    <div className="">
                                        <p>By Distance</p>
                                        <select className="form-control" aria-label="Default select example">
                                            <option selected>Select</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3"></option>
                                        </select>
                                    </div>
                                    <div className="mx-2">
                                        <p>By Age</p>
                                        <select className="form-control" aria-label="Default select example">
                                            <option selected>Select</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3"></option>
                                        </select>
                                    </div>
                                    <div className="">
                                        <p>By Price</p>
                                        <select className="form-control" aria-label="Default select example">
                                            <option selected>Select</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3"></option>
                                        </select>
                                    </div>
                                    <div className="mx-2">
                                        <p>By Date Listed</p>
                                        <select className="form-control" aria-label="Default select example">
                                            <option selected>Select</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3"></option>
                                        </select>
                                    </div>
                                </div>
                                <div className="row p-4" style={{backgroundColor: "black"}}>
                                    <div className="col-md-12 p-5" style={{backgroundColor: "white"}}>
                                        <div className="row">
                                            <p className={"mr-auto"}>100K WINNING STUD</p>
                                            <p>$5000</p>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-4">
                                                <img className="" src={horse1} alt={"img"}/>
                                                <AiOutlineHeart/>
                                            </div>
                                            <div className="col-md-6 offset-md-1">
                                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                                                    industry. Lorem Ipsum has been the industry's standard dummy text
                                                    ever since the 1500s, when an unknown printer took a galley of type
                                                    and scrambled it to make a type specimen book. It has survived not
                                                    only five centuries, but also the leap into electronic typesetting,
                                                    remaining essentially unchanged. It was popularised in the 1960s
                                                    with the release of Letraset sheets containing Lorem Ipsum passages,
                                                    and more recently with desktop publishing software like Aldus
                                                    PageMaker including versions of Lorem Ipsum.</p>
                                                <h5>Private-Seller</h5>
                                                <p>Austin, TX <span><HiLocationMarker/></span></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Styles>

    );
}
export default ListingsSearch;