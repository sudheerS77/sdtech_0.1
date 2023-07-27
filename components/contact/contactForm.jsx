import React, { useEffect, useState } from "react";
import moment from "moment-timezone";

import cn from "./contact.module.css";
import "react-phone-input-2/lib/bootstrap.css";
import Cform from "./cform";

const ContactForm = () => {
  // const [userTimezone, setUserTimezone] = useState(null);

  // useEffect(() => {
  //   // Get user's timezone on the client-side
  //   // const timezone = moment.tz.guess();
  //   // setUserTimezone(timezone);
  // }, []);

  return (
    <>
      <div className={cn.cnform}>
        <div className={cn.cnform__container}>
          <div className={`${cn.cn__card} ${cn.form__left}`}>
            <Cform
              title="COURSE ENQUERY"
              desc="Submit your details, You will receive a Call Back!"
              formType="course"
            />
          </div>
          <div className={`${cn.cn__card} ${cn.form__left}`}>
            <Cform
              title="B2B ENQUERY"
              desc="Submit your details, You will receive a Call Back!"
              formType="B2B"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
{
  /* <>
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
</>; */
}
