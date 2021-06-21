import { FormGroup, Input, Label, Col, Row } from 'reactstrap';
import React from 'react';
import { inputHook } from '../../shared/Hooks';
import { GetCompositeId } from '../../shared/Utilities/utils';

// Styles

// Functions

// App data

const SearchForWithinFilter = ({ filterConfiguration }) => {
	const { value: searchValue, bind: searchBindValue, reset: searchReset } = inputHook('');
	const { value: withinValue, bind: withinBindValue, reset: wadiusReset } = inputHook('');
	let searchCompositeId = GetCompositeId(filterConfiguration.searchField);
	let withinCompositeId = `${filterConfiguration.searchField}within`;

	return (
		<Row className="mx-2" form>
			<Col md={6}>
				<FormGroup>
					<Label>{filterConfiguration.searchField}</Label>
					<Input
						type="search"
						id={searchCompositeId}
						placeholder={`Enter ${filterConfiguration.searchField}`}
						{...searchBindValue}
					/>
				</FormGroup>
			</Col>
			<Col md={6}>
				<FormGroup>
					<Label for={withinCompositeId}>With in: </Label>
					<Input type="select" id={withinCompositeId} {...withinBindValue}>
						{filterConfiguration.options.map((option) => {
							return <option value={option.value}>{option.description}</option>;
						})}
					</Input>
				</FormGroup>
			</Col>
		</Row>
	);
};

export default SearchForWithinFilter;
