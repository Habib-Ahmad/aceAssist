import React from "react";

export default function Layout({ title, children }) {
  return (
    <div className="newPatient">
      <div className="newPatient__header">{title}</div>
      {children}
    </div>
  );
}
