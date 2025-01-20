"use client";
import { useRef, useState, useEffect } from "react";

import SupperMenu from "./supperMenu";
import LunchMenu from "./lunchMenu";
import PizzaMenu from "./pizzaMenu";
import DessertMenu from "./dessertMenu";
import DrinkMenu from "./drinkMenu";
import SaladsSidesMenu from "./saladsSides";

import { FaChevronUp } from "react-icons/fa";

const menus = [
  { title: "Supper", component: SupperMenu },
  { title: "Lunch", component: LunchMenu },
  { title: "Pizza", component: PizzaMenu },
  { title: "Dessert", component: DessertMenu },
  { title: "Drinks", component: DrinkMenu },
  { title: "Salads & Sides", component: SaladsSidesMenu },
];

export default function MenuNav() {
  const [selectedMenu, setSelectedMenu] = useState("Supper");
  const [showToTopButton, setShowToTopButton] = useState(false);

  const menuRef = useRef(null);
  const navRef = useRef(null);

  const SelectedMenuComponent = menus.find(
    (menu) => menu.title === selectedMenu
  )?.component;

  const handleButtonClick = (menuTitle) => {
    setSelectedMenu(menuTitle);

    const headerHeight = 150; // Fixed Navbar Height
    const scrollPosition = menuRef.current.offsetTop - headerHeight;

    window.scrollTo({
      top: scrollPosition,
      behavior: "smooth",
    });
  };

  const handleButtonToTopClick = () => {
    const navTop = navRef.current.offsetTop;
    const offset = 100;

    window.scrollTo({
      top: navTop - offset,
      behavior: "smooth",
    });
  };

  // Track scroll position to toggle button visibility
  useEffect(() => {
    const handleScroll = () => {
      const navBottom = navRef.current.offsetTop + navRef.current.offsetHeight;
      const scrollY = window.scrollY;

      if (scrollY > navBottom) {
        setShowToTopButton(true);
      } else {
        setShowToTopButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        ref={navRef}
        className="grid grid-cols-2 grid-rows-3 lg:flex lg:justify-center w-[95%] pb-4 m-auto lg:gap-8 pt-8 gap-2 z-50"
      >
        {menus.map((menu, index) => (
          <button
            key={index}
            onClick={() => handleButtonClick(menu.title)}
            className={`px-6 py-2 w-full m-auto text-center lg:min-h-[50px] lg:text-2xl font-semibold border transition-all rounded ease-in-out duration-300 cursor-pointer lg:last:text-xl  hover:text-whiteBG hover:bg-duckyBlue border-charcoal ${
              selectedMenu === menu.title
                ? "bg-richNavy text-whiteBG"
                : "bg-whiteBG"
            }`}
          >
            {menu.title}
          </button>
        ))}
      </nav>

      <div
        ref={menuRef}
        className="flex flex-col z-40 p-4 w-[95%] m-auto relative"
      >
        {SelectedMenuComponent && <SelectedMenuComponent />}
      </div>

      {showToTopButton && (
        <button
          onClick={handleButtonToTopClick}
          className="border fixed p-4 bg-richNavy text-warmBeige z-50 right-8 bottom-8 rounded shadow-lg hover:bg-richNavy hover:text-creamBG transition-all"
        >
          <FaChevronUp />
        </button>
      )}
    </>
  );
}
