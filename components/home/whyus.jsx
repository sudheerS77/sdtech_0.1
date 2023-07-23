import React from "react";
import Image from "next/image";

import hwu from "./whyus.module.css";
// Icons
import { IoMdMedal } from "react-icons/io";
import { ImBooks } from "react-icons/im";
import { BsGlobeCentralSouthAsia } from "react-icons/bs";
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
      //  <ImBooks className={hwu.wu_icon} style={{ color: "blue" }} />,
      header: "Cutting-Edge Learning Experience",
      description:
        "Stay ahead with a meticulously crafted curriculum by global experts. Gain competitive skills for a rapidly evolving world.",
    },
    {
      icon: <Image src={boy} alt="image" />,
      // <IoMdMedal className={hwu.wu_icon} />,
      header: "Unparalleled Expertise of Top Global Educators",
      description:
        "Experience exceptional learning with passionate, top educators. They nurture curiosity, inspire achievement, and drive remarkable results.",
    },
    {
      icon: <Image src={tickmark} alt="image" />,
      //  (
      // <BsGlobeCentralSouthAsia
      //   className={hwu.wu_icon}
      //   style={{ color: "green" }}
      // />),

      header: "Personalized Learning Journey",
      description: "Tailored education for your unique journey.",
    },
    {
      icon: <Image src={reward} alt="image" />,
      // icon: <ImBooks className={hwu.wu_icon} style={{ color: "blue" }} />,
      header: "Proven Track Record of Success",
      description: "Join a platform that delivers exceptional results.",
    },
    {
      icon: <Image src={implementation} alt="image" />,
      // icon: <IoMdMedal className={hwu.wu_icon} />,
      header: "Revolutionary Learning Methodologies",
      description: "Innovative approach for a transformative education.",
    },
    {
      icon: <Image src={community} alt="image" />,
      // icon: (
      //   <BsGlobeCentralSouthAsia
      //     className={hwu.wu_icon}
      //     style={{ color: "green" }}
      //   />
      // ),
      header: "Vibrant Learning Community",
      description: "Connect, collaborate, and grow with like-minded learners.",
    },
    // {
    //   icon: <ImBooks className={hwu.wu_icon} style={{ color: "blue" }} />,
    //   header: "Real-World Application",
    //   description: "Practical skills for success in the professional world.",
    // },
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
              {/* <img src={cuttingedge} alt="image" />            */}
              <div className={hwu.wu_icon_section}>{item.icon}</div>
              {/* <div className={hwu.wu_icon_section}>
                  <img src={`${item?.icon}`} alt="image" />
                </div> */}
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

{
  /* <div className={hwu.wu_card}>
            <IoMdMedal className={hwu.wu_icon} />
            <span>
              Top 1% <br />
              Global <br />
              Educators
            </span>
            <p>
              Rigorously trained to nurture the kids interest, curiosity &
              learning.
            </p>
          </div>
          <div className={hwu.wu_card}>
            <ImBooks className={hwu.wu_icon} style={{ color: "blue" }} />
            <span>
              Futuristic <br />
              Curriculum
            </span>
            <p>
              Rigorously trained to nurture the kids interest, curiosity &
              learning.
            </p>
          </div>
          <div className={hwu.wu_card}>
            <BsGlobeCentralSouthAsia
              className={hwu.wu_icon}
              style={{ color: "green" }}
            />
            <span>
              Top 1% <br />
              Global <br />
              Educators
            </span>
            <p>
              Rigorously trained to nurture the kids interest, curiosity &
              learning.
            </p>
          </div>
          <div className={hwu.wu_card}>
            <IoMdMedal className={hwu.wu_icon} />
            <span>
              Top 1% <br />
              Global <br />
              Educators
            </span>
            <p>
              Rigorously trained to nurture the kids interest, curiosity &
              learning.
            </p>
          </div> */
}
// Header: "Cutting-Edge Learning Experience"
// Description: "Stay ahead with a meticulously crafted curriculum by global expertGain competitive skills for a rapidly evolving world."

// Header: "Unparalleled Expertise of Top 1% Global Educators"
// Description: "Experience exceptional learning with passionate, top 1% educatorThey nurture curiosity, inspire achievement, and drive remarkable results."

// Header: "Personalized Learning Journey"
// Description: "Tailored education for your unique journey."

// Header: "Proven Track Record of Success"
// Description: "Join a platform that delivers exceptional results."

// Header: "Revolutionary Learning Methodologies"
// Description: "Innovative approach for a transformative education."

// Header: "Vibrant Learning Community"
// Description: "Connect, collaborate, and grow with like-minded learners."

// Header: "Real-World Application"
// Description: "Practical skills for success in the professional world."
