import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import HomeLayout from "@/Layout/Home.layout";
import HomeHero from "@/components/home/HomeHero";
import CourseCategories from "@/components/home/courseCategories";
import OurCourses from "@/components/home/ourCourses";
import WhyUs from "@/components/home/whyus";
import FAQ from "@/components/home/faq";
import Carousel from "@/components/carousel/carousel";

const inter = Inter({ subsets: ["latin"] });

import poster_1 from "../assets/logos/poster_1.png"

export default function Home() {
  const images = [
    {
      image: {poster_1},
        title: "Invest in your child's future, ",
      text: 'where innovation and technology thrive.',
      link: "",
    },
    {
      image:
        "https://img.freepik.com/free-vector/seminar-concept-illustration_114360-7480.jpg",
        title: "Invest in your child's future, ",
      text: 'where innovation and technology thrive.',
      link: "",
    },
    {
      image:
        "https://img-c.udemycdn.com/notices/web_carousel_slide/image/69094169-f35e-470a-9146-d5955c7330b9.png",
        title: "Invest in your child's future, ",
      text: 'where innovation and technology thrive.',
      link: "",
    },
    // {
    //   image:
    //     "https://png.pngtree.com/background/20210710/original/pngtree-blue-technology-artificial-intelligence-cool-banner-background-picture-image_968559.jpg",
    //   text: "Prepare your child for a future driven by technology, where possibilities are endless.",
    //   link: "",
    // },
    {
      image:
        "https://img-c.udemycdn.com/notices/web_carousel_slide/image/09206fc2-d0f1-41f6-b714-36242be94ee7.jpg",
      title: "Unleash your digital potential,",
        text: "Unleash and Amplify Your Digital Potential.",
      link: "",    
    },
  ];
  return (
    <>
      <HomeLayout>
        <Carousel />
        {/* <HomeHero /> */}
        <CourseCategories />
        <OurCourses />
        <WhyUs />
        <FAQ />
      </HomeLayout>
    </>
  );
}
