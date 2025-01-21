import Image from "next/image";
import Link from "next/link";

import { FaChevronCircleRight } from "react-icons/fa";

import PopularDishes from "./components/populardishes";
import FadeInImageContainer from "./components/fadeInImageContainer";

import Visit from "./components/visit";


export default function Home() {
  return (
    <main className="bg-whiteBG w-full overflow-x-hidden flex flex-col ">
      <header className="relative h-svh lg:h-dvh w-full flex flex-col text-white z-1">
        <Image
          className="object-cover brightness-75  -z-1 "
          src="/images/homepage_header_4.webp"
          alt="Summer View of the Stone Ducky Patio"
          fill
          priority
        />

        <div className="min-h-dvh flex flex-col gap-8 items-center justify-center z-40">
          <h2 className="text-4xl lg:text-6xl lg:w-1/3 text-center px-4 py-2 text-white   ">
            Inspired Dining with an Ocean View
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

      <section className="w-full py-12 flex flex-col items-center justify-center bg-whiteBG">
        <div className="flex flex-col lg:min-h-[500px] lg:grid lg:grid-cols-2 w-[90%] m-auto lg:gap-8 items-center justify-center ">
          <FadeInImageContainer
            className="min-h-[275px]  w-[90%] m-auto lg:w-full"
            delay={0.5}
          >
            <Image
              src="/images/mushroom_fritter_soup.webp"
              alt="Mushroom Fritter Soup"
              height={400}
              width={600}
              className="object-cover "
              lazy
            />
          </FadeInImageContainer>
          <div className=" flex flex-col items-start justify-center gap-4">
            <div className="flex justify-between items-center">
              <h3 className="text-3xl lg:text-4xl w-2/3 lg:w-1/2  font-semibold text-mutedOrange ">
                Unique Dining Experience With Stunning Oceanfront Views
              </h3>
            </div>

            <p className="text-coolGray font-semibold ">
              Stone Ducky is a casual and intimate restaurant offering fresh,
              homemade pizza and creatively inspired dishes. Close proximity to
              the ocean provides scenic view to enhance your dining experience.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full">
        <div className=" m-auto">
          <PopularDishes />
        </div>
      </section>
      <Visit />
      <section className=" flex flex-col  lg:grid  lg:grid-cols-2 bg-richNavy">
        <div className="min-h-[500px] w-full  text-whiteBG flex flex-col items-center justify-around lg:gap-4">
          <h2 className="text-2xl lg:text-4xl text-center">
            Large Groups & Catering
          </h2>
          <p className="lg:text-xl text-center lg:w-[75%] font-semibold w-[95%]">
            Host your next event with Stone Ducky. Whether it is here or there
            we'll make sure to make your next event a memorable one.
          </p>
          <div className="grid grid-rows-2 lg:grid-cols-2 gap-4">
            <button className="btn btn-mutedOrange btn-mutedOrange:hover">
              <Link href="/groups">Book a Party</Link>
            </button>
            <button className="btn btn-tealGreen btn-tealGreen:hover">
              <Link href="/groups">Book Catering</Link>
            </button>
          </div>
        </div>
        <FadeInImageContainer
          className="h-[400px] lg:min-h-[500px] w-[90%] m-auto lg:w-full"
          delay={0.5}
        >
          <Image
            src="/images/ducky_whales-min.webp"
            alt="Whales"
            fill
            className="object-contain lg:object-cover"
            lazy
          />
        </FadeInImageContainer>
      </section>
      <section className="grid grid-cols-2">
        <figure className="min-[500px] w-full relative"></figure>
        <div className="min-[500px] w-full bg-duckyBlue text-whiteBG flex flex-col items-center justify-center gap-4"></div>
      </section>
      <section className="flex flex-col-reverse lg:grid lg:grid-cols-2 bg-tealGreen">
        <FadeInImageContainer
          className="h-[400px] lg:min-h-[500px] w-[90%] m-auto lg:w-full"
          delay={0.5}
        >
          <Image
            src="/images/shareables_birds_eye.webp"
            alt="Birds eye view of entrees, appetizers, soups and cocktails"
            fill
            className="object-contain lg:object-cover"
            lazy
          />
        </FadeInImageContainer>

        <div className="min-h-[400px] lg:min-h-[500px] w-full  text-whiteBG flex flex-col items-center justify-around lg:justify-center lg:gap-12 text-center gap-4">
          <h2 className="text-2xl lg:text-4xl">Updates & Happenings</h2>
          <p className="lg:w-2/3 text-center font-semibold">
            Explore Bay Bulls and Savor the Stone Ducky Experience – Check Out
            Our Blog for the Latest!
          </p>
          <div>
            <button className="btn btn-richNavy btn-richNavy:hover">
              <Link href="/blog">Read More</Link>
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
