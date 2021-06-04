import React from "react";
import ClientIntakeForm from "./Forms/AddNewPatient/ClientIntakeForm";
import PersonalHistory from "./Forms/AddNewPatient/PersonalHistory";
import ReferralForm from "./Forms/ReferralForm/ReferralForm";
import ServicesProvided from "./Forms/ReferralForm/ServicesProvided";
import RequestandResultForm from "./Forms/TestResult/RequestandResultForm";
import Onboard from "./Onboard";
// import DashBoard from './DashBoard'

const MainContent = (props) => {
  return (
    <div className="mainContent">
      {/* { props.selectedTab === 100 && <DashBoard /> } */}
      {props.selectedTab === 0 && <PersonalHistory />}
      {props.selectedTab === 1 && <ClientIntakeForm />}
      {props.selectedTab === 2 && <RequestandResultForm />}
      {props.selectedTab === 3 && <ReferralForm />}
      {props.selectedTab === 4 && <ServicesProvided />}
      {!props.selectedTab && <Onboard />}
    </div>
  );
};

export default MainContent;
