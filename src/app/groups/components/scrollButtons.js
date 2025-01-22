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
        className="btn btn-richNavy z-10 rounded font-semibold gap-2 text-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-richNavy"
        aria-label="Scroll to party request form"
      >
        Party Request
      </button>
      <button
        onClick={() => scrollToSection("faq-section")}
        className="btn btn-tealGreen z-10 font-semibold gap-2 text-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-tealGreen"
        aria-label="Scroll to party questions section"
      >
        Party Questions
      </button>
    </div>
  );
}
