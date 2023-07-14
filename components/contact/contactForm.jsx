import React from "react";

import cn from "./contact.module.css";

const ContactForm = () => {
  return (
    <>
      <div className={cn.cnform}>
        <div className={cn.cnform__container}>
          <div className={`${cn.cn__card} ${cn.form__left}`}>
            <form action="">
              <h3>CONTACT US</h3>
              <p>Submit your details, You will receive a Call Back!</p>
              <div className={cn.cn__name}>
                <input
                  type="text"
                  placeholder="First Name"
                  className={cn.cn_tinput}
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className={cn.cn_tinput}
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  className={cn.cn_tinput}
                />
                <input
                  type="number"
                  placeholder="Phone Number"
                  maxLength={10}
                  className={cn.cn_tinput}
                />
                <textarea name="" id="" placeholder="Message"></textarea>
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
