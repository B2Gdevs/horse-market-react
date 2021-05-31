import React from 'react'
import styled from 'styled-components';

const Styles = styled.div`
  .footer-links {
    color: white;
  }

  .footer-header {
    color: white;
  }

  .copyright {
    background-color: #4b545c;
    color: white;
  }
  .copyright span {
    font-size: 15px;
  }

  .social-icons {
    font-size: 30px;
  }

  .footer-info {
    color: white;
  }

  #footer-logo {
    height: 150px;
    width: 250px;
  }

  .footer-icon-bar {
    background-color: #329329;
  }
  .footer-icon-bar .social-icon {
    color: #212629;
  }

  .outline{
    background-color: #343A40;
  }
`

const Footer = () => {
  return (
    <Styles>
      <footer className="page-footer font-small unique-color-dark outline">

          <div className="footer-icon-bar">
            <div className="container">

              <div className="row py-4 d-flex align-items-center">

                <div className="col-md-6 col-lg-5 text-center text-md-left mb-4 mb-md-0">
                  <h6 className="mb-0 footer-info">Get connected with us on social networks!</h6>
                </div>

                <div className="col-md-6 col-lg-7 text-center text-md-right">

                  <a className="social-icon" href="/">
                    <i className="fa fa-facebook-f  mr-4"> </i>
                  </a>

                  <a className="social-icon" href="/">
                    <i className="fa fa-twitter  mr-4"> </i>
                  </a>

                </div>

              </div>

            </div>
          </div>

          <div className="container text-center text-md-left mt-5">

            <div className="row mt-3">

              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">

                <h6 className="text-uppercase font-weight-bold footer-header">RVMarket</h6>
                <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{width: "60px"}}/>
                <p className="footer-info">RVMarket helps you get from post to sale as quickly as possible.</p>

              </div>

              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">

                <h6 className="text-uppercase font-weight-bold footer-header">Products</h6>
                <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{width: "60px"}}/>
                <p>
                  <a href="#!">...</a>
                </p>
                <p>
                  <a href="#!">...</a>
                </p>
                <p>
                  <a href="#!">...</a>
                </p>
                <p>
                  <a href="#!">...</a>
                </p>

              </div>

              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">

                <h6 className="text-uppercase font-weight-bold footer-header">Useful links</h6>
                <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{width: "60px"}}/>
                <p>
                  <a href="#!">...</a>
                </p>
                <p>
                  <a href="#!">...</a>
                </p>
                <p>
                  <a href="#!">...</a>
                </p>
                <p>
                  <a href="#!">...</a>
                </p>

              </div>

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

                <h6 className="text-uppercase font-weight-bold footer-header">Contact</h6>
                <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{width: "60px"}}></hr>
                <p className="footer-info">
                  <i className="fa fa-home mr-3"></i> Austin, TX 78749, US</p>
                <p className="footer-info">
                  <i className="fa fa-envelope mr-3"></i> contact@rv-market.com</p>
                <p className="footer-info">
                  <i className="fa fa-phone mr-3"></i>TBD</p>
                <p className="footer-info">
                  <i className="fa fa-print mr-3"></i>TBD</p>

              </div>

            </div>
          </div>
          <div className="footer-copyright text-center py-3 copyright">© 2019 Copyright:
            <span className="font-weight-bold text-uppercase"> Garrard LLC</span>
          </div>

      </footer>
    </Styles>
  )
}

export {Footer};