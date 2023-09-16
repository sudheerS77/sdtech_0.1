import React, { useEffect, useState } from "react";
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

const CourseFeaturesComponent = ({ pricing }) => {
  const [courseFeatures, setCourseFeatures] = useState([
    {
      title: "Course Fee",
      feature: [
        {
          name: "1 : 1 Private Sessions",
          // price: pricing ? pricing.pricing[0].course_level_pricing[0] : 0,
          icon: <MdLocationOn />,
        },
        {
          name: "Group Sessions",
          // price: 0,
          icon: <MdLocationOn />,
        },
      ],
    },
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
  ]);
  const [pricingValues, setPricingValues] = useState({
    one_one: 0,
    group: 0,
  });
  const getPricing = () => {
    pricing?.pricing?.map((pric) => {
      if (pric?.course_level_category === "1 : 1 Private Sessions") {
        console.log(pric.course_level_pricing[0].dollars);
        setPricingValues((prev) => ({
          ...prev,
          one_one: pric.course_level_pricing[0],
        }));
      } else {
        setPricingValues((prev) => ({
          ...prev,
          group: pric.course_level_pricing[0],
        }));
      }
    });
  };
  // getPricing();
  useEffect(() => {
    getPricing();
  }, [pricing]);
  console.log(pricingValues);
  return (
    <>
      <div className={`${cb.cb_course_features}`}>
        {courseFeatures?.map((cfItems, index) => (
          <div key={index} className={`${cb.cb_card}`}>
            <h4>{cfItems.title}</h4>
            {cfItems.title === "Course Fee" ? (
              <>
                {pricingValues?.one_one?.dollars ? (
                  <>
                    {cfItems?.feature?.map((features, indx) => (
                      <div key={indx} className={cb.pricing_container}>
                        <div className={cb.pricing_category}>
                          {features.name}
                        </div>
                        <div className={cb.price}>
                          {features.name === "1 : 1 Private Sessions" ? (
                            <>
                              <del>$ {pricingValues?.one_one.dollars}</del> ${" "}
                              {parseInt(pricingValues?.one_one.dollars / 2)}
                            </>
                          ) : (
                            <>
                              <del>$ {pricingValues?.group.dollars}</del> ${" "}
                              {parseInt(pricingValues?.group.dollars / 2)}
                            </>
                          )}
                        </div>
                      </div>
                    ))}
                    <div>
                      No - of Classes -{" "}
                      {parseInt(pricingValues?.one_one?.rupees / 600)}
                    </div>
                  </>
                ) : (
                  <></>
                )}
              </>
            ) : (
              <>
                {cfItems?.feature?.map((features, indx) => (
                  <div key={indx} className={cb.features_name}>
                    {features.icon}
                    {features.name}
                  </div>
                ))}
              </>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default CourseFeaturesComponent;
