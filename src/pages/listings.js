import React from 'react'
import styled from 'styled-components';
import MultiSelectFilter from "../components/FilterItems/multiSelectFilter";
import SingleSelectFilter from "../components/FilterItems/singleSelectFilter";
import RangeFilter from "../components/FilterItems/rangeFilter";
import {Footer} from '../components/footer';
import {NavigationBar} from '../components/navbar';

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

class Listings extends React.Component {
    render() {
        return (
            <Styles>
                <div className="row search-filter-area">
                    <div className="col-lg-3 listings-filter">


                        <div className="row sort-area">
                            <div className="col-lg-3"></div>
                            <div className="col-lg-9 text-center sort-title">
                                <h5 className="filter-text">Showing <span id="shown-listings">1</span> out of <span
                                    id="matched-listings">1</span> Matches</h5>
                            </div>
                            <div className="col-lg-3"></div>
                            <div className="col-lg-9 sort">
                                <div className="row">
                                    <div className="col-lg-1 sort-text">Sort:</div>
                                    <div className="col-lg-10">
                                        <form>
                                            <div className="form-row">
                                                <div className="form-group">
                                                    <label className="sort-text" for="sort-distance">By Distance</label>
                                                    <select id="sort-distance" className="form-control">
                                                        <option selected>Select</option>
                                                        <option>Highest to Lowest</option>
                                                        <option>Lowest to Highest</option>
                                                    </select>
                                                </div>
                                                <div className="form-group">
                                                    <label className="sort-text" for="sort-year">By Year</label>
                                                    <select id="sort-year" className="form-control">
                                                        <option selected>Select</option>
                                                        <option>Newest to Oldest</option>
                                                        <option>Oldest to Newest</option>
                                                    </select>
                                                </div>
                                                <div className="form-group">
                                                    <label className="sort-text" for="sort-price">By Price</label>
                                                    <select id="sort-price" className="form-control">
                                                        <option selected>Select</option>
                                                        <option>Highest to Lowest</option>
                                                        <option>Lowest to Highest</option>
                                                    </select>
                                                </div>
                                                <div className="form-group">
                                                    <label className="sort-text" for="sort-date">By Date Listed</label>
                                                    <select id="sort-date" className="form-control">
                                                        <option selected>Select</option>
                                                        <option>Newest to Oldest</option>
                                                        <option>Oldest to Newest</option>
                                                    </select>
                                                </div>
                                            </div>

                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="filter-item-title">
                            <div className="filter-item-wrapper filter-margin">
                                <span className="filter-text">Filter</span>
                                <span className="filter-text right-span"><i className="fa fa-trash"></i> Search</span>
                            </div>
                        </div>
                        <MultiSelectFilter className='location'/>
                        <SingleSelectFilter className='keyword'/>
                        <SingleSelectFilter className='type'/>
                        <SingleSelectFilter className='make'/>
                        <SingleSelectFilter className='model'/>
                        <SingleSelectFilter className='trim'/>
                        <RangeFilter className='price-range'/>
                        <SingleSelectFilter className='usage'/>
                        <SingleSelectFilter className='year'/>
                        <SingleSelectFilter className='seller-type'/>
                        <RangeFilter className='mile-range'/>
                        <RangeFilter className='length-range'/>
                        <SingleSelectFilter className='fuel-type'/>
                        <RangeFilter className='weight-range'/>
                        <RangeFilter className='sleep-range'/>
                        <RangeFilter className='slides-range'/>
                        <SingleSelectFilter className='state'/>
                        <SingleSelectFilter className='city'/>


                    </div>

                </div>
            </Styles>
        )
    }
}

export {Listings};