import { Button } from "@material-ui/core";
import React, { useEffect } from "react";
import { CLIENT_STEP } from "../../utils/localstorage";
import routes from "../../utils/routes";

export default function Layout({ title, children, onSubmit }) {
  useEffect(() => {
    const step = localStorage.getItem(CLIENT_STEP);
    const pathname = window.location.pathname;
    if (step && pathname !== routes[step]) {
      window.location.replace(routes[step]);
    } 
    // else if (!step && pathname !== "/personal-history") {
    //   window.location.replace("/");
    // }
  }, []);
  return (
    <div className="newPatient">
      <div className="newPatient__header">{title}</div>
      {children}
      <br />
      <br />
      <Button onClick={onSubmit} variant="contained" color="primary">
        Submit
      </Button>
    </div>
  );
}
