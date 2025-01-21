"use client";
import Link from "next/link";

import { IoIosRestaurant } from "react-icons/io";
import { PiPicnicTableBold } from "react-icons/pi";
import { BsEnvelopeOpen } from "react-icons/bs";
import { TbDirections, TbWriting } from "react-icons/tb";
import { MdOutlinePhonelink } from "react-icons/md";
import { FaPeopleGroup } from "react-icons/fa6";
import { GiFullPizza } from "react-icons/gi";

import { motion } from "framer-motion";

const fadeInAnimationVariants = {
    initial: {
        opacity: 0,
        y: 100
    },
    animate: (index) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.05 * index,
        }
    })
}

const navItems = [
  {
    href: "/menu",
    icon: <IoIosRestaurant className="lg:text-3xl text-duckyOrange" />,
    label: "Menu",
  },
  {
    href: "https://maps.app.goo.gl/rWXkAQ1ZNC8UTFqE6",
    icon: <TbDirections className="lg:text-3xl text-duckyOrange" />,
    label: "Directions",
  },
  {
    href: "https://www.tbdine.com/book/restaurant/stone-ducky?idApp=71672&language=en-us",
    icon: <PiPicnicTableBold className="lg:text-3xl text-duckyOrange" />,
    label: "Book a Table",
  },
  {
    href: "/contact",
    icon: <BsEnvelopeOpen className="lg:text-3xl text-duckyOrange" />,
    label: "Contact",
  },
  {
    href: "https://order.tbdine.com/pickup/50580/menu",
    icon: <MdOutlinePhonelink className="lg:text-3xl text-duckyOrange" />,
    label: "Order Online",
  },
  {
    href: "/groups",
    icon: <FaPeopleGroup className="lg:text-3xl text-duckyOrange" />,
    label: "Group Bookings",
  },
  {
    href: "/blog",
    icon: <TbWriting className="lg:text-3xl text-duckyOrange" />,
    label: "Blog",
  },
  {
    href: "/catering",
    icon: <GiFullPizza className="lg:text-3xl text-duckyOrange" />,
    label: "Catering",
  },
];

export default function FooterNav() {
  return (
    <nav className="lg:w-[60%] lg:m-auto ">
      <ul className="grid grid-cols-4 grid-row-2 lg:grid-row-1 lg:grid-cols-4 gap-4 justify-between lg:place-items-center pb-4">
        {navItems.map((item, index) => (
          <motion.li
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            custom={index}
          >
            <button
              key={index}
              className="grid place-items-center lg:col-span-1 col-span-2"
            >
              {item.icon}
              <Link href={item.href} className="text-charcoal font-semibold">
                {item.label}
              </Link>
            </button>
          </motion.li>
        ))}
      </ul>
    </nav>
  );
}
