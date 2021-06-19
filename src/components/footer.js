import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col, Nav, NavItem, NavLink } from 'reactstrap';
import { FaFacebookF } from 'react-icons/fa';
import { FiTwitter, FiInstagram } from 'react-icons/fi';
import { CgHome } from 'react-icons/cg';
import { BsEnvelope } from 'react-icons/bs';
import _ from 'lodash';

// Styles
const Styles = styled.div`
	.footer-links {
		color: white;
	}

	.sub-header {
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

	.outline {
		background-color: #343a40;
	}

	.header {
		background-color: #329329;
	}

	.accent {
		border-top-color: white;
	}
`;

// Configuration Data
let configData = {
	marketName: 'HorseMarket',
	contactEmail: 'contact@horsemarket.com',
	location: 'Austin, TX 78749, US',
	companyName: 'Garrard LLC',
	facebookPage: '/',
	twitterPage: '/',
	instagramPage: '/',
	products: [
		{
			name: 'HorseMarket',
			href: '/'
		},
		{
			name: 'BoatMarket',
			href: '/'
		},
		{
			name: 'TrailerMarket',
			href: '/'
		}
	],
	usefulLinks: [
		{
			name: 'Horsetrainers',
			href: '/'
		},
		{
			name: 'How to sell quickly',
			href: '/'
		},
		{
			name: 'How to know a good buy',
			href: '/'
		}
	]
};

// Functions - None available ATM

// Components
const Footer = () => {
	return (
		<Styles>
			<Container fluid>
				<Row className="header py-4 d-flex align-items-center">
					{/* Spacing */}
					<Col md={2} />
					<Col md={2} className="text-center text-md-left mb-4 mb-md-0">
						<h6 className="mb-0 footer-info">Get connected with us on social networks!</h6>
					</Col>
					<Col md={8} className="text-center text-right">
						{configData.facebookPage && (
							<FaFacebookF className="social-icon ml-2" href={configData.facebookPage} />
						)}
						{configData.twitterPage && (
							<FiTwitter className="social-icon ml-2" href={configData.twitterPage} />
						)}
						{configData.instagramPage && (
							<FiInstagram className="social-icon ml-2" href={configData.instagramPage} />
						)}
					</Col>
				</Row>

				<Row className="outline text-center py-4">
					<Col md={3} className="mx-auto mb-4">
						<h6 className="text-uppercase font-weight-bold sub-header">{configData.marketName}</h6>
						<hr className="accent accent-2 mb-4 mt-0 " style={{ width: '60px' }} />
						<p className="footer-info">
							{configData.marketName} with AI assistance to help you get from post to sale as quickly as
							possible.
						</p>
					</Col>

					<Col md={2} lg={2} xl={2} className="mx-auto mb-4">
						<h6 className="text-uppercase font-weight-bold sub-header">Products</h6>
						<hr className="accent accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: '60px' }} />
						<Nav vertical>
							{_.map(configData.products, (product) => {
								return (
									<NavItem>
										<NavLink href={product.href}>{product.name}</NavLink>
									</NavItem>
								);
							})}
						</Nav>
					</Col>

					<Col md={3} lg={2} xl={2} className="mx-auto mb-4">
						<h6 className="text-uppercase font-weight-bold sub-header">Useful links</h6>
						<hr className="accent accent-2 mb-4 mt-0 " style={{ width: '60px' }} />
						<Nav vertical>
							{_.map(configData.usefulLinks, (link) => {
								return (
									<NavItem>
										<NavLink href={link.href}>{link.name}</NavLink>
									</NavItem>
								);
							})}
						</Nav>
					</Col>

					<Col md={4} lg={3} xl={3} className="mx-auto mb-md-0 mb-4">
						<h6 className="text-uppercase font-weight-bold sub-header">Contact</h6>
						<hr className="accent accent-2 mb-4 mt-0" style={{ width: '60px' }} />
						<p className="footer-info">
							<CgHome className="mr-3" /> {configData.location}
						</p>
						<p className="footer-info">
							<BsEnvelope className="mr-3" /> {configData.contactEmail}
						</p>
					</Col>
				</Row>
				<Row>
					<Col md={12}>
						<div className="footer-copyright text-center py-3 copyright">
							© 2019 Copyright:
							<span className="font-weight-bold text-uppercase"> {configData.companyName}</span>
						</div>
					</Col>
				</Row>
			</Container>
		</Styles>
	);
};

export { Footer };
