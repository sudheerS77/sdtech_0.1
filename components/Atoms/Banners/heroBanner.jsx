import React from "react";

import bn from "./banner.module.css";
import Image from "next/image";

const HeroBanner = ({ bannerData }) => {
  return (
    <>
      <div className={bn.banner}>
        <div className={bn.banner__container}>
          <div className={`${bn.banner__left} ${bn.bn__card}`}>
            <p className={bn.banner_bn}>{bannerData?.title}</p>
            <h1>{bannerData?.header}</h1>
            <b>{bannerData?.header2}</b>
            <p>{bannerData?.description}</p>
          </div>
          {/* {bannerData?.poster !== null ? (
            <div className={`${bn.banner__right}`}>
              <img src={bannerData?.poster} alt="image" />
            </div>
          ) : (
            <></>
          )} */}
        </div>
      </div>
    </>
  );
};

export default HeroBanner;
