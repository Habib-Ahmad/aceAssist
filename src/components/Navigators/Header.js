import React, { useState } from 'react';
import { Avatar } from '@material-ui/core';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Popover from '@material-ui/core/Popover';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import Drawerr from './Drawer';
import { ADMIN_TOKEN, CLIENT_TOKEN } from '../../utils/token';
import { CLIENT_STEP, USER_DATA } from '../../utils/localstorage';

export const patientAuth = () => {
	const token = localStorage.getItem(CLIENT_TOKEN);
	const step = localStorage.getItem(CLIENT_STEP);
	if (token || step) return true;
	return false;
};


function Header() {
	const [anchorEl, setAnchorEl] = useState(null);

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	const getUserDetails = () => {
		const data = localStorage.getItem(USER_DATA);
		const userDetails = JSON.parse(data);
		return { fullname: userDetails.fullname, role: userDetails.role };
	};

	const open = Boolean(anchorEl);
	const id = open ? 'simple-popover' : undefined;

	const [state, setState] = React.useState({
		menu: false,
	});

	
	const toggleDrawer = (anchor, open) => (event) => {
		console.log(Event);
		if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
			return;
		}

		setState({ ...state, [anchor]: open });
	};

	const logoutPatient = () => {
		localStorage.removeItem(CLIENT_TOKEN);
		localStorage.removeItem(CLIENT_STEP);
		window.location.replace('/');
	};

	const logout = () => {
		localStorage.removeItem(ADMIN_TOKEN);
		localStorage.removeItem(USER_DATA);
		window.location.replace('/');
	};

	return (
		<div className="header">
			<div className="header__left">
				<img className="sideNav__headerLogo" src="logo192.png" alt="logo" />
				<div className="sideNav__headerText">Ace Assist</div>
			</div>

			<div className="header__right">
				<div className="header__rightIcons">
					{patientAuth() && (
						<button className="mr-10 border-blue-600 border py-2 px-4 rounded-md " onClick={logoutPatient}>
							Logout Patient
						</button>
					)}

					<NotificationsIcon />

					<Button aria-describedby={id} onClick={handleClick}>
						<Avatar />
					</Button>
					<Popover
						id={id}
						open={open}
						anchorEl={anchorEl}
						onClose={handleClose}
						anchorOrigin={{
							vertical: 'bottom',
							horizontal: 'center',
						}}
						transformOrigin={{
							vertical: 'top',
							horizontal: 'center',
						}}
					>
						<div className="header__avatarMenu">
							<div className="header__avatarMenuItem">{getUserDetails().fullname}</div>
							<div className="header__avatarMenuItem2">
								{getUserDetails().role == 'admin' ? 'Admin' : 'Super Admin'}
							</div>
							<span></span>
							<Button>My Account</Button>
							<Button>Profile Settings</Button>
							<Button>Active Tasks</Button>
							<Button onClick={logout}>Logout</Button>
						</div>
					</Popover>
				</div>
				<Button onClick={toggleDrawer('menu', true)}>
					<MenuIcon />
				</Button>
				<Drawer anchor="left" open={state['menu']} onClose={toggleDrawer('menu', false)}>
					<div>
						<Drawerr />
					</div>
				</Drawer>
			</div>
		</div>
	);
}

export default Header;
