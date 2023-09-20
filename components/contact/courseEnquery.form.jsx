import { Field, Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import InputComponent from "../Atoms/forms/input.component";
import PhoneNumberInput from "../Atoms/forms/phoneNumber.input";
import cn from "./contact.module.css";
import CourseRegisterForm from "./courseregister.form";
import B2BForm from "./beb.form";

const CourseEnqueryForm = () => {
  return (
    <div className={cn.cnform}>
      {/* <div>
        <h3>Contact Us for Course Inquiries</h3>
        <p>We're here to help you find the perfect course.</p>
      </div> */}
      <div className={cn.cnform__header}>
        <h2>Contact Us for Course Inquiries</h2>
        <p>
          At our institute, we offer a diverse range of courses to suit your
          interests and goals. Reach out to us for personalized guidance and
          discover the perfect course for your educational journey.
        </p>
      </div>

      <div className={cn.cnform__container}>
        <div className={`${cn.cn__card} ${cn.form__left}`}>
          <CourseRegisterForm
            title="COURSE ENQUERY"
            desc="Submit your details, You will receive a Call Back!"
          />
        </div>

        <div className={`${cn.form__left}`}>
          {/* <B2BForm
            title="B2B ENQUERY"
            desc="Submit your details, You will receive a Call Back!"
          /> */}
        </div>
      </div>
    </div>
  );
};

export default CourseEnqueryForm;
