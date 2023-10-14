import React from "react";
import cb from "./coursebody.module.css";

const CourseAdditionalInforComponent = ({ data }) => {
  return (
    <>
      <div className={cb.course_information}>
        <div>
          <h4>Description</h4>
          <p>{data?.description}</p>
        </div>
        <div>
          <h4>Why Choose This Course?</h4>
          <p>{data?.description}</p>
        </div>
        <div>
          <h4>Why Learn {data?.name}</h4>
          <p>{data?.description}</p>
        </div>
        <div>
          <h4>Who this course is for:</h4>
          <ul>
            <li>
              Java programmers who want to create web applications Professionals
            </li>
            <li>willing to develop a Java skill Future developers of web</li>
            <li>
              applications People willing to create a fast web application using
              Java
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default CourseAdditionalInforComponent;
