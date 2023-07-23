import React from "react";

import bn from "./banner.module.css";

const HeroBanner = ({ data }) => {
  return (
    <>
      <div className={bn.banner}>
        <div className={bn.banner__container}>
          <div className={`${bn.banner__left} ${bn.bn__card}`}>
            <p className={bn.banner_bn}>{data?.title}</p>
            <h1>{data?.header}</h1>
            <b>{data?.header2}</b>
            <p>{data?.description}</p>
          </div>
          {data?.poster !== null ? (
            <div className={`${bn.banner__right}`}>
              <img src={data?.poster} alt="" />
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  );
};

export default HeroBanner;
