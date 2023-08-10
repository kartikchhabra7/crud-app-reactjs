import React from "react";
import "./Button.css"
const Button = ({ text, onClick,type }) => {
  return (
    <button className="custom-button" onClick={onClick} type={type}>
      {text}
    </button>
  );
};

export default Button;
