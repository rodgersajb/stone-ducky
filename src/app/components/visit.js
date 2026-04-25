"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import FadeInImageContainer from "./fadeInImageContainer";
import Link from "next/link";

export default function Visit() {
  return (
    <section className="lg:grid lg:grid-cols-2 flex flex-col-reverse w-full ">
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
      <div className="min-h-[500px] w-full flex flex-col items-center justify-center  lg:justify-center gap-4 ">
        <h2 className="text-2xl lg:text-3xl relative text-coolGray border-b-4 border-dotted  border-[#5A6B5B]">
          Visit Us
        </h2>

        <div className="lg:text-base text-sm text-center font-semibold text-coolGray ">
          <p>56 St Johns Rd</p>
          <p>Bay Bulls, NL A0A 1C0</p>
          <p>(709) 334-3825</p>
        </div>

        <div className="flex flex-col justify-center lg:justify-around lg:w-[85%] items-center gap-2  ">
          <div className="text-center">
            <p className="font-semibold border-b-4 border-dotted  border-warmTaupe">
              Monday - Tuesday
            </p>
            <p className="font-semibold text-sm">Closed</p>
          </div>
          <div className="text-center">
            <p className="font-semibold border-b-4 border-dotted  border-warmTaupe">
              Wednesday - Thursday
            </p>
            <p className="font-semibold text-sm">4:00 pm - 8:00 pm</p>
          </div>
          <div className="text-center">
            <p className="font-semibold border-b-4 border-dotted  border-warmTaupe">
              Friday
            </p>
            <p className="font-semibold text-sm">12:00 pm - 8:00 pm</p>
          </div>
          <div className="text-center">
            <p className="font-semibold border-b-4 border-dotted  border-warmTaupe">
              Saturday
            </p>
            <p className="font-semibold text-sm">11:00 am - 8:00 pm</p>
          </div>
          <div className="text-center">
            <p className="font-semibold border-b-4 border-dotted  border-warmTaupe">
              Sunday
            </p>
            <p className="font-semibold text-sm">11:00 am - 7:00 pm</p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-2 lg:gap-8 z-10 w-[95%] lg:w-full items-center justify-center pb-2 text-sm">
          <button
            className="btn btn-tealGreen btn-tealGreen:hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-tealGreen w-full lg:w-1/3"
            aria-label="Book A Table"
          >
            <Link href="https://tables.toasttab.com/restaurants/60a98459-a07a-4280-82f4-aea785ed506b/findTime">
              <span>Book a Table</span>
            </Link>
          </button>

          <button
            className="btn btn-outlineTealGreen btn-outlineTealGreen:hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-warmTaupe w-full lg:w-1/3"
            aria-label="Order Online"
          >
            <Link href="https://order.toasttab.com/online/stone-ducky-restaurant-and-lounge-56-saint-johns-road">
              <span>Order Online</span>
            </Link>
          </button>
        </div>
      </div>
    </section>
  );
}
