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
          <h1>Unlock Your Potential, <br /> Anytime, Anywhere!</h1>
          <p>
            Empower your future with transformative online learning at
            <span className={hhome.sd}>SDTechAcademy</span> - Where knowledge knows no bounds!
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
            src="https://semidotinfotech.com/blog/wp-content/uploads/2023/03/mad_11825125959.webp"
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
<>
  <div className={hhome.container}>
    <div className={hhome.hero_container}>
      <div className={hhome.Box_container}>
        <div className={hhome.Text_box}>
          <h1>Invest in your child&apos;s future</h1>
          <p>where innovation and technology thrive.</p>
        </div>
        <Image src={bookIcon} alt="" className={hhome.bookIcon} />
      </div>
      <div className={hhome.img_container}>
        {/* <div>
              <img
                src="https://res.cloudinary.com/df8aswwta/image/upload/v1690168556/images/xawffpnubv9iymyyejie.png"
                alt="image...."
                className={hhome.img_1}
              />
            </div> */}
        <div className={hhome.img_container_2}>
          <div>
            <img
              src="https://res.cloudinary.com/df8aswwta/image/upload/v1690168555/images/yrcavkbqjopeddpw9inj.png"
              alt="image...."
              className={hhome.img_2}
            />
          </div>
          <div>
            <img
              src="https://res.cloudinary.com/df8aswwta/image/upload/v1690168555/images/hmawxlrqyizrm5mm7cjx.png"
              alt="image...."
              className={hhome.img_3}
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</>;
