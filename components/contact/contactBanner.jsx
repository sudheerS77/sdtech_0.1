import React from "react";

import cn from "./contact.module.css";
import Image from "next/image";

const ContactBanner = () => {
  return (
    <>
      <div className={cn.banner}>
        <div className={cn.banner__container}>
          <div className={`${cn.banner__left} ${cn.cn__card}`}>
            <p className={cn.banner_cn}>Contact Us</p>
            <h1>Unlock Your Coding Potential with Us Today!</h1>
            <p>Let us transform your coding dreams into reality</p>
          </div>
          <div className={`${cn.banner__right} ${cn.cn__card}`}>
            <Image
              src="https://cdni.iconscout.com/illustration/premium/thumb/contact-us-3483599-2912016.png https://i.pinimg.com/originals/26/96/b8/2696b872b87bfe565a2ff12f3a1cb7c0.jpg"
              alt="image"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactBanner;
