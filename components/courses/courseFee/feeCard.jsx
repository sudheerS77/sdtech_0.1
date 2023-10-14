import React from "react";
import Image from "next/image";

// Icons
import tickMark from "../../../assets/why/tick-mark.png";

// CSS
import cf from "./courseFee.module.css";

const FeeCard = ({ ccitems, pricing }) => {
//   console.log(ccitems, pricing);
  return (
    <>
      <div className={cf.cf_card}>
        <h1 className={cf.cf_Card_header}>{ccitems.level}</h1>
        {/* 
        <div>
        <h3>Certification:</h3>
        <h3>Support Materials:</h3> 
        </div>
        */}
        <div className={cf.cf_duration}>
          <h4>Course Duration : </h4>
          <ul>
            <li>
              {ccitems?.no_of_classes} Classes ({ccitems?.no_of_months} Months)
            </li>
          </ul>
        </div>
        <div className={cf.cf_features}>
          <h4>Features : </h4>
          <ul className={cf.cf_feature}>
            <li>
              <p>Access to Resources</p>
              <Image src={tickMark} alt="" width={20} />
            </li>
            <li>
              <p>Support Materials</p>
              <Image src={tickMark} alt="" width={20} />
            </li>
          </ul>
        </div>
        {/* <div className={cf.cf_lo}>
          <h4>Learning Outcomes</h4>
          <ul>
            {ccitems?.learning_outcomes?.map((item, indx) => (
              <li key={indx}>{item}</li>
            ))}
          </ul>
        </div> */}
        <div>
          <h4>Certifications</h4>
          <ul>
            <li>{ccitems?.certificationName}</li>
          </ul>
        </div>
        <div>
          <h4>Pricing</h4>
          <ul>
            <li>
              {/* <h1>₹ {ccitems?.pricing.one_one}</h1> */}
            </li>
            <li>
              {/* ₹ {ccitems?.pricing.one_one.rupees / ccitems?.no_of_classes} Per */}
              Class
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default FeeCard;