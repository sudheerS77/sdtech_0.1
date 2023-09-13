import React from "react";
import cb from "./coursebody.module.css";

// Icons
import {
  MdArrowForward,
  MdComputer,
  MdFeedback,
  MdLanguage,
  MdLocationOn,
} from "react-icons/md";
import { AiFillSafetyCertificate } from "react-icons/ai";

const CourseFeaturesComponent = () => {
  const courseFeatures = [
    {
      title: "Class Details",
      feature: [
        {
          name: "Location: Online and Classroom",
          icon: <MdLocationOn />,
        },
        {
          name: "Mode of Delivery: Group Session and 1:1",
          icon: <MdLocationOn />,
        },
        {
          name: "Language: English, Hindi, Persian",
          icon: <MdLanguage />,
        },
      ],
    },
    {
      title: "Requirements",
      feature: [
        {
          name: "A computer/Laptop",
          icon: <AiFillSafetyCertificate />,
        },
        {
          name: "IDE (Eclipse, VS Code, IntelliJ IDEA)",
          icon: <MdComputer />,
        },
        {
          name: "Passion to learn new things",
          icon: <MdFeedback />,
        },
      ],
    },
    {
      title: "Course Features",
      feature: [
        {
          name: "Online Instructor-led learning",
          icon: <MdArrowForward />,
        },
        {
          name: "Doubt Clearing",
          icon: <MdArrowForward />,
        },
        {
          name: "Recording of Live Class",
          icon: <MdArrowForward />,
        },
        {
          name: "Material",
          icon: <MdArrowForward />,
        },
        {
          name: "Quiz in every module",
          icon: <MdArrowForward />,
        },
        {
          name: "Certificate",
          icon: <MdArrowForward />,
        },
      ],
    },
    {
      title: "Bonus Features",
      feature: [
        {
          name: "Completion Certificate",
          icon: <AiFillSafetyCertificate />,
        },
        {
          name: "1:1 Parents Teacher Meeting",
          icon: <MdComputer />,
        },
        {
          name: "Feedback From Instructors",
          icon: <MdFeedback />,
        },
      ],
    },
  ];
  return (
    <>
      <div className={`${cb.cb_course_features}`}>
        {courseFeatures?.map((cfItems, index) => (
          <div key={index} className={`${cb.cb_card}`}>
            <h4>{cfItems.title}</h4>
            {cfItems?.feature?.map((features, index) => (
              <div>
                {features.icon}
                {features.name}
              </div>
            ))}
          </div>
        ))}
      </div>
    </>
  );
};

export default CourseFeaturesComponent;
