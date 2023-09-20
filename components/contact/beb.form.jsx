import React from "react";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import InputComponent from "../Atoms/forms/input.component";
import PhoneNumberInput from "../Atoms/forms/phoneNumber.input";

// CSS
import cn from "./contact.module.css";
import TeaxtAreaComponent from "../Atoms/forms/textArea.component";

const B2BForm = ({ title, desc }) => {
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: 0,
    message: "",
  };

  const validationSchema = Yup.object({
    firstName: Yup.string().required("First Name is Required"),
    lastName: Yup.string().required("Last Name is Required"),
    email: Yup.string().email().required("Email is required"),
    phoneNumber: Yup.number().required("Phone Number is required"),
  });

  const submitHandler = (values) => {
    console.log(values);
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            setSubmitting(false);
            submitHandler(values);
          }, 400); // Simulate async submission
        }}
      >
        {({ values, setFieldValue, isSubmitting }) => (
          <Form className={cn.courseRegister__form}>
            <div className={cn.courseRegister__form__header}>
              <h3>{title}</h3>
              <p>{desc}</p>
              {/* {JSON.stringify(values)} */}
            </div>
            <div className={cn.courseRegister__form__body}>
              <InputComponent
                name="firstName"
                value={values.firstName}
                type="text"
                label="First Name"
              />
              <InputComponent
                name="lastName"
                value={values.lastName}
                type="text"
                label="Last Name"
              />
              <InputComponent
                name="email"
                value={values.email}
                type="text"
                label="Email"
              />
              <PhoneNumberInput
                label="phone Number"
                name="phoneNumber"
                values={values.phoneNumber}
                setFieldValue={setFieldValue}
              />
              <TeaxtAreaComponent
                label="Message"
                name="message"
                value={values.message}
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className={cn.submit__btn}
              >
                {isSubmitting ? "Submitting..." : <>Submit</>}
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default B2BForm;
