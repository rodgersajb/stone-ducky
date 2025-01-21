import Image from "next/image";

import MenuNav from "./components/menuNav";

export const metadata = {
  title: "Stone Ducky Menus ",
  description:
    "Discover Stone Ducky’s irresistible menu, featuring gourmet dishes crafted with premium ingredients and paired perfectly with our signature cocktails.",
};

export default function Menu() {
  return (
    <main>
      <header className="flex flex-col items-center justify-center h-svh lg:h-dvh w-full relative">
        <Image
          src="/images/chicken_salmon.webp"
          alt="Steak Dinner"
          fill
          className="object-cover "
        />
        <h1 className="z-10 font-semibold text-center  text-4xl lg:text-6xl text-white">
          Food & Drink
        </h1>
      </header>
      <section className="w-full pt-20 bg-stone-ducky-icons-background bg-contain">
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
        <MenuNav />
      </section>
    </main>
  );
}
