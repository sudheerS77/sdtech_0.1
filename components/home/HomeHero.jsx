import React from "react";
import hhome from "./hero.module.css";
import Image from "next/image";
// Icons
import bookIcon from "../../assets/images/Education.png";
// ffb765f8
const HomeHero = () => {
  return (
    <>
      <div className={hhome.container}>
        <div className={hhome.home_content}>
          <h1>
            Unlock Your Potential, <br /> Anytime, Anywhere!
          </h1>
          <p>
            Empower your future with transformative online learning at
            <span className={hhome.sd}>SDTechAcademy</span> - Where knowledge
            knows no bounds!
          </p>
          <ul>
            <li>🎓 Engaging Courses for All Ages</li>
            <li>🌐 Global Community of Learners</li>
            <li>🚀 Personalized Learning Experience</li>
            <li>💡 Unlock Your Future, Today!</li>
          </ul>
        </div>
        <div className={hhome.home_image}>
          <img
            src="https://res.cloudinary.com/df8aswwta/image/upload/v1691664381/images/jrka5rqi2icnwm4gyzuc.png"
            alt=""
            className={hhome.programming_list_image}
          />
        </div>
      </div>
    </>
  );
};

export default HomeHero;
