import React from 'react';
import styled from 'styled-components';
import { inputHook } from '../shared/Hooks';

const Styles = styled.div`
	.main-area {
		border: 1px solid black;
	}
	.login-container {
		margin: 57px 0 60px 0;
	}
`;

const Register = () => {
	const { value: email, bind: bindEmail, reset: resetEmail } = inputHook('');

	const { value: firstName, bind: bindFirstName, reset: resetFirstName } = inputHook('');

	const { value: lastName, bind: bindLastName, reset: resetLastName } = inputHook('');

	const { value: password, bind: bindPassword, reset: resetPassword } = inputHook('');

	const handleSubmit = () => {
		console.log('Captured Information: ', email, firstName, lastName, password);
		resetEmail();
		resetFirstName();
		resetLastName();
		resetPassword();
	};

	return (
		<Styles>
			<div className="">
				<div className="container p-5">
					<div className="text-center">
						<h1>Register</h1>
						<p>Manage all of your listings from your account.</p>
					</div>
					<div className="">
						<label>Email Address</label>
						<input className={'form-control mb-3'} placeholder={'Email Address'} {...bindEmail} />
						<label>Full Name</label>
						<input className={'form-control mb-3'} placeholder={'First name'} {...bindFirstName} />
						<label>Last Name</label>
						<input className={'form-control mb-3'} placeholder={'Last name'} {...bindLastName} />
						<label>Password</label>
						<input className={'form-control mb-5'} placeholder={'password'} {...bindPassword} />
					</div>
					<div className="row justify-content-center">
						<button className={'btn btn-success mr-4'} onClick={handleSubmit}>
							Register
						</button>
						<a href={'/login'} className={'btn btn-outline-dark'}>
							I already have an account
						</a>
					</div>
				</div>
			</div>
		</Styles>
	);
};

export default Register;
