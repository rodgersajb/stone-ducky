import CateringSeparator from "./cateringSeparator";
import Image from "next/image";
import Link from "next/link";

export default function Catering() {
    return (
      <section className="w-full flex flex-col items-center justify-center gap-8">
        <CateringSeparator />
        <Image src="/images/cater_duck.png" alt="Catering Duck" width={250} height={250} />
        <p className="lg:w-1/3 text-center">
          Make your event unforgettable with Stone Ducky’s catering! Our
          catering menu, crafted separately from our main menu, offers unique
          options tailored to your gathering.
        </p>
        <Link className="bg-duckyOrange text-whiteBG py-4 px-6 rounded font-bold" href="/contact">Catering Inquiry</Link>
      </section>
    );
}