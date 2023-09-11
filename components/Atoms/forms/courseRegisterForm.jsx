import React, { useEffect, useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/bootstrap.css";
import { useRouter } from "next/router";
import axios from "axios";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

// Icons
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

// CSS
import crf from "./courseRegisterForm.module.css";

// Components
import InputComponent from "./input.component";
import PhoneNumberInput from "./phoneNumber.input";
import CountrySelectComponent from "./countrySelect.component";

const StudentDetails = ({ setCurrentStep, values, setFieldValue }) => {
  return (
    <>
      <div>
        <label htmlFor="name">Student Name</label>
        <div className={crf.form_group}>
          <div>
            <InputComponent
              name="firstName"
              type="text"
              placeholder="First Name"
            />
          </div>
          <div>
            <InputComponent
              name="lastName"
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
            name="dob"
            type="date"
          />
        </div>
        <div>
          <InputComponent
            label="Student Email"
            name="studentEmail"
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
              values={values}
              setFieldValue={setFieldValue}
            />
          </div>
        </div>
      </div>
    </>
  );
};

const ParentDetails = ({ setCurrentStep, values, setFieldValue }) => {
  return (
    <>
      <div>
        <label htmlFor="name">Parent Name</label>
        <div className={crf.form_group}>
          <div>
            <InputComponent
              name="parentFirstName"
              type="text"
              placeholder="First Name"
            />
          </div>
          <div>
            <InputComponent
              name="parentLastName"
              type="text"
              placeholder="Last Name"
            />
          </div>
        </div>
      </div>
      <div className={crf.form_group}>
        <div>
          <div className={crf.phoneInput}>
            <PhoneNumberInput
              label="Parent Phone Number"
              name="parentWhatsAppNumber"
              values={values}
              setFieldValue={setFieldValue}
            />
          </div>
        </div>
        <div>
          <div>
            <InputComponent
              label="Parent Email"
              name="parentEmail"
              type="text"
              placeholder="Last Name"
            />
          </div>
        </div>
      </div>
    </>
  );
};

const Address = ({ setCurrentStep, values, setFieldValue }) => {
  return (
    <>
      <div>
        <label htmlFor="address">Address</label>
        <Field
          style={{ width: "97%" }}
          label="Address"
          name="address"
          type="textArea"
        />
        <ErrorMessage
          name="address"
          component={"div"}
          className="inputFieldErrorMessage"
        />
      </div>
      <CountrySelectComponent values={values} setFieldValue={setFieldValue} />
      <InputComponent label="Postal Code" name="postalCode" type="number" />
    </>
  );
};
const CourseRegisterForm = ({ courseName }) => {
  const stepData = [
    {
      label: "",
      initialValues: {
        firstName: "",
        lastName: "",
        dob: "",
        age: 0,
        studentEmail: "",
        studentWhatsAppNumber: "",
      },
      validation: Yup.object({
        firstName: Yup.string().required("First Name is required"),
        lastName: Yup.string().required("Last Name is required"),
        dob: Yup.date().required("Date of Birth is required"),
        studentEmail: Yup.string()
          .email()
          .required("Student Email is required"),
        studentWhatsAppNumber: Yup.string().required(
          "WhatsApp Number is required"
        ),
      }),
    },
    {
      label: "",
      initialValues: {
        parentFirstName: "",
        parentLastName: "",
        parentWhatsAppNumber: "",
        parentEmail: "",
      },
      validation: Yup.object({
        parentFirstName: Yup.string().required("Parent First Name is required"),
        parentLastName: Yup.string().required("Parent Last Name is required"),
        parentWhatsAppNumber: Yup.string().required(
          "Parent WhatsApp Number is required"
        ),
        parentEmail: Yup.string().email().required("Email is required"),
      }),
    },
    {
      label: "",
      initialValues: {
        address: "",
        country: "",
        region: "",
        postalCode: "",
      },
      validation: Yup.object({
        address: Yup.string().required("Address is required"),
        country: Yup.string().required("Country is required"),
        region: Yup.string().required("Region is required"),
        postalCode: Yup.number("Enter a correct Postal Code").required(
          "Postal Code is required"
        ),
      }),
    },
  ];

  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({});
  const isLastStep = currentStep === stepData.length - 1;

  const handleNext = (values) => {
    setFormData({ ...formData, ...values });

    if (isLastStep) {
      console.log({ values });
    } else {
      setCurrentStep((prev) => prev + 1);
    }
  };
  const stepCounter = [];
  // for (let i = 0; i < step; i++) {
  //   stepCounter.push(<div className={crf.step} key={i} />);
  // }
  return (
    <div className={crf.register__from__container}>
      <div className={crf.heading}>
        <h1>Student Registration Form</h1>
        <p>
          Welcome to SDTECH Academy! Please fill in the form below to initiate
          the registration process
        </p>
      </div>
      <Formik
        initialValues={stepData[currentStep]?.initialValues}
        validationSchema={stepData[currentStep]?.validation}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            // console.log(values);
            setSubmitting(false);
            handleNext(values);
          }, 400); // Simulate async submission
        }}
      >
        {({
          isSubmitting,
          isValid,
          isValidating,
          errors,
          values,
          setFieldValue,
        }) => (
          <Form>
            {JSON.stringify({ isSubmitting, isValid, isValidating, errors })}
            {JSON.stringify({ values })}
            <div className={crf.step_container}>{stepCounter}</div>
            <div>
              <p>Student Details - Step 1 of 4</p>
              <div></div>
            </div>
            <div className={crf.forms_container}>
              {}

              {currentStep === 0 ? (
                <StudentDetails
                  setCurrentStep={setCurrentStep}
                  values={values}
                  setFieldValue={setFieldValue}
                />
              ) : currentStep === 1 ? (
                <ParentDetails
                  setCurrentStep={setCurrentStep}
                  values={values}
                  setFieldValue={setFieldValue}
                />
              ) : currentStep === 2 ? (
                <Address
                  setCurrentStep={setCurrentStep}
                  values={values}
                  setFieldValue={setFieldValue}
                />
              ) : (
                <>THANK YOU </>
              )}

              {/* <button type="submit">
                {isSubmitting
                  ? "Submitting..."
                  : isLastStep
                  ? "Submit"
                  : "Next"}
              </button> */}
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
                  {isSubmitting ? (
                    "Submitting..."
                  ) : isLastStep ? (
                    "Submit"
                  ) : (
                    <>
                      Next
                      <div className={crf.right_arrow}>
                        <BsArrowRight />
                      </div>
                    </>
                  )}
                </button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
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
