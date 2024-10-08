import React, { useState } from "react";
import hc from "./ourCourses.module.css";
import Link from "next/link";

import { FaChevronRight } from "react-icons/fa";
import { BsArrowRight } from "react-icons/bs";

const RowCourseCard = ({ data }) => {
  const [coursePrice, setCoursePrice] = useState(
    parseInt(data?.pricing?.pricing[1]?.course_level_pricing[0]?.dollars)
  );
  console.log(data.name, coursePrice);
  return (
    <>
      <div className={hc.oc_rcard}>
        <Link
          href={`/courses/${data?.slug}`}
          // href={{
          //   pathname: `/courses/${data?.slug}`,
          //   query: { coursename: `${data?.name}` },
          // }}
        >
          <div
            className={`${
              data?.isbigimage ? hc.rfullCoverImage : hc.oc_rcard_h
            } `}
            // className={hc.oc_rcard_h}
          >
            <img src={data?.image} alt="" />
            {data.isDiscounted?.status && (
              <div className={hc.discounted__label}>
                <span>{data?.isDiscounted?.percentage} % Discount</span>
              </div>
            )}
          </div>
          <div className={hc.oc_rcard_b}>
            <h4>{data?.name}</h4>
            <div>
              <p>{data?.description?.slice(0, 200) + "..."}</p>
            </div>
            <div className={hc.oc_card_bprice + " " + hc.oc_rcard_bprice}>
              <span className={hc.price_area}>
                {data.isDiscounted?.status ? (
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
                )}
              </span>
              {/* <span className={hc.oc_price}>
                {" "}
                ${" "}
                <del style={{ fontSize: "1rem" }}>
                  {coursePrice + Math.floor(coursePrice / 2)}
                </del>{" "}
                {coursePrice}
              </span> */}
              <span className={hc.oc_live}>
                <span className={hc.live__symbol}></span>
                Live
              </span>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default RowCourseCard;
