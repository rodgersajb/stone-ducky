"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";

const navLinks = [
  { label: "Menu", href: "/menu" },
  { label: "Large Groups", href: "/groups" },
  { label: "Catering", href: "/catering" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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
      className={`fixed top-0 left-0 w-full px-4 py-4 z-50 flex items-center justify-between  font-semibold gap-4 text-whiteBG  transition-colors duration-300 ${
        isMenuOpen
          ? "bg-warmBeige"
          : isScrolled
            ? "bg-warmBeige shadow-lg"
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
      
        <Link className="z-50 cursor-pointer" href="/">
          <Image
            src="/images/logo_stone_ducky.png"
            alt="Stone Ducky Logo"
            width={200}
            height={160}
          />
        </Link>
      
      {/* Desktop Navigation */}
      <ul
        className={`hidden md:flex items-center justify-center gap-10  text-xl z-50 ${isScrolled ? "text-charcoal" : "text-whiteBG"}`}
      >
        <li className="">Order Online</li>
        {navLinks.map((link, index) => (
          <li key={index} className={`cursor-pointer `}>
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
        <li className="text-whiteBG  bg-duckyOrange py-4 px-4 rounded ">
            Book a Table
        </li>
      </ul>

      {/* Mobile Menu */}
      <div
        className={`absolute top-full left-0 w-full h-svh flex flex-col items-center justify-center bg-warmBeige bg-contain bg-no-repeat border-t-2 z-49 border-t-duckyOrange text-duckyOrange bg-mobile-duck-bg shadow-lg transition-all duration-300 ease-in-out ${
          isMenuOpen
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0"
        }`}
      >
        <ul className="flex flex-col items-start z-50 gap-4 p-4 text-lg  bg-warmBeige border-2 border-duckyOrange rounded">
          {navLinks.map((link, index) => (
            <li key={index} className="cursor-pointer hover:underline">
              <Link href={link.href} onClick={() => setIsMenuOpen(false)}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
