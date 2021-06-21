import React from 'react';
import { Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import _ from 'lodash';
import { inputHook } from '../shared/Hooks';
import { GetCompositeId } from '../shared/Utilities/utils';

// Styles
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

// Configuration Data
let configData = {
	dropDowns: [
		{
			name: 'Horse Type',
			options: [
				{
					value: 1,
					description: 'freebird'
				},
				{
					value: 2,
					description: 'notfreebird'
				}
			]
		},

		{
			name: 'Horse Gender',
			options: [
				{
					value: 1,
					description: 'male'
				},
				{
					value: 2,
					description: 'female'
				}
			]
		},

		{
			name: 'Horse Price',
			options: [
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
		}
	]
};

// Functions - non ATM

// Components
const SideBarDropDown = (props) => {
	const { value: value, bind: bindValue, reset: resetName } = inputHook('');

	let compositeId = GetCompositeId(props.name);

	return (
		<div>
			<FormGroup>
				<Label {...Styles.selectLabel} for={compositeId}>
					{props.name}
				</Label>
				<Input type="select" id={compositeId} {...bindValue}>
					{props.options.map((option) => {
						return <option value={option.value}>{option.description}</option>;
					})}
				</Input>
			</FormGroup>
		</div>
	);
};

const HomeSidebar = (props) => {
	return (
		<Col {...Styles.sideNav} {...props}>
			<Form>
				{_.map(configData.dropDowns, (dropDownData) => {
					return <SideBarDropDown {...dropDownData} />;
				})}

				<Button color="success" {...Styles.btnSelect}>
					Submit
				</Button>
			</Form>
		</Col>
	);
};

export default HomeSidebar;
