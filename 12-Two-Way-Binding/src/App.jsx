import React from "react";
import { useState } from "react";

const App = () => {
  const [title, setTitle] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Form Submitted by:", title);
    setTitle("");
  };
  return (
    <div>
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
      >
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          placeholder="Enter your name:"
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default App;
