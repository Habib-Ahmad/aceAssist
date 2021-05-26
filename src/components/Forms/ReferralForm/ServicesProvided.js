import React from "react";
import {
  DatePicker,
  NumberInputBox,
  RegularInputBox,
  Selection,
} from "../../InputBoxes/Index";
import Layout from "../layout";

export default function ServicesProvided() {
  return (
    <Layout title="Client Referral Form">
      <div className="font-bold text-lg mt-10">
        Services provided: To be filled by the organization providing the
        service(s)
      </div>
      <div className="flex">
        <DatePicker name="date" label="Date" />
        <RegularInputBox name="name" label="Client Name" />
      </div>
      <div className="flex">
        <NumberInputBox name="age" label="Age" />
        <Selection name="sex" label="Sex" option1="Male" option2="Female" />
      </div>
    </Layout>
  );
}
