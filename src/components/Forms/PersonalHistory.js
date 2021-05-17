import React from 'react'
import { RegularInputBox, NumberInputBox, DatePicker, Selection, RadioButtons, RadioButtons4, TimePicker } from '../InputBoxes/Index'

function PersonalHistory() {
    return (
        <div className='newPatient'>
			<div className='newPatient__header'>
				Personal History
			</div>

            <div className='newPatient__row'>
				<RegularInputBox
                    name="name"
                    label="Name (surname first)"
                />
                
				<DatePicker
                    name="visitDate"
                    label="Visit Date"
                />
			</div>

            <div className='newPatient__row'>
				<RegularInputBox
                    name="hospitalNumber"
                    label="Hospital(Unit) No."
                />

				<NumberInputBox
                    name="name"
                    label="State ID"
                />

				<NumberInputBox
                    name="name"
                    label="Facility No."
                />

				<NumberInputBox
                    name="name"
                    label="Serial Enrolment No."
                />
			</div>

            <div className='newPatient__row'>
                <RadioButtons
                    name="sex"
                    label="Sex"
                    option1="Male"
                    option2="Female"
                />

				<NumberInputBox
                    name="age"
                    label="Age"
                />

				<NumberInputBox
                    name="age"
                    label="Age in months (if <5 years)"
                />
			</div>

            <div className='newPatient__row'>
                <DatePicker
                    name="dateOfBirth"
                    label="Date of Birth"
                />
			</div>

            <span></span>

            <div className='newPatient__header2'>
				General (Filled for Adult and Pediatric Patient)
			</div>

            <h3>Where Does the Patient live?</h3>
            <div className='newPatient__row'>
				<RegularInputBox
                    name="ward"
                    label="Ward/Village"
                />
				<RegularInputBox
                    name="town"
                    label="Town Name"
                />
				<RegularInputBox
                    name="lga"
                    label="LGA"
                />
			</div>
            <div className='newPatient__row'>
				<RegularInputBox
                    name="state"
                    label="State"
                />
				<RegularInputBox
                    name="address"
                    label="Address"
                />
				<NumberInputBox
                    name="phoneNumber"
                    label="phone Number"
                />
			</div>

            <h3>Contact persons/ Next of Kin</h3>
            <div className='newPatient__row'>
				<RegularInputBox
                    name="address"
                    label="Address"
                />
				<RegularInputBox
                    name="ward"
                    label="Ward/Village"
                />
				<RegularInputBox
                    name="town"
                    label="Town Name"
                />
			</div>
            <div className='newPatient__row'>
				<RegularInputBox
                    name="state"
                    label="State"
                />
				<Selection
                    name="relationship"
                    label="Relationship"
                />
				<NumberInputBox
                    name="phoneNumber"
                    label="phone Number"
                />
			</div>

            <h3 className="reducedBottomMargin">Marital Status</h3>
            <RadioButtons4
                name="maritalStatus"
                option1="N/A"
                option2="Single"
                option3="Married"
                option4="Widowed"
                option5="Separated"
                option6="Divorced"
            />

            <h3 className="reducedBottomMargin">Education Level</h3>
            <RadioButtons4
                name="educationLevel"
                option1="N/A"
                option2="None"
                option3="Started Primary"
                option4="Completed Primary"
                option5="Qur'anic"
                option6="Secondary"
                option7="Post Secondary"
            />

            <h3 className="reducedBottomMargin">Patient's Job / Occupation Status</h3>
            <RadioButtons4
                name="ocupationStatus"
                option1="N/A"
                option2="Unemployed"
                option3="Employed"
                option4="Retired"
                option5="Student"
                option6="Other"
            />

            <h3>How long would it take you to arrive to the hospital from home?</h3>
            <div className="newPatient__row">
                <TimePicker
                    label="Hours and Minutes"
                />
                <NumberInputBox
                    name="hours"
                    label="Hours"
                />
                <NumberInputBox
                    name="minutes"
                    label="minutes"
                />
            </div>

            <h3>How many dependents are at home?</h3>
            <NumberInputBox
                name="noOfDependents"
                label="Number of Dependents"
            />

            <h3>How many of them are under 18 years old?</h3>
            <NumberInputBox
                name="noOfDependentsUnder18"
                label="Number of Dependents Under 18"
            />
            
            <h3 className="reducedBottomMargin">Service entry into program</h3>
            <RadioButtons4
                name="serviceEntry"
                option1="Private"
                option2="Current Clinic Patient"
                option3="VCT"
                option4="ANC/PMTCT"
                option5="STI"
                option6="TB"
                option7="Self-referral"
                option8="Substance Use"
                option9="Casuality"
                option10="OPD"
                option11="Ward"
                option12="HBC"
                option13="Transferred from another care and treatment site"
            />

            <span></span>

            <div className='newPatient__header2'>
				Filled for Pediatric Patient Only
			</div>

            <h3>With whom does the child live?</h3>
            <div className="newPatient__row">
                <RegularInputBox
                    name="name"
                    label="Name"
                />
                <RegularInputBox
                    name="relationship"
                    label="Relationship"
                />
            </div>

        </div>
    )
}

export default PersonalHistory
