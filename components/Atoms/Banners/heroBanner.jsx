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
            <p>{data?.description}</p>
          </div>
          <div className={`${bn.banner__right} ${bn.bn__card}`}>
            <img src={data?.poster} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroBanner;
