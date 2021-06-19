import { useState } from 'react';

const InputHook = (initialValue) => {
	const [ value, setValue ] = useState(initialValue);

	return {
		value,
		setValue,
		reset: () => setValue(''),
		bind: {
			value,
			onChange: (event) => {
				setValue(event.target.value);
			}
		}
	};
};

export { InputHook as inputHook };
