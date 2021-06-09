import React from 'react';
import {NavigationBar} from "../components/navbar";
import styled from "styled-components";
import { useInput } from '../input-hook';
import {Footer} from "../components/footer";

const Styles = styled.div`
    .main-area {
        border: 1px solid black;
    }
    .login-container {
        margin: 57px 0 60px 0
    }
    .login-container-content {
        position: relative; 
        overflow: auto;
    }
`

const Login = () => {
    const {value:email, bind:bindEmail, reset:resetEmail} = useInput("")
    const {value:password, bind:bindPassword, reset:resetPassword} = useInput("")

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('captured info: ',email, " ", password)
        resetEmail()
        resetPassword()
    }

    return (
        <Styles>
            <div className="">
                <div className="login-container">
                    <div className={"container main-area p-5 login-container-content"}>
                        <div className="row">
                            <div className="col-md-6 border-right">
                                <h3 className={"mb-5"}>Register</h3>
                                <button className={"btn btn-success form-control mt-5"}>Register</button>
                            </div>
                            <div className="col-md-6">
                                <h3>Login</h3>
                                <label>Email</label>
                                <input className={"form-control"} {...bindEmail}/>
                                <label>Password</label>
                                <input className={"form-control"} {...bindPassword}/>

                                <button className={"btn btn-success my-3"} onClick={(e) => {handleSubmit(e)}}>Login</button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Styles>
    );
}

export default Login;