import React from "react";
import {
  RegularInputBox,
  DatePicker,
  RadioButtons,
  NumberInputBox,
} from "../../InputBoxes/Index";
import Layout from "../layout";

export default function RequestFrom() {
  return (
    <Layout title="Request and Result Form">
      <div className="grid grid-cols-2 gap-x-10 gap-y-4">
        <RegularInputBox name="sitename" label="Facility/Site Name" />
        <DatePicker name="collectionDate" label="Sample Collection Date" />
        <RegularInputBox name="unit" label="Unit" />
        <div></div>
        <RegularInputBox name="clientname" label="Client Name" />
        <RegularInputBox name="code" label="Client Code" />
        <RadioButtons name="sex" label="Sex" option1="Male" option2="Female" />
        <NumberInputBox name="age" label="Age" />
      </div>

      <h3 className="text-lg mt-8">Serology Request:</h3>
      <div className="grid grid-cols-2">
        <div className="custom_radio">
          <h3 className="mt-4 font-semibold">Initial HIV Test:</h3>
          <RadioButtons
            name="initialTest"
            option1="Negative"
            option2="Positive"
          />
        </div>
        <div className="custom_radio">
          <h3 className="mt-4 font-semibold">
            Confirmatory HIV Test(Positive Results Only):
          </h3>
          <RadioButtons
            name="confirmedTest"
            option1="Negative"
            option2="Positive"
          />
        </div>

        <div className="custom_radio">
          <h3 className="mt-4 font-semibold">Syphilis Test: </h3>
          <RadioButtons
            name="syphilisTest"
            option1="Reactive"
            option2="Non Reactive"
          />
        </div>

        <div className="custom_radio">
          <h3 className="mt-4 font-semibold">Hepatitis B Test:</h3>

          <RadioButtons
            name="hepatitsBTest"
            option1="Negative"
            option2="Positive"
          />
        </div>

        <div className="custom_radio">
          <h3 className="mt-4 font-semibold">Hepatitis C Test:</h3>

          <RadioButtons
            name="hepatitsBTest"
            option1="Negative"
            option2="Positive"
          />
        </div>
      </div>
      
      <div className="grid grid-cols-3 gap-x-3 gap-y-4 mt-6">
        {/* <div className="flex">
          <div>Requested by:</div>
          <RegularInputBox name="name" label="R" />
        </div> */}
        <RegularInputBox name="name" label="Requested By (Name in capital)" />
        <RegularInputBox name="signature" label="Signature" />
        <DatePicker name="date" label="" />

        <RegularInputBox name="name" label="Tested By (Name in capital)" />
        <RegularInputBox name="signature" label="Signature" />
        <DatePicker name="date" label="" />

        <RegularInputBox name="name" label="Checked By (Name in capital)" />
        <RegularInputBox name="signature" label="Signature" />
        <DatePicker name="date" label="" />
      </div>
    </Layout>
  );
}
