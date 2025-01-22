"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import FadeInImageContainer from "./fadeInImageContainer";
import Link from "next/link";

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
      <div className="min-h-[625px] lg:min-h-[500px] w-full text-coolGray flex flex-col items-center justify-evenly gap-4">
        <div className="z-10 relative">
          <h2 className="text-2xl lg:text-4xl relative pb-2">Visit Us</h2>
        </div>

        <div className="lg:text-xl text-center font-semibold">
          <p>56 St Johns Rd</p>
          <p>Bay Bulls, NL A0A 1C0</p>
          <p>(709) 334-3825</p>
        </div>

        <div className="flex gap-2 lg:text-xl font-semibold">
          <p>Tuesday/Thursday</p>
          <p>11:00 am - 8:00 pm</p>
        </div>
        <div className="z-10 flex gap-2 lg:text-xl font-semibold">
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
          <p className="relative before:content-[''] before:block before:h-52 before:w-52 before:bg-circle-scribble before:bg-contain before:bg-no-repeat before:absolute before:-top-10 before:-left-8 before:text-mutedOrange font-semibold ">
            Closed Mondays
          </p>
        </div>
        <div className="flex lg:flex-row flex-col gap-8 z-10 w-[95%] lg:w-full items-center justify-center">
          <button
            className="btn btn-richNavy btn-richNavy:hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-duckyBlue w-full lg:w-1/3"
            aria-label="Book A Table"
          >
            <Link href="https://www.tbdine.com/book/restaurant/stone-ducky?idApp=71672&language=en-us">
              <span>Book a Table</span>
            </Link>
          </button>
          <button
            className="btn btn-mutedOrange btn-mutedOrange:hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-duckyBlue w-full lg:w-1/3"
            aria-label="Order Online"
          >
            <Link
              href="https://order.tbdine.com/pickup/50580/menu"
              className=""
            >
              <span>Order Online</span>
            </Link>
          </button>
        </div>
      </div>
    </section>
  );
}
