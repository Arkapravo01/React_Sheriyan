import React, { useContext } from "react";
import { ThemeDataContext } from "../context/ThemeContext";

const Button = () => {
  const [theme,setTheme] = useContext(ThemeDataContext);
  const changeTheme = () => {
    console.log(theme)
    console.log(setTheme('dark'));
  };
  return (
    <div>
      <button onClick={changeTheme} style={{ backgroundColor: "black" }}>
        Change Theme
      </button>
    </div>
  );
};

export default Button;
