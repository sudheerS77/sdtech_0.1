import React from "react";
// Layout
import HomeLayout from "@/Layout/Home.layout";
// Components
import RoadMapsComponent from "@/components/roadMaps/roadMaps.component";
// Css
import rm from "@/styles/roadmaps.module.css";

const RoadMaps = () => {
  return (
    <>
      <HomeLayout>
        {/* <div className={rm.rm_border} /> */}
        <div className={rm.rm_layout1}>
          <div className={rm.rm_layout2}>
            <div className={rm.rm_layout3}>
              <div className={rm.rm_container}>
                {/* <h1>
          Learning Pathways Hub: <br /> Your Guide to Mastering Full Stack, Data
          Science, Robotics, and More!
        </h1> */}
                <div className={rm.rm_hero}>
                  <h1>Tech Mastery: Guided Learning Pathways for All</h1>
                  <p>
                    Your path to success starts here. Explore expertly designed
                    learning roadmaps for tech, data, and beyond. Start your
                    journey today.
                  </p>
                </div>
                <RoadMapsComponent />
              </div>
            </div>
          </div>
        </div>
      </HomeLayout>
    </>
  );
};

export default RoadMaps;
