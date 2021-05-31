import React from 'react'
import styled from 'styled-components';

const Styles = styled.div`
  .listing-item {
      background-color: white;
      box-shadow: 1px 5px 5px #5c656e;
      margin-left: 0px;
      margin-right: 0px;
      margin-top: 10px;
      margin-bottom: 10px;
    }

    .listing-img {
      height: 150px;
      width: 250px;
      margin-bottom: 15px;
    }

    .listing-title {
      margin-top: 15px;
      margin-bottom: 25px;
    }

    .listing-description {
      margin-left: 45px;
    }

    .listing-price {
      font-size: 25px;
    }

    .seller-description {
      margin-top: 20px;
      margin-bottom: 0px;
    }
`

const Listing = () => {
    return (
        <Styles>
        <div class="container-fluid">
            <div class="row listing-item">
            <div class="col-lg-12 text-uppercase listing-title">
                2020 Thor Motor Coach Quantum PD31
            </div>
            <div class="col-lg-2 text-center"><img class="listing-img" src="6.jpg" alt=""/></div>
            <div class="col-lg-3  listing-description">
                Some description.  This is just some bull text to bloat up the paragraph.

                <p class="font-weight-bold seller-description">Private-Seller</p>
                <p class="seller-location">Austin, TX</p>
            </div>
            <div class="col-lg-3"></div>
            <div class="col-lg-3 listing-price">$95000</div>

            </div>
        </div>

        </Styles>
            )
    }

export {Listing};
