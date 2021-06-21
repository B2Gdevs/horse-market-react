import { FormGroup, Input, Label, Col, Row } from 'reactstrap';
import React from 'react';
import { inputHook } from '../../shared/Hooks';
import { GetCompositeId } from '../../shared/Utilities/utils';

// Styles

// Functions

// App data

const SearchForOptionsFilter = ({ filterConfiguration }) => {
	const { value: optionsValue, bind: optionsBindValue, reset: optionsReset } = inputHook('');
	let optionsCompositeId = GetCompositeId(filterConfiguration.searchField);
	console.log('in search for options');
	console.log(filterConfiguration);
	return (
		<Row className="mx-2" form>
			<Col md={12}>
				<FormGroup>
					<Label for={optionsCompositeId}>{filterConfiguration.searchField} </Label>
					<Input type="select" id={optionsCompositeId} {...optionsBindValue}>
						{filterConfiguration.options.map((option) => {
							return <option value={option.value}>{option.description}</option>;
						})}
					</Input>
				</FormGroup>
			</Col>
		</Row>
	);
};

export default SearchForOptionsFilter;
