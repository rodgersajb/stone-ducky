"use client";



export default function ScrollButtons() {
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
    <div className="grid grid-rows-2 lg:grid-cols-2 gap-4">
      <button
        onClick={() => scrollToSection("form-section")}
        className="btn btn-richNavy btn-richNavy:hover z-10 rounded font-semibold gap-2 text-center"
      >
        Party Request
      </button>
      <button
        onClick={() => scrollToSection("faq-section")}
        className="btn btn-tealGreen btn-tealGreen:hover z-10 font-semibold gap-2 text-center"
      >
        Party Questions
      </button>
    </div>
  );
}
