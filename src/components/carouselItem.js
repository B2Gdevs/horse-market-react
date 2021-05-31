

import React from 'react'
import styled from 'styled-components';

const Styles = styled.div`
  .footer-links {
    color: white;
  }
  `

const CarouselItem = () => {
    render (
        <Styles>
            <div class="carousel-item active">

            <div class="col-lg-3">
                <div class="featured-listing">
                    <div class="row">
                        <div class="col-lg-12">
                            <img class="featured-image" src="6.jpg" alt=""/>

                        </div>
                        <div class="col-lg-12">
                            <div class="featured-price">$100</div>
                        </div>
                        <div class="col-lg-12">
                            <div class="featured-make-model">2019 Winnebago 27</div>
                        </div>
                        <div class="col-lg-12">
                            <div class="featured-seller-plus-distance">Private-Seller - 9 mi</div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </Styles>
    )
    }

export {CarouselItem};