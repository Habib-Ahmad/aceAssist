import { Button } from "@material-ui/core";
import React from "react";

export default function Layout({ title, children, onSubmit }) {
  return (
    <div className="newPatient">
      <div className="newPatient__header">{title}</div>
      {children}
      <Button onClick={onSubmit} variant="contained" color="primary">
        Submit
      </Button>
    </div>
  );
}
