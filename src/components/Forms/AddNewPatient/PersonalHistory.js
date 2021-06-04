import React, { useState } from "react";
import Toastr from "toastr";
import api from "../../../utils/api";
import {
  RegularInputBox,
  NumberInputBox,
  DatePicker,
  Selection,
  RadioButtons,
  RadioButtons4,
} from "../../InputBoxes/Index";
import Layout from "../layout";

function PersonalHistory() {
  const [time, setTime] = useState({
    hours: "",
    minutes: "",
  });
  const [state, setState] = useState({
    date_of_birth: "",
    fullname: "",
    state_id: null,
    // hospital_number: "",
    sex: "",
    occupation_status: "",
    marital_status: "",
    arrival_time_from_home: "",
    service_entry_into_program: "",
    num_of_dependents: 0,
    num_of_dependents_older_than_18: 0,
    household_family_member_enrolled: null,
    anyone_knows_client_status: null,
    education_level: "Started primary",
    num_of_own_children_less_than_five_years: 0,
    num_of_wives: 0,
  });

  const [tests, setTests] = useState({
    test_for_hiv: {
      spouse_1: null,
      spouse_2: null,
      last_child: null,
      seconnd_to_last_child: null,
      third_to_last_child: null,
    },
    on_tb_treatment: {
      spouse_1: null,
      spouse_2: null,
      last_child: null,
      seconnd_to_last_child: null,
      third_to_last_child: null,
    },
    on_arv: {
      spouse_1: null,
      spouse_2: null,
      last_child: null,
      seconnd_to_last_child: null,
      third_to_last_child: null,
    },
    tested_for_tb: {
      spouse_1: null,
      spouse_2: null,
      last_child: null,
      seconnd_to_last_child: null,
      third_to_last_child: null,
    },
  });

  const [address, setAddress] = useState({
    ward_village: "",
    town_name: "",
    lga_of_residence: "",
    state_of_residence: "",
    country_of_residence: "Nigeria",
    phonenumber: "",
    address: "",
  });

  const [next_of_kin_address, setNextOfKinAddress] = useState({
    ward_village: "",
    lga_of_residence: "",
    state_of_residence: "",
    country_of_residence: "Nigeria",
    phonenumber: "",
    address: "",
    relationship: "",
  });

  const [ParentsDetails, setDetails] = useState({
    father: {
      name: "",
      address: "",
      job: { status: "employed", employer: "" },
      alive: null,
      education: { level: "started primary", school_name: "" },
    },
    mother: {
      name: "",
      address: "",

      job: { status: "employed", employer: "" },
      alive: null,
      education: { level: "started primary", school_name: "" },
    },
    caregiver: {
      name: "",
      job: { status: "employed", employer: "" },
      education: { level: "started primary", school_name: "" },
    },
  });

  const [pediatricPatient, setPatient] = useState({
    lives_with: "",
    relationship: "",
    parents_are_married: null,
    parents_live_together: null,
    num_of_siblings: 0,
  });

  const submit = async (e) => {
    e.preventDefault();
    const data = {
      ...state,
      address,
      arrival_time_from_home: `${time.hours}hrs:${time.minutes}mins`,
      next_of_kin_address,
      pediatric_patient:
        pediatricPatient.lives_with ||
        pediatricPatient.parents_are_married ||
        pediatricPatient.num_of_siblings ||
        pediatricPatient.relationship
          ? pediatricPatient
          : null,
      ...tests,
    };

    try {
      await api.post("/personal-history", data);
      Toastr.success("Success");
    } catch (error) {
      Toastr.error("Invalid input. Most fields are required!!!!!");
    }
  };
  return (
    <Layout onSubmit={submit} title="Personal History">
      <div className="newPatient__row">
        <RegularInputBox
          cb={(e) => setState({ ...state, fullname: e.target.value })}
          value={state.fullname}
          name="name"
          label="Name (surname first)"
        />
      </div>
      <div className="newPatient__row">
        {/* <RegularInputBox
          cb={(e) => setState({ ...state, hospital_number: e.target.value })}
          value={state.hospital_number}
          name="hospitalNumber"
          label="Hospital(Unit) No."
        /> */}

        <NumberInputBox
          name="name"
          cb={(e) => setState({ ...state, state_id: parseInt(e.target.value) })}
          value={state.state_id}
          label="State ID"
        />
      </div>
      <div className="newPatient__row">
        <RadioButtons
          name="sex"
          label="Sex"
          cb={(e) => setState({ ...state, sex: e.target.value })}
          value={state.sex}
          option1="Male"
          option2="Female"
        />
        <DatePicker
          cb={(e) => setState({ ...state, date_of_birth: e.target.value })}
          value={state.date_of_birth}
          name="dateOfBirth"
          label="Date of Birth"
        />
      </div>
      <div className="flex">
        <NumberInputBox
          name="numberOfChildren"
          label="No. of Own Children < 5 years"
          value={state.num_of_own_children_less_than_five_years}
          cb={(e) =>
            setState({
              ...state,
              num_of_own_children_less_than_five_years: e.target.value,
            })
          }
        />

        <NumberInputBox
          value={state.num_of_wives}
          cb={(e) =>
            setState({
              ...state,
              num_of_wives: e.target.value,
            })
          }
          name="numberOfWives"
          label="No. of Wives/Co-wives"
        />
      </div>
      <span></span>
      <div className="newPatient__header2">
        General (Filled for Adult and Pediatric Patient)
      </div>
      <h3>Where Does the Patient live?</h3>
      <div className="newPatient__row">
        <RegularInputBox
          cb={(e) => setAddress({ ...address, ward_village: e.target.value })}
          value={address.ward_village}
          name="ward"
          label="Ward/Village"
        />
        <RegularInputBox
          cb={(e) => setAddress({ ...address, town_name: e.target.value })}
          value={address.town_name}
          name="town"
          label="Town Name"
        />
        <RegularInputBox
          cb={(e) =>
            setAddress({ ...address, lga_of_residence: e.target.value })
          }
          value={address.lga_of_residence}
          name="lga"
          label="LGA"
        />
      </div>
      <div className="newPatient__row">
        <RegularInputBox
          cb={(e) =>
            setAddress({ ...address, state_of_residence: e.target.value })
          }
          value={address.state_of_residence}
          name="state"
          label="State"
        />
        <RegularInputBox
          cb={(e) => setAddress({ ...address, address: e.target.value })}
          value={address.address}
          name="address"
          label="Address"
        />
        <RegularInputBox
          cb={(e) => setAddress({ ...address, phonenumber: e.target.value })}
          value={address.phonenumber}
          name="phoneNumber"
          label="phone Number"
        />
      </div>
      <h3>Contact persons/ Next of Kin</h3>
      <div className="newPatient__row">
        <RegularInputBox
          cb={(e) =>
            setNextOfKinAddress({
              ...next_of_kin_address,
              address: e.target.value,
            })
          }
          value={next_of_kin_address.address}
          name="address"
          label="Address"
        />
        <RegularInputBox
          cb={(e) =>
            setNextOfKinAddress({
              ...next_of_kin_address,
              ward_village: e.target.value,
            })
          }
          value={next_of_kin_address.ward_village}
          name="ward"
          label="Ward/Village"
        />
        <RegularInputBox
          name="lga"
          cb={(e) =>
            setNextOfKinAddress({
              ...next_of_kin_address,
              lga_of_residence: e.target.value,
            })
          }
          value={next_of_kin_address.lga_of_residence}
          label="LGA"
        />
      </div>
      <div className="newPatient__row">
        <RegularInputBox
          name="state"
          cb={(e) =>
            setNextOfKinAddress({
              ...next_of_kin_address,
              state_of_residence: e.target.value,
            })
          }
          value={next_of_kin_address.state_of_residence}
          label="State"
        />
        <RegularInputBox
          cb={(e) =>
            setNextOfKinAddress({
              ...next_of_kin_address,
              relationship: e.target.value,
            })
          }
          value={next_of_kin_address.relationship}
          name="relationship"
          label="Relationship"
        />
        <RegularInputBox
          cb={(e) =>
            setNextOfKinAddress({
              ...next_of_kin_address,
              phonenumber: e.target.value,
            })
          }
          value={next_of_kin_address.phonenumber}
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
        cb={(e) => setState({ ...state, marital_status: e.target.value })}
        value={state.marital_status}
        option6="Divorced"
      />
      <h3>Education Level</h3>

      <Selection
        name="school"
        option1="Started Primary"
        option2="Completed Primary"
        option3="Secondary"
        option4="Post Secondary"
        option5="Quranic"
        option6="None"
        option7="Other"
        cb={(e) =>
          setState({
            ...state,
            education_level: e.target.value,
          })
        }
        value={state.education_level}
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
        cb={(e) => setState({ ...state, occupation_status: e.target.value })}
        value={state.occupation_status}
      />
      <h3>How long would it take you to arrive to the hospital from home?</h3>
      <div className="newPatient__row">
        <NumberInputBox
          cb={(e) => setTime({ ...time, hours: e.target.value })}
          value={time.hours}
          name="hours"
          label="Hours"
        />
        <NumberInputBox
          cb={(e) => setTime({ ...time, minutes: e.target.value })}
          value={time.minutes}
          name="minutes"
          label="minutes"
        />
      </div>
      <h3>How many dependents are at home?</h3>
      <NumberInputBox
        cb={(e) =>
          setState({ ...state, num_of_dependents: parseInt(e.target.value) })
        }
        value={state.num_of_dependents}
        name="noOfDependents"
        label="Number of Dependents"
      />
      <h3>How many of them are under 18 years old?</h3>
      <NumberInputBox
        name="noOfDependentsUnder18"
        label="Number of Dependents Under 18"
        cb={(e) =>
          setState({
            ...state,
            num_of_dependents_older_than_18: parseInt(e.target.value),
          })
        }
        value={state.num_of_dependents_older_than_18}
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
        cb={(e) =>
          setState({ ...state, service_entry_into_program: e.target.value })
        }
        value={state.service_entry_into_program}
      />
      <span></span>
      <div className="newPatient__header2">
        Filled for Pediatric Patient Only
      </div>
      <h3>With whom does the child live?</h3>
      <div className="newPatient__row">
        <RegularInputBox
          cb={(e) =>
            setPatient({ ...pediatricPatient, lives_with: e.target.value })
          }
          value={pediatricPatient.lives_with}
          name="name"
          label="Name"
        />
        <RegularInputBox
          cb={(e) =>
            setPatient({ ...pediatricPatient, relationship: e.target.value })
          }
          value={pediatricPatient.relationship}
          name="relationship"
          label="Relationship"
        />
      </div>
      <h3 className="reducedBottomMargin">Is the mother of child alive?</h3>
      <RadioButtons4
        name="mother_alive"
        cb={(e) => {
          setDetails({
            ...ParentsDetails,
            mother: {
              ...ParentsDetails.mother,
              alive: e.target.value === "true",
            },
          });
        }}
        value={ParentsDetails.mother.alive}
        option1="Yes"
        option2="No"
      />
      <div className="font-bold mt-6">If yes</div>
      <div className="newPatient__row">
        <RegularInputBox
          name="name"
          cb={(e) =>
            setDetails({
              ...ParentsDetails,
              mother: { ...ParentsDetails.mother, name: e.target.value },
            })
          }
          value={ParentsDetails.mother.name}
          label="Name"
        />
        <RegularInputBox
          name="address"
          cb={(e) =>
            setDetails({
              ...ParentsDetails,
              mother: { ...ParentsDetails.mother, address: e.target.value },
            })
          }
          value={ParentsDetails.mother.address}
          label="Address"
        />
      </div>
      <h3 className="reducedBottomMargin">Is the father of child alive?</h3>
      <RadioButtons4
        name="father_alive"
        cb={(e) =>
          setDetails({
            ...ParentsDetails,
            father: {
              ...ParentsDetails.father,
              alive: e.target.value === "true",
            },
          })
        }
        value={ParentsDetails.father.alive}
        option1="Yes"
        option2="no"
      />
      <div className="font-bold mt-6">If yes</div>
      <div className="newPatient__row">
        <RegularInputBox
          name="name"
          cb={(e) =>
            setDetails({
              ...ParentsDetails,
              father: { ...ParentsDetails.father, name: e.target.value },
            })
          }
          value={ParentsDetails.father.name}
          label="Name"
        />
        <RegularInputBox
          name="address"
          cb={(e) =>
            setDetails({
              ...ParentsDetails,
              father: { ...ParentsDetails.father, address: e.target.value },
            })
          }
          value={ParentsDetails.father.address}
          label="Address"
        />
      </div>
      <h3 className="reducedBottomMargin mb-4">
        Child's Parents/caregivers are:
      </h3>
      <RadioButtons4
        className="mt-10"
        name="married"
        label="Married"
        option1="Yes"
        option2="No"
        cb={(e) =>
          setPatient({
            ...pediatricPatient,
            parents_are_married: e.target.value === "true",
          })
        }
        value={pediatricPatient.parents_are_married}
      />
      <RadioButtons4
        className="mt-10"
        name="married"
        label="Living together"
        cb={(e) =>
          setPatient({
            ...pediatricPatient,
            parents_live_together: e.target.value === "true",
          })
        }
        value={pediatricPatient.parents_live_together}
        option1="Yes"
        option2="No"
      />
      <h3>Job occupation status of child's parents/caregiver:</h3>
      <div className="grid gap-y-2 mt-3">
        <div>Mother</div>
        <div className="grid-cols-3 grid items-center">
          <Selection
            name="jobOccuptation"
            option1="Employed"
            option2="Unemployed"
            option3="Retired"
            cb={(e) =>
              setDetails({
                ...ParentsDetails,
                mother: {
                  ...ParentsDetails.mother,
                  job: { status: e.target.value },
                },
              })
            }
            value={ParentsDetails.mother.job.status}
            option4="Others"
          />
          <div className="text-right">(If employed)</div>
          <RegularInputBox
            cb={(e) =>
              setDetails({
                ...ParentsDetails,
                mother: {
                  ...ParentsDetails.mother,
                  job: { employer: e.target.value },
                },
              })
            }
            value={ParentsDetails.mother.job.employer}
            name="job"
            label="Current job"
          />
        </div>

        <h3>Father</h3>
        <div className="grid-cols-3 grid items-center">
          <Selection
            name="jobOccuptation"
            option1="Employed"
            option2="Unemployed"
            option3="Retired"
            option4="Others"
            cb={(e) =>
              setDetails({
                ...ParentsDetails,
                father: {
                  ...ParentsDetails.father,
                  job: { status: e.target.value },
                },
              })
            }
            value={ParentsDetails.father.job.status}
          />
          <div className="text-right">(If employed)</div>
          <RegularInputBox
            name="job"
            cb={(e) =>
              setDetails({
                ...ParentsDetails,
                father: {
                  ...ParentsDetails.father,
                  job: { employer: e.target.value },
                },
              })
            }
            value={ParentsDetails.father.job.employer}
            label="Current job"
          />
        </div>
        <h3>Caregiver</h3>
        <div className="grid-cols-3 grid items-center">
          <Selection
            name="jobOccuptation"
            option1="Employed"
            option2="Unemployed"
            option3="Retired"
            option4="Others"
            cb={(e) =>
              setDetails({
                ...ParentsDetails,
                caregiver: {
                  ...ParentsDetails.caregiver,
                  job: { status: e.target.value },
                },
              })
            }
            value={ParentsDetails.caregiver.job.status}
          />
          <div className="text-right">(If employed)</div>
          <RegularInputBox
            name="job"
            cb={(e) =>
              setDetails({
                ...ParentsDetails,
                caregiver: {
                  ...ParentsDetails.caregiver,
                  job: { employer: e.target.value },
                },
              })
            }
            value={ParentsDetails.caregiver.job.employer}
            label="Current job"
          />
        </div>
      </div>
      <h3>Educational level of child's parents/caregiver:</h3>
      <div className="grid gap-y-2 mt-3">
        <div>Mother</div>
        <div className="grid-cols-3 grid items-center">
          <Selection
            name="school"
            option1="Started Primary"
            option2="Completed Primary"
            option3="Secondary"
            option4="Post Secondary"
            option5="Quranic"
            option6="None"
            option7="Other"
            cb={(e) =>
              setDetails({
                ...ParentsDetails,
                mother: {
                  ...ParentsDetails.mother,
                  education: { level: e.target.value },
                },
              })
            }
            value={ParentsDetails.mother.education.level}
          />
          <div className="text-right">(If attended school)</div>
          <RegularInputBox
            cb={(e) =>
              setDetails({
                ...ParentsDetails,
                mother: {
                  ...ParentsDetails.mother,
                  education: { school_name: e.target.value },
                },
              })
            }
            value={ParentsDetails.mother.education.school_name}
            name="school"
            label="School name"
          />
        </div>

        <h3>Father</h3>
        <div className="grid-cols-3 grid items-center">
          <Selection
            name="school"
            option1="Started Primary"
            option2="Completed Primary"
            option3="Secondary"
            option4="Post Secondary"
            option5="Quranic"
            option6="None"
            cb={(e) =>
              setDetails({
                ...ParentsDetails,
                father: {
                  ...ParentsDetails.father,
                  education: { level: e.target.value },
                },
              })
            }
            value={ParentsDetails.father.education.level}
            option7="Other"
          />
          <div className="text-right">(If attended school)</div>
          <RegularInputBox
            cb={(e) =>
              setDetails({
                ...ParentsDetails,
                father: {
                  ...ParentsDetails.father,
                  education: { school_name: e.target.value },
                },
              })
            }
            value={ParentsDetails.father.education.school_name}
            name="school"
            label="School name"
          />
        </div>
        <h3>Caregiver</h3>
        <div className="grid-cols-3 grid items-center">
          <Selection
            name="school"
            option1="Started Primary"
            option2="Completed Primary"
            option3="Secondary"
            option4="Post Secondary"
            option5="Quranic"
            option6="None"
            option7="Other"
            cb={(e) =>
              setDetails({
                ...ParentsDetails,
                caregiver: {
                  ...ParentsDetails.caregiver,
                  education: { level: e.target.value },
                },
              })
            }
            value={ParentsDetails.caregiver.education.level}
          />
          <div className="text-right">(If attended school)</div>
          <RegularInputBox
            name="school"
            cb={(e) =>
              setDetails({
                ...ParentsDetails,
                caregiver: {
                  ...ParentsDetails.caregiver,
                  education: { school_name: e.target.value },
                },
              })
            }
            value={ParentsDetails.caregiver.education.school_name}
            label="School name"
          />
        </div>
      </div>
      <div className="grid grid-cols-4 items-center font-bold mt-6">
        <h3>How many siblings does the child have?</h3>
        <NumberInputBox
          cb={(e) =>
            setPatient({
              ...pediatricPatient,
              num_of_siblings: parseInt(e.target.value),
            })
          }
          value={pediatricPatient.num_of_siblings}
          name="siblings_no"
          label="Number of siblings"
        />
      </div>
      <h3 className="uppercase underline mt-0 reducedBottomMargin">
        other family issues
      </h3>
      <h3>
        Do you have any household or family member already enrolled in
        care/treatment in this facility?
      </h3>
      <RadioButtons4 name="household_enrolled" option3="Yes" option4="no" />
      <div className="grid grid-cols-2 mt-4 items-center">
        <h3 className="font-extrabold mt-4">
          If yes, write the care and treatment number of the person here
        </h3>
        <RegularInputBox
          cb={(e) =>
            setState({
              ...state,
              household_family_member_enrolled: e.target.value,
            })
          }
          value={state.household_family_member_enrolled}
          name="name_treatment_number"
        />
      </div>
      <h3>Disclosure: Does anyone else know client status</h3>
      <RegularInputBox
        name=""
        cb={(e) =>
          setState({
            ...state,
            anyone_knows_client_status: e.target.value,
          })
        }
        value={state.anyone_knows_client_status}
      />
      <h3>
        If client is married or have children, provide the following information
        on the status of the underlisted family members:
      </h3>
      <div className="grid grid-cols-6 gap-y-4 items-center custom_radio">
        <div></div>
        <div>Spouse 1</div>
        <div>Last child</div>
        <div>2nd to last child</div>
        <div>3rd to last child</div>
        <div>Spouse 2</div>
        <div>Tested for HIV</div>
        <RadioButtons
          cb={(e) =>
            setTests({
              ...tests,
              test_for_hiv: {
                ...tests.test_for_hiv,
                spouse_1: e.target.value === "true",
              },
            })
          }
          value={tests.test_for_hiv.spouse_1}
          name="spouse_1"
          option1="Y"
          option2="N"
        />
        <RadioButtons
          cb={(e) =>
            setTests({
              ...tests,
              test_for_hiv: {
                ...tests.test_for_hiv,
                last_child: e.target.value === "true",
              },
            })
          }
          value={tests.test_for_hiv.last_child}
          name="last_child"
          option1="Y"
          option2="N"
        />
        <RadioButtons
          cb={(e) =>
            setTests({
              ...tests,
              test_for_hiv: {
                ...tests.test_for_hiv,
                seconnd_to_last_child: e.target.value === "true",
              },
            })
          }
          value={tests.test_for_hiv.seconnd_to_last_child}
          name="2nd_to_last_child"
          option1="Y"
          option2="N"
        />
        <RadioButtons
          cb={(e) =>
            setTests({
              ...tests,
              test_for_hiv: {
                ...tests.test_for_hiv,
                third_to_last_child: e.target.value === "true",
              },
            })
          }
          value={tests.test_for_hiv.third_to_last_child}
          name="3rd_to_last_child"
          option1="Y"
          option2="N"
        />
        <RadioButtons
          cb={(e) =>
            setTests({
              ...tests,
              test_for_hiv: {
                ...tests.test_for_hiv,
                spouse_2: e.target.value === "true",
              },
            })
          }
          value={tests.test_for_hiv.spouse_2}
          name="spouse_2"
          option1="Y"
          option2="N"
        />
        <div>On ARV</div>
        <RadioButtons
          cb={(e) =>
            setTests({
              ...tests,
              on_arv: { ...tests.on_arv, spouse_1: e.target.value === "true" },
            })
          }
          value={tests.on_arv.spouse_1}
          name="spouse_1"
          option1="Y"
          option2="N"
        />
        <RadioButtons
          cb={(e) =>
            setTests({
              ...tests,
              on_arv: {
                ...tests.on_arv,
                last_child: e.target.value === "true",
              },
            })
          }
          value={tests.on_arv.last_child}
          name="last_child"
          option1="Y"
          option2="N"
        />
        <RadioButtons
          cb={(e) =>
            setTests({
              ...tests,
              on_arv: {
                ...tests.on_arv,
                seconnd_to_last_child: e.target.value === "true",
              },
            })
          }
          value={tests.on_arv.seconnd_to_last_child}
          name="2nd_to_last_child"
          option1="Y"
          option2="N"
        />
        <RadioButtons
          cb={(e) =>
            setTests({
              ...tests,
              on_arv: {
                ...tests.on_arv,
                third_to_last_child: e.target.value === "true",
              },
            })
          }
          value={tests.on_arv.third_to_last_child}
          name="3rd_to_last_child"
          option1="Y"
          option2="N"
        />
        <RadioButtons
          cb={(e) =>
            setTests({
              ...tests,
              on_arv: { ...tests.on_arv, spouse_2: e.target.value === "true" },
            })
          }
          value={tests.on_arv.spouse_2}
          name="spouse_2"
          option1="Y"
          option2="N"
        />
        <div>Tested for TB</div>
        <RadioButtons
          cb={(e) =>
            setTests({
              ...tests,
              tested_for_tb: {
                ...tests.tested_for_tb,
                spouse_1: e.target.value === "true",
              },
            })
          }
          value={tests.tested_for_tb.spouse_1}
          name="spouse_1"
          option1="Y"
          option2="N"
        />
        <RadioButtons
          cb={(e) =>
            setTests({
              ...tests,
              tested_for_tb: {
                ...tests.tested_for_tb,
                last_child: e.target.value === "true",
              },
            })
          }
          value={tests.tested_for_tb.last_child}
          name="last_child"
          option1="Y"
          option2="N"
        />
        <RadioButtons
          cb={(e) =>
            setTests({
              ...tests,
              tested_for_tb: {
                ...tests.tested_for_tb,
                seconnd_to_last_child: e.target.value === "true",
              },
            })
          }
          value={tests.tested_for_tb.seconnd_to_last_child}
          name="2nd_to_last_child"
          option1="Y"
          option2="N"
        />
        <RadioButtons
          cb={(e) =>
            setTests({
              ...tests,
              tested_for_tb: {
                ...tests.tested_for_tb,
                third_to_last_child: e.target.value === "true",
              },
            })
          }
          value={tests.tested_for_tb.third_to_last_child}
          name="3rd_to_last_child"
          option1="Y"
          option2="N"
        />
        <RadioButtons
          cb={(e) =>
            setTests({
              ...tests,
              tested_for_tb: {
                ...tests.tested_for_tb,
                spouse_2: e.target.value === "true",
              },
            })
          }
          value={tests.tested_for_tb.spouse_2}
          name="spouse_2"
          option1="Y"
          option2="N"
        />
        <div>On TB Treatment</div>
        <RadioButtons
          cb={(e) =>
            setTests({
              ...tests,
              on_tb_treatment: {
                ...tests.on_tb_treatment,
                spouse_1: e.target.value === "true",
              },
            })
          }
          value={tests.on_tb_treatment.spouse_1}
          name="spouse_1"
          option1="Y"
          option2="N"
        />
        <RadioButtons
          cb={(e) =>
            setTests({
              ...tests,
              on_tb_treatment: {
                ...tests.on_tb_treatment,
                last_child: e.target.value === "true",
              },
            })
          }
          value={tests.on_tb_treatment.last_child}
          name="last_child"
          option1="Y"
          option2="N"
        />
        <RadioButtons
          cb={(e) =>
            setTests({
              ...tests,
              on_tb_treatment: {
                ...tests.on_tb_treatment,
                seconnd_to_last_child: e.target.value === "true",
              },
            })
          }
          value={tests.on_tb_treatment.seconnd_to_last_child}
          name="2nd_to_last_child"
          option1="Y"
          option2="N"
        />
        <RadioButtons
          cb={(e) =>
            setTests({
              ...tests,
              on_tb_treatment: {
                ...tests.on_tb_treatment,
                third_to_last_child: e.target.value === "true",
              },
            })
          }
          value={tests.on_tb_treatment.third_to_last_child}
          name="3rd_to_last_child"
          option1="Y"
          option2="N"
        />
        <RadioButtons
          cb={(e) =>
            setTests({
              ...tests,
              on_tb_treatment: {
                ...tests.on_tb_treatment,
                spouse_2: e.target.value === "true",
              },
            })
          }
          value={tests.on_tb_treatment.spouse_2}
          name="spouse_2"
          option1="Y"
          option2="N"
        />
      </div>
    </Layout>
  );
}

export default PersonalHistory;
