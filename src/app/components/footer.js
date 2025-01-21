import Image from "next/image";
import Link from "next/link";

import { IoIosRestaurant } from "react-icons/io";
import { PiPicnicTableBold } from "react-icons/pi";
import { BsEnvelopeOpen } from "react-icons/bs";
import { TbDirections, TbWriting } from "react-icons/tb";
import { MdOutlinePhonelink } from "react-icons/md";
import { FaPeopleGroup, FaFacebookF, FaTiktok } from "react-icons/fa6";
import { GiFullPizza } from "react-icons/gi";
import { GrInstagram } from "react-icons/gr";

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

const socialIcons = [
  {
    icon: <FaFacebookF />,
    href: "https://www.facebook.com/p/Stone-Ducky-NL-61553172230504/",
  },
  { icon: <GrInstagram />, href: "https://www.instagram.com/stoneduckynl/" },
  { icon: <FaTiktok />, href: "https://www.tiktok.com/@stoneduckynl3" },
];

export default function Footer() {
  return (
    <footer className="bg-whiteBG pt-8">
      <section className="bg-whiteBG flex flex-col">
        <nav className="lg:w-[60%] lg:m-auto grid grid-cols-4 grid-row-2 lg:grid-row-1 lg:grid-cols-4 gap-4 justify-between lg:place-items-center pb-4">
          {navItems.map((item, index) => (
            <button
              key={index}
              className="grid place-items-center lg:col-span-1 col-span-2"
            >
              {item.icon}
              <Link href={item.href} className="text-charcoal font-semibold">
                {item.label}
              </Link>
            </button>
          ))}
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
          {socialIcons.map((social, index) => (
            <li key={index}>
              <Link href={social.href}>{social.icon}</Link>
            </li>
          ))}
        </ul>
      </section>
    </footer>
  );
}
