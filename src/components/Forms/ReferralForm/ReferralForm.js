import React, { useState } from "react";
import Toastr from "toastr";
import api from "../../../utils/api";
import { RegularInputBox } from "../../InputBoxes/Index";
import Layout from "../layout";

export default function ReferralForm() {
  const [state, setState] = useState({
    referral_form: "",
    name_of_person_referring: "",
    referred_to: "",
    services_need: "",
    signature: "",
    referring_organization: {
      name: "",
      address: "",
      phone_number: "",
    },
    receiving_organization: {
      name: "",
      address: "",
      phone_number: "",
    },
  });
  const submit = async () => {
    try {
      await api.post("/referral", state);
      Toastr.success("Success")
    } catch (error) {
      Toastr.error("All fields are required!")
    }
  };
  return (
    <Layout onSubmit={submit} title="Client Referral Form">
      <div className="font-bold text-lg mt-10">
        To be filled by the organization making the referral (referring
        organization)
      </div>
      <div className="font-semibold text-lg">
        <RegularInputBox
          name="unitDepartment"
          label="Referral Form (Unit/Department)"
          value={state.referral_form}
          cb={(e) => setState({ ...state, referral_form: e.target.value })}
        />
        <RegularInputBox
          name="name"
          label="Name of person referring client/designation"
          value={state.name_of_person_referring}
          cb={(e) =>
            setState({ ...state, name_of_person_referring: e.target.value })
          }
        />
        <RegularInputBox
          name="referredTo"
          label="Referred to (Unit/Department)"
          value={state.referred_to}
          cb={(e) => setState({ ...state, referred_to: e.target.value })}
        />
        <div className="flex">
          <RegularInputBox
            name="notes"
            label="Services needed/notes"
            value={state.services_need}
            cb={(e) => setState({ ...state, services_need: e.target.value })}
          />
          <RegularInputBox
            value={state.signature}
            cb={(e) => setState({ ...state, signature: e.target.value })}
            name="signature"
            label="Signature"
          />
        </div>

        <div className="mt-4 mb-2 text-sm">Referring Organization:</div>
        <div className="flex">
          <RegularInputBox
            name="address_referring"
            label="Name"
            value={state.referring_organization.name}
            cb={(e) =>
              setState({
                ...state,
                referring_organization: {
                  ...state.referring_organization,
                  name: e.target.value,
                },
              })
            }
          />
          <RegularInputBox
            name="address_referring"
            label="Address"
            value={state.referring_organization.address}
            cb={(e) =>
              setState({
                ...state,
                referring_organization: {
                  ...state.referring_organization,
                  address: e.target.value,
                },
              })
            }
          />
          <RegularInputBox
            name="address_referring"
            value={state.referring_organization.phone_number}
            cb={(e) =>
              setState({
                ...state,
                referring_organization: {
                  ...state.referring_organization,
                  phone_number: e.target.value,
                },
              })
            }
            label="Phone Number"
          />
        </div>

        <div className="mt-4 mb-2 text-sm">Receiving Organization:</div>
        <div className="flex">
          <RegularInputBox
            name="address_referring"
            label="Name"
            value={state.receiving_organization.name}
            cb={(e) =>
              setState({
                ...state,
                receiving_organization: {
                  ...state.receiving_organization,
                  name: e.target.value,
                },
              })
            }
          />
          <RegularInputBox
            name="address_referring"
            label="Address"
            value={state.receiving_organization.address}
            cb={(e) =>
              setState({
                ...state,
                receiving_organization: {
                  ...state.receiving_organization,
                  address: e.target.value,
                },
              })
            }
          />
          <RegularInputBox
            name="address_referring"
            label="Phone Number"
            value={state.receiving_organization.phone_number}
            cb={(e) =>
              setState({
                ...state,
                receiving_organization: {
                  ...state.receiving_organization,
                  phone_number: e.target.value,
                },
              })
            }
          />
        </div>
      </div>
    </Layout>
  );
}
