// Configuration Data
let configData = {
	responsive: {
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 4,
			slidesToSlide: 1 // optional, default to 1.
		},
		tablet: {
			breakpoint: { max: 1024, min: 464 },
			items: 2,
			slidesToSlide: 2 // optional, default to 1.
		},
		mobile: {
			breakpoint: { max: 464, min: 0 },
			items: 1,
			slidesToSlide: 1 // optional, default to 1.
		}
	},
	sortOptions: [
		{
			sortConfiguration: {
				category: 'Distance',
				sortField: 'Distance',
				options: [
					{
						value: true,
						description: 'Ascending'
					},
					{
						value: false,
						description: 'Descending'
					}
				]
			}
		},
		{
			sortConfiguration: {
				category: 'Price',
				sortField: 'Price',
				options: [
					{
						value: true,
						description: 'Ascending'
					},
					{
						value: false,
						description: 'Descending'
					}
				]
			}
		},
		{
			sortConfiguration: {
				category: 'Date',
				sortField: 'Date Listed',
				options: [
					{
						value: true,
						description: 'Latest Date to Earliest'
					},
					{
						value: false,
						description: 'Earliest Date to Latest'
					}
				]
			}
		}
	],
	filterOptions: [
		{
			filterType: 'SearchForWithinFilter',
			filterConfiguration: {
				category: 'Location',
				searchField: 'Zipcode',
				options: [
					{
						value: 100,
						description: 'within 100'
					},
					{
						value: 250,
						description: 'within 250'
					},
					{
						value: 500,
						description: 'within 500'
					},
					{
						value: 1000,
						description: 'within 1000'
					},
					{
						value: -1,
						description: 'any distance'
					}
				]
			}
		},
		{
			filterType: 'SearchForFilter',
			filterConfiguration: {
				category: 'Dam',
				searchField: 'Dam'
			}
		},
		{
			filterType: 'SearchForFilter',
			filterConfiguration: {
				category: 'Sire',
				searchField: 'Sire'
			}
		},
		{
			filterType: 'SearchForWithinFilter',
			filterConfiguration: {
				category: 'Age',
				searchField: 'Age',
				options: [
					{
						value: 1,
						description: 'less than 1 year'
					},
					{
						value: 5,
						description: 'within 5 years'
					},
					{
						value: 10,
						description: 'within 10 years'
					},
					{
						value: 15,
						description: 'within 15 years'
					},
					{
						value: -1,
						description: 'any age'
					}
				]
			}
		},
		{
			filterType: 'SearchForOptionsFilter',
			filterConfiguration: {
				category: 'Gender',
				searchField: 'Gender',
				options: [
					{
						value: 1,
						description: 'Male'
					},
					{
						value: 2,
						description: 'Female'
					}
				]
			}
		},
		{
			filterType: 'SearchForWithinFilter',
			filterConfiguration: {
				category: 'Price',
				searchField: 'Price',
				options: [
					{
						value: 500,
						description: 'within 500'
					},
					{
						value: 1000,
						description: 'within 1000'
					},
					{
						value: 2500,
						description: 'within 2500'
					},
					{
						value: -1,
						description: 'any price'
					}
				]
			}
		},
		{
			filterType: 'SearchForOptionsFilter',
			filterConfiguration: {
				category: 'Discipline',
				searchField: 'Discipline',
				options: [
					{
						value: 1,
						description: 'Barrel Racing'
					},
					{
						value: 2,
						description: 'Cattle Roping'
					}
				]
			}
		},
		{
			filterType: 'SearchForOptionsFilter',
			filterConfiguration: {
				category: 'Breading Capable',
				searchField: 'Breading Capable',
				options: [
					{
						value: 1,
						description: 'Yes'
					},
					{
						value: 2,
						description: 'No'
					}
				]
			}
		}
	]
};

export { configData };
