import React from 'react'
import styled from 'styled-components';
import CarouselItem from '../components/carouselItem'

const Styles = styled.div`
  .footer-links {
    color: white;
  }
  `

const Carousel = () => {
    render (
        <Styles>
            <div class="carousel slide" data-ride="carousel" id="featured-carousel">
                <div class="carousel-inner">
                    <CarouselItem/>

                    <a class="carousel-control-prev " href="#featured-carousel" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#featured-carousel" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>
            </div>
        </Styles>
    )
}

export {Carousel};
