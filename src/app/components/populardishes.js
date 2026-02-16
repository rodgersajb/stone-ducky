"use client";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useEffect, useState } from "react";

import Link from "next/link";

const images = [
  {
    src: "/images/ducky-chicken-ribs.webp",
    alt: "Chicken & Ribs",
    description:
      "Carol Ann’s fried chicken, bakeapple BBQ ribs, coleslaw, fries.",
  },
  {
    src: "/images/ducky-bianca-pizza.webp",
    alt: "The Bianca",
    description:
      "Bianca sauce, smoked mozzarella, Fior di Latte, apple, pancetta, sesame seed crust.",
  },
  {
    src: "/images/the_amore.webp",
    alt: "The Amore Cocktail",
    description: "Bourbon, cherry brandy, lemon, spiced cherry syrup, soda",
  },
  {
    src: "/images/ducky-beet-salad.webp",
    alt: "Roasted Beet Salad",
    description:
      "Roasted Beets, Whipped Goat Cheese, Arugula, Shallots, Candied Pecans, Maple Balsamic Dressing.",
  },
  {
    src: "/images/sausage-mushroom-capanelli.webp",
    alt: "Sausage & Mushroom Capanelli",
    description:
      "Campanelle pasta, Italian sausage, mushrooms, cream sauce, toasted bread crumbs.",
  },
  {
    src: "/images/campanelle-bolognese.webp",
    alt: "Campanelle Bolognese",
    description:
              "Campanelle pasta, beef and pork bolognese, Bella Lodi parmesan, toasted breadcrumbs.",

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
    <section className=" w-full flex flex-col items-center justify-center  ">
      <div className=" lg:flex  flex-col w-full relative items-center justify-center ">
        {/* Left Section */}

        <div className=" m-auto  flex flex-col items-center justify-center gap-10 z-10 pt-8 ">
          {/* <div className="w-full bg-flying-ducks bg-cover h-[125px]  "></div> */}
          <h2 className="lg:text-3xl text-xl font-semibold text-center text-[#5A6B5B]">
            Our Menu
          </h2>
          <h3 className=" px-2 lg:text-xl text-center lg:px-8 ">
            A Vibrant Dining Experience with Fantastic Cuisine and Exceptional
            Service.
          </h3>
        </div>

        {/* Right Section */}
        <div className="w-full  relative flex flex-col items-center justify-center">
          <div className="relative w-full">
            <div className="overflow-hidden w-full" ref={emblaRef}>
              <div className="flex">
                {images.map((image, index) => (
                  <div
                    className="flex-[0_0_100%] relative flex items-center justify-center lg:h-[500px] "
                    key={index}
                  >
                    {/* Image Container */}
                    <div className="relative w-[95%] my-4 lg:w-full aspect-square lg:aspect-video">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-cover shadow-lg"
                        lazy="true"
                      />
                      {/* Text Overlay */}
                      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white p-4">
                        <h2 className="text-lg lg:text-4xl font-semibold mb-2 text-center">
                          {image.alt}
                        </h2>

                        <p className="text-sm lg:text-xl font-semibold w-3/4 text-center">
                          {image.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex gap-2 pb-8 lg:pb-0">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => embla && embla.scrollTo(index)}
                  className={`w-3 h-3 rounded-full transition mb-4 ${
                    selectedIndex === index ? "bg-white" : "bg-gray-500"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                  aria-current={selectedIndex === index ? "true" : undefined}
                />
              ))}
            </div>
          </div>
          <button
            className="btn btn-tealGreen w-[95%] lg:w-1/3 mt-5 mb-10 "
            aria-label="View our menu"
          >
            <Link href="/menu">
              <span>View Menu</span>
            </Link>
          </button>
        </div>
      </div>
    </section>
  );
}
