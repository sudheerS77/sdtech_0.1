import CoursesNav from "@/components/navbar/coursesNav.component";
import Navbar from "@/components/navbar/navbar.component";
import React from "react";

const HomeLayout = ({ children }) => {
  return (
    <>
      <React.Fragment>
        <Navbar />
        {/* <CoursesNav /> */}
        <div className="container">{children}</div>
      </React.Fragment>
    </>
  );
};

export default HomeLayout;
