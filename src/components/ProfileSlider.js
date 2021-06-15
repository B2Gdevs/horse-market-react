import React from 'react';
import computer from "../assets/computer.jpg";
import avatar from "../assets/avatar.jpg";
import list from "../assets/list.jpg";
import styled from "styled-components";


const ProfileSlider = () => {
    return (
        <>
            <div className="sidenav d-flex">
                <div className="icon-col" style={{}}>
                    <div className="row mt-4 ml-2">
                        <div className="col-md-12">
                            <img className={"navbar-icons"} src={computer}/>
                        </div>
                        <div className="col-md-12 my-5">
                            <img className={"navbar-icons"} src={avatar}/>
                        </div>
                        <div className="col-md-12">
                            <img className={"navbar-icons"} src={list}/>
                        </div>
                    </div>
                </div>
                <div className="text-col" style={{}}>
                    <div className="row mt-4 ml-2">
                        <div className="col-md-12 side-bar-text">
                            <a href={"/"} className={"navbar-text"}>Dashboard</a>
                        </div>
                        <div className="col-md-12 my-5 side-bar-text">
                            <a href={"/edit-profile"} className={"btn navbar-text"}>Edit Profile</a>
                        </div>
                        <div className="col-md-12 side-bar-text">
                            <a href={"/manage-listings"} className={"navbar-text"}>Your Listings</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProfileSlider;
