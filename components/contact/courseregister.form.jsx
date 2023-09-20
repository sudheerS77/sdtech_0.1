import React from "react";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import InputComponent from "../Atoms/forms/input.component";
import PhoneNumberInput from "../Atoms/forms/phoneNumber.input";
import TeaxtAreaComponent from "../Atoms/forms/textArea.component";

// CSS
import cn from "./contact.module.css";
import crf from "../Atoms/forms/courseRegisterForm.module.css";
import axios from "axios";
import { useRouter } from "next/router";

const CourseRegisterForm = ({ title, desc }) => {
  const router = useRouter();
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    message: "",
  };
  const validationSchema = Yup.object({
    firstName: Yup.string().required("First Name is Required"),
    lastName: Yup.string().required("Last Name is Required"),
    email: Yup.string().email().required("Email is required"),
    phoneNumber: Yup.number().required("Phone Number is required"),
  });
  const submitData = async (values) => {
    try {
      var result = await axios.post(`/api/contact`, {
        data: values,
      });
      if (result.status === 200) {
        router.push("/thanks");
      } else {
        alert("Form not submitted, please contact us throught email or phone");
      }
    } catch (error) {
      console.log(error);
      // alert("Form not submitted, please contact us throught email or phone");
    }
  };
  const submitHandler = (values) => {
    console.log(values);
    submitData(values);
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
            </div>
            <div className={cn.courseRegister__form__body}>
              <div className={crf.form_group}>
                <div>
                  <InputComponent
                    name="firstName"
                    value={values.firstName}
                    type="text"
                    label="First Name"
                  />
                </div>
                <div>
                  <InputComponent
                    name="lastName"
                    value={values.lastName}
                    type="text"
                    label="Last Name"
                  />
                </div>
              </div>
              <div className={crf.form_group}>
                <div>
                  <InputComponent
                    name="email"
                    value={values.email}
                    type="text"
                    label="Email"
                  />
                </div>
                <div>
                  <PhoneNumberInput
                    label="phone Number"
                    name="phoneNumber"
                    values={values}
                    setFieldValue={setFieldValue}
                  />
                </div>
              </div>
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

export default CourseRegisterForm;
