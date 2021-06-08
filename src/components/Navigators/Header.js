import React, { useState } from "react";
import { Avatar } from "@material-ui/core";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Popover from "@material-ui/core/Popover";
import Button from "@material-ui/core/Button";
import MenuIcon from "@material-ui/icons/Menu";
import Drawer from "@material-ui/core/Drawer";
import Drawerr from "./Drawer";
import useAuth from "../../hooks/useAuth";
import { CLIENT_TOKEN } from "../../utils/token";
import { ADMIN_DATA, CLIENT_STEP, logout } from "../../utils/localstorage";

function Header() {
  const [anchorEl, setAnchorEl] = useState(null);
  const { clientAuth } = useAuth();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const [state, setState] = React.useState({
    menu: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    console.log(Event);
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const logoutPatient = () => {
    localStorage.removeItem(CLIENT_TOKEN);
    localStorage.removeItem(CLIENT_STEP);
    window.location.replace("/");
  };

  const data = JSON.parse(localStorage.getItem(ADMIN_DATA));

  const logoutAdmin = () => {
    logout();
    window.location.reload();
  };

  return (
    <div className="header">
      <div className="header__left">
        <img className="sideNav__headerLogo" src="logo192.png" alt="logo" />
        <div className="sideNav__headerText">Ace Assist</div>
      </div>

      <div className="header__right">
        <div className="header__rightIcons">
          {clientAuth && (
            <button
              onClick={logoutPatient}
              className="mr-4 cursor-pointer border-gray-200 border px-2"
            >
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
              vertical: "bottom",
              horizontal: "center",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "center",
            }}
          >
            <div className="header__avatarMenu">
              <div className="header__avatarMenuItem">
                {data && data.fullname}
              </div>
              <div className="header__avatarMenuItem2 capitalize">
                {data && data.role}
              </div>
              <span></span>
              <Button>My Account</Button>
              <Button>Profile Settings</Button>
              <Button>Active Tasks</Button>
              <Button onClick={logoutAdmin}>Logout</Button>
            </div>
          </Popover>
        </div>
        <Button onClick={toggleDrawer("menu", true)}>
          <MenuIcon />
        </Button>
        <Drawer
          anchor="left"
          open={state["menu"]}
          onClose={toggleDrawer("menu", false)}
        >
          <div>
            <Drawerr />
          </div>
        </Drawer>
      </div>
    </div>
  );
}

export default Header;
