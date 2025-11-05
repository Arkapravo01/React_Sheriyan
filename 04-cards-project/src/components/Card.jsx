import React from "react";
import { Bookmark } from "lucide-react";

const Card = () => {
  return (
    <div className="card">
      <div>
        <div className="top">
          <img
            src="https://images.unsplash.com/photo-1649734926695-1b1664e98842?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YW1hem9uJTIwbG9nb3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500"
            alt=""
          />
          <button>
            Save <Bookmark size={12} />{" "}
          </button>
        </div>
        <div className="center">
          <h3>
            Amazon <span>5 days ago</span>
          </h3>
          <h2>Senior UI/UX Designer</h2>
          <div className="tag">
            <h4>Part Time</h4>
            <h4>Senior Level</h4>
          </div>
        </div>
      </div>
      <div className="bottom">
        <div>
          <h3>$120/hr</h3>
          <p>Mumbai, India</p>
        </div>
        <button>Apply Now</button>
      </div>
    </div>
  );
};

export default Card;
