import { Button } from '@material-ui/core';
import React from 'react';
import { patientAuth } from './Navigators/Header';

function DashBoard() {
	const gotoDashboard = () => {
		if (!patientAuth()) window.location.replace('/'); 
	};
	return (
		<li className="sideNav__menuItem">
			<Button onClick={gotoDashboard}>Dashboard</Button>
		</li>
	);
}

export default DashBoard;
