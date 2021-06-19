import React from "react";
import { IoIosListBox } from "react-icons/io";
import { RiAccountCircleLine, RiSettings4Line } from "react-icons/ri";
import styled from "styled-components";

const Styles = styled.div`
  // .side-icon{
  //     height: 100%;
  //     width: 100%;
  // }
`;

let iconSettings = { size: 30 };

function ProfileSidebar() {
  return (
    <Styles>
      <div className="">
        <div className="icon-col">
          <div className="row mt-4 ml-2">
            <div className="col-md-12">
              <RiAccountCircleLine {...iconSettings} />
            </div>
            <div className="col-md-12 my-5">
              <RiSettings4Line {...iconSettings} />
            </div>
            <div className="col-md-12">
              <IoIosListBox {...iconSettings} />
            </div>
          </div>
        </div>
        <div className="text-col" style={{}}>
          <div className="row mt-4 ml-2">
            <div className="col-md-12 side-bar-text">
              <a href={"/"} className={"navbar-text"}>
                Dashboard
              </a>
            </div>
            <div className="col-md-12 my-5 side-bar-text">
              <a href={"/edit-profile"} className={"btn navbar-text"}>
                Edit Profile
              </a>
            </div>
            <div className="col-md-12 side-bar-text">
              <a href={"/manage-listings"} className={"navbar-text"}>
                Your Listings
              </a>
            </div>
          </div>
        </div>
      </div>
    </Styles>
  );
}

export default ProfileSidebar;
