import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <section className="h-[600px] w-full flex flex-col items-center justify-center bg-whiteBG gap-8 relative ">
      <Image
        className="absolute bottom-0 left-0 w-1/5 "
        src="/images/the_duck.webp"
        alt="The Duck"
        height={250}
        width={250}
      />
      <h1 className="text-4xl lg:text-6xl text-center text-duckyBlue">
        Welcome to Stone Ducky
      </h1>
      <p className="lg:w-1/3 w-full px-4 text-center text-duckyBlue">
        Stone Ducky, just a short and scenic drive from St. John's, offers a
        unique dining experience with stunning oceanfront views and a menu
        featuring exquisite Italian and seafood dishes, all in an unforgettable
        setting.
      </p>
      <div className="grid grid-row-2 lg:grid lg:grid-cols-2  gap-4 ">
        <Link
          className="border-2 border-duckyBlue rounded py-4 px-6 text-whiteBG font-semibold bg-duckyBlue text-center transition ease-in-out  hover:-translate-y-1 hover:scale-110 hover:bg-whiteBG hover:text-duckyBlue duration-300"
          href="/about"
        >
          About Stone Ducky
        </Link>
        <Link
          className="border-2 border-duckyOrange text-whiteBG font-semibold bg-duckyOrange rounded py-4 px-6  text-center transition ease-in-out  hover:-translate-y-1 hover:scale-110 hover:bg-whiteBG hover:text-duckyOrange duration-300"
          href="/contact"
        >
          Contact Us
        </Link>
      </div>
    </section>
  );
}
