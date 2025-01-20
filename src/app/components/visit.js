"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import FadeInImageContainer from "./fadeInImageContainer";

export default function Visit() {
  

  return (
    <section className="lg:grid lg:grid-cols-2 flex flex-col-reverse w-full bg-warmBeige">
      <FadeInImageContainer
        className="h-[400px] lg:min-h-[500px] w-[90%] m-auto lg:w-full"
        delay={0.5}
      >
        <Image
          src="/images/ducky_restaurant_inside.webp"
          alt="Inside of Stone Ducky"
          fill
          className="object-contain lg:object-cover"
        />
      </FadeInImageContainer>
      <div className="min-h-[625px] lg:min-h-[500px] w-full text-coolGray flex flex-col items-center justify-evenly lg:justify-center gap-4">
        <div className="z-10 relative">
          <h2 className="text-4xl lg:text-6xl relative pb-2">Visit Us</h2>
        </div>

        <div className="lg:text-xl text-center">
          <p>56 St Johns Rd</p>
          <p>Bay Bulls, NL A0A 1C0</p>
          <p>(709) 334-3825</p>
        </div>

        <div className="flex gap-2 lg:text-xl">
          <p>Tuesday/Thursday</p>
          <p>11:00 am - 8:00 pm</p>
        </div>
        <div className="z-10 flex gap-2 lg:text-xl">
          <p>Friday/Sunday</p>
          <p>11:00 am - 10:00 pm</p>
        </div>
        <div className="flex flex-row-reverse items-center gap-4 lg:text-xl">
          <Image
            src="/images/duck_sleepy.png"
            alt="Sleepy Duck"
            height={100}
            width={100}
          />
          <p className="relative before:content-[''] before:block before:h-48 before:w-48 before:bg-circle-scribble before:bg-contain before:bg-no-repeat before:absolute before:-top-8 before:-left-8 before:text-mutedOrange ">
            Closed Mondays
          </p>
        </div>
        <div className="flex lg:flex-row flex-col gap-8 z-10">
          <button className="btn btn-richNavy btn-richNavy:hover">
            Reserve a Table
          </button>
          <button className="btn btn-mutedOrange btn-mutedOrange:hover">
            Order Online
          </button>
        </div>
      </div>
    </section>
  );
}
