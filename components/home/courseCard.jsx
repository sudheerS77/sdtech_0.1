import React from "react";
import hc from "./ourCourses.module.css";
import Link from "next/link";

import { FaChevronRight } from "react-icons/fa";
import { BsArrowRight } from "react-icons/bs";

const CourseCard = ({ data }) => {
  return (
    <>
      <div className={hc.oc_card}>
        <Link
          href={{
            pathname: `/courses/${data?.slug}`,
            query: { coursename: `${data?.name}` },
          }}
        >
          <div className={hc.oc_card_h}>
            <img src={data?.image} alt="" />
          </div>
          <div className={hc.oc_card_b}>
            <h4>{data?.name}</h4>
            <div>
              <p>
                Understand how to use the basic Python structures: strings,
                lists, and dictionaries.
              </p>
            </div>
            <div className={hc.oc_card_bprice}>
              <span className={hc.oc_price}>₹ {data?.cost}</span>
              <span className={hc.oc_live}>
                <span className={hc.live__symbol}></span>
                Live
              </span>
            </div>
          </div>
          <div className={hc.oc_border_line} />
          <div className={hc.oc_card_f}>
            <div className={hc.oc_f_box}>
              <h4>Know More</h4>
              <span className={hc.oc_card_f_icon}>
                {/* <FaChevronRight /> */}
                <BsArrowRight />
              </span>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default CourseCard;
{
  /* <div className={hc.oc_card}>
          <div className={hc.oc_card_h}>
            <img src={data.image} alt="" />
            <div className={hc.oc_card_tags}>
                            <span>50% OFF</span>
                            <span>10% OFF</span>
                        </div>
          </div>
          <div className={hc.oc_card_b}>
            <h4>{data.name}</h4>
            <div className={hc.oc_card_bprice}>
              <span className={hc.oc_price}>₹ {data.cost}</span>
              <span className={hc.oc_live}>Live</span>
            </div>
          </div>
        </div> */
}
