import HomeLayout from "@/Layout/Home.layout";
import React from "react";
import footer from "../styles/thanks.module.css";

const Thanks = () => {
  return (
    <>
      <HomeLayout>
        <div className={footer.footer_container}>
          <h4>Form submitted</h4>
          <p>We will get back to you soon</p>
        </div>
      </HomeLayout>
    </>
  );
};

export default Thanks;
