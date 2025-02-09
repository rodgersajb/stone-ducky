import Image from "next/image";

import MenuNav from "./components/menuNav";
import HeaderFadeContainer from "../components/headerFadeContainer";

export const metadata = {
  title: "Stone Ducky Menus ",
  description:
    "Discover Stone Ducky’s irresistible menu, featuring gourmet dishes crafted with premium ingredients and paired perfectly with our signature cocktails.",
};

export default function Menu() {
  return (
    <main>
      <HeaderFadeContainer>
        <Image
          src="/images/chicken_salmon.webp"
          alt="Steak Dinner"
          fill
          className="object-cover "
          priority={true}
        />
        <h1 className="z-10 font-semibold text-center  text-4xl lg:text-6xl text-white">
          Food & Drink
        </h1>
      </HeaderFadeContainer>
      <section className="w-full pt-20 bg-stone-ducky-icons-background bg-contain">
        <figure className="flex flex-col justify-center items-center">
          <Image
            src="/images/chef_ducky.png"
            alt="blue ducky icon"
            width={200}
            height={200}
            lazy="true"
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
