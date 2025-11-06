import React from "react";
import "remixicon/fonts/remixicon.css";
import RightCard from "./RightCard";

const RightContent = (props) => {
  return (
    <div id="right" className="h-full  rounded-4xl overflow-x-auto shrink-0 flex flex-nowrap gap-10 w-2/3  p-6">
      {props.users.map((elem,index) => {
        return <RightCard key={index} id={index} img={elem.img} tag={elem.tag} color={elem.color}/>;
      })}
    </div>
  );
};

export default RightContent;
