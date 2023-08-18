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
            // src="https://res.cloudinary.com/df8aswwta/image/upload/v1691664381/images/jrka5rqi2icnwm4gyzuc.png"
            // src="https://res.cloudinary.com/df8aswwta/image/upload/v1691664150/images/rdwsvckjnclpdm2r5sab.png"
            // src="https://res.cloudinary.com/df8aswwta/image/upload/v1690895781/images/uxvxuoqhiyjsrga4isfk.svg"
            // src="https://res.cloudinary.com/df8aswwta/image/upload/v1690892791/images/yvibz3grgwtz5sqi1sxr.svg"
            // src="https://semidotinfotech.com/blog/wp-content/uploads/2023/03/mad_11825125959.webp"
            // src="https://sklc-tinymce-2021.s3.amazonaws.com/comp/2023/02/179_1675948994.png"
            // src="https://miro.medium.com/v2/resize:fit:820/1*v5NRqLcyXIVNaG5KLjKIQA.png"
            // src="https://cdn.xxl.thumbs.canstockphoto.com/vinnytsia-ukraine-august-19-2021-set-of-programming-languages-python-javascript-java-c-c-eps-vector_csp94712442.jpg"
            alt=""
            className={hhome.programming_list_image}
          />
          {/* <img src="https://w7.pngwing.com/pngs/280/366/png-transparent-desktop-robots-of-the-future-robotics-high-definition-television-robotics-sports-equipment-desktop-wallpaper-8k-resolution-thumbnail.png" alt="" className={hhome.robot_image} /> */}
        </div>
      </div>
    </>
  );
};

export default HomeHero;
