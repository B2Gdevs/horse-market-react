import React, {render} from 'react'
import styled from 'styled-components';

const Styles = styled.div`
  .footer-links {
    color: white;
  }
  `

const RangeFilter = () => {
    return (
        <Styles>
                <div className="filter-item-display filter-item-price">
                    <div className="filter-item-wrapper filter-margin">
                        <a href="#price-collapse" data-toggle="collapse" className="filter-text">Price -
                            <span className="filter-text filter-item-ack">thePriceRange</span>
                            <span className="filter-text right-span"><i className="fa fa-chevron-down"></i></span>
                        </a>
                        <div id="price-collapse" className="collapse filter-margin">
                            <form>
                                <div className="form-row">
                                    <div className="form-group">
                                        <label className="filter-text" for="price-min">Min</label>
                                        <input id="price-min" type="number"/>
                                    </div>
                                    <div className="form-group">
                                        <label className="filter-text" for="price-max">Max</label>
                                        <input id="price-max" type="number"/>
                                    </div>
                                    <button type="submit" className="btn btn-success filter-button">Filter</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
        </Styles>
    )}

export default RangeFilter;