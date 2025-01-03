"use client";

import { useState, useEffect, useRef } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";

const menus = [
  {
    title: "Supper",
    description: "Supper Menu",
    image: "/images/stone_ducky_supper_menu.webp",
    background: "/images/salmon_chicken.webp",
  },
  {
    title: "Lunch",
    description: "Lunch Menu",
    image: "/images/stone_ducky_lunch_menu.webp",
    background: "/images/noodle_dish.webp",
  },
  {
    title: "Pizza",
    description: "Pizza Menu",
    image: "/images/stone_ducky_pizza_menu.webp",
    background: "/images/Duck_Diablo_Cutting.webp",
  },
  {
    title: "Dessert",
    description: "Dessert Menu",
    image: "/images/stone_ducky_dessert_menu.webp",
    background: "/images/ducky_chocolate_cake.webp",
  },
  {
    title: "Drinks",
    description: "Drinks Menu",
    image: "/images/stone_ducky_drink_menu.webp",
    background: "/images/stone_ducky_purple_cocktail.webp",
  },
];

export default function Menu() {
  const searchParams = useSearchParams();
  const [selectedMenu, setSelectedMenu] = useState("Supper");

  // Reference for the "Explore Our Menus" section
  const exploreSectionRef = useRef(null);

  useEffect(() => {
    const menuFromQuery = searchParams.get("selected");
    if (menuFromQuery && menus.some((menu) => menu.title === menuFromQuery)) {
      setSelectedMenu(menuFromQuery);
    }
  }, [searchParams]);

  // Scroll to the "Explore Our Menus" section when the page loads or when the selected menu changes
  useEffect(() => {
    if (exploreSectionRef.current) {
      exploreSectionRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [selectedMenu]);

  const selectedBackground = menus.find((menu) => menu.title === selectedMenu)?.background;
  return (
    <main>
      <header className="flex flex-col items-center justify-center h-dvh w-full relative">
        <Image src="/images/catering_steaks.webp" alt="Steak Dinner" fill className="object-cover brightness-50" />
        <h1 className="z-10 font-semibold text-6xl text-white">Food & Drink</h1>
      </header>
      <section
        ref={exploreSectionRef}
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
        <nav className="lg:flex lg:justify-center lg:w-[95%] pb-4 m-auto lg:gap-8 pt-8 grid grid-cols-1 gap-2 ">
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

        <div
          className="relative flex flex-col z-40  "
          style={{
            backgroundImage: `url(${selectedBackground})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          {menus.map((menu) => (
            <div key={menu.title} id={menu.title} className="rounded">
              {selectedMenu === menu.title && (
                
                  <div className="relative w-3/4 m-auto lg:w-full h-[60svh] lg:h-[70dvh] opacity-90 rounded lg:my-8 ">
                    <Image
                      src={menu.image}
                      alt={menu.title}
                      fill
                      loading="lazy"
                      className="rounded object-contain "
                    />
                  </div>
                
              )}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
