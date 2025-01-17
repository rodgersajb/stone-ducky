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
      <header className="relative h-svh lg:h-dvh w-full flex flex-col text-white z-1">
        <Image
          className="object-cover  -z-1 "
          src="/images/homepage_header_4.webp"
          alt="Summer View of the Stone Ducky Patio"
          fill
        />

        <div className="min-h-dvh flex flex-col gap-8 items-center justify-center z-40">
          <h2 className="text-6xl lg:w-1/3 text-center px-4 py-2 text-white  font-[var(--font-cormorant)] italic">
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

      {/* <About />
      
      <VisitUsSeparator />
      <VisitUs />
      <PopularDishesDivider />
      <PopularDishes /> */}
      <section className="w-full py-12 flex flex-col items-center justify-center bg-warmBeige">
        <div className="flex flex-col lg:grid lg:grid-cols-2 w-[90%] m-auto gap-4 ">
          <Image
            src="/images/mushroom_fritter_soup.webp"
            alt="Mushroom Fritter Soup"
            height={400}
            width={600}
            className="object-cover "
          />
          <div className=" flex flex-col items-start justify-center gap-4">
            <div className="flex justify-between items-center">
              <h3 className="text-3xl lg:text-4xl w-2/3 lg:w-1/2 font-semibold text-mutedOrange">
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
      {/* <section className="w-full bg-darkBlueBG text-whiteBG py-8">
        <div className="w-[90%] m-auto grid grid-cols-4 gap-4 min-h-[500px] py-8">
          <div className="col-span-1 flex flex-col items-center justify-center h-[400px] ">
            <figure className="relative w-[90%] aspect-square ">
              <Image
                src="/images/mushroom_fritter_soup.webp"
                alt="Mushroom Fritter Soup"
                fill
                className="object-cover rounded-full"
              />
            </figure>
          </div>
          <div className="col-span-1 flex flex-col items-end justify-end">
            <figure className="relative w-[70%] aspect-square rounded-full ">
              <Image
                src="/images/stone_ducky_patio_view.webp"
                alt="Stone Ducky Patio View"
                fill
                className="object-cover rounded-full"
              />
            </figure>
          </div>
          <div className="col-span-2 flex flex-col items-start justify-center gap-4">
            <h2 className="text-2xl">Stone Ducky</h2>
            <h3 className="text-4xl">About</h3>
            <p>
              Stone Ducky is a casual and intimate restaurant offering fresh,
              homemade pizza and creatively inspired dishes. Close proximity to
              the ocean provides scenic view to enhance your dining experience.
            </p>
          </div>
        </div>
      </section>
      <figure className="relative h-[150px] w-full">
        <Image src="/images/wavesOpacity.svg" alt="Waves" fill />
      </figure>
      <section className="">
        <PopularDishes />
      </section> */}
      <section className="w-full">
        <div className=" m-auto">
          <PopularDishes />
        </div>
      </section>
      <section className="lg:grid lg:grid-cols-2 flex flex-col-reverse w-full  bg-warmBeige ">
        <div className="h-[400px]  lg:min-h-[500px] w-[90%] m-auto lg:w-full relative">
          <Image
            src="/images/ducky_restaurant_inside.webp"
            alt="Inside of Stone Ducky"
            fill
            className="object-contain lg:object-cover"
          />
        </div>
        <div className="min-h-[625px] lg:min-h-[500px] w-full text-coolGray flex flex-col items-center justify-evenly lg:justify-center gap-4">
          <div className=" z-10 relative ">
            <h2 className="text-4xl lg:text-6xl relative pb-2 ">Visit Us</h2>
          </div>

          <div className="lg:text-xl text-center">
            <p>56 St Johns Rd</p>
            <p>Bay Bulls, NL A0A 1C0</p>
            <p>(709) 334-3825</p>
          </div>

          <div className="flex gap-2  lg:text-xl">
            <p>Tuesday/Thursday</p>
            <p>11:00 am - 8:00 pm</p>
          </div>
          <div className="z-10 flex gap-2 lg:text-xl">
            <p>Friday/Sunday</p>
            <p>11:00 am - 10:00 pm</p>
          </div>
          <div className=" flex flex-row-reverse items-center gap-4 lg:text-xl">
            <Image
              src="/images/duck_sleepy.png"
              alt="Sleepy Duck"
              height={100}
              width={100}
            />
            <p>Closed Mondays</p>
          </div>
          <div className="flex lg:flex-row flex-col gap-8 z-10">
            <button className="border-2 rounded py-4 px-8 border-richNavy bg-richNavy text-creamBG font-semibold uppercase transition hover:bg-tealGreen hover:text-creamBG hover:scale-105">
              Reserve a Table
            </button>
            <button className="border-2 rounded py-4 px-8 border-mutedOrange bg-mutedOrange text-creamBG font-semibold uppercase transition hover:bg-goldenYellow hover:text-coolGray hover:scale-105">
              Order Online
            </button>
          </div>
        </div>
      </section>
      <section className=" flex flex-col  lg:grid  lg:grid-cols-2 bg-richNavy">
        <div className="min-h-[500px] w-full  text-whiteBG flex flex-col items-center justify-around lg:gap-4">
          <h2 className="text-5xl text-center">Large Groups & Catering</h2>
          <p className="text-xl text-center lg:w-[75%] ">
            Host your next event with Stone Ducky. Whether it is here or there
            we'll make sure to make your next event a memorable one.
          </p>
          <div className="grid grid-rows-2 lg:grid-cols-2 gap-4">
            <button className="border-2 rounded py-4 px-8 border-whiteBG bg-whiteBG text-darkBlueBG">
              <Link href="/groups">Book a Party</Link>
            </button>
            <button className="border-2 rounded py-4 px-8 border-whiteBG bg-whiteBG text-darkBlueBG">
              <Link href="/groups">Book Catering</Link>
            </button>
          </div>
        </div>
        <figure className="h-[400px]  lg:min-h-[500px] w-[90%] m-auto lg:w-full relative">
          <Image
            src="/images/ducky_whales-min.webp"
            alt="Whales"
            fill
            className="object-contain lg:object-cover"
          />
        </figure>
      </section>
      <section className="grid grid-cols-2">
        <figure className="min-[500px] w-full relative"></figure>
        <div className="min-[500px] w-full bg-duckyBlue text-whiteBG flex flex-col items-center justify-center gap-4"></div>
      </section>
      <section className="flex flex-col-reverse lg:grid lg:grid-cols-2 bg-tealGreen">
        <figure className="h-[400px]  lg:min-h-[500px] w-[90%] m-auto lg:w-full relative">
          <Image
            src="/images/shareables_birds_eye.webp"
            alt="Birds eye view of entrees, appetizers, soups and cocktails"
            fill
            className="object-contain lg:object-cover"
          />
        </figure>
        <div className="min-h-[400px] lg:min-h-[500px] w-full  text-whiteBG flex flex-col items-center justify-around lg:justify-center lg:gap-12 text-center gap-4">
          <h2 className="text-5xl">Updates & Happenings</h2>
          <p className="lg:w-2/3 text-center">
            Explore Bay Bulls and Savor the Stone Ducky Experience – Check Out
            Our Blog for the Latest!
          </p>
          <div>
            <button className="border-2 rounded py-4 px-8 border-richNavy bg-creamBG text-richNavy font-semibold uppercase transition hover:bg-mutedOrange hover:text-creamBG hover:scale-105">
              <Link href="/blog">Read More</Link>
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
