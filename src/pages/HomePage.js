import React from 'react';
import styled from 'styled-components';
import horse1 from '../assets/horse1.jpg';
import horse2 from '../assets/horse2.jpg';
import horse3 from '../assets/horse3.jpeg';
import horse4 from '../assets/horse4.jpg';
import SlideItem from '../components/SlideItem';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Container, Row, Col, Button } from 'reactstrap';
import HomeSidebar from '../components/HomeSidebar';
import { configData } from './pageConfigs/HomeConfig';

// Styles
const Styles = styled.div`
	.sidenav {
		opacity: 1;
		background-color: #808080;
		width: 20%;
		height: 700px;
		overflow: auto;
		color: white;
	}

	.mainarea {
		opacity: 1;
		width: 100%;
		height: 700px;
		overflow: auto;
	}

	.page-wrapper {
		position: relative;
		overflow: auto;
	}

	.top-section {
		background-color: #e9ecef;
	}

	.horse-heading {
		font-weight: lighter;
	}

	.feature-listing-heading {
		color: #348824;
	}

	.full-fit {
		height: auto;
		width: auto;
	}
`;

// App data
const horseData = [
	{
		image: horse1,
		desc: '2 year old buddy!',
		location: 'Private yolo - 9 mi',
		price: '$ 29'
	},
	{
		image: horse2,
		desc: '15 year old jacked guy!',
		location: 'Your mom - 9 mi',
		price: '$ 80'
	},
	{
		image: horse3,
		desc: 'Winning champ!',
		location: 'gang gang - 9 mi',
		price: '$ 140'
	},
	{
		image: horse4,
		desc: "fucked my mom, don't want him anymore",
		location: '2 teef - 9 mi',
		price: '$ free'
	}
];

const HomePage = () => {
	return (
		<Styles>
			<Container fluid>
				<Row>
					<HomeSidebar md={2} />
					<Col className="pr-0 pl-0 pb-2" md={10}>
						<Col md={12} className="top-section pb-4 pt-4">
							<h1 className="ml-3 horse-heading">Horse Market</h1>
							<Col md={12}>
								<Button outline color="primary" className="mr-2">
									Sell a {configData.product.name}
								</Button>
								<Button outline color="success">
									Buy a {configData.product.name}
								</Button>
							</Col>
						</Col>
						<h4 className="feature-listing-heading ml-3">Featured Listings</h4>
						<Col md={12}>
							<Carousel
								swipeable={false}
								draggable={false}
								showDots={true}
								responsive={configData.responsive}
								ssr={true} // means to render carousel on server-side.
								infinite={true}
								// autoPlay={this.props.deviceType !== "mobile" ? true : false}
								autoPlaySpeed={1000}
								keyBoardControl={true}
								customTransition="all .5"
								transitionDuration={500}
								containerClass="carousel-container"
								removeArrowOnDeviceType={[ 'tablet', 'mobile' ]}
								// deviceType={this.props.deviceType}
								dotListClass="custom-dot-list-style"
								itemClass="full-fit"
							>
								{horseData.map((slideData) => <SlideItem slideData={slideData} />)}
							</Carousel>
						</Col>
					</Col>
				</Row>
			</Container>
		</Styles>
	);
};

export default HomePage;
