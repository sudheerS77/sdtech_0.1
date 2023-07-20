import React, { useState } from "react";

import cn from "./contact.module.css";
import axios from "axios";

const ContactForm = () => {
  const [formDetails, setFormDetails] = useState({
    firstName: "",
    lastName: "",
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
      const data = await axios.post("http://localhost:3000//api/contact", {
        data: formDetails,
      });
    };
    submitData();
  };

  return (
    <>
      <div className={cn.cnform}>
        <div className={cn.cnform__container}>
          <div className={`${cn.cn__card} ${cn.form__left}`}>
            <form onSubmit={handleSubmit} method="POST">
              <h3>CONTACT US</h3>
              <p>Submit your details, You will receive a Call Back!</p>
              <div className={cn.cn__name}>
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
                <input
                  type="number"
                  placeholder="Phone Number"
                  maxLength={10}
                  name="phoneNumber"
                  required
                  onChange={handleChange}
                  className={cn.cn_tinput}
                />
                <textarea
                  placeholder="Message"
                  name="message"
                  required
                  onChange={handleChange}
                ></textarea>
              </div>
              <button>Submit</button>
            </form>
          </div>
          <div className={`${cn.form__right}`}>
            <div className={`${cn.cn__card} ${cn.contact_details}`}>
              <div>
                <h4>New Customers</h4>
              </div>
              <div>
                <span>Call Us</span>
                <span>+91 9658965896</span>
              </div>
              <div>
                <span>Whatsapp</span>
                <span>Click Here To Chat</span>
              </div>
              <div>
                <span>Email</span>
                <span>info@sdtechacademy.com</span>
              </div>
            </div>
            <div className={`${cn.cn__card} ${cn.contact_details}`}>
              <div>
                <h4>New Customers</h4>
              </div>
              <div>
                <span>Call Us</span>
                <span>+91 9658965896</span>
              </div>
              <div>
                <span>Whatsapp</span>
                <span>Click Here To Chat</span>
              </div>
              <div>
                <span>Email</span>
                <span>info@sdtechacademy.com</span>
              </div>
            </div>
            <div className={`${cn.cn__card} ${cn.contact_details}`}>
              <div>
                <h4>New Customers</h4>
              </div>
              <div>
                <span>Call Us</span>
                <span>+91 9658965896</span>
              </div>
              <div>
                <span>Whatsapp</span>
                <span>Click Here To Chat</span>
              </div>
              <div>
                <span>Email</span>
                <span>info@sdtechacademy.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
