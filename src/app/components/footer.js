import Image from "next/image";
import Link from "next/link";

import { IoIosRestaurant } from "react-icons/io";
import { PiPicnicTableBold } from "react-icons/pi";
import { BsEnvelopeOpen } from "react-icons/bs";
import { TbDirections } from "react-icons/tb";

import { FaFacebookF } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { FaTiktok } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-whiteBG pt-8 ">
      
      <section className="bg-whiteBG flex flex-col">
        <nav className=" lg:w-[60%] lg:m-auto grid grid-cols-4 grid-row-2 lg:grid-row-1 lg:grid-cols-4 gap-4 justify-between lg:place-items-center pb-4">
          <div className="grid place-items-center lg:col-span-1 col-span-2 row-span-1">
            <IoIosRestaurant className="lg:text-3xl text-duckyOrange" />
            <h3 className="text-charcoal font-semibold">Menu</h3>
          </div>
          <div className="grid place-items-center lg:col-span-1 col-span-2 row-span-1">
            <TbDirections className="lg:text-3xl text-duckyOrange" />
            <h3 className="text-charcoal font-semibold">Directions</h3>
          </div>
          <div className="grid place-items-center lg:col-span-1 col-span-2">
            <PiPicnicTableBold className="lg:text-3xl text-duckyOrange" />
            <h3 className="text-charcoal font-semibold">Book a Table</h3>
          </div>
          <div className="grid place-items-center lg:col-span-1 col-span-2">
            <BsEnvelopeOpen className="lg:text-3xl text-duckyOrange" />
            <h3 className="text-charcoal font-semibold">Contact</h3>
          </div>
        </nav>
      </section>
      <section className="w-full flex m-auto justify-around items-center pt-8 pb-4 border-t-2">
        <p className="text-sm">© Copyright 2024</p>
        <Image
          src="/images/logo_stone_ducky.png"
          alt="Stone Ducky Logo"
          width={70}
          height={60}
        />
        <ul className="flex gap-4 items-center">
          <li>
            <FaFacebookF />
          </li>
          <li>
            <GrInstagram />
          </li>
          <li>
            <FaTiktok />
          </li>
        </ul>
      </section>
    </footer>
  );
}
