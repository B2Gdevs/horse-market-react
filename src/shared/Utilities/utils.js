import _ from 'lodash';

/**
 * @param {string} name 
 */
const GetCompositeId = (name) => {
	return _.replace(name, ' ', '');
};

export { GetCompositeId };
