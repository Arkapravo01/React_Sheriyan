import React from "react";
import Section1 from "./components/Section1/Section1";
import Section2 from "./components/Section2/Section2";

const App = () => {
  const users = [
    {
      img: "https://images.unsplash.com/photo-1739967350392-7967c8f4ee0a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHdvcmtpbmclMjBwcm9mZXNzaW9uYWwlMjBnaXJsfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500",
      intro: "",
      color:'blue',
      tag: "Satisfied",
    },
    {
      img: "https://images.unsplash.com/photo-1600275669439-14e40452d20b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHdvcmtpbmclMjBwcm9mZXNzaW9uYWwlMjB3b21lbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500",
      intro: "",
      color:'green',
      tag: "Underserved",
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1661297485356-2497102824d0?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aG90JTIwZ2lybHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500",
      intro: "",
      color:'violet',
      tag: "Underwear",
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1661401881360-f807b13ffd9b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG90JTIwZ2lybHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500",
      intro: "",
      color:'lightseagreen',
      tag: "Underbanked",
    },
    {
      img: "https://images.unsplash.com/photo-1698251127457-38da75299c05?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhvdCUyMGdpcmxzfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500",
      intro: "",
      color:'pink',
      tag: "Unemployed",
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1668165257976-13771a2fea0e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fGhvdCUyMGdpcmxzfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500",
      intro: "",
      color:'black',
      tag: "Average",
    },
  ];
  return (
    <div>
      <Section1 users={users} />
      <Section2 />
    </div>
  );
};

export default App;
