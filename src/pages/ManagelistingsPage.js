import React, { useState } from "react";
import styled from "styled-components";
import horse1 from "../assets/horse1.jpg";
import { Modal } from "antd";
import ProfileSidebar from "../components/ProfileSideBar";

const Styles = styled.div`
    .sidenav {
        opacity:0.8;
        width:20%;
        height:700px;
        overflow: auto;
    }
    .mainarea {
        opacity:0.8;
        width:100%;
        height:700px;
        overflow: auto;
    }
    .side-bar-text {
        color: white
        font-size: 18px;
    }
        .navbar-icons {
        width: 30px; 
        height: 30px;
    }
    .navbar-text {
        margin: 0; 
        padding: 0;        
    }
    .icon-col {
        height: 700px; 
        width: 30%; 
        background-color: #343A40;
    }
    .text-col {
        height: 700px; 
        width: 50%; 
        background-color: #329329;
    }
    .search-button {
        border: 1px solid black;
    }
    .edit-button {
        color: #359328;
    }
    .delete-button {
        color:red;
    }
`;
const ManageListing = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const content = [
    {
      image: horse1,
      title: "Cras justo odio",
      listingType: "Dapibus ac facilisis in",
      price: "Morbi leo risus",
    },
    {
      image: horse1,
      title: "Cras justo odio",
      listingType: "Dapibus ac facilisis in",
      price: "Morbi leo risus",
    },
    {
      image: horse1,
      title: "Cras justo odio",
      listingType: "Dapibus ac facilisis in",
      price: "Morbi leo risus",
    },
  ];
  return (
    <Styles>
      <div className="">
        <div className="d-flex">
          <ProfileSidebar />

          <div className="mainarea pt-5">
            <div className="container my-5">
              <div className="text-center">
                <h1>Manage Your Listings</h1>
                <p>
                  Here you can manage your listings such as editing or deleting
                </p>
              </div>

              <div className="row">
                <div className="mr-auto d-flex">
                  <input
                    placeholder={"Search Listings"}
                    className={"form-control"}
                  />
                  <button className={"btn search-button"}>Search</button>

                  <button className={"btn btn-success ml-3 w-100"}>
                    Create a listing
                  </button>
                </div>
                <div className="">
                  <p>Number of active listings: 8</p>
                </div>
              </div>

              <div className="row my-3">
                {content.map((data) => (
                  <div className="col-md-4">
                    <div className="card shadow">
                      <img className="px-1 py-3" src={data.image} alt={"img"} />
                      <ul className="list-group">
                        <li className="list-group-item">{data.title}</li>
                        <li className="list-group-item">{data.listingType}</li>
                        <li className="list-group-item">{data.price}</li>
                        <li className="list-group-item">
                          <div className="row">
                            <div className="col-md-6 text-center border-right">
                              <button className={"btn edit-button"}>
                                Edit Listing
                              </button>
                            </div>
                            <div className="col-md-6 text-center">
                              <button
                                className={"btn delete-button"}
                                onClick={showModal}
                              >
                                Delete
                              </button>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                ))}
              </div>

              <Modal
                title=""
                visible={isModalVisible}
                onOk={handleOk}
                onCancel={handleCancel}
              >
                <div className="text-center">
                  <p>
                    Are you sure you want to delete
                    <br /> "Horse Name" Listing?
                  </p>
                  <p>
                    Once you delete this listing your subscription for this ad
                    will be cancelled and the listing information will not be
                    able to be recovered
                  </p>
                </div>
              </Modal>
            </div>
          </div>
        </div>
      </div>
    </Styles>
  );
};

export default ManageListing;
