import React, {render} from 'react'
import styled from 'styled-components';

const Styles = styled.div`
  .footer-links {
    color: white;
  }
  `

const MultiSelectFilter = () => {
    return (
        <Styles>
            <div className="filter-item-display filter-item-location">
                <div className="filter-item-wrapper filter-margin">
                    <a href="#location-collapse" data-toggle="collapse" className="filter-text">Location -
                        <span className="filter-text filter-item-ack">Nationwide</span>
                        <span className="filter-text right-span"><i className="fa fa-chevron-down"></i></span>
                    </a>
                    <div id="location-collapse" className="collapse filter-margin">
                        <form>
                            <div className="form-row">
                                <select id="select-distance" className="form-control">
                                    <option selected>Distance</option>
                                    <option>...</option>
                                </select>
                                <input type="number" className="form-control form-inline" id="search-keyword" placeholder="Zipcode"/>
                                <button type="submit" className="btn btn-success filter-button">Filter</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </Styles>
    )}

export default MultiSelectFilter;