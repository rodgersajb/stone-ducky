"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { motion } from "framer-motion";

import { FiMenu, FiX } from "react-icons/fi";

import { FaFacebookF } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { FaTiktok } from "react-icons/fa";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Menu", href: "/menu" },
  { label: "Group Bookings", href: "/groups" },
  { label: "Catering", href: "/catering" },
  { label: "Contact", href: "/contact" },
  { label: "Blog", href: "/posts" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.nav
      className={`fixed top-0 left-0 w-full px-4 pt-4 z-50 flex items-center justify-between font-semibold gap-4 text-warmBeige transition-colors duration-300 ${isScrolled ? "border-b-2 border-[#5A6B5B] bg-rustic-wood pb-2" : ""}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <button
        className="text-3xl md:hidden  flex z-50 text-[#5A6B5B]"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
      >
        {isMenuOpen ? <FiX /> : <FiMenu />}
      </button>

      <Link className="hidden z-50 cursor-pointer lg:flex justify-end" href="/">
        <Image
          src="/images/logo_stone_ducky.png"
          alt="Stone Ducky Logo"
          width={200}
          height={160}
          className={`transition-width duration-300 ease-in-out object-contain  ${
            isScrolled ? "w-28" : "w-32"
          }`}
        />
      </Link>

      {/* Desktop Navigation */}
      <ul
        className={`hidden md:flex  items-center justify-center gap-10  z-50 ${
          isScrolled ? "text-coolGray" : "text-[#5A6B5B]"
        }`}
      >
        <li>
          <Link
            href="https://order.toasttab.com/online/stone-ducky-restaurant-and-lounge-56-saint-johns-road"
            className=""
          >
            Order Online
          </Link>
        </li>
        {navLinks.map((link, index) => (
          <li
            key={index}
            className={`cursor-pointer ${
              pathname === link.href
                ? "text-mutedOrange font-bold"
                : "text-[#5A6B5B]"
            }`}
          >
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}

        <li className="text-whiteBG bg-[#5A6B5B] py-4 px-4 rounded ">
          <Link href="https://tables.toasttab.com/restaurants/60a98459-a07a-4280-82f4-aea785ed506b/findTime">
            Book a Table
          </Link>
        </li>
      </ul>

      {/* Mobile Menu */}
      <div
        className={`absolute top-full left-0 w-full h-svh flex flex-col items-center justify-start z-49 bg-rustic-wood text-[#5A6B5B] transition-all duration-300 ease-in-out lg:hidden ${
          isMenuOpen
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0"
        }`}
      >
        <ul className="flex flex-col mt-8 items-start  justify-center z-50 gap-4 px-4  w-[80%] text-sm text-[#5A6B5B] font-Libre_Baskerville">
          {navLinks.map((link, index) => (
            <li
              key={index}
              className={`cursor-pointer ${
                pathname === link.href ? "text-mutedOrange font-bold" : ""
              }`}
            >
              <Link href={link.href} onClick={() => setIsMenuOpen(false)}>
                {link.label}
              </Link>
            </li>
          ))}
          <li className="cursor-pointer text-center grid place-items-center w-full py-2 px-4 border-2 border-[#5A6B5B] text-[#5A6B5B]  rounded">
            <Link
              href="https://order.toasttab.com/online/stone-ducky-restaurant-and-lounge-56-saint-johns-road"
              className=""
            >
              Order Online
            </Link>
          </li>
          <li className=" cursor-pointer text-center grid place-items-center w-full py-2 px-4 bg-[#5A6B5B] text-creamBG rounded">
            <Link href="https://tables.toasttab.com/restaurants/60a98459-a07a-4280-82f4-aea785ed506b/findTime">
              Book a Table
            </Link>
          </li>
          <li
            className="flex items-center justify-evenly w-full text-[#5A6B5B]"
            aria-label="Visit our FaceBook Page"
          >
            <Link href="https://www.facebook.com/p/Stone-Ducky-NL-61553172230504/">
              <FaFacebookF />
            </Link>
            <Link
              href="https://www.instagram.com/stoneduckynl/"
              aria-label="Visit our Instagram Page"
            >
              <GrInstagram />
            </Link>
            <Link
              href="https://www.tiktok.com/@stoneduckynl3"
              aria-label="Visit our TikTok Page"
            >
              <FaTiktok />
            </Link>
          </li>
        </ul>
        <Image
          src="/images/logo_stone_ducky.png"
          alt="Stone Ducky Logo"
          width={80}
          height={60}
          className="pt-4"
        />
      </div>
    </motion.nav>
  );
}
