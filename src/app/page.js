import Image from "next/image";
import Link from "next/link";

import { FaChevronCircleRight } from "react-icons/fa";
import About from "./components/about";
import PopularDishes from "./components/populardishes";
import VisitUs from "./components/visitUs";
import Menu from "./components/menu";
import VisitUsSeparator from "./components/visitUsSeperator";

import LargeEvents from "./components/largeEvents";

import Catering from "./components/catering";

import Blogs from "./components/blog";
import MenuDivider from "./components/menuDivider";
import PopularDishesDivider from "./components/popularDishesDivider";



export default function Home() {
  return (
    <main className="bg-whiteBG w-full overflow-x-hidden flex flex-col ">
      <header className="relative h-svh lg:dvh w-full flex flex-col text-white z-1">
        <Image
          className="object-cover brightness-50 -z-1"
          src="/images/stone_ducky_patio_view.webp"
          alt="Summer View of the Stone Ducky Patio"
          fill
        />

        <div className="min-h-dvh flex flex-col gap-8 items-center justify-center z-40">
          <h2 className="text-5xl lg:w-1/3 text-center uppercase px-4 py-2 text-white  font-[var(--font-cormorant)] italic">
            Inspired Dining with an Ocean Side View
          </h2>
          <div className="flex gap-4 lg:flex-row flex-col">
            <button className="bg-duckyOrange py-2 px-6 border border-duckyOrange rounded uppercase font-semibold  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-whiteBG hover:text-duckyOrange duration-300">
              Reserve a Table
            </button>
            <button className="uppercase border-2 bg-duckyBlue border-duckyBlue text-whiteBG py-2 px-6 rounded font-semibold transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-whiteBG hover:text-duckyBlue duration-300">
              Order Online
            </button>
          </div>
          <button className="flex gap-2 items-center uppercase font-semibold transition">
            <Link href="/menu">View Menu</Link>
            <FaChevronCircleRight />
          </button>
        </div>
      </header>

      <About />
      <MenuDivider />
      <Menu />
      <VisitUsSeparator />
      <VisitUs />
      <PopularDishesDivider />
      <PopularDishes />

      <LargeEvents />
      <Catering />
      <Blogs />
    </main>
  );
}
