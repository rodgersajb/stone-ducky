"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { FiMenu, FiX } from "react-icons/fi";

import { FaFacebookF } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { FaTiktok } from "react-icons/fa";

import OrangeWave from "./orangeWave";
import BlueWave from "./blueWave";

const navLinks = [
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
    <nav
      className={`fixed top-0 left-0 w-full px-4 py-4 z-50 flex items-center justify-between font-semibold gap-4 text-whiteBG transition-colors duration-300 ${
        isMenuOpen
          ? "bg-softBlue "
          : isScrolled
            ? "bg-creamBG bg-navbar-ducks bg-cover shadow-lg "
            : "bg-transparent text-whiteBG"
      }`}
    >
      <button
        className="text-3xl md:hidden flex z-50 text-duckyOrange"
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
          className={`transition-width duration-300 ease-in-out object-contain ${
            isScrolled ? "w-32" : ""
          }`}
        />
      </Link>

  

      {/* Desktop Navigation */}
      <ul
        className={`hidden md:flex items-center justify-center gap-10 text-xl z-50 ${
          isScrolled ? "text-coolGray" : "text-whiteBG"
        }`}
      >
        <li>
          <Link href="https://order.tbdine.com/pickup/50580/menu" className="">
            Order Online
          </Link>
        </li>
        {navLinks.map((link, index) => (
          <li
            key={index}
            className={`cursor-pointer ${
              pathname === link.href ? "text-duckyOrange font-bold" : ""
            }`}
          >
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}

        <li className="text-whiteBG bg-duckyOrange py-4 px-4 rounded ">
          <Link href="https://www.tbdine.com/book/restaurant/stone-ducky?idApp=71672&language=en-us">
            Book a Table
          </Link>
        </li>
      </ul>

      {/* Mobile Menu */}
      <div
        className={`absolute top-full left-0 w-full h-svh flex flex-col items-center justify-start bg-softBlue bg-contain bg-no-repeat border-t-2 z-49 border-t-duckyOrange text-duckyOrange bg-mobile-duck-bg shadow-lg transition-all duration-300 ease-in-out ${
          isMenuOpen
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0"
        }`}
      >
        <ul className="flex flex-col mt-8 items-start border-2 border-mutedOrange rounded justify-center z-50 gap-4 p-4  w-[80%]   bg-softBlue text-sm text-mutedOrange font-Libre_Baskerville">
          {navLinks.map((link, index) => (
            <li
              key={index}
              className={`cursor-pointer ${
                pathname === link.href ? "text-duckyBlue font-bold" : ""
              }`}
            >
              <Link href={link.href} onClick={() => setIsMenuOpen(false)}>
                {link.label}
              </Link>
            </li>
          ))}
          <li className="cursor-pointer text-center grid place-items-center w-full py-2 px-4 border-2 border-duckyBlue text-duckyBlue  rounded">
            <Link
              href="https://order.tbdine.com/pickup/50580/menu"
              className=""
            >
              Order Online
            </Link>
          </li>
          <li className=" cursor-pointer text-center grid place-items-center w-full py-2 px-4 bg-duckyBlue text-creamBG rounded">
            <Link href="https://www.tbdine.com/book/restaurant/stone-ducky?idApp=71672&language=en-us">
              Book a Table
            </Link>
          </li>
          <li className="flex items-center justify-evenly w-full text-mutedOrange">
            <Link href="https://www.facebook.com/p/Stone-Ducky-NL-61553172230504/">
              <FaFacebookF />
            </Link>
            <Link href="https://www.instagram.com/stoneduckynl/">
              <GrInstagram />
            </Link>
            <Link href="https://www.tiktok.com/@stoneduckynl3">
              <FaTiktok />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
