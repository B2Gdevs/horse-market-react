import React, { useState } from 'react';
import styled from 'styled-components';
import horse1 from '../assets/horse1.jpg';
import { Link } from 'react-router-dom';
import { inputHook } from '../shared/Hooks';
import { useHistory } from 'react-router';
import { Progress, Row, Col, Container, Label, Input, Button, Form } from 'reactstrap';

// Styles
const Styles = styled.div`
	input[type="file"] {
		display: none;
	}

	.remove-button {
		color: red;
	}
	.breadcrumb-text {
		color: #5a9ad6;
	}
	.progress-bar {
		width: 33.3%;
	}
	.progress {
		height: 5px;
	}
`;

// App Data
const horseData = [
	{
		image: horse1
	},
	{
		image: horse1
	},
	{
		image: horse1
	},
	{
		image: horse1
	},
	{
		image: horse1
	},
	{
		image: horse1
	}
];

// App data
let listingData = {
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
};

let listingData2 = {
	AmountDueToday: '1.00',
	SubscriptionSubtotal: '1.00',
	Shipping: '1.00',
	PromosAndDiscount: '1.00',
	SalesTax: '1.00',
	NextBillingDate: '1.00'
};

let marketConfig = {
	product: 'Horse'
};

const PageHeading = () => {
	return (
		<Row className="mt-5">
			<Col md={12} className="text-center">
				<Progress value="33" />
				<Row>
					<Col md={4} className="breadcrumb-text">
						Create a Listing
					</Col>
					<Col md={4} className="breadcrumb-text">
						Subscription
					</Col>
					<Col md={4} className="breadcrumb-text">
						Checkout
					</Col>
				</Row>
			</Col>
		</Row>
	);
};

const SellerInfoSection = () => {};

const MakeListing = () => {
	let history = useHistory();
	const { value: name, bind: bindName, reset: resetName } = inputHook('');
	const { value: state, bind: bindState, reset: resetState } = inputHook('');

	const { value: email, bind: bindEmail, reset: resetEmail } = inputHook('');
	const { value: zip, bind: bindZip, reset: resetZip } = inputHook('');

	const { value: address, bind: bindAddress, reset: resetAddress } = inputHook('');

	const { value: phone, bind: bindPhone, reset: resetPhone } = inputHook('');

	const { value: title, bind: bindTitle, reset: resetTitle } = inputHook('');

	const { value: horseName, bind: bindProductName, reset: resetHorseName } = inputHook('');
	const { value: horseAge, bind: bindProductAge, reset: resetHorseAge } = inputHook('');

	const { value: horseSex, bind: bindProductSex, reset: resetHorseSex } = inputHook('');
	const { value: horseHeight, bind: bindProductHeight, reset: resetHorseHeight } = inputHook('');

	const { value: horsePrice, bind: bindProductPrice, reset: resetHorsePrice } = inputHook('');
	const { value: horseColor, bind: bindProductColor, reset: resetHorseColor } = inputHook('');

	const { value: horseDesc, bind: bindProductDesc, reset: resetHorseDesc } = inputHook('');

	function handleSubmit() {
		console.log(
			'Captured info: ',
			name,
			state,
			email,
			zip,
			address,
			phone,
			title,
			horseName,
			horseAge,
			horseSex,
			horseHeight,
			horsePrice,
			horseColor,
			horseDesc
		);
		resetName();
		resetState();
		resetEmail();
		resetZip();
		resetAddress();
		resetPhone();
		resetTitle();
		resetHorseName();
		resetHorseAge();
		resetHorseSex();
		resetHorseHeight();
		resetHorsePrice();
		resetHorseColor();
		resetHorseDesc();

		history.push({
			pathname: '/buy-listing',
			state: { listingData: listingData }
		});
	}

	return (
		<Container>
			<PageHeading />
			<Row>
				<Col md={12}>
					<div className="text-center">
						<h1>Sell a {marketConfig.product}</h1>
					</div>
				</Col>
				<Col>
					<div className="text-center">
						<h2>Seller Information</h2>
					</div>
					<Row className="row">
						<Col md={6}>
							<Input type="checkbox" {...bindPhone} placeholder={'Add phone number'} />
							<Input type="checkbox" {...bindEmail} placeholder={'Add email'} />
						</Col>
						<Col md={6}>
							<Label>State</Label>
							<Input {...bindState} placeholder={'State'} />
							<Label>Zip</Label>
							<Input {...bindZip} placeholder={'zip'} />
							<Label>Phone</Label>
							<Input {...bindPhone} placeholder={'Phone'} />
						</Col>
					</Row>
				</Col>
			</Row>

			<Row className="my-5">
				<Col className="text-center">
					<h2>{marketConfig.product} Information</h2>
					<p>Listing Title</p>
					<Input {...bindTitle} placeholder={'Headline'} className={'form-control w-50 mx-auto'} />
				</Col>
			</Row>

			<Row className="row">
				<Col md={6}>
					<Label>{marketConfig.product} Name</Label>
					<Input {...bindProductName} placeholder={'Horse name'} />
					<Label>Age</Label>
					<Input {...bindProductAge} placeholder={'Age'} />
					<Label>Height</Label>
					<Input {...bindProductHeight} placeholder={'Height'} />
					<Label>Color</Label>
					<Input {...bindProductColor} placeholder={'Color'} />
				</Col>
				<Col md={6}>
					<div className="form-check">
						<Input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
						<Label className="form-check-label" htmlFor="flexCheckDefault">
							{marketConfig.product} is registered
						</Label>
					</div>
					<Label>Sex</Label>
					<Input {...bindProductSex} placeholder={'sex'} />
					<Label>Price</Label>
					<Input {...bindProductPrice} placeholder={'price'} />
				</Col>
			</Row>
			<Row>
				<Col md={12}>
					<Label>{marketConfig.product} Description</Label>
					<textarea {...bindProductDesc} className="form-control" id="exampleFormControlTextarea1" rows="3" />
				</Col>
			</Row>

			<Row className="my-5">
				<Row className="row">
					<Col md={12} className="mb-3">
						<Input type="file" name="file" id="exampleFile" />
					</Col>
					{horseData.map((data) => (
						<Col md={4}>
							<img className="w-100" src={data.image} alt={'img'} />
							<div className="d-flex">
								<Button outline color="danger" className={'ml-auto remove-button btn'}>
									Remove
								</Button>
							</div>
						</Col>
					))}
				</Row>
				<Row>
					<Col className="text-center">
						<Link to="/subscription-page">
							<Button outline color="success">
								Create
							</Button>
						</Link>
					</Col>
				</Row>
			</Row>
		</Container>
	);
};

export default MakeListing;
