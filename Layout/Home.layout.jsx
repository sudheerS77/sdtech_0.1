import Footer from "@/components/footer/footer";
import CoursesNav from "@/components/navbar/coursesNav.component";
import Navbar from "@/components/navbar/navbar.component";
import React from "react";

const HomeLayout = ({ children }) => {
  return (
    <>
      <React.Fragment>
        <Navbar />
        <CoursesNav />
        <div>{children}</div>
        <Footer />
      </React.Fragment>
    </>
  );
};

export default HomeLayout;
