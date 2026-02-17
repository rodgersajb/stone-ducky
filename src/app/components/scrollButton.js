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
      className="  text-warmTaupe p-4 rounded-full  text-center w-full grid place-items-center
                 hover:bg-opacity-80 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-[#5A6B5B]/50 
                 "
      aria-label="Scroll to About Section"
    >
      <FaArrowDown className="text-2xl " />
    </button>
  );
}
