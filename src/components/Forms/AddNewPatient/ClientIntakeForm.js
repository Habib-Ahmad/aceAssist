import React, { useState } from "react";
import Toastr from "toastr";
import {
  RegularInputBox,
  NumberInputBox,
  RadioButtons,
  RadioButtons2,
  RadioButtons3,
  RadioButtons4,
} from "../../InputBoxes/Index";
import Layout from "../layout";
import api from "../../../utils/api";
import questionsAndAnswers from "../../../data/client-intake";

function ClientIntakeForm() {
  const [state, setState] = useState({
    type_of_session: "",
    index_testing: null,
    index_testing_type: "",
    syphilis_test_results: "",
    hepatitis_b_test_results: "",
    hepatitis_c_test_results: "",
    referred_form: "",
    setting: "",
  });

  const updateKnowledgeAssesment = (id, e) => {
    const value = preTest.knowledge_assesment;
    value[id].answer = e.target.value === "true";
    setPreTest({ ...preTest, knowledge_assesment: value });
  };

  const updateRiskAssessment = (e, id) => {
    const value = preTest.risk_assesment.questions;
    value[id].answer = e.target.value === "true";
    setPreTest({
      ...preTest,
      risk_assesment: { ...preTest.risk_assesment, questions: value },
    });
  };

  const updateClinicalScreening = (e, id) => {
    const value = preTest.clinical_tb_screening.questions;
    value[id].answer = e.target.value === "true";
    setPreTest({
      ...preTest,
      clinical_tb_screening: {
        ...preTest.clinical_tb_screening,
        questions: value,
      },
    });
  };

  const updateSTIScreening = (e, id) => {
    const value = preTest.syndromic_sti_screening.questions;
    value[id].answer = e.target.value === "true";
    setPreTest({
      ...preTest,
      syndromic_sti_screening: {
        ...preTest.syndromic_sti_screening,
        questions: value,
      },
    });
  };

  const updatePostTest = (id, e) => {
    const value = postTest.questions;
    value[id].answer = e.target.value === "true";
    setPostTest({ ...postTest, questions: value });
  };

  const [preTest, setPreTest] = useState({
    knowledge_assesment: [...questionsAndAnswers.knowledge_assesment],
    risk_assesment: {
      questions: questionsAndAnswers.risk_assesment,
      risk_score: null,
    },
    clinical_tb_screening: {
      questions: questionsAndAnswers.clinical_tb_screening,
      risk_score: null,
    },
    syndromic_sti_screening: {
      questions: questionsAndAnswers.syndromic_sti_screening,
      sti_screening_score: null,
    },
  });
  const [postTest, setPostTest] = useState({
    hiv_test_result: "",
    have_been_tested_for_hiv_current_year: "",
    questions: questionsAndAnswers.post_test_counselling,
  });

  const submit = async () => {
    const data = {
      ...state,
      pre_test_information: preTest,
      post_test_counselling: postTest,
    };

    try {
      await api.post("/client-intake", data);
    } catch (error) {
      Toastr.error("Invalid input. Most fields are required!");
    }
  };
  return (
    <Layout onSubmit={submit} title="HIV Testing Services: Client Intake Form">
      <div className="newPatient__row">
        <RegularInputBox
          name="referredForm"
          value={state.referred_form}
          cb={(e) => setState({ ...state, referred_form: e.target.value })}
          // label="Referred Form &nbsp; (Self, TB, STI, SF, OPD, Ward, Blood Bank, others)"
          label="Referred Form"
        />
      </div>
      <div className="newPatient__row">
        <RegularInputBox
          name="setting"
          value={state.setting}
          cb={(e) => setState({ ...state, setting: e.target.value })}
          // label="Settting &nbsp; (CT, TB , STI, FP, OPD, Ward, Outreach, Standalone HTS, others)"
          label="Settting"
        />
      </div>
      <div className="newPatient__row">
        <RadioButtons
          name="typeOfSession"
          label="Type of Session"
          option1="Individual"
          option2="Couple"
          option3="Previously Self Tested"
          value={state.type_of_session}
          cb={(e) => setState({ ...state, type_of_session: e.target.value })}
        />
      </div>
      <div className="newPatient__row">
        <RadioButtons4
          name="indexTesting"
          label="Index Testing"
          option1="Yes"
          option2="No"
          value={state.index_testing}
          cb={(e) =>
            setState({ ...state, index_testing: e.target.value === "true" })
          }
        />
      </div>
      <div className="newPatient__row">
        <RadioButtons
          name="ifIndexTesting"
          label="If Yes"
          option1="Biological"
          value={state.index_testing_type}
          cb={(e) => setState({ ...state, index_testing_type: e.target.value })}
          option2="Sexual"
          option3="Social"
        />
      </div>
      <span></span>
      <div className="newPatient__header2">Pre-Test Information</div>
      <h3>Knowledge Assesment</h3>
      <RadioButtons2
        label={preTest.knowledge_assesment[0].question}
        option1="Yes"
        option2="No"
        value={preTest.knowledge_assesment[0].answer}
        cb={(e) => updateKnowledgeAssesment(0, e)}
      />
      <RadioButtons2
        value={preTest.knowledge_assesment[1].answer}
        cb={(e) => updateKnowledgeAssesment(1, e)}
        label={preTest.knowledge_assesment[1].question}
        option1="Yes"
        option2="No"
      />
      <RadioButtons2
        value={preTest.knowledge_assesment[2].answer}
        cb={(e) => updateKnowledgeAssesment(2, e)}
        label={preTest.knowledge_assesment[2].question}
        option1="Yes"
        option2="No"
      />
      <RadioButtons2
        label={preTest.knowledge_assesment[3].question}
        option1="Yes"
        value={preTest.knowledge_assesment[3].answer}
        cb={(e) => updateKnowledgeAssesment(3, e)}
        option2="No"
      />
      <RadioButtons2
        label={preTest.knowledge_assesment[4].question}
        option1="Yes"
        value={preTest.knowledge_assesment[4].answer}
        cb={(e) => updateKnowledgeAssesment(4, e)}
        option2="No"
      />
      <RadioButtons2
        label={preTest.knowledge_assesment[5].question}
        option1="Yes"
        option2="No"
        value={preTest.knowledge_assesment[5].answer}
        cb={(e) => updateKnowledgeAssesment(5, e)}
      />
      <RadioButtons2
        label={preTest.knowledge_assesment[6].question}
        option1="Yes"
        option2="No"
        value={preTest.knowledge_assesment[6].answer}
        cb={(e) => updateKnowledgeAssesment(6, e)}
      />
      <h3>Risk Assesment</h3>
      <RadioButtons2
        label={preTest.risk_assesment.questions[0].question}
        option1="Yes"
        option2="No"
        cb={(e) => updateRiskAssessment(e, 0)}
        value={preTest.risk_assesment.questions[0].answer}
      />
      <RadioButtons2
        label={preTest.risk_assesment.questions[1].question}
        option1="Yes"
        option2="No"
        cb={(e) => updateRiskAssessment(e, 1)}
        value={preTest.risk_assesment.questions[1].answer}
      />
      <RadioButtons2
        label={preTest.risk_assesment.questions[2].question}
        option1="Yes"
        option2="No"
        cb={(e) => updateRiskAssessment(e, 2)}
        value={preTest.risk_assesment.questions[2].answer}
      />
      <RadioButtons2
        label={preTest.risk_assesment.questions[3].question}
        option1="Yes"
        option2="No"
        cb={(e) => updateRiskAssessment(e, 3)}
        value={preTest.risk_assesment.questions[3].answer}
      />
      <RadioButtons2
        label={preTest.risk_assesment.questions[4].question}
        option1="Yes"
        option2="No"
        cb={(e) => updateRiskAssessment(e, 4)}
        value={preTest.risk_assesment.questions[4].answer}
      />
      <RadioButtons2
        label={preTest.risk_assesment.questions[5].question}
        option1="Yes"
        option2="No"
        cb={(e) => updateRiskAssessment(e, 5)}
        value={preTest.risk_assesment.questions[5].answer}
      />
      <div className="newPatient__riskScore">
        <NumberInputBox
          value={preTest.risk_assesment.risk_score}
          cb={(e) =>
            setPreTest({
              ...preTest,
              risk_assesment: {
                ...preTest.risk_assesment,
                risk_score: parseInt(e.target.value),
              },
            })
          }
          label="Risk Score"
        />
        <p>*Calculate the sum of the 6 answers above</p>
      </div>
      <h3>Clinical TB Screening</h3>
      <RadioButtons2
        label={preTest.clinical_tb_screening.questions[0].question}
        option1="Yes"
        option2="No"
        cb={(e) => updateClinicalScreening(e, 0)}
        value={preTest.clinical_tb_screening.questions[0].answer}
      />
      <RadioButtons2
        label={preTest.clinical_tb_screening.questions[1].question}
        option1="Yes"
        option2="No"
        cb={(e) => updateClinicalScreening(e, 1)}
        value={preTest.clinical_tb_screening.questions[1].answer}
      />{" "}
      <RadioButtons2
        label={preTest.clinical_tb_screening.questions[2].question}
        option1="Yes"
        option2="No"
        cb={(e) => updateClinicalScreening(e, 2)}
        value={preTest.clinical_tb_screening.questions[2].answer}
      />
      <RadioButtons2
        label={preTest.clinical_tb_screening.questions[3].question}
        option1="Yes"
        option2="No"
        cb={(e) => updateClinicalScreening(e, 3)}
        value={preTest.clinical_tb_screening.questions[3].answer}
      />
      <div className="newPatient__riskScore">
        <NumberInputBox
          value={preTest.clinical_tb_screening.risk_score}
          cb={(e) =>
            setPreTest({
              ...preTest,
              clinical_tb_screening: {
                ...preTest.clinical_tb_screening,
                risk_score: parseInt(e.target.value),
              },
            })
          }
          label="Risk Score"
        />
        <p>*Calculate the sum of the 6 answers above</p>
        {/* <p>*If score {'>'}= 1, test for sputum AFB or refer to TB service</p> */}
      </div>
      <h3>Syndromic STI Screening</h3>
      <RadioButtons2
        label={preTest.syndromic_sti_screening.questions[0].question}
        option1="Yes"
        option2="No"
        cb={(e) => updateSTIScreening(e, 0)}
        value={preTest.syndromic_sti_screening.questions[0].answer}
      />
      <RadioButtons2
        label={preTest.syndromic_sti_screening.questions[1].question}
        option1="Yes"
        option2="No"
        cb={(e) => updateSTIScreening(e, 1)}
        value={preTest.syndromic_sti_screening.questions[1].answer}
      />
      <RadioButtons2
        label={preTest.syndromic_sti_screening.questions[2].question}
        option1="Yes"
        option2="No"
        cb={(e) => updateSTIScreening(e, 2)}
        value={preTest.syndromic_sti_screening.questions[2].answer}
      />
      <RadioButtons2
        label={preTest.syndromic_sti_screening.questions[3].question}
        option1="Yes"
        option2="No"
        cb={(e) => updateSTIScreening(e, 3)}
        value={preTest.syndromic_sti_screening.questions[3].answer}
      />
      <RadioButtons2
        label={preTest.syndromic_sti_screening.questions[4].question}
        option1="Yes"
        option2="No"
        cb={(e) => updateSTIScreening(e, 4)}
        value={preTest.syndromic_sti_screening.questions[4].answer}
      />
      <div className="newPatient__riskScore">
        <NumberInputBox
          value={preTest.syndromic_sti_screening.risk_score}
          cb={(e) =>
            setPreTest({
              ...preTest,
              syndromic_sti_screening: {
                ...preTest.syndromic_sti_screening,
                sti_screening_score: parseInt(e.target.value),
              },
            })
          }
          label="STI Screening Score"
        />
        <p>*Calculate the sum of the 3 answers above</p>
        {/* <p>*If score {'>'}= 1, follow Syndromic STI mangement guidelines or refer</p> */}
      </div>
      <span></span>
      <div className="newPatient__header2">Post-Test Counselling</div>
      <RadioButtons3
        label="HIV TEST RESULTS"
        option1="Negative"
        option2="Positive"
        value={postTest.hiv_test_result}
        cb={(e) =>
          setPostTest({ ...postTest, hiv_test_result: e.target.value })
        }
      />
      <br />
      <br />
      &nbsp;
      <RadioButtons3
        label="Have you been tested for HIV before within this year?"
        value={postTest.have_been_tested_for_hiv_current_year}
        cb={(e) =>
          setPostTest({
            ...postTest,
            have_been_tested_for_hiv_current_year: e.target.value,
          })
        }
        option1="Not previously tested"
        option2="Previously tested negative"
        option3="Previously tested positive in HIV care"
        option4="Previously tested positive not in HIV care"
      />
      <br />
      <span></span>
      <RadioButtons2
        label={postTest.questions[0].question}
        option1="Yes"
        value={postTest.questions[0].answer}
        cb={(e) => updatePostTest(0, e)}
        option2="No"
      />
      <RadioButtons2
        label={postTest.questions[1].question}
        option1="Yes"
        value={postTest.questions[1].answer}
        cb={(e) => updatePostTest(1, e)}
        option2="No"
      />
      <RadioButtons2
        label={postTest.questions[2].question}
        option1="Yes"
        value={postTest.questions[2].answer}
        cb={(e) => updatePostTest(2, e)}
        option2="No"
      />
      <RadioButtons2
        label={postTest.questions[3].question}
        option1="Yes"
        value={postTest.questions[3].answer}
        cb={(e) => updatePostTest(3, e)}
        option2="No"
      />
      <RadioButtons2
        label={postTest.questions[4].question}
        option1="Yes"
        value={postTest.questions[4].answer}
        cb={(e) => updatePostTest(4, e)}
        option2="No"
      />
      <RadioButtons2
        label={postTest.questions[5].question}
        option1="Yes"
        value={postTest.questions[5].answer}
        cb={(e) => updatePostTest(5, e)}
        option2="No"
      />
      <RadioButtons2
        label={postTest.questions[6].question}
        option1="Yes"
        value={postTest.questions[6].answer}
        cb={(e) => updatePostTest(6, e)}
        option2="No"
      />
      <RadioButtons2
        label={postTest.questions[7].question}
        option1="Yes"
        value={postTest.questions[7].answer}
        cb={(e) => updatePostTest(7, e)}
        option2="No"
      />
      <RadioButtons2
        label={postTest.questions[8].question}
        option1="Yes"
        value={postTest.questions[8].answer}
        cb={(e) => updatePostTest(8, e)}
        option2="No"
      />
      <RadioButtons2
        label={postTest.questions[9].question}
        option1="Yes"
        value={postTest.questions[9].answer}
        cb={(e) => updatePostTest(9, e)}
        option2="No"
      />
      <RadioButtons2
        label={postTest.questions[10].question}
        option1="Yes"
        value={postTest.questions[10].answer}
        cb={(e) => updatePostTest(10, e)}
        option2="No"
      />
      <RadioButtons2
        label={postTest.questions[11].question}
        option1="Yes"
        value={postTest.questions[11].answer}
        cb={(e) => updatePostTest(11, e)}
        option2="No"
      />
      <RadioButtons2
        label={postTest.questions[12].question}
        option1="Yes"
        value={postTest.questions[12].answer}
        cb={(e) => updatePostTest(12, e)}
        option2="No"
      />
      <RadioButtons2
        label={postTest.questions[13].question}
        option1="Yes"
        value={postTest.questions[13].answer}
        cb={(e) => updatePostTest(13, e)}
        option2="No"
      />
      <RadioButtons2
        label={postTest.questions[14].question}
        option1="Yes"
        value={postTest.questions[14].answer}
        cb={(e) => updatePostTest(14, e)}
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
        value={state.syphilis_test_results}
        cb={(e) =>
          setState({ ...state, syphilis_test_results: e.target.value })
        }
      />
      <br />
      <h3>Hepatitis Testing</h3>
      <RadioButtons3
        label="HEPATITIS B VIRUS TEST RESULTS"
        option1="Negative"
        option2="Positive"
        value={state.hepatitis_b_test_results}
        cb={(e) =>
          setState({ ...state, hepatitis_b_test_results: e.target.value })
        }
      />
      <br />
      <br />
      <RadioButtons3
        label="HEPATITIS C VIRUS TEST RESULTS"
        option1="Negative"
        option2="Positive"
        value={state.hepatitis_c_test_results}
        cb={(e) =>
          setState({ ...state, hepatitis_c_test_results: e.target.value })
        }
      />
      <br />
      <br />
    </Layout>
  );
}

export default ClientIntakeForm;
