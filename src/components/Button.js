import { useState } from "react";

const Button = ({ width, bgColor, color, text, onClick }) => {
  const [isMouseEntered, setIsMouseEntered] = useState(false);

  const handleMouseOver = () => {
    setIsMouseEntered(true);
  };
  const handleMouseLeave = () => {
    setIsMouseEntered(false);
  };

  const styles = {
    normal: {
      width: `${width}`,
      border: `3px solid ${bgColor}`,
      borderRadius: `5px`,
      backgroundColor: `${bgColor}`,
      padding: "1%",
      marginBottom: "2%",
      color: `${color}`,
    },
    hover: {
      width: `${width}`,
      border: `3px solid ${bgColor}`,
      borderRadius: `5px`,
      padding: "1%",
      marginBottom: "2%",
      backgroundColor: "transparent",
      color: `${bgColor}`,
      textShadow: "none",
      cursor: "pointer",
    },
  };
  return (
    <span
      style={isMouseEntered ? styles.hover : styles.normal}
      onClick={onClick}
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
    >
      {text}
    </span>
  );
};

export default Button;
