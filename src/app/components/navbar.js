"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";

const navLinks = [
  { label: "Menu", href: "/menu" },
  { label: "Large Parties", href: "/groups" },
  { label: "Catering", href: "/catering" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav
      className={`fixed top-0 left-0 w-full px-4 py-4 z-50 flex items-center justify-between  font-semibold gap-4 text-whiteBG  transition-colors duration-300 ${
        isMenuOpen ? "bg-gray-800" : "bg-transparent"
      }`}
    >
      <button
        className="text-3xl md:hidden flex z-50 text-duckyOrange"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
      >
        {isMenuOpen ? <FiX /> : <FiMenu />}
      </button>
      <figure className="relative h-16 w-20 cursor-pointer z-50">
        <Link className="" href="/">
          <Image
            src="/images/logo_stone_ducky.png"
            alt="Stone Ducky Logo"
            fill
          />
        </Link>
      </figure>
      {/* Desktop Navigation */}
      <ul className="hidden md:flex items-center justify-center gap-10  text-xl z-50">
        <li className="">Order Online</li>
        {navLinks.map((link, index) => (
          <li key={index} className="cursor-pointer ">
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
        <li className="text-whiteBG  bg-duckyOrange py-4 px-4 rounded ">
          Reservations
        </li>
      </ul>

      {/* Mobile Menu */}
      <div
        className={`absolute top-full left-0 w-full h-svh flex fle-col items-start justify-center bg-warmBeige bg-contain bg-no-repeat border-t-2 z-49 border-t-duckyOrange text-duckyOrange bg-mobile-duck-bg shadow-lg transition-all duration-300 ease-in-out ${
          isMenuOpen
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0"
        }`}
      >
        <ul className="flex flex-col z-50 gap-4 p-4 text-lg mt-20 bg-warmBeige border-2 border-duckyOrange rounded">
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
