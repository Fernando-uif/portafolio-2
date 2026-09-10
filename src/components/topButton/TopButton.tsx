"use client";
import { useEffect, useState } from "react";
import topButtonStyle from "@/sass/buttons/topButton.module.scss";
import Icon from "../Icons/Icon";

const TopButton = () => {
  const [showButton, setShowButton] = useState(false);
  const handleOnTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  // 3377
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;

      setShowButton(scrollY > 3377);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <button
        className={`${topButtonStyle["topButton"]} ${
          showButton
            ? topButtonStyle["topButton-show"]
            : topButtonStyle["topButton-notShow"]
        }`}
        onClick={handleOnTop}
        aria-label="back to top"
        aria-hidden={!showButton}
      >
        <Icon name="upArrow" />
      </button>
    </>
  );
};

export default TopButton;
