import React from "react";

// Layout
import HomeLayout from "@/Layout/Home.layout";
import HeroBanner from "@/components/Atoms/Banners/heroBanner";

const AboutUs = () => {
  const bannerData = {
    title: "About Us",
    header: "",
    description: "",
    poster:
      "https://cdni.iconscout.com/illustration/premium/thumb/contact-us-3483599-2912016.png https://i.pinimg.com/originals/26/96/b8/2696b872b87bfe565a2ff12f3a1cb7c0.jpg",
  };
  return (
    <>
      <HomeLayout>
        <HeroBanner data={bannerData} />
      </HomeLayout>
    </>
  );
};

export default AboutUs;
