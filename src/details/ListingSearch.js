import React, { useState } from "react";
import { NavigationBar } from "../components/navbar";
import styled from "styled-components";
import { Footer } from "../components/footer";

import "react-slideshow-image/dist/styles.css";
import { Slide } from "react-slideshow-image";
import horse1 from "../assets/horse1.jpg";
import horse2 from "../assets/horse2.jpg";
import horse3 from "../assets/horse3.jpeg";
import horse4 from "../assets/horse4.jpg";
import "antd/dist/antd.css";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { HiLocationMarker } from "react-icons/hi";
import MultiSelectFilter from "../components/FilterItems/multiSelectFilter";
import SingleSelectFilter from "../components/FilterItems/singleSelectFilter";
import SlideData from "./SlideData";

const Styles = styled.div`
  #matched-listings {
    font-size: 25px;
  }

  #shown-listings {
    font-size: 25px;
  }

  .sort {
    background-color: #6d7a86;
  }

  .sort-title {
    margin-top: 25px;
    padding-top: 10px;
    padding-bottom: 10px;
    background-color: #464e57;
  }

  .sort-area {
    margin-top: 15px;
  }

  .search-filter-area {
    margin-bottom: 15px;
    padding-bottom: 2px;
  }

  .featured-listings-title h4 {
    margin-top: 50px;
    margin-left: 0x;
    color: green;
  }

  .search-filter-area {
    background-color: #343a40;
  }

  .right-span {
    float: right;
  }

  .filter-text {
    color: white;
  }
  .filter-text i {
    color: #56606a;
  }

  .sort-text {
    color: white;
  }

  .filter-item-title {
    background-color: #6d7a86;
  }

  .listings-filter {
    margin: 0;
    padding: 0;
  }

  .filter-margin {
    margin-left: 10px;
    margin-right: 10px;
  }

  .filter-item-wrapper {
    padding-top: 5px;
    padding-bottom: 5px;
  }

  .filter-button {
    padding-left: 15px;
    padding-right: 15px;
    margin-top: 10px;
    margin-bottom: 10px;
  }

  .filter-item-display {
    background-color: #3f474e;
    border-top: 2px solid #343a40;
  }

  .filter-item-ack {
    font-size: 12px;
  }

  .collapse {
    margin-top: 5px;
    margin-bottom: 5px;
  }

  .matches {
    background-color: #464f58;
    color: white;
  }

  .sort {
    background-color: #6d7985;
    color: white;
  }

  .listing-area {
    background-color: black;
  }
  .listing-content {
    background-color: white;
  }
  .horse-section {
    margin: 0;
    padding: 0;
  }
  .search-section {
    margin: 0;
    padding: 0;
  }
`;
const ListingsSearch = () => {
  const [liked, setLiked] = useState(false);

  // Array of Object for horse data to map

  let horsePayload = [
    {
      image: horse1,
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been theindustry's standard dummy text ever since the 1500s, when an unknown printer took a galley oftype and scrambled it to make a type specimen book. It has survived not only five centuries, butalso the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
      age: 2,
      sex: "male",
      location: "Private Seller - 9 mi",
      price: 30,
      distance: 200,
      dateListed: "01-june-2021",
      discipline: "discipline1",
      dam: "dam1",
      sire: "sire1",
      location: "texas usa",
      breadingCapable: "breadingCapabale1",
    },
    {
      image: horse2,
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been theindustry's standard dummy text ever since the 1500s, when an unknown printer took a galley oftype and scrambled it to make a type specimen book. It has survived not only five centuries, butalso the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
      age: 3,
      sex: "female",
      location: "Private Seller - 9 mi",
      price: 31,
      distance: 250,
      dateListed: "10-june-2021",
      discipline: "discipline2",
      dam: "dam2",
      sire: "sire2",
      location: "los angles usa",
      breadingCapable: "breadingCapabale2",
    },
    {
      image: horse3,
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been theindustry's standard dummy text ever since the 1500s, when an unknown printer took a galley oftype and scrambled it to make a type specimen book. It has survived not only five centuries, butalso the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
      age: 4,
      sex: "male",
      location: "Private Seller - 9 mi",
      price: 32,
      distance: 270,
      discipline: "discipline3",
      dateListed: "12-june-2021",
      dam: "dam3",
      sire: "sire3",
      location: "firefield usa",
      breadingCapable: "breadingCapabale3",
    },
    {
      image: horse4,
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been theindustry's standard dummy text ever since the 1500s, when an unknown printer took a galley oftype and scrambled it to make a type specimen book. It has survived not only five centuries, butalso the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
      age: 5,
      sex: "female",
      location: "Private Seller - 9 mi",
      price: 33,
      distance: 300,
      discipline: "discipline4",
      dateListed: "13-june-2021",
      dam: "dam4",
      sire: "sire4",
      location: "newyork usa",
      breadingCapable: "breadingCapabale4",
    },
  ];

  const [horseData, setHorseData] = useState(horsePayload);

  const filterSorting = (e) => {
    console.log(e.target.value, e.target.name, horseData);
    if (e.target.name === "distance") {
      let sortedDistanceArray = horsePayload.filter(
        (horse) => horse.distance == e.target.value
      );
      setHorseData(sortedDistanceArray);
    }
    if (e.target.name === "age") {
      let sortedDistanceArray = horsePayload.filter(
        (horse) => horse.age == e.target.value
      );
      setHorseData(sortedDistanceArray);
    }
    if (e.target.name === "price") {
      let sortedDistanceArray = horsePayload.filter(
        (horse) => horse.price == e.target.value
      );
      setHorseData(sortedDistanceArray);
    }
    if (e.target.name === "dateListed") {
      let sortedDistanceArray = horsePayload.filter(
        (horse) => horse.dateListed == e.target.value
      );
      setHorseData(sortedDistanceArray);
    }
  };

  return (
    <Styles>
      <div className="">
        <div className="my-5">
          <Slide>
            <SlideData horseData={horseData} />
            <SlideData horseData={horseData} />
            <SlideData horseData={horseData} />
          </Slide>
        </div>

        <div className="my-5 container">
          <div className="row">
            <div className="col-md-3 mt-auto mb-3 search-section">
              <div className="">
                <div className="filter-item-title">
                  <div className="filter-item-wrapper filter-margin">
                    <span className="filter-text">Filter</span>
                    <span className="filter-text right-span">
                      <i className="fa fa-trash"></i> Search
                    </span>
                  </div>
                </div>
                <SingleSelectFilter
                  horsePayload={horsePayload}
                  setHorseData={setHorseData}
                  className="keyword"
                  keyWord={"keyword-collapse-1"}
                  name={"Location"}
                />
                <SingleSelectFilter
                  horsePayload={horsePayload}
                  setHorseData={setHorseData}
                  className="keyword"
                  keyWord={"keyword-collapse-2"}
                  name={"Dam"}
                />
                <SingleSelectFilter
                  horsePayload={horsePayload}
                  setHorseData={setHorseData}
                  className="type"
                  keyWord={"keyword-collapse-3"}
                  name={"Sire"}
                />
                <SingleSelectFilter
                  horsePayload={horsePayload}
                  setHorseData={setHorseData}
                  className="make"
                  keyWord={"keyword-collapse-4"}
                  name={"Age"}
                />
                <SingleSelectFilter
                  horsePayload={horsePayload}
                  setHorseData={setHorseData}
                  className="model"
                  keyWord={"keyword-collapse-5"}
                  name={"Sex"}
                />
                <SingleSelectFilter
                  horsePayload={horsePayload}
                  setHorseData={setHorseData}
                  className="trim"
                  keyWord={"keyword-collapse-6"}
                  name={"Price"}
                />
                <SingleSelectFilter
                  horsePayload={horsePayload}
                  setHorseData={setHorseData}
                  className="model"
                  keyWord={"keyword-collapse-7"}
                  name={"Discipline"}
                />
                <SingleSelectFilter
                  horsePayload={horsePayload}
                  setHorseData={setHorseData}
                  className="trim"
                  keyWord={"keyword-collapse-8"}
                  name={"BreadingCapable"}
                />
                <button
                  type="submit"
                  className="btn btn-danger"
                  onClick={(e) => setHorseData(horsePayload)}
                >
                  Reset
                </button>
              </div>
            </div>
            <div className="col-md-9 horse-section">
              <div className="p-3">
                <div className="row p-3 matches">
                  <div className="row mx-auto">Showing 1 out of 1 Matches</div>
                </div>
                <div className="row p-3 sort">
                  <p>Sort</p>
                  <div className="">
                    <p>By Distance</p>
                    <select
                      className="form-control"
                      aria-label="Default select example"
                      onChange={filterSorting}
                      name="distance"
                    >
                      <option selected>Select</option>
                      {horsePayload.map((horse) => (
                        <option value={horse.distance}>{horse.distance}</option>
                      ))}
                    </select>
                  </div>
                  <div className="mx-2">
                    <p>By Age</p>
                    <select
                      className="form-control"
                      aria-label="Default select example"
                      onChange={filterSorting}
                      name="age"
                    >
                      <option selected>Select</option>
                      {horsePayload.map((horse) => (
                        <option value={horse.age}>{horse.age}</option>
                      ))}
                    </select>
                  </div>
                  <div className="">
                    <p>By Price</p>
                    <select
                      className="form-control"
                      aria-label="Default select example"
                      onChange={filterSorting}
                      name="price"
                    >
                      <option selected>Select</option>
                      {horsePayload.map((horse) => (
                        <option value={horse.price}>{horse.price}</option>
                      ))}
                    </select>
                  </div>
                  <div className="mx-2">
                    <p>By Date Listed</p>
                    <select
                      className="form-control"
                      aria-label="Default select example"
                      onChange={filterSorting}
                      name="dateListed"
                    >
                      <option selected>Select</option>
                      {horsePayload.map((horse) => (
                        <option value={horse.dateListed}>
                          {horse.dateListed}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="row p-4 listing-area">
                  <div className="col-md-12 p-5 listing-content">
                    {horseData.map((horse) => (
                      <span>
                        <div className="row">
                          <p className={"mr-auto"}>100K WINNING STUD</p>
                          <p>${horse.price}</p>
                        </div>
                        <div className="row">
                          <div className="col-md-4">
                            <img className="" src={horse1} alt={"img"} />
                            {liked ? (
                              <AiFillHeart
                                onClick={() => {
                                  setLiked(!liked);
                                }}
                              />
                            ) : (
                              <AiOutlineHeart
                                onClick={() => {
                                  setLiked(!liked);
                                }}
                              />
                            )}
                          </div>
                          <div className="col-md-6 offset-md-1">
                            <p>{horse.desc}</p>
                            <h5>Private-Seller</h5>
                            <p>
                              {horse.location.toUpperCase()}
                              <span>
                                <HiLocationMarker />
                              </span>
                            </p>
                          </div>
                        </div>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Styles>
  );
};
export default ListingsSearch;
