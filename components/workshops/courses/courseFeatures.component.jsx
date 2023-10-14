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

const CourseFeaturesComponent = ({
  pricing,
  discount,
  classeDetails,
  name,
}) => {
  console.log(pricing, discount);
  const [courseFeatures, setCourseFeatures] = useState([
    {
      title: "هزینه ثبت نام",
      feature: [
        {
          name: "الزهرایی ها و ربو آموزان آکادمی ",
          // price: pricing ? pricing.pricing[0].course_level_pricing[0] : 1.550.000 تومان,
        },
        {
          name: "سایر افراد",
          // price: 1.650.000 تومان,
        },
      ],
    },
    {
      title: "درباه دوره",
      feature: [
        {
          name: "مکان برگزاری: تهران، دانشگاه الزهرا ",
          icon: <MdLocationOn />,
          color: "red",
        },
        {
          name: "نوع کلاس: حضوری",
          icon: <MdLocationOn />,
          color: "green",
        },
        {
          name: "زمان شروع دوره: 15 آبان 1402 ",
          icon: <MdLanguage />,
          color: "blue",
        },

        {
          name: "مدت زمان دوره : 35 ساعت  ",
          icon: <MdLanguage />,
          color: "blue",
        },
        {
          name: "دوشنبه ها – ساعت 14 الی 18 ",
          icon: <MdLanguage />,
          color: "blue",
        },
        {
          name: "بدون پیش نیاز قبلی",
          icon: <MdLanguage />,
          color: "blue",
        },
      ],
    },
    {
      title: "Requirements",
      feature: [
        {
          name: "A computer/Laptop",
          icon: <AiFillSafetyCertificate />,
          color: "#001F3F",
        },
        {
          name: "Passion to learn new things",
          icon: <MdFeedback />,
          color: "#001F3F",
        },
      ],
    },
    {
      title: "مزایای دوره",
      feature: [
        {
          name: "ارائه گواهی معتبر و بین المللی دو زبانه از دانشگاه الزهرا",
          icon: <MdArrowForward />,
          color: "#071D2B",
        },
        {
          name: "برگزاری مسابقه در دانشگاه الزهرا",
          icon: <MdArrowForward />,
          color: "#071D2B",
        },
        {
          name: "کاربردی و پروژه محور بودن دوره ",
          icon: <MdArrowForward />,
          color: "#071D2B",
        }
      ],
    },
    {
      title: "Bonus Features",
      feature: [
        {
          name: "Completion Certificate",
          icon: <AiFillSafetyCertificate />,
          color: "green",
        }        
      
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
                            <div
                              style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                gap: "5px",
                              }}
                            >
                              {/* <del>$ {pricingValues?.one_one.dollars}</del> ${" "}
                              {parseInt(pricingValues?.one_one.dollars / 2)} */}
                              {/* <span className={cb.stricked__line}>
                                $ {pricingValues?.one_one.dollars}
                              </span> */}
                              <div>
                                $ {pricingValues?.one_one.dollars}
                                {/* {discount?.status &&
                                   -
                                   (pricingValues?.one_one.dollars *
                                    discount.percentage) /
                                  100} */}
                              </div>
                              <div
                                style={{
                                  fontSize: "0.7rem",
                                  color: "red",
                                }}
                              >
                                ($7.5 per hour)
                              </div>
                            </div>
                          ) : (
                            <>
                              {/* <del>$ {pricingValues?.group.dollars}</del> ${" "}
                              {parseInt(pricingValues?.group.dollars / 2)} */}
                              <span className={cb.stricked__line}>
                                $ {pricingValues?.group.dollars}
                              </span>
                              <span>
                                $
                                {discount?.status &&
                                  pricingValues?.group.dollars -
                                    (pricingValues?.group.dollars *
                                      discount.percentage) /
                                      100}
                              </span>
                            </>
                          )}
                        </div>
                      </div>
                    ))}
                    <div className={cb.pricing_container}>
                      <div className={cb.pricing_category}>No - of Classes</div>
                      <div className={cb.price}>
                        {/* {parseInt(pricingValues?.one_one?.dollars / 7.3)} - */}
                        {classeDetails?.no_of_classes} - Classes
                      </div>
                    </div>
                    {discount?.status && (
                      <div className={cb.discount__label}>
                        <span> ویژه دانشگاه الزهرا</span>
                      </div>
                    )}
                  </>
                ) : (
                  <></>
                )}
              </>
            ) : (
              <>
                {cfItems?.feature?.map((features, indx) => (
                  <div key={indx} className={cb.features_name}>
                    <span style={{ color: `${features.color}` }}>
                      {features.icon}
                    </span>
                    <span className={cb.cb__f__name}>{features.name}</span>
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
