import React, { useState } from 'react';
import styled from 'styled-components';
import { Button, Collapse, Form, FormGroup, Input, Label, Col, Row } from 'reactstrap';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import SearchForWithinFilter from './SearchForWithinFilter';
import SearchForFilter from './SearchForFilter';
import _ from 'lodash';
import SearchForOptionsFilter from './SearchForOptionsFilter';

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

const SearchFilter = ({ filterType, filterConfiguration }) => {
	const [ isOpen, setIsOpen ] = useState(false);

	// Predicate Functions - meant to check what type of filter this is
	const isSearchWithinFilter = (filterType) => _.lowerCase(filterType) === _.lowerCase(SearchForWithinFilter.name);
	const isSearchFilter = (filterType) => _.lowerCase(filterType) === _.lowerCase(SearchForFilter.name);
	const isSearchOptionsFilter = (filterType) => _.lowerCase(filterType) === _.lowerCase(SearchForOptionsFilter.name);

	// Build Functions - meant to build a component based on the output of the predicate function.
	const buildSearchWithinFilter = () => {
		console.log('in build search');
		console.log(filterConfiguration);
		return <SearchForWithinFilter filterConfiguration={filterConfiguration} />;
	};

	const buildSearchFilter = () => <SearchForFilter filterConfiguration={filterConfiguration} />;
	const buildSearchOptionsFilter = () => <SearchForOptionsFilter filterConfiguration={filterConfiguration} />;

	const filterConditions = _.cond([
		[ isSearchWithinFilter, buildSearchWithinFilter ],
		[ isSearchFilter, buildSearchFilter ],
		[ isSearchOptionsFilter, buildSearchOptionsFilter ]
	]);

	return (
		<Styles>
			<Button color="primary" className="full-width" onClick={() => setIsOpen(!isOpen)}>
				<span className="left-span">{filterConfiguration.category}</span>
				{!isOpen ? (
					<AiOutlinePlus className="right-span mt-1" />
				) : (
					<AiOutlineMinus className="right-span mt-1" />
				)}
			</Button>
			<Collapse isOpen={isOpen}>{filterConditions(filterType)}</Collapse>
		</Styles>
	);
};

export default SearchFilter;
