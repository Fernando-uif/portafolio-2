import React from "react";
import ovalStyle from "@/sass/components/oval.module.scss";
const Oval = ({ position }: { position: number }) => {
  const ovalStyle = {
    fill: "none",
    stroke: "#fff",
    strokeWidth: "1",
    rx: "265px",
    ry: "40px",
    opacity: 0.25,
  };
  return (
    <svg
      width="530"
      height="80"
      viewBox="0 0 530 80"
      style={{ position: "absolute", top: `${position}px`, left: "50%" }}
    >
      <ellipse {...ovalStyle} cx={"50%"} cy={"50%"} />
    </svg>
  );
};

export default Oval;
