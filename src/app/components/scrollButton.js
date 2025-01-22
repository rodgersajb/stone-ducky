"use client";

import { FaArrowDown } from "react-icons/fa";



export default function ScrollButton() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    const navHeight = 150; // offset height from fixed navbar

    if (section) {
      window.scrollTo({
        top: section.offsetTop - navHeight,
        behavior: "smooth",
      });
    }
  };
  return (
    <button
      onClick={() => scrollToSection("about-section")}
      className="border-2 p-2 bg-duckyBlue   rounded flex z-40"
    >
      <FaArrowDown className="text-2xl" />
    </button>
  );
}
