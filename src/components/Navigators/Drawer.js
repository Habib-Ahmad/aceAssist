import React, { useState } from 'react';
import { Tabs, Tab, Button } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import { SideNavData } from './SideNavData';
import Dashboard from "../DashBoard";
const SideNav = (props) => {
	const [navClass, setNavClass] = useState(SideNavData);

	function ExpandMore(e, idx) {
		if (navClass[idx].class === 'hide') {
			const updatedNavClass = [...navClass];
			updatedNavClass[idx] = { ...navClass[idx], class: 'expand' };
			setNavClass(updatedNavClass);
		} else {
			const updatedNavClass = [...navClass];
			updatedNavClass[idx] = { ...navClass[idx], class: 'hide' };
			setNavClass(updatedNavClass);
		}
	}

	return (
		<div className="drawer">
			<div className="sideNav__menu">
				<div className="sideNav__menuText">Navigation Menu</div>
				<ul className="sideNav__menuItems">
					<Dashboard />
					{SideNavData.map((data, idx) => (
						<li key={idx} className="sideNav__menuItem">
							{data.subNav ? (
								<>
									<Button key={`button:${idx}`} id={idx} onClick={(e) => ExpandMore(e, idx)}>
										{data.title}
										{navClass[idx].class === 'hide' ? <ExpandMoreIcon /> : <ExpandLessIcon />}
									</Button>

									<Tabs
										key={`tabs:${idx}`}
										className={`sideNavTabs ${navClass[idx].class}`}
										orientation="vertical"
										value={props.selectedTab}
										onChange={props.handleChange}
										indicatorColor="primary"
										TabIndicatorProps={{ hidden: true }}
										scrollButtons="off"
									>
										{data.subNav.map((subData, subIdx) => (
											<Tab
												key={`tab:${subIdx}`}
												disableRipple
												className="sideNavTab"
												label={subData.title}
												value={subData.id}
											/>
										))}
									</Tabs>
								</>
							) : (
								<div className="custom_tab">
									<Tabs
										key={`tabs:${idx}`}
										className={`sideNavTabs ${navClass[idx].class}`}
										orientation="vertical"
										value={props.selectedTab}
										onChange={props.handleChange}
										indicatorColor="primary"
										TabIndicatorProps={{ hidden: true }}
										scrollButtons="off"
									>
										<Tab
											key={`tab:${idx}`}
											disableRipple
											className="sideNavTab"
											label={data.title}
											value={data.id}
										/>
									</Tabs>
								</div>
							)}
						</li>
					))}
				</ul>
			</div>

			<span></span>

			<div className="sideNav__footer">Settings | Profile</div>
		</div>
	);
};

export default SideNav;
