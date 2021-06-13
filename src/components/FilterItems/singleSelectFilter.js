import React, { useState, render } from "react";
import styled from "styled-components";

const Styles = styled.div`
  .footer-links {
    color: white;
  }
`;

const SingleSelectFilter = ({ keyWord, name, horsePayload, setHorseData }) => {
  const [value, setValue] = useState();
  const filterSorting = (e) => {
    e.preventDefault();
    console.log(value, name);
    if (name === "Location") {
      let sortedDistanceArray = horsePayload.filter(
        (horse) => horse.location == value
      );
      setHorseData(sortedDistanceArray);
    }
    if (name === "Dam") {
      let sortedDistanceArray = horsePayload.filter(
        (horse) => horse.dam == value
      );
      setHorseData(sortedDistanceArray);
    }
    if (name === "Sire") {
      let sortedDistanceArray = horsePayload.filter(
        (horse) => horse.sire == value
      );
      setHorseData(sortedDistanceArray);
    }
    if (name === "Age") {
      let sortedDistanceArray = horsePayload.filter(
        (horse) => horse.age == value
      );
      setHorseData(sortedDistanceArray);
    }
    if (name === "Sex") {
      let sortedDistanceArray = horsePayload.filter(
        (horse) => horse.sex == value
      );
      setHorseData(sortedDistanceArray);
    }
    if (name === "Price") {
      let sortedDistanceArray = horsePayload.filter(
        (horse) => horse.price == value
      );
      setHorseData(sortedDistanceArray);
    }
    if (name === "Discipline") {
      let sortedDistanceArray = horsePayload.filter(
        (horse) => horse.discipline == value
      );
      setHorseData(sortedDistanceArray);
    }
    if (name === "BreadingCapable") {
      let sortedDistanceArray = horsePayload.filter(
        (horse) => horse.breadingCapable == value
      );
      setHorseData(sortedDistanceArray);
    }
  };
  return (
    <Styles>
      <div className="filter-item-display filter-item-keyword">
        <div className="filter-item-wrapper filter-margin">
          <a
            href={`#${keyWord}`}
            data-toggle="collapse"
            className="filter-text"
          >
            {name} -
            <span className="filter-text filter-item-ack">someKeyword</span>
            <span className="filter-text right-span">
              <i className="fa fa-chevron-down"></i>
            </span>
          </a>
          <div id={`${keyWord}`} className="collapse filter-margin">
            <form>
              <div className="row">
                <div className="col-md-8">
                  <input
                    type="text"
                    className="form-control form-inline"
                    id="search-keyword"
                    placeholder="Enter Keyword"
                    onChange={(e) => setValue(e.target.value)}
                  />
                </div>
                <div className="col-md-4">
                  <button
                    type="submit"
                    className="btn btn-success"
                    onClick={(e) => filterSorting(e)}
                  >
                    Filter
                  </button>
                </div>
              </div>
            </form>
            
          </div>
        </div>
      </div>
    </Styles>
  );
};

export default SingleSelectFilter;
