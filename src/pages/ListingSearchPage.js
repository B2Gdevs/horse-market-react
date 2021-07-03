import React, { useState } from 'react';
import styled from 'styled-components';
import 'react-slideshow-image/dist/styles.css';
import horse1 from '../assets/horse1.jpg';
import horse2 from '../assets/horse2.jpg';
import horse3 from '../assets/horse3.jpeg';
import horse4 from '../assets/horse4.jpg';
import 'antd/dist/antd.css';
import { HiLocationMarker, HiOutlineTrash } from 'react-icons/hi';
import SearchFilter from '../components/filters/SearchFilter';
import SearchSort from '../components/sorts/SearchSort';
import SlideItem from '../components/SlideItem';
import _ from 'lodash';
import Carousel from 'react-multi-carousel';
import { Container, Row, Col, Card, CardBody, CardImg, CardTitle, CardSubtitle, CardText, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

import { configData } from './pageConfigs/ListingSearchConfig';

// Styles
const Styles = styled.div`
	#matched-listings {
		font-size: 25px;
	}

	#shown-listings {
		font-size: 25px;
	}

	.sort {
		background-color: #6d7a86;
	}

	.sort-title {
		margin-top: 25px;
		padding-top: 10px;
		padding-bottom: 10px;
		background-color: #464e57;
	}

	.sort-area {
		margin-top: 15px;
	}

	.search-filter-area {
		margin-bottom: 15px;
		padding-bottom: 2px;
	}

	.featured-listings-title h4 {
		margin-top: 50px;
		margin-left: 0x;
		color: green;
	}

	.search-filter-area {
		background-color: #343a40;
	}

	.filter-text {
		color: white;
	}
	.filter-text i {
		color: #56606a;
	}

	.sort-text {
		color: white;
	}

	.filter-item-title {
		background-color: #6d7a86;
	}

	.listings-filter {
		margin: 0;
		padding: 0;
	}

	.filter-margin {
		margin-left: 10px;
		margin-right: 10px;
	}

	.filter-item-wrapper {
		padding-top: 5px;
		padding-bottom: 5px;
	}

	.filter-button {
		padding-left: 15px;
		padding-right: 15px;
		margin-top: 10px;
		margin-bottom: 10px;
	}

	.filter-item-display {
		background-color: #3f474e;
		border-top: 2px solid #343a40;
	}

	.filter-item-ack {
		font-size: 12px;
	}

	.collapse {
		margin-top: 5px;
		margin-bottom: 5px;
	}

	.matches {
		background-color: #464f58;
		color: white;
	}

	.sort {
		background-color: #6d7985;
		color: white;
	}

	.listing-area {
		background-color: black;
	}

	.listing-content {
		background-color: white;
	}

	// .search-section {
	// 	margin: 0;
	// 	padding: 0;
	// }
`;

// Functions
let getListings = () => {
	console.log('Retrieving listings with given settings');
};

// App data
let listingData = [
	{
		image: horse1,
		title: 'Ok so this horse is cheap.',
		description:
			"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been theindustry's standard dummy text ever since the 1500s, when an unknown printer took a galley oftype and scrambled it to make a type specimen book. It has survived not only five centuries, butalso the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
		age: 2,
		sex: 'male',
		location: 'Private Seller - 9 mi',
		price: 30,
		distance: 200,
		dateListed: '01-june-2021',
		discipline: 'discipline1',
		dam: 'dam1',
		sire: 'sire1',
		location: 'texas usa',
		breadingCapable: 'breadingCapabale1',
		sellerType: 'private'
	},
	{
		image: horse2,
		title: 'Ok so this horse is cheap.',
		description:
			"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been theindustry's standard dummy text ever since the 1500s, when an unknown printer took a galley oftype and scrambled it to make a type specimen book. It has survived not only five centuries, butalso the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
		age: 3,
		sex: 'female',
		location: 'Private Seller - 9 mi',
		price: 31,
		distance: 250,
		dateListed: '10-june-2021',
		discipline: 'discipline2',
		dam: 'dam2',
		sire: 'sire2',
		location: 'los angles usa',
		breadingCapable: 'breadingCapabale2',
		sellerType: 'private'
	},
	{
		image: horse3,
		title: 'Take it or leave it',
		description:
			"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been theindustry's standard dummy text ever since the 1500s, when an unknown printer took a galley oftype and scrambled it to make a type specimen book. It has survived not only five centuries, butalso the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
		age: 4,
		sex: 'male',
		location: 'Private Seller - 9 mi',
		price: 32,
		distance: 270,
		discipline: 'discipline3',
		dateListed: '12-june-2021',
		dam: 'dam3',
		sire: 'sire3',
		location: 'firefield usa',
		breadingCapable: 'breadingCapabale3',
		sellerType: 'private'
	},
	{
		image: horse4,
		title: 'Best horse Ever',
		description:
			"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been theindustry's standard dummy text ever since the 1500s, when an unknown printer took a galley oftype and scrambled it to make a type specimen book. It has survived not only five centuries, butalso the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
		age: 5,
		sex: 'female',
		location: 'Private Seller - 9 mi',
		price: 33,
		distance: 300,
		discipline: 'discipline4',
		dateListed: '13-june-2021',
		dam: 'dam4',
		sire: 'sire4',
		location: 'newyork usa',
		breadingCapable: 'breadingCapabale4',
		sellerType: 'dealer'
	}
];

let featureListingData = [
	{
		image: horse1,
		title: 'Ok so this horse is cheap.',
		description:
			"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been theindustry's standard dummy text ever since the 1500s, when an unknown printer took a galley oftype and scrambled it to make a type specimen book. It has survived not only five centuries, butalso the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
		age: 2,
		sex: 'male',
		location: 'Private Seller - 9 mi',
		price: 30,
		distance: 200,
		dateListed: '01-june-2021',
		discipline: 'discipline1',
		dam: 'dam1',
		sire: 'sire1',
		location: 'texas usa',
		breadingCapable: 'breadingCapabale1',
		sellerType: 'private'
	},
	{
		image: horse2,
		title: 'Take it or leave it',
		description:
			"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been theindustry's standard dummy text ever since the 1500s, when an unknown printer took a galley oftype and scrambled it to make a type specimen book. It has survived not only five centuries, butalso the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
		age: 3,
		sex: 'female',
		location: 'Private Seller - 9 mi',
		price: 31,
		distance: 250,
		dateListed: '10-june-2021',
		discipline: 'discipline2',
		dam: 'dam2',
		sire: 'sire2',
		location: 'los angles usa',
		breadingCapable: 'breadingCapabale2',
		sellerType: 'private'
	},
	{
		image: horse3,
		title: "Can't believe how this horse will win",
		description:
			"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been theindustry's standard dummy text ever since the 1500s, when an unknown printer took a galley oftype and scrambled it to make a type specimen book. It has survived not only five centuries, butalso the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
		age: 4,
		sex: 'male',
		location: 'Private Seller - 9 mi',
		price: 32,
		distance: 270,
		discipline: 'discipline3',
		dateListed: '12-june-2021',
		dam: 'dam3',
		sire: 'sire3',
		location: 'firefield usa',
		breadingCapable: 'breadingCapabale3',
		sellerType: 'private'
	},
	{
		image: horse4,
		title: 'Best horse Ever',
		description:
			"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been theindustry's standard dummy text ever since the 1500s, when an unknown printer took a galley oftype and scrambled it to make a type specimen book. It has survived not only five centuries, butalso the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
		age: 5,
		sex: 'female',
		location: 'Private Seller - 9 mi',
		price: 33,
		distance: 300,
		discipline: 'discipline4',
		dateListed: '13-june-2021',
		dam: 'dam4',
		sire: 'sire4',
		location: 'newyork usa',
		breadingCapable: 'breadingCapabale4',
		sellerType: 'dealer'
	}
];

const FilterSection = () => {
	return (
		<div className="filter-item-title">
			<div className="filter-item-wrapper filter-margin">
				<span className="filter-text">Filter</span>
				<span className="filter-text right-span">
					<HiOutlineTrash /> Search
				</span>
			</div>
			{_.map(configData.filterOptions, (filterOption) => {
				return (
					<SearchFilter
						filterType={filterOption.filterType}
						filterConfiguration={filterOption.filterConfiguration}
					/>
				);
			})}
			<Button type="submit" color="danger" onClick={getListings}>
				Reset
			</Button>
		</div>
	);
};

const SortSection = () => {
	const [ copiedListingData, setListingData ] = useState(listingData);

	// TODO, this needs to be abstracted with configuration data
	const isDistance = (event) => event.target.name === 'distance';
	const isAge = (event) => event.target.name === 'age';
	const isPrice = (event) => event.target.name === 'price';
	const isDateListed = (event) => event.target.name === 'dateListed';

	const sortByDistance = () =>
		setListingData(
			_.sortBy(copiedListingData, (listing) => {
				return listing.distance;
			})
		);

	const sortByAge = () =>
		setListingData(
			_.sortBy(copiedListingData, (listing) => {
				return listing.age;
			})
		);

	const sortByPrice = () =>
		setListingData(
			_.sortBy(copiedListingData, (listing) => {
				return listing.price;
			})
		);

	const sortByDateListed = () =>
		setListingData(
			_.sortBy(copiedListingData, (listing) => {
				return listing.dateListed;
			})
		);

	const SortListings = _.cond([
		[ isDistance, sortByDistance ],
		[ isAge, sortByAge ],
		[ isPrice, sortByPrice ],
		[ isDateListed, sortByDateListed ]
	]);

	return (
		<Row className="p-3 sort">
			<Col md={12} className="p-3 matches text-center">
				Showing {listingData.length} out of {listingData.length} Matches
			</Col>
			<Col md={12}>
				<p>Sort</p>
			</Col>
			{_.map(configData.sortOptions, (sortOption) => {
				return (
					<Col>
						<SearchSort sortConfiguration={sortOption.sortConfiguration} />
					</Col>
				);
			})}
		</Row>
	);
};

const ListingSection = () => {
	const [ copiedListingData, setListingData ] = useState(listingData);
	return (
		<Col md={12} className="p-5 listing-content">
			{copiedListingData.map((listing) => (
				<Col md={12}>
					<Card>
						<Row className="no-gutters">
							<Col md={4}>
								<CardImg left width="100%" src={listing.image} alt="Card image cap" />
							</Col>
							<Col md={8}>
								<CardBody>
									<CardTitle tag="h5">{listing.title}</CardTitle>
									<CardSubtitle tag="h6" className="mb-2 text-muted">
										${listing.price} - {_.capitalize(listing.sellerType)} Seller
										<p>
											<HiLocationMarker className="mr-1" />
											{_.upperCase(listing.location)}
										</p>
									</CardSubtitle>
									<CardText>{listing.description}</CardText>
									<Link to="/listing-detail">
										<Button>Go to listing</Button>
									</Link>
								</CardBody>
							</Col>
						</Row>
					</Card>
					<p />
				</Col>
			))}
		</Col>
	);
};

const ListingsSearchPage = () => {
	const [ liked, setLiked ] = useState(false);
	const [ copiedListingData, setListingData ] = useState(listingData);

	return (
		<Styles>
			<Container fluid>
				<Row className="my-5">
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
							{featureListingData.map((slideData) => <SlideItem slideData={slideData} />)}
						</Carousel>
					</Col>
				</Row>

				<Row className="my-5">
					<Col md={3} className="my-3 search-section">
						<FilterSection />
					</Col>
					<Col md={9} className="horse-section">
						<SortSection />
						<Row className="p-4 listing-area">
							<ListingSection />
						</Row>
					</Col>
				</Row>
			</Container>
		</Styles>
	);
};
export default ListingsSearchPage;
