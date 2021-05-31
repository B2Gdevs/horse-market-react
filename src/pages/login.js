
import React from 'react'
import styled from 'styled-components';

const Styles = styled.div`
    #login-col {
        border-left: 1px solid #343A40;
    }

    #login-container {
        padding-top: 25px;
        padding-bottom: 25px;
        margin-top: 100px;
        margin-bottom: 100px;
        border: 1px solid #343A40;
        box-shadow: 2px 2px 5px grey;
    }

    #register-button {
        margin-top: 80px;
        padding-left: 100px;
        padding-right: 100px;
    }
  `

class Login extends Component {
render() {
    return (
        <Styles>

            <div class="container" id="login-container">
                <div class="row">
                    <div class="col-lg-2"></div>
                    <div class="col-lg-4">
                        <h3>Register</h3>
                        <button id="register-button" class="btn btn-success">Register</button>

                    </div>
                    <div class="col-lg-4" id="login-col">
                        <div>
                            <h3>Log In</h3>
                        </div>
                        <form action="">
                            <div class="form-group">
                                <label for="login-email">Email</label>
                                <input  class="form-control" id="login-email" type="email"/>
                            </div>
                            <div class="form-group">
                                <label for="login-password">Password</label>
                                <input  class="form-control" id="login-password" type="password"/>
                            </div>
                            <button class="btn btn-success" type="submit">Log in</button>
                        </form>
                    </div>
                    <div class="col-lg-2"></div>
            </div>

            </div>
        </Styles>
)}};

export {Login};
