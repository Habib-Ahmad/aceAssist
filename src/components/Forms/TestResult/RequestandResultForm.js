import React, { useState } from "react";
import Toastr from "toastr";
import api from "../../../utils/api";
import {
  RegularInputBox,
  DatePicker,
  RadioButtons,
  NumberInputBox,
} from "../../InputBoxes/Index";
import Layout from "../layout";

export default function RequestFrom() {
  const [state, setState] = useState({
    serology_request: {
      initial_hiv_test: "",
      syphilis_test: "",
      hepatitis_c_test: "",
      hepatitis_b_test: "",
      confirmatory_hiv_test: "",
    },
    requested_by: {
      name: "",
      signature: "",
      date: "",
    },
    tested_by: {
      name: "",
      signature: "",
      date: "",
    },
    checked_by: {
      name: "",
      signature: "",
      date: "",
    },
    facility: {
      name: "",
      collection_date: "",
      unit: "",
    },
  });

  const submit = async () => {
    try {
      api.post("/request-result", state);
      Toastr.success("Success");
    } catch (error) {
      Toastr.error("Invalid input. All inputs are required!");
    }
  };
  return (
    <Layout onSubmit={submit} title="Request and Result Form">
      <div className="grid grid-cols-2 gap-x-10 gap-y-4">
        <RegularInputBox
          value={state.facility.name}
          cb={(e) =>
            setState({
              ...state,
              facility: { ...state.facility, name: e.target.value },
            })
          }
          name="sitename"
          label="Facility/Site Name"
        />
        <DatePicker
          name="collectionDate"
          value={state.facility.collection_date}
          cb={(e) =>
            setState({
              ...state,
              facility: { ...state.facility, collection_date: e.target.value },
            })
          }
          label="Sample Collection Date"
        />
        <RegularInputBox
          name="unit"
          value={state.facility.unit}
          cb={(e) =>
            setState({
              ...state,
              facility: { ...state.facility, unit: e.target.value },
            })
          }
          label="Unit"
        />
      </div>

      <h3 className="text-lg mt-8">Serology Request:</h3>
      <div className="grid grid-cols-2">
        <div className="custom_radio">
          <h3 className="mt-4 font-semibold">Initial HIV Test:</h3>
          <RadioButtons
            name="initialTest"
            option1="Negative"
            option2="Positive"
            value={state.serology_request.initial_hiv_test}
            cb={(e) =>
              setState({
                ...state,
                serology_request: {
                  ...state.serology_request,
                  initial_hiv_test: e.target.value,
                },
              })
            }
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
            value={state.serology_request.confirmatory_hiv_test}
            cb={(e) =>
              setState({
                ...state,
                serology_request: {
                  ...state.serology_request,
                  confirmatory_hiv_test: e.target.value,
                },
              })
            }
          />
        </div>

        <div className="custom_radio">
          <h3 className="mt-4 font-semibold">Syphilis Test: </h3>
          <RadioButtons
            name="syphilisTest"
            option1="Reactive"
            option2="Non Reactive"
            value={state.serology_request.syphilis_test}
            cb={(e) =>
              setState({
                ...state,
                serology_request: {
                  ...state.serology_request,
                  syphilis_test: e.target.value,
                },
              })
            }
          />
        </div>

        <div className="custom_radio">
          <h3 className="mt-4 font-semibold">Hepatitis B Test:</h3>

          <RadioButtons
            name="hepatitsBTest"
            option1="Negative"
            value={state.serology_request.hepatitis_b_test}
            cb={(e) =>
              setState({
                ...state,
                serology_request: {
                  ...state.serology_request,
                  hepatitis_b_test: e.target.value,
                },
              })
            }
            option2="Positive"
          />
        </div>

        <div className="custom_radio">
          <h3 className="mt-4 font-semibold">Hepatitis C Test:</h3>

          <RadioButtons
            name="hepatitsBTest"
            option1="Negative"
            value={state.serology_request.hepatitis_c_test}
            cb={(e) =>
              setState({
                ...state,
                serology_request: {
                  ...state.serology_request,
                  hepatitis_c_test: e.target.value,
                },
              })
            }
            option2="Positive"
          />
        </div>
      </div>

      <div className="grid grid-cols-3 gap-x-3 gap-y-4 mt-6">
        {/* <div className="flex">
          <div>Requested by:</div>
          <RegularInputBox name="name" label="R" />
        </div> */}
        <RegularInputBox
          value={state.requested_by.name}
          cb={(e) =>
            setState({
              ...state,
              requested_by: { ...state.requested_by, name: e.target.value },
            })
          }
          name="name"
          label="Requested By (Name in capital)"
        />
        <RegularInputBox
          value={state.requested_by.signature}
          cb={(e) =>
            setState({
              ...state,
              requested_by: {
                ...state.requested_by,
                signature: e.target.value,
              },
            })
          }
          name="signature"
          label="Signature"
        />
        <DatePicker
          name="date"
          value={state.requested_by.date}
          cb={(e) =>
            setState({
              ...state,
              requested_by: { ...state.requested_by, date: e.target.value },
            })
          }
          label=""
        />

        <RegularInputBox
          value={state.tested_by.name}
          cb={(e) =>
            setState({
              ...state,
              tested_by: { ...state.tested_by, name: e.target.value },
            })
          }
          name="name"
          label="Tested By (Name in capital)"
        />
        <RegularInputBox
          value={state.tested_by.signature}
          cb={(e) =>
            setState({
              ...state,
              tested_by: { ...state.tested_by, signature: e.target.value },
            })
          }
          name="signature"
          label="Signature"
        />
        <DatePicker
          name="date"
          value={state.tested_by.date}
          cb={(e) =>
            setState({
              ...state,
              tested_by: { ...state.tested_by, date: e.target.value },
            })
          }
          label=""
        />

        <RegularInputBox
          value={state.checked_by.name}
          cb={(e) =>
            setState({
              ...state,
              checked_by: { ...state.checked_by, name: e.target.value },
            })
          }
          name="name"
          label="Checked By (Name in capital)"
        />
        <RegularInputBox
          value={state.checked_by.signature}
          cb={(e) =>
            setState({
              ...state,
              checked_by: { ...state.checked_by, signature: e.target.value },
            })
          }
          name="signature"
          label="Signature"
        />
        <DatePicker
          name="date"
          value={state.checked_by.date}
          cb={(e) =>
            setState({
              ...state,
              checked_by: { ...state.checked_by, date: e.target.value },
            })
          }
          label=""
        />
      </div>
    </Layout>
  );
}
