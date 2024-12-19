"use client";

const ScrollButton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="z-10 bg-duckyOrange text-whiteBG border border-duckyOrange py-4 px-6 rounded text-sm"
    >
      Schedule a Catering Request
    </button>
  );
};

export default ScrollButton;