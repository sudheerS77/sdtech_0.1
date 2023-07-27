import React, { useState } from "react";
import axios from "axios";
import PhoneInput from "react-phone-input-2";

import cn from "./contact.module.css";
import "react-phone-input-2/lib/bootstrap.css";
import { API } from "@/config";

const Cform = ({ title, desc, formType }) => {
  const [formDetails, setFormDetails] = useState({
    firstName: "",
    lastName: "",
    fullName: "",
    organizationName: null,
    email: "",
    phoneNumber: null,
    message: "",
  });
  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const submitData = async () => {
      var result;
      if (formType === "B2B") {
        const b2bData = {
          fullName: formDetails.fullName,
          organizationName: formDetails ? formDetails.organizationName : null,
          contactType: "B2B",
          email: formDetails.email,
          phoneNumber: formDetails.phoneNumber,
          message: formDetails.message,
        };
        result = await axios.post(`/api/b2bcontact`, {
          data: b2bData,
        });
      } else {
        const courseContactData = {
          firstName: formDetails.firstName,
          lastName: formDetails.lastName,
          email: formDetails.email,
          phoneNumber: formDetails.phoneNumber,
          message: formDetails.message,
          contactType: "CourseContact",
        };
        result = await axios.post(`/api/contact`, {
          data: courseContactData,
        });
      }
    };
    submitData();
  };
  return (
    <>
      <form onSubmit={handleSubmit} method="POST">
        <div>
          <h3>{title}</h3>
          <p>{desc}</p>
        </div>
        <div className={cn.cn__name}>
          {formType !== "B2B" ? (
            <>
              <input
                type="text"
                placeholder="First Name"
                name="firstName"
                onChange={handleChange}
                className={cn.cn_tinput}
                required
              />
              <input
                type="text"
                name="lastName"
                onChange={handleChange}
                placeholder="Last Name"
                className={cn.cn_tinput}
                required
              />
            </>
          ) : (
            <>
              <input
                type="text"
                placeholder="Full Name"
                name="fullName"
                onChange={handleChange}
                className={cn.cn_tinput}
                required
              />
              <input
                type="text"
                name="organizationName"
                onChange={handleChange}
                placeholder="Organization Name"
                className={cn.cn_tinput}
                required
              />
            </>
          )}
        </div>
        <div>
          <input
            type="email"
            placeholder="Email"
            name="email"
            required
            onChange={handleChange}
            className={cn.cn_tinput}
          />
          {/* <input
                  type="number"
                  placeholder="Phone Number"
                  maxLength={10}
                  name="phoneNumber"
                  required
                  onChange={handleChange}
                  className={cn.cn_tinput}
                /> */}

          <PhoneInput
            className={cn.phoneNumber}
            country={"in"}
            // value={phoneNumber}
            name="phoneNumber"
            required="true"
            inputProps={{
              name: "phone",
              required: true,
              autoFocus: false,
            }}
            onChange={(phone) => {
              setFormDetails((prev) => ({
                ...prev,
                phoneNumber: phone,
              }));
            }}
          />
          <textarea
            placeholder="Message"
            name="message"
            required
            onChange={handleChange}
          ></textarea>
        </div>
        <button className={cn.submit_btn}>Submit</button>
      </form>
    </>
  );
};

export default Cform;
