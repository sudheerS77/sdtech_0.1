import React from "react";

import hc from "./workshop.module.css";
import CourseCard from "../home/courseCard";
import Link from "next/link";

import { FaChevronRight } from "react-icons/fa";
import { BsArrowRight } from "react-icons/bs";
import RowCourseCard from "../home/rowCourse.card";

const WorkshopComponent = () => {
  const ourCoursesData = [
    {
      name: "Foundations of Robotics: From History to AI Integration",
      description:
        "Learn the fundamentals of robotics in our introductory course, Introduction to Robotics. Dive into the exciting world of robots, their history, and their applications. Discover the types of robots, the connection between robotics and artificial intelligence, and explore various career opportunities in this dynamic field. Whether you're a curious beginner or aspiring robotics engineer, this course will equip you with essential knowledge and skills to kickstart your journey into robotics.",
      image:
        "https://res.cloudinary.com/df8aswwta/image/upload/v1696048723/images/robotics/xhroybarnx4hpsyzw0ce.png",
      isBig: true,
      slug: "zero-beginner",
      price: 10,
      isDiscounted: {
        status: true,
        percentage: 100,
      },
    },
  ];
  return (
    <div className={hc.oc_container}>
      <div className={hc.oc_courses__container}>
        <div className={hc.oc_header}>
          <h1>Upcominng WorkShops</h1>
          {/* <Link href="/courses" className={hc.oc_view_all}>
            <span>View All</span>
          </Link> */}
        </div>
        <div className={hc.oc_section}>
          {ourCoursesData.map((data, indx) => (
            <div className={hc.oc_rcard}>
              <Link
                href={`/workshops/${data?.slug}`}
                // href={{
                //   pathname: `/courses/${data?.slug}`,
                //   query: { coursename: `${data?.name}` },
                // }}
              >
                <div
                  className={`${hc.rfullCoverImage} `}
                  // className={hc.oc_rcard_h}
                >
                  <img src={data?.image} alt="" />
                  {/* {data.isDiscounted?.status && (
                  <div className={hc.discounted__label}>
                    <span>{data?.isDiscounted?.percentage} % Discount</span>
                  </div>
                )} */}
                </div>
                <div className={hc.oc_rcard_b}>
                  <h4>{data?.name}</h4>
                  <div>
                    <p>{data?.description?.slice(0, 200) + "..."}</p>
                  </div>
                  <div className={hc.oc_rcard_details}>
                    <div className={hc.oc_rcard_speaker}>
                      <div>Speaker Name:</div>
                      <h6>Donya Khoobani</h6>
                    </div>
                    <div className={hc.oc_rcard_venu}>
                      <div>Venu: </div>
                      <h6>University Name</h6>
                    </div>
                  </div>
                  <div className={hc.oc_card_bprice + " " + hc.oc_rcard_bprice}>
                    <span className={hc.price_area}>
                      {/* {data.isDiscounted?.status ? (
                      <>
                        <span className={hc.stricked__line}>$ {coursePrice}</span>
                        <span>
                          ${" "}
                          {coursePrice -
                            (coursePrice * data?.isDiscounted?.percentage) / 100}
                        </span>
                      </>
                    ) : (
                      <span> $ {coursePrice}</span>
                    )} */}
                    </span>
                    {/* <span className={hc.oc_price}>
                    {" "}
                    ${" "}
                    <del style={{ fontSize: "1rem" }}>
                      {coursePrice + Math.floor(coursePrice / 2)}
                    </del>{" "}
                    {coursePrice}
                  </span> */}
                    {/* <span className={hc.oc_live}>
                      <span className={hc.live__symbol}></span>
                      Live
                    </span> */}
                  </div>
                </div>
              </Link>
            </div>
            // <CourseCard key={indx} data={data} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkshopComponent;
