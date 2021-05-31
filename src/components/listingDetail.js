import React from 'react'
import styled from 'styled-components';
import { Carousel } from './carousel';
import { CarouselItem } from './carouselItem';

const Styles = styled.div`
    .right-span {
        float: right;
    }

    .listing-detail-media-info {
        padding-top: 20px;
        padding-bottom: 20px;
        background-color: #343A40;
        color: white;
    }

    .listing-detail-heading {
        margin-top: 60px;
        margin-bottom: 60px;
    }

    .listing-detail-title {
        font-size: 22px;
    }

    .listing-detail-price {
        font-size: 27px;
    }

    .listing-detail-content {
        margin-top: 40px;
        margin-bottom: 40px;
    }

    .listing-detail-content-dark {
        background-color: #ced3d8;
    }

    .listing-detail-content-heading {
        margin-top: 20px;
        margin-bottom: 20px;
    }

    .listing-detail-content-description {
        margin-top: 20px;
        margin-bottom: 20px;
    }

    .listing-detail-content-item-title {
        margin-bottom: 10px;
    }
`

const ListingDetail = () => {
    return (
      <Styles>

<div class="container">
        <div class="row listing-detail-heading">
            <div class="col-lg-12 text-center">
                <div class="listing-detail-title">2020 Heartland MILESTONE 379FLML - <span class="listing-detail-title-price">$51,995</span></div>
                <div class="listing-detail-title-distance">New Fifth Wheel In Breaux Bridge, LA 70517 - 369 Miles Away</div>
            </div>
        </div>
        <div class="row listing-detail-content">
            <div class="col-lg-12">
                <Carousel>
                    <CarouselItem/>
                </Carousel>
                <div class="col-lg-12 text-center listing-detail-media-info">Picture: <span id="image-tracker"></span></div>
            </div>
            <div class="col-lg-12 listing-detail-content-heading">
                <h3>Details</h3>
            </div>

            <div class="col-lg-6 listing-detail-content-dark">
                <span class="font-weight-bold listing-detail-content-item-title">Condition:</span>
                New
            </div>
            <div class="col-lg-6 listing-detail-content-dark">
                <span class="font-weight-bold listing-detail-content-item-title">Stock Number:</span>
                30666
            </div>
            <div class="col-lg-6 listing-detail-content-light">
                <span class="font-weight-bold listing-detail-content-item-title">Year:</span>
                2020
            </div>
            <div class="col-lg-6 listing-detail-content-light">
                <span class="font-weight-bold listing-detail-content-item-title">VIN:</span>
                5SFMG4420LE417137
            </div>

            <div class="col-lg-12 listing-detail-content-description">
                <div class="font-weight-bold listing-detail-content-item-title">DESCRIPTION:</div>
                <div>
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                </div>
            </div>
            <div class="col-lg-12 text-center">
                <button class='btn btn-success' data-toggle="modal" data-target="#emailModal">
                    <i class="fa fa-envelope"></i> Contact Seller
                </button>
            </div>

            <div class="modal fade" id="emailModal">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">Message Seller</h5>
                        </div>
                        <div class="modal-body">
                            <form action="POST" id="email-form">
                                <div class="form-group">
                                    <label for="email-sender-email">Email:</label>
                                    <input type="email" class="form-control" id="email-sender-email" placeholder="name@example.com"/>
                                </div>
                                <div class="form-group">
                                    <label for="email-message">Message:</label>
                                    <textarea class="form-control" name="email-message" id="email-message" placeholder="Your message here..."></textarea>
                                </div>
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button class="btn btn-success" type="submit" form="email-form">Send <i class="fa fa-envelope"></i></button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>

      </Styles>
    )}

export {ListingDetail};