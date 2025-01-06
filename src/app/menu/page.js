"use client";

import { useState, useEffect, useRef } from "react";

import Image from "next/image";
import SupperMenu from "./components/supperMenu";
import LunchMenu from "./components/lunchMenu";
import PizzaMenu from "./components/pizzaMenu";
import DessertMenu from "./components/dessertMenu";
import DrinkMenu from "./components/drinkMenu";

const menus = [
  { title: "Supper", component: SupperMenu },
  { title: "Lunch", component: LunchMenu },
  { title: "Pizza", component: PizzaMenu },
  { title: "Dessert", component: DessertMenu },
  { title: "Drinks", component: DrinkMenu },
];

export default function Menu() {
  
  const [selectedMenu, setSelectedMenu] = useState("Supper");

  

  const SelectedMenuComponent = menus.find(
    (menu) => menu.title === selectedMenu
  )?.component;

  return (
    <main>
      <header className="flex flex-col items-center justify-center h-dvh w-full relative">
        <Image
          src="/images/drinks_food_dessert.webp"
          alt="Steak Dinner"
          fill
          className="object-cover brightness-75"
        />
        <h1 className="z-10 font-semibold text-6xl text-white">Food & Drink</h1>
      </header>
      <section
        
        className="w-full pt-20 bg-stone-ducky-icons-background bg-contain"
      >
        <figure className="flex flex-col justify-center items-center">
          <Image
            src="/images/chef_ducky.png"
            alt="blue ducky icon"
            width={200}
            height={200}
          />
          <h2 className="text-center text-4xl text-duckyBlue font-semibold">
            Explore Our Menus
          </h2>
          <p className="text-center text-xl">
            Lunch is available from 11 am to 4 pm
          </p>
        </figure>
        <nav className="lg:flex lg:justify-center lg:w-[95%] pb-4 m-auto lg:gap-8 pt-8 grid grid-cols-1 gap-2">
          {menus.map((menu, index) => (
            <button
              key={index}
              onClick={() => setSelectedMenu(menu.title)}
              className={`px-6 py-2 w-3/5 m-auto text-2xl font-semibold border transition-all rounded ease-in-out duration-300 cursor-pointer hover:text-whiteBG hover:bg-duckyBlue border-charcoal  ${
                selectedMenu === menu.title
                  ? "bg-duckyBlue text-whiteBG"
                  : "bg-whiteBG"
              }`}
            >
              {menu.title}
            </button>
          ))}
        </nav>
        <div className="relative flex flex-col z-40">
          
            {SelectedMenuComponent && <SelectedMenuComponent />}
          
        </div>
      </section>
    </main>
  );
}
