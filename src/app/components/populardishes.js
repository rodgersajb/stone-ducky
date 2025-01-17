"use client";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useEffect, useState } from "react";

import Link from "next/link";

const images = [
  {
    src: "/images/mushroom-cavatappi.webp",
    alt: "Mushroom Cavatappi",
    description:
      "Cream sauce, windy heights oyster mushrooms, Newlander meat Italian sausage , parmesan, toasted garlic crumble.",
  },
  {
    src: "/images/catering_biscuits.webp",
    alt: "Dauphinoise Potatoes",
    description:
      "Thinly sliced and stacked potatoes, garlic infused cream sauce.",
  },
  {
    src: "/images/the_amore.webp",
    alt: "The Amore Cocktail",
    description: "Bourbon, cherry brandy, lemon, spiced cherry syrup, soda",
  },
  {
    src: "/images/catering_mushroom_fritter_soup.webp",
    alt: "Mushroom Soup with Country Fried Oyster Mushroom",
    description: "Mushroom Soup with Country Fried Oyster Mushroom",
  },
];

export default function Test() {
  const [emblaRef, embla] = useEmblaCarousel({ loop: true, speed: 6 }, [
    Autoplay({ delay: 5000, stopOnInteraction: true }),
  ]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (!embla) return;
    embla.on("select", () => setSelectedIndex(embla.selectedScrollSnap()));
  }, [embla]);

  return (
    <section className=" w-full flex flex-col items-center justify-center bg-duckyOrange ">
      <div className=" lg:flex flex-col w-full flex-wrap">
        {/* Left Section */}
        <div className=" relative w-full min-h-[500px] lg:w-1/2 m-auto  flex flex-col items-center justify-center gap-10 z-10 text-whiteBG">
          
          {/* <Image
            className="lg:w-1/3 w-1/4"
            src="/images/the_duck_chef.webp"
            alt="Duck Chef Icon"
            height={250}
            width={250}
          /> */}
          <h2 className="lg:text-5xl text-4xl text-center">Our Menu</h2>
          <h3 className=" text-2xl px-2 lg:text-2xl text-center lg:px-8 ">
            A Vibrant Dining Experience with Fantastic Cuisine, Clear Vision,
            and Exceptional Service.
          </h3>
          <button className="flex gap-2 items-center uppercase font-semibold transition bg-warmBeige border-warmBeige text-duckyOrange border-2 rounded px-4 py-2">
            <Link href="/menu">View Menu</Link>
          </button>
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-1/2 relative flex flex-col items-center justify-center  lg:min-h-[500px]">
          <div className="relative w-full">
            <div className="overflow-hidden w-full" ref={emblaRef}>
              <div className="flex">
                {images.map((image, index) => (
                  <div
                    className="flex-[0_0_100%] relative flex items-center justify-center lg:h-[500px] "
                    key={index}
                  >
                    {/* Image Container */}
                    <div className="relative w-[95%] my-4 lg:w-full aspect-square">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-cover shadow-lg"
                      />
                      {/* Text Overlay */}
                      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white p-4">
                        <h2 className="text-xl lg:text-4xl font-semibold mb-2">
                          {image.alt}
                        </h2>
                        <figure className="relative mb-2">
                          <Image
                            src="/images/squiggle.png"
                            alt="Squiggly underline"
                            width={150}
                            height={15}
                          />
                        </figure>
                        <p className="text-sm lg:text-base w-3/4 text-center">
                          {image.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            {/* <button
              onClick={() => embla && embla.scrollPrev()}
              className="absolute left-8 top-1/3 transform -translate-y-1/2  text-duckyOrange rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-700"
            >
              <GrLinkPrevious className="text-2xl" />
            </button>
            <button
              onClick={() => embla && embla.scrollNext()}
              className="absolute right-10 top-1/3 transform -translate-y-1/2  text-duckyOrange rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-700"
            >
              <GrLinkNext className="text-2xl" />
            </button> */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex gap-2 pb-8 lg:pb-0">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => embla && embla.scrollTo(index)}
                  className={`w-3 h-3 rounded-full transition ${
                    selectedIndex === index ? "bg-white" : "bg-gray-500"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
