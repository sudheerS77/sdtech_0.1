







import React, { useEffect, useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/bootstrap.css";
import { useRouter } from "next/router";
import axios from "axios";
// import { ErrorMessage, Field, Form, Formik } from "formik";
// import * as Yup from "yup";

// Icons
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

// CSS
import crf from "./courseRegisterForm.module.css";

// Components
import InputComponent from "./input.component";
import PhoneNumberInput from "./phoneNumber.input";
import CountrySelectComponent from "./countrySelect.component";

const StudentDetails = ({ setCurrentStep, formData, setFormData }) => {
  return (
    <>
      <div>
        <label htmlFor="name">Student Name</label>
        <div className={crf.form_group}>
          <div>
            <InputComponent
              name="firstName"
              type="text"
              values={formData}
              setFieldValue={setFormData}
              placeholder="First Name"
            />
          </div>
          <div>
            <InputComponent
              name="lastName"
              values={formData}
              setFieldValue={setFormData}
              type="text"
              placeholder="Last Name"
            />
          </div>
        </div>
      </div>
      <div className={crf.form_group}>
        <div>
          <InputComponent
            label="Student Date of Birth"           
            values={formData}
            setFieldValue={setFormData}
            type="date"
          />
        </div>
        <div>
          <InputComponent
            label="Student Email"
            name="studentEmail"
            values={formData}
            setFieldValue={setFormData}
            type="email"
          />
        </div>
      </div>
      <div className={crf.form_group}>
        <div>
          <div className={crf.phoneInput}>
            <PhoneNumberInput
              label="Student WhatsApp Number"
              name="studentWhatsAppNumber"
              values={formData}
              setFieldValue={setFormData}
            />
          </div>
        </div>
      </div>
    </>
  );
};

// const ParentDetails = ({ setCurrentStep, values, setFieldValue }) => {
//   return (
//     <>
//       <p style={{ color: "gray", fontSize: "0.9rem" }}>
//         {" "}
//         Note - Please fill the parent detils if your age is less than 18
//       </p>
//       <div>
//         <label htmlFor="name">Parent Name</label>
//         <div className={crf.form_group}>
//           <div>
//             <InputComponent
//               label="empty"
//               value={values.parentFirstName}
//               name="parentFirstName"
//               type="text"
//               placeholder="First Name"
//             />
//           </div>
//           <div>
//             <InputComponent
//               name="parentLastName"
//               value={values.parentLastName}
//               type="text"
//               placeholder="Last Name"
//             />
//           </div>
//         </div>
//       </div>
//       <div className={crf.form_group}>
//         <div>
//           <div className={crf.phoneInput}>
//             <PhoneNumberInput
//               label="Parent Phone Number"
//               name="parentWhatsAppNumber"
//               values={values}
//               setFieldValue={setFieldValue}
//             />
//           </div>
//         </div>
//         <div>
//           <div>
//             <InputComponent
//               label="Parent Email"
//               name="parentEmail"
//               type="text"
//               value={values.parentEmail}
//               placeholder="Last Name"
//             />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// const Address = ({ setCurrentStep, values, setFieldValue }) => {
//   return (
//     <>
//       <div>
//         <label htmlFor="address">Address</label>
//         <Field
//           style={{ width: "97%" }}
//           label="Address"
//           name="address"
//           value={values.address}
//           type="textArea"
//         />
//         <ErrorMessage
//           name="address"
//           component={"div"}
//           className="inputFieldErrorMessage"
//         />
//       </div>
//       <CountrySelectComponent values={values} setFieldValue={setFieldValue} />
//       <InputComponent
//         label="Postal Code"
//         name="postalCode"
//         value={values.postalCode}
//         type="number"
//       />
//     </>
//   );
// };
const CourseRegisterForm = ({ courseName }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dob: "",
    age: 0,
    studentEmail: "",
    studentWhatsAppNumber: "",
    courseRegisterName: courseName ? courseName : "",
    parentFirstName: "",
    parentLastName: "",
    parentWhatsAppNumber: "",
    parentEmail: "",
    address: "",
    country: "",
    region: "",
    postalCode: "",
  });

  const [currentStep, setCurrentStep] = useState(0);
  const isLastStep = currentStep === 2;
  const [isFormSubmitting, setIsFormSubmitting] = useState(false);
  const [error, setError] = useState({ show: false, message: "" });
  const router = useRouter();
  const submitDetails = async (values) => {
    try {
      setIsFormSubmitting(true);
      const data = await axios.post(`/api/courseregister`, {
        data: values,
      });
      if (data.status === 200) {
        setTimeout(() => {
          setIsFormSubmitting(false);
          router.push("/thanks");
        }, 400);
      }
    } catch (error) {
      setError({
        show: true,
        message: error.message,
      });
    }
  };
  useEffect(() => {
    setTimeout(() => {
      setError({
        show: false,
        message: "",
      });
    }, 3000);
  }, [error]);
  // const handleNext = (values) => {
  //   setFormData({ ...formData, ...values });

  //   if (isLastStep) {
  //     setFormData({ ...formData, courseRegisterName: courseName });
  //     submitDetails(values);
  //   } else {
  //     setCurrentStep((prev) => prev + 1);
  //   }
  // };
  const stepCounter = [];
  for (let i = 0; i < currentStep + 1; i++) {
    stepCounter.push(<div className={crf.step} key={i} />);
  }
  return (
    <div className={crf.register__from__container}>
      <div className={crf.heading}>
        <h1>Student Registration Form</h1>
        <p>
          Welcome to SDTECH Academy! Please fill in the form below to initiate
          the registration process
        </p>
      </div>

      {/* {JSON.stringify({ isSubmitting, isValid, isValidating, errors })}
            {JSON.stringify({ values })} */}
      <div className={crf.step_container}>{stepCounter}</div>
      <div>
        <p>
          {/* {stepData[currentStep].label} - Step {currentStep + 1} of 3 */}
        </p>
        <div>
          {error.show === true && (
            <div style={{ color: "red", fontSize: "1rem" }}>
              {error.message}
            </div>
          )}
        </div>
      </div>
      <div className={crf.forms_container}>
        {}

        {currentStep === 0 ? (
          <StudentDetails
            setCurrentStep={setCurrentStep}
            formData={formData}
            setFormData={setFormData}
          />
        ) : currentStep === 1 ? (
          <ParentDetails setCurrentStep={setCurrentStep} />
        ) : currentStep === 2 ? (
          <Address setCurrentStep={setCurrentStep} />
        ) : (
          <>THANK YOU </>
        )}

        {isFormSubmitting ? (
          <button className={crf.next_btn} type="submit">
            Submitting
          </button>
        ) : (
          <div className={crf.np_btn_group}>
            <div>
              {currentStep !== 0 && (
                <div
                  className={crf.prev_btn}
                  onClick={() => setCurrentStep((prev) => prev - 1)}
                >
                  <div className={crf.left_arrow}>
                    <BsArrowLeft />
                  </div>
                  Prev
                </div>
              )}
            </div>
            <button
              className={crf.next_btn}
              type="submit"

              // onClick={() => setCurrentStep((prev) => prev + 1)}
            >
              {/* {isSubmitting ? (
                "Submitting..."
              ) : isLastStep ? (
                "Submit"
              ) : (
                <>
                </>
              )} */}
              Next
              <div className={crf.right_arrow}>
                <BsArrowRight />
              </div>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CourseRegisterForm;
{
  /* <div className={crf.np_btn_group} style={{ justifyContent: "flex-end" }}>
  <div
    className={crf.next_btn}
    onClick={() => setCurrentStep((prev) => prev + 1)}
  >
    Next
    <div className={crf.right_arrow}>
      <BsArrowRight />
    </div>
  </div>
</div>; */
}
