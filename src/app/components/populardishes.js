"use client";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useEffect, useState } from "react";
import { GrLinkNext } from "react-icons/gr";
import { GrLinkPrevious } from "react-icons/gr";

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
    <section className="relative w-full flex flex-col items-center justify-center ">
      <div className="flex w-full flex-wrap">
        {/* Left Section */}
        <div className="w-full lg:w-1/2  h-[550px] lg:h-[400px] flex flex-col items-center justify-center gap-8 lg:justify-center  lg:min-h-[600px] bg-softBlue  ">
          <h2 className="text-center text-xl lg:text-4xl px-4">
            Fan Favorites That <span className="text-duckyBlue"> Steal the Show</span>
          </h2>
          <Image
            className="w-1/2 lg:w-1/5"
            src="/images/chef_ducky.png"
            alt="Ducky Chef"
            height={150}
            width={150}
          />
          <p className="text-center">
            Discover the dishes and drinks that have won over taste buds—crafted
            to impress, enjoyed to the last bite.
          </p>
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-1/2 relative flex flex-col items-center justify-center bg-darkBlueBG text-whiteBG lg:min-h-[600px]">
          <div className="relative w-full">
            <div className="overflow-hidden w-full" ref={emblaRef}>
              <div className="flex">
                {images.map((image, index) => (
                  <div
                    className="flex-[0_0_100%] relative flex flex-col items-center justify-start h-[450px] p-4"
                    key={index}
                  >
                    {/* Smaller Image */}
                    <div className="relative w-3/5 h-[450px]">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-cover rounded-lg shadow-lg"
                      />
                    </div>
                    {/* Heading and Paragraph Outside Image */}
                    <div className="mt-4 grid place-items-center text-center">
                      <h2 className="text-xl lg:text-4xl font-semibold ">
                        {image.alt}
                      </h2>
                      <figure className="relative ">
                        <Image
                          src="/images/squiggle.png"
                          alt="Squiggly underline"
                          width={200}
                          height={20}
                        />
                      </figure>
                      <p className="text-sm lg:text-base mt-2 w-3/4 ">
                        {image.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Navigation Buttons */}
            <button
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
            </button>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex space-x-2">
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
