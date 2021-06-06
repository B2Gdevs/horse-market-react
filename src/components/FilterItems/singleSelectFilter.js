import React, {render} from 'react'
import styled from 'styled-components';

const Styles = styled.div`
  .footer-links {
    color: white;
  }
  `

const SingleSelectFilter = ({keyWord, name}) => {
    return (
        <Styles>
            <div className="filter-item-display filter-item-keyword">
                <div className="filter-item-wrapper filter-margin">
                    <a href={`#${keyWord}`} data-toggle="collapse" className="filter-text">{name} -
                        <span className="filter-text filter-item-ack">someKeyword</span>
                        <span className="filter-text right-span"><i className="fa fa-chevron-down"></i></span>
                    </a>
                    <div id={`${keyWord}`} className="collapse filter-margin">
                        <form>
                            <div className="row">
                                <div className="col-md-8">
                                    <input type="text" className="form-control form-inline" id="search-keyword"
                                           placeholder="Enter Keyword"/>
                                </div>
                                <div className="col-md-4">
                                    <button type="submit" className="btn btn-success">Filter</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </Styles>
    )
}

export default SingleSelectFilter;

