import React from "react";
import Image from "next/image";

import au from "./aboutus.module.css";
import expIns from "../../assets/images/expinstructors.png";

const ExperiencedFaculty = () => {
  return (
    <>
      <div className={au.exp_section}>
        <div className={au.exp_instructors_container}>
          <h1>
            Our Expert Instructors Fostering Excellence in Online Education
          </h1>
          <div className={au.exp_box}>
            <div className={au.exp_des}>
              <p>
                Our team of instructors consists of highly skilled and
                passionate educators who are dedicated to nurturing the minds of
                our students. Each instructor brings a wealth of knowledge and
                expertise in their respective fields, with advanced degrees and
                extensive teaching experience. They are committed to delivering
                engaging and effective online instruction, ensuring that
                students receive the highest quality education. Our instructors
                foster a supportive and interactive learning environment,
                encouraging student participation and providing personalized
                guidance. With their dedication and expertise, our instructors
                inspire and empower students to achieve their academic and
                professional goals
              </p>
            </div>
            <div className={au.exp_image}>
              <Image src={expIns} alt="image" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExperiencedFaculty;
