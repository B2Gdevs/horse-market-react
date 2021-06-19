import React, { useState } from 'react';
import { Col, Form, Dropdown, DropdownItem, DropdownToggle, DropdownMenu, Button } from 'reactstrap';

const Styles = {
	sideNav: {
		style: {
			'background-color': 'grey'
		}
	},

	selectLabel: {
		style: {
			color: 'white'
		}
	},

	btnSelect: {
		style: {
			width: '100%',
			textAlign: 'center'
		}
	}
};

let optionData = {
	horseTypeOptions: [
		{
			value: 1,
			description: 'freebird'
		},
		{
			value: 2,
			description: 'notfreebird'
		}
	],

	horseSexOptions: [
		{
			value: 1,
			description: 'male'
		},
		{
			value: 2,
			description: 'female'
		}
	],

	horsePriceOptions: [
		{
			value: [ 100, 500 ],
			description: 'between 100 and 500'
		},
		{
			value: [ 500, 1000 ],
			description: 'between 500 and 1000'
		},
		{
			value: [ 1000, 5000 ],
			description: 'between 1000 and 5000'
		},
		{
			value: [ 5000, 10000 ],
			description: 'between 5000 and 10000'
		},
		{
			value: [ 10000, 15000 ],
			description: 'between 10000 and 15000'
		},
		{
			value: [ 15000, 20000 ],
			description: 'between 15000 and 20000'
		}
	]
};

const HomeSidebar = (props) => {
	const [ hTypeOpen, hTypeDropDown ] = useState(false);
	const [ hPriceOpen, hPriceDropDown ] = useState(false);
	const [ hSexOpen, hSexDropDown ] = useState(false);

	const hTypeToggle = () => hTypeDropDown((prevState) => !prevState);
	const hPriceToggle = () => hPriceDropDown((prevState) => !prevState);
	const hSexToggle = () => hSexDropDown((prevState) => !prevState);

	return (
		<Col {...Styles.sideNav} {...props}>
			<Form>
				<label {...Styles.selectLabel}>Horse Type</label>
				<Dropdown
					className="dropdown-selection"
					isOpen={hTypeOpen}
					toggle={hTypeToggle}
					aria-label="Default select example"
					{...Styles.btnSelect}
				>
					<DropdownToggle {...Styles.btnSelect} caret>
						Horse Type
					</DropdownToggle>
					<DropdownMenu>
						{optionData.horseTypeOptions.map((option) => {
							return <DropdownItem value={option.value}>{option.description}</DropdownItem>;
						})}
					</DropdownMenu>
				</Dropdown>

				<label {...Styles.selectLabel} className="my-3">
					Sex
				</label>
				<Dropdown
					isOpen={hSexOpen}
					toggle={hSexToggle}
					aria-label="Default select example"
					{...Styles.btnSelect}
				>
					<DropdownToggle caret {...Styles.btnSelect}>
						Horse Sex
					</DropdownToggle>
					<DropdownMenu>
						{optionData.horseSexOptions.map((option) => {
							return <DropdownItem value={option.value}>{option.description}</DropdownItem>;
						})}
					</DropdownMenu>
				</Dropdown>

				<label {...Styles.selectLabel} className="my-3">
					Price
				</label>
				<Dropdown
					isOpen={hPriceOpen}
					toggle={hPriceToggle}
					aria-label="Default select example"
					{...Styles.btnSelect}
				>
					<DropdownToggle caret {...Styles.btnSelect}>
						Horse Price
					</DropdownToggle>
					<DropdownMenu>
						{optionData.horsePriceOptions.map((option) => {
							return <DropdownItem value={option.value}>{option.description}</DropdownItem>;
						})}
					</DropdownMenu>
				</Dropdown>
				<Button color="success" {...Styles.btnSelect}>
					Submit
				</Button>
			</Form>
		</Col>
	);
};

export default HomeSidebar;
