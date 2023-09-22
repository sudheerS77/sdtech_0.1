import HomeLayout from "@/Layout/Home.layout";
import CarrersHeroComponent from "@/components/carrersComponents/carrersHero.component";
import OpeningsComponent from "@/components/carrersComponents/openings.component";
import React from "react";

const Carrers = () => {
  return (
    <>
      <HomeLayout>
        <CarrersHeroComponent />
        <OpeningsComponent />
      </HomeLayout>
    </>
  );
};

export default Carrers;
