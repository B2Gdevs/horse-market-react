import { FormGroup, Input, Label, Col, Row } from 'reactstrap';
import React from 'react';
import { inputHook } from '../../shared/Hooks';
import { GetCompositeId } from '../../shared/Utilities/utils';

// Styles

// Functions

// App data

const SearchForFilter = ({ filterConfiguration }) => {
	const { value: searchValue, bind: searchBindValue, reset: searchReset } = inputHook('');
	let searchCompositeId = GetCompositeId(filterConfiguration.searchField);

	return (
		<Row className="mx-2" form>
			<Col md={12}>
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
		</Row>
	);
};

export default SearchForFilter;
