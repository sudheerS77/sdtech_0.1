import React from "react";
import Image from "next/image";

import hwu from "./whyus.module.css";

// Images
import cuttingedge from "../../assets/why/cuttingedge.png";
import boy from "../../assets/why/boy-cap.png";
import community from "../../assets/why/community.png";
import growth from "../../assets/why/growth.png";
import implementation from "../../assets/why/implementation.png";
import reward from "../../assets/why/reward.png";
import tickmark from "../../assets/why/tick-mark.png";

const WhyUs = () => {
  const whyUsData = [
    {
      icon: <Image src={cuttingedge} alt="image" />,
      header: "Cutting-Edge Learning Experience",
      description:
        "Stay ahead with a meticulously crafted curriculum by global experts. Gain competitive skills for a rapidly evolving world.",
    },
    {
      icon: <Image src={boy} alt="image" />,
      header: "Unparalleled Expertise of Top Global Educators",
      description:
        "Experience exceptional learning with passionate, top educators. They nurture curiosity, inspire achievement, and drive remarkable results.",
    },
    {
      icon: <Image src={tickmark} alt="image" />,
      header: "Personalized Learning Journey",
      description: "Tailored education for your unique journey.",
    },
    {
      icon: <Image src={reward} alt="image" />,
      header: "Proven Track Record of Success",
      description: "Join a platform that delivers exceptional results.",
    },
    {
      icon: <Image src={implementation} alt="image" />,
      header: "Revolutionary Learning Methodologies",
      description: "Innovative approach for a transformative education.",
    },
    {
      icon: <Image src={community} alt="image" />,
      header: "Vibrant Learning Community",
      description: "Connect, collaborate, and grow with like-minded learners.",
    },
  ];

  return (
    <>
      <div className={hwu.wu_container}>
        <div>
          <h2 className={hwu.wu_header}>
            Why Choose <span>SD-Tech Acdamy</span>
          </h2>
        </div>
        <div className={hwu.wu_section}>
          {whyUsData?.map((item, indx) => (
            <div className={hwu.wu_card} key={indx}>
              <div className={hwu.wu_icon_section}>{item.icon}</div>
              <h4>{item.header}</h4>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default WhyUs;

