import React from 'react';
import styled from "styled-components";

const Styles = styled.div`
    .horse-price {
        color: green;
    }
    .horse-desc {
        color: #BABABC;
    }
    img {
        object-fit: cover;
        height: 300px;
        Width: 300px;
      }
`

const SlideData = ({horseData}) => (
    <Styles>
        <div className="card shadow">
            <img src={horseData.image} alt={""} />
            <div className="p-1">
                <p className={"horse-price"}>{horseData.price}</p>
                <p>{horseData.desc}</p>
                <p className={"horse-desc"}>{horseData.location}</p>
            </div>
        </div>
    </Styles>
)

export default SlideData;
