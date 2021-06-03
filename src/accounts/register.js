import React from 'react';
import styled from "styled-components";
import {NavigationBar} from "../components/navbar";
import {Footer} from "../components/footer";


const Styles = styled.div`
    .main-area {
        border: 1px solid black;
    }
    .login-container {
        margin: 57px 0 60px 0
    }
`

const Register = () => {
    return (
        <Styles>
            <div className="">
                <div className="container p-5">
                    <div className="text-center">
                        <h1>Register</h1>
                        <p>Manage all of your listings from your account.</p>
                    </div>
                    <div className="">
                        <label>Email Address</label>
                        <input className={"form-control mb-3"} placeholder={'Email Address'}/>
                        <label>Full Name</label>
                        <input className={"form-control mb-3"} placeholder={'First name'}/>
                        <label>Last Name</label>
                        <input className={"form-control mb-3"} placeholder={'Last name'}/>
                        <label>Password</label>
                        <input className={"form-control mb-5"} placeholder={'password'}/>
                    </div>
                    <div className="row justify-content-center">
                        <button className={"btn btn-outline-primary mr-4"}>Register</button>
                        <button className={"btn btn-outline-dark"}>I already have an account</button>
                    </div>
                </div>
            </div>
        </Styles>
    )
}

export default Register;