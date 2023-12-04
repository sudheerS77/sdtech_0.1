import React from "react";
import op from "./ourpartners.module.css";

const OurPartners = () => {
  const univ = [
    {
      name: "Alzahra University",
      imageUrl:
        "https://res.cloudinary.com/df8aswwta/image/upload/v1701704592/images/universities/a8bnvrxiinjyt4hn5cwk.jpg",
    },
    {
      name: "Robotics and Mechatronics associate",
      imageUrl:
        "https://res.cloudinary.com/df8aswwta/image/upload/v1701704597/images/universities/ccraxysjtjwwcp3v3bkk.png",
    },
  ];
  return (
    <div className={op.our_partners}>
      <div className={op.heading}>
        <h2 className="">University Collaborations</h2>
        <p>
          Discover our university collaborations, forging a path where education
          meets innovation in robotics and programming
        </p>
      </div>
      <div className={op.image_gallery}>
        {univ?.map((un, index) => (
          <div className={op.image} key={index}>
            <img src={un.imageUrl} alt={un.name} className="" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurPartners;
