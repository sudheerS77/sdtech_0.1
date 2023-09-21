import HomeLayout from "@/Layout/Home.layout";
import React from "react";

const IndividualRoadMap = () => {
  const styles = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "600px",
    fontSize: "2rem",
    color: "#091520",
    fontWeight: "700",
  };
  return (
    <HomeLayout>
      <div style={styles}>
        Unlock Your Coding Journey: Coming Soon - Comprehensive Roadmaps.
      </div>
    </HomeLayout>
  );
};

export default IndividualRoadMap;
