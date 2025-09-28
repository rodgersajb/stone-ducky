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
    <main className="flex flex-col">
      <HeaderFadeContainer>
        <Image
          src="/images/chicken_salmon.webp"
          alt="Steak Dinner"
          fill
          className="lg-object-cover object-contain "
          priority={true}
        />
        <h1 className="z-10 font-semibold text-center  text-xl lg:text-6xl text-white">
          Food & Drink
        </h1>
      </HeaderFadeContainer>
      <section className="w-full pt-20 bg-stone-ducky-icons-background bg-contain">
        <figure className="flex flex-col justify-center items-center w-2/3 m-auto">
          <Image
            src="/images/chef_ducky.png"
            alt="blue ducky icon"
            className="object-contain"
            width={100}
            height={100}
            lazy="true"
          />
          <h2 className="text-center lg-text-4xl text-duckyBlue font-semibold">
            Explore Our Menus
          </h2>
          <p className="text-center lg-text-xl">
            Lunch is available from 11 am to 4 pm
          </p>
        </figure>
        <MenuNav />
      </section>
    </main>
  );
}
