import Link from "next/link";
import Image from "next/image";
import FadeInImageContainer from "./fadeInImageContainer";

export default function GroupsAndCatering() {
    return (
      <section className=" flex flex-col w-full lg:w-[95%] lg:m-auto lg:grid  lg:grid-cols-2  text-[#5A6B5B]">
        <div className="min-h-[500px] w-[95%] lg:w-full  flex flex-col items-center justify-center m-auto lg:gap-4">
          <h2 className="text-xl lg:text-2xl text-center">
            Large Groups & Catering
          </h2>
          <figure className="relative h-[200px] w-full">
            <Image
              src="/images/large-groups.webp"
              alt="Large Groups & Catering"
              fill
              className="object-contain "
              lazy="true"
            />
          </figure>
          <p className="lg:text-base text-sm text-center lg:w-[75%] font-semibold w-[95%]">
            Host your next event with Stone Ducky. Whether it is here or there
            we'll make sure to make your next event a memorable one.
          </p>
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-4 w-[95%] lg:w-[100%] mt-4 mr-4 ">
            <button
              className="btn btn-tealGreen w-full  "
              aria-label="Book a party"
            >
              <Link href="/groups">
                <span>Book a Party</span>
              </Link>
            </button>
            <button
              className="btn btn-outlineTealGreen w-full  "
              aria-label="Book catering"
            >
              <Link href="/catering">
                <span>Book Catering</span>
              </Link>
            </button>
          </div>
        </div>
        <FadeInImageContainer
          className="h-[400px] lg:min-h-[500px] w-[95%] m-auto lg:w-full"
          delay={0.5}
        >
          <Image
            src="/images/ducky_whales.webp"
            alt="Whales"
            fill
            className="object-contain lg:object-cover"
            lazy="true"
          />
        </FadeInImageContainer>
      </section>
    );
}