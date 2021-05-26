// import React from 'react';

export const SideNavData = [
  {
    title: "Add New Patient",
    path: "/addNewPatient",
    class: "expand",

    subNav: [
      {
        id: 0,
        title: "Client Intake Form",
        path: "/client-intake-form",
      },
      {
        id: 1,
        title: "Personal History",
        path: "/personal-history",
      },
    ],
  },

  {
    title: "Test Result",
    path: "/result",
    class: "expand",

    subNav: [
      { title: "Request and Result Form", path: "/request-form", id: 2 },
    ],
  },

  {
    title: "Referral Form",
    path: "/referral-form",
    class: "expand",
    subNav: [
      { title: "Referral Form", path: "/referral-form", id: 3 },
      { title: "Services provided", path: "/services-provided", id: 4 },
    ],
  },
];
