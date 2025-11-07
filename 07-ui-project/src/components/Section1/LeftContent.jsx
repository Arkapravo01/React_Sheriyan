import React from "react";
import Arrow from "./Arrow";
import HeroText from "./Herotext";

const LeftContent = () => {
  return (
    <div className="h-full flex flex-col justify-between w-1/3  overflow-auto ">
      <HeroText />
      <Arrow />
    </div>
  );
};

export default LeftContent;
