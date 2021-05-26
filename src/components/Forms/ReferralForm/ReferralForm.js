import React from "react";
import {
  DatePicker,
  NumberInputBox,
  RegularInputBox,
  Selection,
} from "../../InputBoxes/Index";
import Layout from "../layout";

export default function ReferralForm() {
  return (
    <Layout title="Client Referral Form">
      <div className="font-bold text-lg mt-10">
        To be filled by the organization making the referral (referring
        organization)
      </div>
      <div className="font-semibold text-lg">
        <div className="flex">
          <DatePicker name="date" label="Date" />
          <RegularInputBox name="name" label="Client Name" />
        </div>
        <RegularInputBox name="address" label="Client Address" />
        <RegularInputBox name="phonenumber" label="Client Phone Number" />
        <div className="flex">
          <NumberInputBox name="age" label="Age" />
          <Selection name="sex" label="Sex" option1="Male" option2="Female" />
        </div>
        <RegularInputBox
          name="unitDepartment"
          label="Referral Form (Unit/Department)"
        />
        <RegularInputBox
          name="name"
          label="Name of person referring client/designation"
        />
        <RegularInputBox
          name="address_referring"
          label="Name, Address & Phone Number of referring organization"
        />
        <RegularInputBox
          name="referredTo"
          label="Referred to (Unit/Department)"
        />
        <RegularInputBox name="address" label="Client Address" />
        <RegularInputBox
          name="address_referring"
          label="Name, Address & Phone Number of receiving organization"
        />
        <div className="flex">
          <RegularInputBox name="notes" label="Services needed/notes" />
          <RegularInputBox name="signature" label="Signature" />
        </div>
      </div>
    </Layout>
  );
}
