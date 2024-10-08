import HomeLayout from "@/Layout/Home.layout";
import HeroBanner from "@/components/Atoms/Banners/heroBanner";
import CourseEnqueryForm from "@/components/contact/courseEnquery.form";
import React from "react";

const contactUs = () => {
  const bannerData = {
    title: "Contact Us",
    header: "Unlock Your Coding Potential with Us Today!",
    header2: null,
    description: "Let us transform your coding dreams into reality",
    poster:
      "https://cdni.iconscout.com/illustration/premium/thumb/contact-us-3483599-2912016.png https://i.pinimg.com/originals/26/96/b8/2696b872b87bfe565a2ff12f3a1cb7c0.jpg",
  };

  return (
    <HomeLayout>
      <HeroBanner bannerData={bannerData} poster={true} />
      <CourseEnqueryForm />
    </HomeLayout>
  );
};

export default contactUs;
