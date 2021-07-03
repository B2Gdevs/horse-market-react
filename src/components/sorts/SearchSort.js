import React, { useState } from 'react';
import styled from 'styled-components';
import { FormGroup, Input, Label } from 'reactstrap';
import { inputHook } from '../../shared/Hooks';
import { GetCompositeId } from '../../shared/Utilities/utils';

const Styles = styled.div`
	.footer-links {
		color: white;
	}

	.right-span {
		float: right;
	}

	.left-span {
		float: left;
	}

	.full-width {
		width: 100%;
	}
`;

const SearchSort = ({ sortConfiguration }) => {
	console.log('in search sort');
	console.log(sortConfiguration);
	const { value: options, bind: optionsBindValue, reset: resetName } = inputHook('');
	let sortCompositeId = GetCompositeId(sortConfiguration.sortField);

	return (
		<FormGroup>
			<Label for={sortCompositeId}>{sortConfiguration.sortField} </Label>
			<Input type="select" id={sortCompositeId} {...optionsBindValue}>
				{sortConfiguration.options.map((option) => {
					return <option value={option.value}>{option.description}</option>;
				})}
			</Input>
		</FormGroup>
	);
};

export default SearchSort;
