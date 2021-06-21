import React from 'react';
import styled from 'styled-components';

const Styles = styled.div`
	.slide-price {
		color: green;
	}
	.slide-desc {
		color: #bababc;
	}
	img {
		object-fit: cover;
		height: 300px;
		Width: 300px;
	}
`;

const SlideItem = ({ slideData }) => (
	<Styles>
		<div className="card shadow">
			<img src={slideData.image} alt={''} />
			<div className="p-1">
				<h4 className="slide-title">{slideData.title}</h4>
				<p className="slide-price">{slideData.price}</p>
				<p>{slideData.desc}</p>
				<p className="slide-desc">{slideData.location}</p>
			</div>
		</div>
	</Styles>
);

export default SlideItem;
