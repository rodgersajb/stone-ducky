"use client";
import { GiForkKnifeSpoon } from "react-icons/gi";
import { IoIosImages } from "react-icons/io";

import Image from "next/image";
import { useRef } from "react";
import PartyAccordion from "./components/accordion";
import PartyForm from "./components/partyForm";
import PartyImages from "./components/partyImages";

const images = [
  {
    src: "/images/ducky_whales-min.webp",
    alt: "Corner view of inside Stone Ducky Restaurant with the logo and a whale mural on the wall",
  },
  {
    src: "/images/wine_glasses_liquor_bottles-min.webp",
    alt: "Wine glasses hanging and liquor bottles on a shelf",
  },
  {
    src: "/images/catering_steaks.webp",
    alt: "New York Striploin Steak with honey roasted carrots, dauphinoise potatoes, and balsamic reduction",
  },
  {
    src: "/images/restaurant_inside_patio_view-min.webp",
    alt: "Inside view of Stone Ducky Restaurant with a patio view",
  },
  {
    src: "/images/catering_caesar_salad.webp",
    alt: "Multiple caesar salad plates with house-made croutons, parmesan cheese, and bacon crumble",
  },
];

export default function LargeGroups() {
  const faqRef = useRef(null);
  const formRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <main>
      <header className="h-svh lg:h-dvh flex flex-col items-center justify-center gap-4 w-full relative text-white text-center">
        <Image
          src="/images/ducky_restaurant_inside.webp"
          alt="Ducky Restaurant Inside"
          fill
          priority
          className="-z-1 object-cover brightness-90"
        />
        <h1 className="z-10 font-semibold text-6xl">Party Reservations</h1>
        <h2 className="z-10 text-xl lg:text-2xl font-semibold">
          Celebrations, Meetings, and Everything In Between
        </h2>
        <div className="grid grid-cols-2 gap-4">
          <button
            onClick={() => scrollToSection(formRef)}
            className="btn btn-orange z-10  rounded font-semibold gap-2 text-center"
          >
            Party Request 
          </button>
          <button
            onClick={() => scrollToSection(faqRef)}
            className="btn btn-blue z-10 font-semibold gap-2 text-center"
          >
            party questions 
          </button>
        </div>
      </header>
      <section className="bg-whiteBG flex flex-col z-30 py-10">
        <ul className="grid grid-cols-3 grid-rows-3 gap-4 w-[90%] m-auto max-h-[1000px]">
          {images.map((image, index) => (
            <PartyImages image={image} index={index} key={index} />
          ))}
        </ul>
      </section>
      <div ref={faqRef}>
        <PartyAccordion />
      </div>
      <h2 className="lg:text-4xl text-2xl text-center">
        Submit Your Request for Your Large Party Reservation
      </h2>
      <div ref={formRef}>
        <PartyForm />
      </div>
    </main>
  );
}
