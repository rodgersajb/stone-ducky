import Image from "next/image";
import Link from "next/link";



import PopularDishes from "./components/populardishes";
import FadeInImageContainer from "./components/fadeInImageContainer";

import Visit from "./components/visit";
import ScrollButton from "./components/scrollButton";

export default function Home() {
  return (
    <main className="bg-whiteBG w-full overflow-x-hidden flex flex-col ">
      <header className="relative h-svh lg:h-dvh w-full flex flex-col justify-end text-white z-1">
        <Image
          className="object-cover brightness-75  -z-1 "
          src="/images/homepage_header_4.webp"
          alt="Summer View of the Stone Ducky Patio"
          fill
          priority={true}
        />

        <div className="lg:min-h-[75dvh] min-h-[75svh] flex flex-col gap-8 items-center justify-around z-40">
          <h2 className="text-4xl lg:text-6xl lg:w-1/3 text-center px-4 py-2 text-white   ">
            Inspired Dining with an Ocean View
          </h2>
          <ScrollButton />
        </div>
      </header>

      <section
        id="about-section"
        className="w-full py-12 flex flex-col items-center justify-center bg-whiteBG"
      >
        <div className="flex flex-col lg:min-h-[500px] lg:grid lg:grid-cols-2 w-[90%] m-auto lg:gap-8 items-center justify-between ">
          <FadeInImageContainer className=" min-h-[250px]  w-[90%] m-auto lg:w-full">
            <Image
              src="/images/mushroom_fritter_soup.webp"
              alt="Mushroom Fritter Soup"
              height={400}
              width={600}
              className="object-cover "
              lazy="true"
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

      <section className="lg:w-[95%] lg:m-auto">
        <PopularDishes />
      </section>
      <section className="lg:w-[95%] lg:m-auto">
        <Visit />
      </section>
      <section className=" flex flex-col w-full lg:w-[95%] lg:m-auto lg:grid  lg:grid-cols-2 bg-richNavy">
        <div className="min-h-[500px] w-[95%] lg:w-full  text-whiteBG flex flex-col items-center justify-around m-auto lg:gap-4">
          <h2 className="text-2xl lg:text-4xl text-center">
            Large Groups & Catering
          </h2>
          <p className="lg:text-xl text-center lg:w-[75%] font-semibold w-[95%]">
            Host your next event with Stone Ducky. Whether it is here or there
            we'll make sure to make your next event a memorable one.
          </p>
          <div className="grid grid-rows-2 place-items-center lg:grid-cols-2 gap-4 w-[95%] ">
            <button className="btn btn-mutedOrange w-full " aria-label="Book a party">
              <Link href="/groups">
                <span>Book a Party</span>
              </Link>
            </button>
            <button className="btn btn-tealGreen  w-full " aria-label="Book catering">
              <Link href="/groups">
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
            src="/images/ducky_whales-min.webp"
            alt="Whales"
            fill
            className="object-contain lg:object-cover"
            lazy="true"
          />
        </FadeInImageContainer>
      </section>

      <section className="flex flex-col-reverse items-center justify-center lg:w-[95%] lg:m-auto lg:grid lg:grid-cols-2 bg-tealGreen">
        <FadeInImageContainer
          className="relative h-[400px] lg:min-h-[500px] w-[90%] m-auto lg:w-full"
          delay={0.5}
        >
          <Image
            src="/images/shareables_birds_eye.webp"
            alt="Birds eye view of entrees, appetizers, soups and cocktails"
            fill
            className="object-contain lg:object-cover"
            lazy="true"
          />
        </FadeInImageContainer>

        <div className="min-h-[400px] lg:min-h-[500px]   text-whiteBG flex flex-col items-center justify-around lg:justify-center lg:gap-12 text-center gap-4 w-[95%] m-auto">
          <h2 className="text-2xl lg:text-4xl">Updates & Happenings</h2>
          <p className="lg:w-2/3 text-center font-semibold">
            Explore Bay Bulls and Savor the Stone Ducky Experience – Check Out
            Our Blog for the Latest!
          </p>

          <button
            className="btn btn-richNavy w-full lg:w-1/"
            aria-label="Read more about our blog"
          >
            <Link href="/blog">
              <span>Get in the Know</span>
            </Link>
          </button>
        </div>
      </section>
      {/* <section className="relative w-full m-auto h-[100px] ">
        <Image
          src="/images/flower_pattern.png"
          alt="Duck Feet"
          fill
          loading="lazy"
          className="object-cover"
        />
      </section> */}
    </main>
  );
}
