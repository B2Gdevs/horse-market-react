import React, {render} from 'react'
import styled from 'styled-components';

const Styles = styled.div`
  .footer-links {
    color: white;
  }
  `

const SingleSelectFilter = () => {
    return (
        <Styles>
        <div className="filter-item-display filter-item-keyword">
        <div className="filter-item-wrapper filter-margin">
            <a href="#keyword-collapse" data-toggle="collapse" className="filter-text">Keyword -
                <span className="filter-text filter-item-ack">someKeyword</span>
                <span className="filter-text right-span"><i className="fa fa-chevron-down"></i></span>
            </a>
            <div id="keyword-collapse" className="collapse filter-margin">
                <form>
                    <div className="form-row">
                        <input type="text" className="form-control form-inline" id="search-keyword" placeholder="Enter Keyword"/>
                        <button type="submit" className="btn btn-success filter-button">Filter</button>
                    </div>
                </form>
            </div>
        </div>
        </div>
        </Styles>
)}

export default SingleSelectFilter;