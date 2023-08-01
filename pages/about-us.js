import React from "react";

// Layout
import HomeLayout from "@/Layout/Home.layout";
import HeroBanner from "@/components/Atoms/Banners/heroBanner";
import OurMission from "@/components/aboutUs/ourmission";
import AboutusCard from "@/components/aboutUs/aboutusCard";
import ExperiencedFaculty from "@/components/aboutUs/experiencedFaculty";
import AboutusComponents from "@/components/aboutUs/aboutus.components";

const AboutUs = () => {
  const bannerData = {
    title: "About Us",
    header: "Empowering Minds, Enriching Futures:",
    header2: "Welcome to our educational online teaching platform!",
    description:
      "We are dedicated to providing a seamless and engaging learning experience for students worldwide. Our platform offers a diverse range of courses taught by passionate educators, ensuring that learners receive high-quality instruction tailored to their needs. Join us as we empower individuals to unlock their full potential and embrace the joy of lifelong learning.",
    poster: null,
    // "https://cdni.iconscout.com/illustration/premium/thumb/contact-us-3483599-2912016.png https://i.pinimg.com/originals/26/96/b8/2696b872b87bfe565a2ff12f3a1cb7c0.jpg",
  };
  return (
    <>
      <HomeLayout>
        <HeroBanner bannerData={bannerData} poster={false} />
        <OurMission />
        <ExperiencedFaculty />
        <AboutusComponents />
      </HomeLayout>
        {/* <AboutusCard /> */}
    </>
  );
};

export default AboutUs;
