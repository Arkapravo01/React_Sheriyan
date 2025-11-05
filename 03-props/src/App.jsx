import React from "react";
import Card from "./components/Card";

const App = () => {
  return (
    <div className="parent">
      <Card
        user="Aman Singh"
        age={18}
        img={
          "https://plus.unsplash.com/premium_photo-1690571200236-0f9098fc6ca9?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c3BhY2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500"
        }
      />
      <Card
        user="Sarthak"
        age={21}
        img={
          "https://plus.unsplash.com/premium_photo-1761940415449-c09ef466c698?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=60&w=500"
        }
      />
      <Card
        user="Aditya"
        age={24}
        img={
          "https://plus.unsplash.com/premium_vector-1711987726767-a73708a2d3de?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=352&dpr=1&h=367"
        }
      />
    </div>
  );
};

export default App;
