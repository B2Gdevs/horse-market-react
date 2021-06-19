import React, { useState } from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import { Navbar, NavItem, NavbarToggler, NavbarBrand, NavLink, Nav } from 'reactstrap';
import { Collapse } from 'antd';

const Styles = styled.div`
	.navbar-collapse {
		text-align: center;
		background-color: #343a40;
		border: 0px;
	}

	@media screen and (max-width: 991px) {
		.navbar-collapse .btn {
			padding: 15px 25px 15px 25px;
		}
	}
	#navbarNav Nav {
		margin-right: 25px;
		font-size: 22px;
	}

	#logo {
		color: white;
	}

	.navbar {
		background-color: #343a40;
	}

	.nav-item {
		margin-right: 25px;
		font-size: 22px;
	}

	.btn {
		margin-right: 5px;
	}

	.btn-outline-success {
		color: white;
		border-color: #329329;
	}

	.btn-outline-green {
		color: white;
		border-color: #329329;
	}

	.btn-outline-green:hover {
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
`;

const NavigationBar = () => {
	let location = useLocation();
	return (
		<Styles>
			<Navbar className="navbar navbar-expand-lg navbar-dark outline">
				<NavbarBrand href="/" className="mr-auto">
					Logoipsum
				</NavbarBrand>
				<NavbarToggler
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarNav"
					aria-controls="navbarNav"
					aria-expanded="false"
					aria-label="Toggle navigation"
				/>

				<Collapse className="collapse navbar-collapse ml-5" id="navbarNav">
					<Nav className="navbar-nav mr-auto">
						<NavItem className={`nav-item ${location.pathname === '/' ? 'active' : ''}`}>
							<NavLink className="nav-link" href="/">
								Home
							</NavLink>
						</NavItem>
						<NavItem className={`nav-item ${location.pathname === '/listings-search' ? 'active' : ''}`}>
							<NavLink className="nav-link" href="/listings-search">
								Buy a Horse
							</NavLink>
						</NavItem>
						<NavItem className={`nav-item ${location.pathname === '/make-listing' ? 'active' : ''}`}>
							<NavLink className="nav-link" href="/make-listing">
								Sell a Horse
							</NavLink>
						</NavItem>
					</Nav>
					<Nav className="login-register-group">
						<Link to="/login" className="btn btn-outline-light">
							Log in
						</Link>
						<Link to="/register" className="btn btn-outline-green">
							Register
						</Link>
					</Nav>
				</Collapse>
			</Navbar>
		</Styles>
	);
};

export { NavigationBar };
