import React from 'react';
import styled from "styled-components";

const Styles = styled.div`
    .horse-price {
        color: green;
    }
    .horse-desc {
        color: #BABABC;
    }
`

const SlideData = ({horseData}) => {
    return (
        <Styles>
            <div className="each-slide">
                <div className='row justify-content-center'>
                    {horseData.map((item) => (
                        <div className="card shadow col-md-2 mx-5">
                            <img className="px-1 py-3" src={item.image} alt={"img"}/>
                            <div className="p-1">
                                <p className={"horse-price"}>{item.price}</p>
                                <p>{item.text}</p>
                                <p className={"horse-desc"}>{item.location}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Styles>
    );
}

export default SlideData;
