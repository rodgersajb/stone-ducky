"use client";
import Link from "next/link";
import Image from "next/image";
const menus = ["Supper", "Lunch", "Pizza", "Dessert", "Drinks"];
export default function MenuRouter() {
  return (
    <main className="h-auto flex flex-col items-center justify-between">
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-3xl text-center relative pb-3">
          Our Menus
          <span className="absolute bottom-0 left-0 z-10">
            <Image
              src="/images/orange-highlighter.png"
              alt="Squiggle"
              height={40}
              width={300}
            />
          </span>
        </h2>
      </div>
      <section className="flex lg:flex-row flex-col justify-center gap-8 mt-4">
        {menus.map((menu, index) => (
          <Link
            key={index}
            href={`/menu?selected=${menu}`}
            className="px-6 rounded py-2 text-2xl font-semibold border transition-all ease-in-out duration-300 cursor-pointer hover:text-whiteBG hover:bg-duckyBlue border-charcoal "
          >
            {menu}
          </Link>
        ))}
      </section>
    </main>
  );
}
