import React, { useState } from 'react';
import styled from 'styled-components';
import horse1 from '../assets/horse1.jpg';
import { Modal } from 'antd';
import { inputHook } from '../shared/Hooks';

const Styles = styled.div`
	.remove-button {
		color: red;
	}
`;
const EditListing = () => {
	const [ isModalVisible, setIsModalVisible ] = useState(false);

	const { value: name, bind: bindName, reset: resetName } = inputHook('');
	const { value: state, bind: bindState, reset: resetState } = inputHook('');

	const { value: email, bind: bindEmail, reset: resetEmail } = inputHook('');
	const { value: zip, bind: bindZip, reset: resetZip } = inputHook('');

	const { value: address, bind: bindAddress, reset: resetAddress } = inputHook('');
	const { value: phone, bind: bindPhone, reset: resetPhone } = inputHook('');

	const { value: city, bind: bindCity, reset: resetCity } = inputHook('');
	const { value: title, bind: bindTitle, reset: resetTitle } = inputHook('');

	const { value: horseName, bind: bindHorseName, reset: resetHorseName } = inputHook('');
	const { value: horseAge, bind: bindHorseAge, reset: resetHorseAge } = inputHook('');

	const { value: horseSex, bind: bindHorseSex, reset: resetHorseSex } = inputHook('');
	const { value: horseHeight, bind: bindHorseHeight, reset: resetHorseHeight } = inputHook('');

	const { value: horsePrice, bind: bindHorsePrice, reset: resetHorsePrice } = inputHook('');
	const { value: horseColor, bind: bindHorseColor, reset: resetHorseColor } = inputHook('');

	const { value: horseDesc, bind: bindHorseDesc, reset: resetHorseDesc } = inputHook('');

	const showModal = () => {
		console.log(
			'Captured info: ',
			name,
			state,
			email,
			zip,
			address,
			phone,
			city,
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
		resetCity();
		resetTitle();
		resetHorseName();
		resetHorseAge();
		resetHorseSex();
		resetHorseHeight();
		resetHorsePrice();
		resetHorseColor();
		resetHorseDesc();

		setIsModalVisible(true);
	};

	const handleOk = () => {
		setIsModalVisible(false);
	};

	const handleCancel = () => {
		setIsModalVisible(false);
	};
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
	return (
		<Styles>
			<div className="">
				<div className="container p-5">
					<div className="text-center">
						<h1>Edit Listing</h1>
						<p>
							Please only list on horse per ad. Additional horses listed in the same ad will be subject to
							additional fees.
						</p>
					</div>
					<div className="my-5">
						<div className="text-center">
							<h2>Horse Information</h2>
						</div>

						<div className="row">
							<div className="col-md-6">
								<label>Your Name</label>
								<input {...bindName} placeholder={'Your name'} className={'form-control'} />
								<label>Your Email</label>
								<input {...bindEmail} placeholder={'Your email'} className={'form-control'} />
								<label>Your Address</label>
								<input {...bindAddress} placeholder={'Your address'} className={'form-control'} />
								<label>City</label>
								<input {...bindCity} placeholder={'city'} className={'form-control'} />
							</div>
							<div className="col-md-6">
								<label>State</label>
								<input {...bindState} placeholder={'State'} className={'form-control'} />
								<label>Zip</label>
								<input {...bindZip} placeholder={'zip'} className={'form-control'} />
								<label>Phone</label>
								<input {...bindPhone} placeholder={'Phone'} className={'form-control'} />
							</div>
						</div>
					</div>

					<div className="my-5">
						<div className="text-center">
							<h2>Horse Information</h2>
							<p>Listing Title</p>
							<input {...bindTitle} placeholder={'Headline'} className={'form-control w-50 mx-auto'} />
						</div>

						<div className="row">
							<div className="col-md-6">
								<label>Horse Name</label>
								<input {...bindHorseName} placeholder={'Horse name'} className={'form-control'} />
								<label>Age</label>
								<input {...bindHorseAge} placeholder={'Age'} className={'form-control'} />
								<label>Sex</label>
								<input {...bindHorseSex} placeholder={'Sex'} className={'form-control'} />
								<label>Height</label>
								<input {...bindHorseHeight} placeholder={'Height'} className={'form-control'} />
								<label>Color</label>
								<input {...bindHorseColor} placeholder={'Color'} className={'form-control'} />
							</div>
							<div className="col-md-6">
								<div className="form-check">
									<input
										className="form-check-input"
										type="checkbox"
										value=""
										id="flexCheckDefault"
									/>
									<label className="form-check-label" htmlFor="flexCheckDefault">
										Horse is registered
									</label>
								</div>
								<label>Sex</label>
								<input {...bindHorseSex} placeholder={'sex'} className={'form-control'} />
								<label>Price</label>
								<input {...bindHorsePrice} placeholder={'price'} className={'form-control'} />
							</div>
						</div>
						<div className="row">
							<div className="col-md-12">
								<label>Horse Description</label>
								<textarea
									{...bindHorseDesc}
									className="form-control"
									id="exampleFormControlTextarea1"
									rows="3"
								/>
							</div>
						</div>
					</div>

					<div className="my-5">
						<h5>Images</h5>
						<div className="d-flex">
							<button className={'btn btn-outline-dark mr-3'}>Choose File</button>
							<p className={'my-auto'}>No File Chosen</p>
						</div>
						<p>Add some appealings photos of your horse for sale!</p>
						<div className="row">
							{horseData.map((data) => (
								<div className="col-md-4">
									<img className="w-100" src={data.image} alt={'img'} />
									<div className="d-flex">
										<button className={'ml-auto remove-button btn'}>Remove</button>
									</div>
								</div>
							))}
						</div>
						<div className="row">
							<button onClick={showModal} className={'btn btn-outline-success mx-auto'}>
								Save Changes
							</button>
							<Modal title="" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
								<div className="text-center">
									<p>
										Are you sure you want to <br />save your "Edit Listing" changes?
									</p>
								</div>
							</Modal>
						</div>
					</div>
				</div>
			</div>
		</Styles>
	);
};

export default EditListing;
