import React from "react";
import {
  RegularInputBox,
  NumberInputBox,
  DatePicker,
  Selection,
  RadioButtons,
  RadioButtons2,
  RadioButtons3,
} from "../../InputBoxes/Index";
import Layout from "../layout";

function ClientIntakeForm() {
  return (
    <Layout title="HIV Testing Services: Client Intake Form">
      <div className="newPatient__row">
        <RegularInputBox name="state" label="State" />
        <RegularInputBox name="lga" label="LGA" />
        <RegularInputBox name="facilityName" label="Facility Name" />
      </div>
      <div className="newPatient__row">
        <RegularInputBox
          name="referredForm"
          // label="Referred Form &nbsp; (Self, TB, STI, SF, OPD, Ward, Blood Bank, others)"
          label="Referred Form"
        />
      </div>
      <div className="newPatient__row">
        <RegularInputBox
          name="setting"
          // label="Settting &nbsp; (CT, TB , STI, FP, OPD, Ward, Outreach, Standalone HTS, others)"
          label="Settting"
        />
      </div>
      <div className="newPatient__row">
        <RegularInputBox name="name" label="Client's Name" />

        <NumberInputBox name="age" label="Age" />

        <DatePicker name="dateOfVisit" label="Date of Visit" />
      </div>
      <div className="newPatient__row">
        <RegularInputBox name="phoneNumber" label="Client's Phone Number" />

        <RegularInputBox name="address" label="Client's Descriptive Address" />
      </div>
      <div className="newPatient__row">
        <RegularInputBox name="code" label="Client's Code" />

        <Selection name="sex" label="Sex" option1="Male" option2="Female" />

        <RadioButtons
          name="firstTimeVisit"
          label="First Time Visit"
          option1="Yes"
          option2="No"
        />
      </div>
      <div className="newPatient__row">
        <RegularInputBox name="stateOfResidence" label="State of Residence" />

        <RegularInputBox name="lgaOfResidence" label="LGA of Residence" />
      </div>
      <div className="newPatient__row">
        <Selection
          name="maritalStatus"
          label="Marital Status"
          option1="Single"
          option2="Married"
        />

        <NumberInputBox
          name="numberOfChildren"
          label="No. of Own Children < 5 years"
        />

        <NumberInputBox name="numberOfWives" label="No. of Wives/Co-wives" />
      </div>
      <div className="newPatient__row">
        <RadioButtons
          name="typeOfSession"
          label="Type of Session"
          option1="Individual"
          option2="Couple"
          option3="Previously Self Tested"
        />
      </div>
      <div className="newPatient__row">
        <RadioButtons
          name="indexTesting"
          label="Index Testing"
          option1="Yes"
          option2="No"
        />
      </div>
      <div className="newPatient__row">
        <RadioButtons
          name="ifIndexTesting"
          label="If Yes"
          option1="Biological"
          option2="Sexual"
          option3="Social"
        />
        <RegularInputBox name="indexClientId" label="Index Client Id" />
      </div>
      <span></span>
      <div className="newPatient__header2">Pre-Test Information</div>
      <h3>Knowledge Assesment</h3>
      <RadioButtons2
        label="Previously tested HIV negative"
        option1="Yes"
        option2="No"
      />
      <RadioButtons2 label="Client pregnant" option1="Yes" option2="No" />
      <RadioButtons2
        label="Client informed about HIV transmission routes"
        option1="Yes"
        option2="No"
      />
      <RadioButtons2
        label="Client informed about risk factor for HIV transmission"
        option1="Yes"
        option2="No"
      />
      <RadioButtons2
        label="Client informed on preventing HIV transmission methods"
        option1="Yes"
        option2="No"
      />
      <RadioButtons2
        label="Client informed about possible test results"
        option1="Yes"
        option2="No"
      />
      <RadioButtons2
        label="Informed consent for HIV testing given"
        option1="Yes"
        option2="No"
      />
      <h3>Risk Assesment</h3>
      <RadioButtons2
        label="Ever had sexual intercourse"
        option1="Yes"
        option2="No"
      />
      <RadioButtons2
        label="Blood transfusion in the last 3 months"
        option1="Yes"
        option2="No"
      />
      <RadioButtons2
        label="Unprotected sex with casual partner in the last 3 months"
        option1="Yes"
        option2="No"
      />
      <RadioButtons2
        label="Unprotected sex with regular partner in the last 3 months"
        option1="Yes"
        option2="No"
      />
      <RadioButtons2
        label="STI in the last 3 months"
        option1="Yes"
        option2="No"
      />
      <RadioButtons2
        label="More than 1 sex partner in the last 3 months"
        option1="Yes"
        option2="No"
      />
      <div className="newPatient__riskScore">
        <NumberInputBox label="Risk Score" />
        <p>*Calculate the sum of the 6 answers above</p>
      </div>
      <h3>Clinical TB Screening</h3>
      <RadioButtons2 label="Current cough" option1="Yes" option2="No" />
      <RadioButtons2 label="Weight loss" option1="Yes" option2="No" />
      <RadioButtons2 label="Fever" option1="Yes" option2="No" />
      <RadioButtons2 label="Night sweats" option1="Yes" option2="No" />
      <div className="newPatient__riskScore">
        <NumberInputBox label="Risk Score" />
        <p>*Calculate the sum of the 6 answers above</p>
        {/* <p>*If score {'>'}= 1, test for sputum AFB or refer to TB service</p> */}
      </div>
      <h3>Syndromic STI Screening</h3>
      <RadioButtons2
        label="Female: Complaints of vaginal discharge or burning when urinating?"
        option1="Yes"
        option2="No"
      />
      <RadioButtons2
        label="Female: Complaints of lower abdominal pain with or without vaginal discharge?"
        option1="Yes"
        option2="No"
      />
      <RadioButtons2
        label="Male: Complaints of urethral discharge or burning when urinating?"
        option1="Yes"
        option2="No"
      />
      <RadioButtons2
        label="Male: Complaints of scrotal swelling and pain?"
        option1="Yes"
        option2="No"
      />
      <RadioButtons2
        label="Complaints of genital score(s) or swollen inguinal lymph nodes with or without pains?"
        option1="Yes"
        option2="No"
      />
      <div className="newPatient__riskScore">
        <NumberInputBox label="STI Screening Score" />
        <p>*Calculate the sum of the 3 answers above</p>
        {/* <p>*If score {'>'}= 1, follow Syndromic STI mangement guidelines or refer</p> */}
      </div>
      <span></span>
      <div className="newPatient__header2">Post-Test Counselling</div>
      <RadioButtons3
        label="HIV TEST RESULTS"
        option1="Negative"
        option2="Positive"
      />
      <br />
      <br />
      &nbsp;
      <RadioButtons3
        label="Have you been tested for HIV before within this year?"
        option1="Not previously tested"
        option2="Previously tested negative"
        option3="Previously tested positive in HIV care"
        option4="Previously tested positive not in HIV care"
      />
      <br />
      <span></span>
      <RadioButtons2
        label="HIV requet and result form signed by tester(s)"
        option1="Yes"
        option2="No"
      />
      <RadioButtons2
        label="HIV requet and result form filled with CT Intake Form"
        option1="Yes"
        option2="No"
      />
      <RadioButtons2
        label="Client received HIV test result"
        option1="Yes"
        option2="No"
      />
      <RadioButtons2
        label="Post test counselling done"
        option1="Yes"
        option2="No"
      />
      <RadioButtons2
        label="Risk reduction plan developed"
        option1="Yes"
        option2="No"
      />
      <RadioButtons2
        label="Post test disclosure plan developed"
        option1="Yes"
        option2="No"
      />
      <RadioButtons2
        label="Will bring partner(s) for HIV testing"
        option1="Yes"
        option2="No"
      />
      <RadioButtons2
        label="Will bring own children <5 years for HIV testing"
        option1="Yes"
        option2="No"
      />
      <RadioButtons2
        label="Provided with information on FP and dual contraception"
        option1="Yes"
        option2="No"
      />
      <RadioButtons2
        label="Client referred to other services"
        option1="Yes"
        option2="No"
      />
      <RadioButtons2
        label="Client/Partner use FP methods (other than condom)"
        option1="Yes"
        option2="No"
      />
      <RadioButtons2
        label="Client/Partner use condoms as (one) FP method"
        option1="Yes"
        option2="No"
      />
      <RadioButtons2
        label="Correct condom use demonstrated"
        option1="Yes"
        option2="No"
      />
      <RadioButtons2
        label="Condoms provided to client"
        option1="Yes"
        option2="No"
      />
      <RadioButtons2
        label="Client referred to other services"
        option1="Yes"
        option2="No"
      />
      <br />
      <p>
        *If client tests HIV negative, has an HIV Risk Assesment Score of 1 and
        above, or there is evidence of STI syndrome, recommend re-testing after
        3 months
      </p>
      <h3>Syphilis Testing</h3>
      <RadioButtons3
        label="SYPHILIS TEST RESULTS"
        option1="Non-Reactive"
        option2="Reactive"
      />
      <br />
      <h3>Hepatitis Testing</h3>
      <RadioButtons3
        label="HEPATITIS B VIRUS TEST RESULTS"
        option1="Negative"
        option2="Positive"
      />
      <br />
      <br />
      <RadioButtons3
        label="HEPATITIS C VIRUS TEST RESULTS"
        option1="Negative"
        option2="Positive"
      />
      <br />
      <br />
    </Layout>
  );
}

export default ClientIntakeForm;
