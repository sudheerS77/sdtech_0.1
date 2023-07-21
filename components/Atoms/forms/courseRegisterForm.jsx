import React, { useEffect, useState } from "react";

import crf from "./courseRegisterForm.module.css";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/bootstrap.css";
import { useRouter } from "next/router";
import axios from "axios";

const CourseRegisterForm = ({ courseName }) => {
  console.log(courseName);
  const [studentDetails, setStudentDetails] = useState({
    firstName: "",
    lastName: "",
    dob: "",
    age: 0,
    email: "",
    address: "",
    city: "",
    state: "",
    postalCode: "",
    country: "",
    parentFirstName: "",
    parentLastName: "",
    whatsAppNumber: "",
    phoneNumber: "",
    parentEmail: "",
    registredCourseName: courseName ? courseName : "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    // console.log({ name, value });

    if (name === "dob") {
      const today = new Date();
      const birthDate = new Date(value);
      var currentAge = today.getFullYear() - birthDate.getFullYear();
      var m = today.getMonth() - birthDate.getDate();
      if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        currentAge--;
      }
      setStudentDetails((prev) => ({
        ...prev,
        age: currentAge,
      }));
    }
    setStudentDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const [phoneNumber, setPhoneNumber] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();
    setStudentDetails((prev) => ({
      ...prev,
      whatsAppNumber: phoneNumber,
    }));

    const submitDetails = async () => {
      const data = await axios.post(
        "https://sdtech-0-1.vercel.app/api/courseregister",
        { data: studentDetails }
      );
    };
    submitDetails();
  };

  return (
    <div className={crf.register__from__container}>
      <form onSubmit={handleSubmit} method="POST">
        <div>
          <label htmlFor="name">Student Name</label>
          <div className={crf.form_group}>
            <input
              type="text"
              placeholder="first name"
              name="firstName"
              onChange={handleChange}
              required
            />
            <input
              type="text"
              placeholder="last name"
              name="lastName"
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div>
          <label htmlFor="name">Parent Name</label>
          <div className={crf.form_group}>
            <input
              type="text"
              placeholder="Parent first name"
              name="parentFirstName"
              onChange={handleChange}
              required
            />
            <input
              type="text"
              placeholder="Parent last name"
              name="parentLastName"
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className={crf.form_group}>
          <div>
            <label htmlFor="dob">Student Date of Birth</label>
            <input type="date" name="dob" onChange={handleChange} required />
          </div>
          <div>
            <label htmlFor="email">Student Email</label>
            <input
              type="email"
              placeholder="enter your email"
              name="email"
              onChange={handleChange}
              required
            />
          </div>
        </div>
        {/* <div className={crf.form_group}>
          <div>
            <label htmlFor="city">City</label>
            <input type="text" placeholder="enter your city" name="city" />
          </div>
          <div>
            <label htmlFor="state">State</label>
            <input type="text" placeholder="enter your state" name="state" />
            required
          </div>
        </div> */}
        <div className={crf.form_group}>
          <div>
            <label htmlFor="postalCode">Postal Code</label>
            <input
              type="text"
              placeholder="000-000"
              name="postalCode"
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="country">Country</label>
            <input
              type="text"
              placeholder="enter your country"
              name="country"
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className={crf.form_group}>
          <div>
            <label htmlFor="whatsAppNumber">Whats app Number</label>
            <PhoneInput
              className={crf.phoneNumber}
              country={"in"}
              value={phoneNumber}
              name="whatsAppNumber"
              required="true"
              inputProps={{
                name: "phone",
                required: true,
                autoFocus: false,
              }}
              onChange={(phone) => {
                setStudentDetails((prev) => ({
                  ...prev,
                  whatsAppNumber: phone,
                }));
              }}

              // onChange={(phone) => setPhoneNumber(phone)}
            />
          </div>
          <div className={crf.email}>
            <label htmlFor="parentEmail">Parent email</label>
            <input
              type="email"
              placeholder="parent email"
              name="parentEmail"
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className={crf.submit_btn}>
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default CourseRegisterForm;
