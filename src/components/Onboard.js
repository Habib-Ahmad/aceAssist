import { Button } from '@material-ui/core';
import React, { useState } from 'react';
import Toastr from 'toastr';
import api from '../utils/api';
import { CLIENT_STEP } from '../utils/localstorage';
import { CLIENT_TOKEN } from '../utils/token';
import { DatePicker, RegularInputBox } from './InputBoxes/Index';
import routes from '../utils/routes';

export default function Onboard() {
	const [state, setState] = useState({
		enrollment_number: '',
		date_of_birth: '',
	});
	const login = async () => {
		try {
			const { data } = await api.post('/personal-history/login', state);
			localStorage.setItem(CLIENT_TOKEN, data.clientToken);
			localStorage.setItem(CLIENT_STEP, data.step);
			window.location.replace(routes[data.step]);
		} catch (error) {
			Toastr.error('Invalid credentails');
		}
	};
	return (
		<div className="flex mt-10 justify-center">
			<div className="w-4/12">
				<h3 className="text-center font-semibold text-xl">Client Details</h3>
				<RegularInputBox
					label="Enrollment Number"
					name="enrollment_number"
					value={state.enrollment_number}
					cb={(e) => setState({ ...state, enrollment_number: e.target.value })}
				/>
				<DatePicker
					label="Date of birth"
					value={state.date_of_birth}
					cb={(e) => setState({ ...state, date_of_birth: e.target.value })}
					name="date_of_birth"
				/>
				<div className="w-full mt-4 flex justify-center">
					<Button onClick={login} className="w-6/12 ml-2" variant="contained" color="primary">
						Login
					</Button>
				</div>
				<div className="w-full mt-4 flex justify-center">
					<button className="border-blue-600 border py-2 px-4 rounded-md " onClick={() => window.location.replace('/personal-history')}> Add New Patient</button>
					{/* <Button color="secondary" ></Button> */}
				</div>
			</div>
		</div>
	);
}
