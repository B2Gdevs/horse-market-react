import React, {useState} from 'react'
import ReactVivus from 'react-vivus';
import styled from 'styled-components';
import svg from '../assets/RV_Market_Logo.svg';
import {Link, useLocation} from 'react-router-dom';


// Logo
const Logo = () => (
    <ReactVivus
        id="logo"
        option={{
            file: svg,
            type: 'delayed',
            animTimingFunction: 'EASE',
            duration: 250
        }}
    />
);

const Styles = styled.div`
  .navbar-collapse {
    text-align: center;
  }

  @media screen and (max-width: 991px) {
  .navbar-collapse .btn {
    padding: 15px 25px 15px 25px;
    }
  }
  #navbarNav li {
    margin-right: 25px;
    font-size: 22px;
  }

  #logo * {
    width: 150px;
    display: inline;
  }

  .navbar {
    background-color: #343A40;
  }

  .nav-item{
    margin-right: 25px;
    font-size: 22px;
  }

  .btn{
    margin-right: 5px;
  }

  .btn-outline-success{
    color: white;
    border-color: #329329;
  }

  .btn-outline-green {
    color: white;
    border-color: #329329;
  }

  .btn-outline-green:hover{
    background-color: green;
  }

  .login-register-group {
  float: right;
  }

  .login-register-group .btn {
    margin-right: 10px;
  }
  
  @media screen and (max-width: 991px) {
    .login-register-group .btn {
      margin-right: 5px;
    }
  }
`


const NavigationBar = () => {
    let location = useLocation();
    return (
        <Styles>
            <nav className="navbar navbar-expand-lg navbar-dark outline">

                <h3 style={{color: "white"}}>logoipsum</h3>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse ml-5" id="navbarNav">
                    <ul className="navbar-nav mr-auto">
                        <li className={`nav-item ${location.pathname === "/"? 'active': ''}`}>
                            <a className="nav-link" href="/">Home</a>
                        </li>
                        <li className={`nav-item ${location.pathname === "/listings-search"? 'active': ''}`}>
                            <a className="nav-link" href="/listings-search">Buy a Horse</a>
                        </li>
                        <li className={`nav-item ${location.pathname === "/make-listing"? 'active': ''}`}>
                            <a className="nav-link" href="/make-listing">Sell a Horse</a>
                        </li>
                    </ul>
                    <div className="login-register-group">
                        <Link to="/login">
                            <button className='btn btn-outline-light'>Log in</button>
                        </Link>
                        <Link to="/register">
                            <button className='btn btn-outline-green'>Register</button>
                        </Link>
                    </div>
                </div>


            </nav>
        </Styles>
    )
}

export {NavigationBar};


