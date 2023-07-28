import React from "react";
import Image from "next/image";

import om from "./ourmission.module.css";

import ourmissionBg from "../../assets/images/ourmisisonbg.png";

const   OurMission = () => {
  return (
    <>
      <div className={om.om_container}>
        <h1 className={om.heading}>Our Mission</h1>
        <div className={om.om_details}>
          <div className={om.omc_box}>
            <div className={om.om_count}>
              <h1>1</h1>
            </div>
            <div className={om.om_card}>
              <h3 className="">Building a Supportive Community</h3>
              <p>
                We provide a supportive learning environment for you. Every
                course offered by us comes with full support and communication
                with experienced professors and teachers to answer your
                questions. There will also be a shared space so you can connect
                with other learners and educators around the world.
              </p>
            </div>
          </div>
          <div className={om.omc_box}>
            <div className={om.om_count}>
              <h1>2</h1>
            </div>
            <div className={om.om_card}>
              <h3>Our goal</h3>
              <p>
                We seek to create a space for complete and easy access to
                learning and training for all ages with the lowest price and
                highest quality all over the world. the place that everyone has
                equal opportunities to learn and succeed.
              </p>
            </div>
          </div>
          <div className={om.omc_box}>
            <div className={om.om_count}>
              <h1>3</h1>
            </div>
            <div className={om.om_card}>
              <h3>Ensuring Quality Education</h3>
              <p>
                This is our guarantee to you! We are committed to providing high
                quality training and courses. The curriculum and content
                provided are regularly updated to align with the latest trends
                in technology and the best teaching practices in the world. Our
                courses and instructors meet the highest standards and it is our
                duty to guarantee this quality. You can be sure that the
                training you receive from us will meet all your needs. By
                choosing SDTeach academy, you can be confident that you are
                receiving the most up-to-date and valuable education.
              </p>
            </div>
          </div>
          <Image src={ourmissionBg} alt="our mission" className={om.om_bg_image} />
        </div>
      </div>
    </>
  );
};

export default OurMission;


