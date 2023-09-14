import React from "react";
import hc from "./ourCourses.module.css";
import Link from "next/link";

import { FaChevronRight } from "react-icons/fa";
import { BsArrowRight } from "react-icons/bs";

const RowCourseCard = ({ data }) => {
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
          </div>
          <div className={hc.oc_rcard_b}>
            <h4>{data?.name}</h4>
            <div>
              <p>{data?.description?.slice(0, 200) + "..."}</p>
            </div>
            <div className={hc.oc_card_bprice + " " + hc.oc_rcard_bprice}>
              <span className={hc.oc_price}>{/* ₹ {data?.cost} */}</span>
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
