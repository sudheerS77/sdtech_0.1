import React from "react";
import hhome from "./hero.module.css";
import Image from "next/image";
// ffb765f8
const HomeHero = () => {
  return (
    <>
      <div className={hhome.container}>
        <div className={hhome.hero_container}>
          <div className={hhome.Text_box}>
            <h1>Invest in your child&apos;s future</h1>
            <p>where innovation and technology thrive.</p>
          </div>
          <div className={hhome.img_container}>
            <div>
              <img
                src="https://res.cloudinary.com/df8aswwta/image/upload/v1690168556/images/xawffpnubv9iymyyejie.png"
                alt="image...."
                className={hhome.img_1}
              />
            </div>
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
    </>
  );
};

export default HomeHero;
