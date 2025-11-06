import React from "react";
import RightCardContent from "./RightCardContent";

const RightCard = () => {
  return (
    <div className="h-full w-80 rounded-4xl overflow-hidden relative">
      <img
        className="h-full w-full object-cover"
        src="https://images.unsplash.com/photo-1739967350392-7967c8f4ee0a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHdvcmtpbmclMjBwcm9mZXNzaW9uYWwlMjBnaXJsfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500"
        alt=""
      />
      <RightCardContent/>
    </div>
  );
};

export default RightCard;
