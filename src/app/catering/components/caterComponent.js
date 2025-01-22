"use client";

import CateringForm from "./cateringForm";
import CateringCarousel from "./carousel";
import { useRef } from "react";

import Image from "next/image";

export default function CaterComponent() {
  const formRef = useRef(null);

  const handleScroll = () => {
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <header className="h-svh lg:h-dvh w-full relative flex flex-col items-center justify-center gap-8">
        <Image
          src="/images/mushroom_fritter_soup.webp"
          alt="Mushroom Fritter Soup"
          fill
          priority
          className="-z-1 object-cover brightness-50"
        />
        <h1 className="text-4xl lg:text-6xl z-10 text-center text-whiteBG font-semibold">
          Stone Ducky Catering
        </h1>
        <h3 className="text-xl lg:text-3xl z-10 text-center text-whiteBG font-semibold">
          Tailored Catering Solutions for Gatherings Big and Small
        </h3>
        <button
          className="z-10 bg-mutedOrange font-semibold text-whiteBG border border-mutedOrange py-4 px-6 rounded text-sm lg:text-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-mutedOrange"
          onClick={handleScroll}
          aria-label="Schedule a catering request"
        >
          Schedule a Catering Request
        </button>
      </header>
      <section className="w-full flex flex-col items-center justify-center gap-4 pb-8 bg-white">
        <Image
          src="/images/cater_duck_blue.webp"
          alt="Catering Duck"
          width={250}
          height={250}
          lazy="true"
          className="w-1/2 lg:w-[15%] lg:h-[15%]"
        />
        <h2 className="w-[95%] lg:w-[60%] m-auto text-center text-2xl lg:text-4xl">
          Celebrate in Style with Fresh, Flavorful Catering from Stone Ducky
          Restaurant.
        </h2>
      </section>

      <div
        className="w-full px-8 m-auto flex flex-col items-center gap-8 py-8 bg-warmBeige"
        ref={formRef}
      >
        <h2 className="text-2xl lg:text-4xl text-center">
          Schedule a date request for your next event catered by Stone Ducky.
        </h2>
        <p className=" lg:w-3/4 text-center lg:text-lg">
          Fill out the form with your event details, and we'll take care of the
          rest. We’ll contact you by phone or email to iron out the details!
        </p>
      </div>
      <CateringForm />
    </>
  );
}
