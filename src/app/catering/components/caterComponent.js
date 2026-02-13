"use client";

import CateringForm from "./cateringForm";
import HeaderFadeContainer from "@/app/components/headerFadeContainer";
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
      <HeaderFadeContainer className="h-[65svh] lg:flex lg:flex-col lg:items-center">
        <figure className="relative w-full h-[200px] lg:h-[350px]">
          <Image
            src="/images/catering-header.png"
            alt="Catering Header"
            fill
            className="lg-object-cover object-contain translate-y-12 "
            priority={true}
          />
        </figure>
        <figure className="relative w-full h-[250px]">
          <Image
            src="/images/catering_biscuits.webp"
            alt="Braised Beef Short Rib"
            fill
            className=" object-cover "
            priority={true}
          />
        </figure>
        <button
          className="btn btn-tealGreen z-10 font-semibold gap-2 text-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-tealGreen w-[95%] lg:w-1/4 mx-auto"
          onClick={handleScroll}
          aria-label="Schedule a catering request"
        >
          Schedule a Catering Request
        </button>
      </HeaderFadeContainer>
      {/* <section className="w-full flex flex-col items-center justify-center gap-4 pb-8 bg-white">
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
      </section> */}

      <div
        className="w-full px-8 m-auto flex flex-col items-center gap-8 py-8 bg-creamBG"
        ref={formRef}
      >
        <h2 className="text-xl lg:text-4xl text-center">
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
