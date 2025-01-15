"use client";
import { useRef, useState } from "react";

import SupperMenu from "./supperMenu";
import LunchMenu from "./lunchMenu";
import PizzaMenu from "./pizzaMenu";
import DessertMenu from "./dessertMenu";
import DrinkMenu from "./drinkMenu";

import Image from "next/image";


const menus = [
  { title: "Supper", component: SupperMenu },
  { title: "Lunch", component: LunchMenu },
  { title: "Pizza", component: PizzaMenu },
  { title: "Dessert", component: DessertMenu },
  { title: "Drinks", component: DrinkMenu },
];


export default function MenuNav() {
  const [selectedMenu, setSelectedMenu] = useState("Supper");


  const SelectedMenuComponent = menus.find(
    (menu) => menu.title === selectedMenu
  )?.component;

  const menuRef = useRef(null);

  const handleButtonClick = (menuTitle) => {
    setSelectedMenu(menuTitle);

      const headerHeight = 150; // Fixed Navbar Height
      const scrollPosition = menuRef.current.offsetTop - headerHeight;

      window.scrollTo({
        top: scrollPosition,
        behavior: "smooth",
      });
  };
  return (
    <>
      
      <nav className="grid grid-cols-2 grid-rows-3 lg:flex lg:justify-center w-[95%] pb-4 m-auto lg:gap-8 pt-8 gap-2  z-50">
        {menus.map((menu, index) => (
          <button
            key={index}
            onClick={() => handleButtonClick(menu.title)}
            className={`px-6 py-2 w-full m-auto text-2xl font-semibold border transition-all rounded ease-in-out duration-300 cursor-pointer hover:text-whiteBG hover:bg-duckyBlue border-charcoal ${
              selectedMenu === menu.title
                ? "bg-duckyBlue text-whiteBG"
                : "bg-whiteBG"
            }`}
          >
            {menu.title}
          </button>
        ))}
      </nav>

      <div ref={menuRef}  className=" flex flex-col z-40  p-4 w-[95%] m-auto ">

        
        {SelectedMenuComponent && <SelectedMenuComponent /> }
      </div>
    </>
  );
}
