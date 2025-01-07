import Image from "next/image";

export default function VisitUs() {
  return (
    <section className="h-dvh grid lg:grid-cols-2 gap-8 place-items-center bg-whiteBG w-full m-auto lp-2 pt-4 lg:p-8 ">
      <div className=" h-full flex flex-col items-center justify-around py-4 lg:justify-center text-center bg-duck_tracks bg-cover bg-no-repeat  gap-8  bg-warmBeige w-[95%] m-auto -z-1 border-2 border-duckyOrange ">
        <div className=" z-10 relative ">
          <h2 className="text-4xl lg:text-6xl relative pb-2 ">
            Visit Us
            <span className="absolute bottom-0 left-0 ">
              <Image
                src="/images/orange-highlighter.png"
                alt="Squiggle"
                height={40}
                width={300}
              />
            </span>
          </h2>
        </div>

        <div className="font-semibold  lg:text-xl">
          <p>56 St Johns Rd</p>
          <p>Bay Bulls, NL A0A 1C0</p>
          <p>(709) 334-3825</p>
        </div>

        <div className="font-semibold  lg:text-xl">
          <p>Tuesday - Thursday</p>
          <p>11:00 am - 8:00 pm</p>
        </div>
        <div className="z-10 font-semibold  lg:text-xl">
          <p>Friday - Sunday</p>
          <p>11:00 am - 10:00 pm</p>
        </div>
        <div className="font-semibold flex flex-col items-center gap-4 lg:text-xl">
          <Image src="/images/duck_sleepy.png" alt="Sleepy Duck" height={100} width={100} />
          <p>Closed Mondays</p>
        </div>
        <div className="flex lg:flex-row flex-col gap-8 z-10">
          <button className="border-2 rounded py-4 px-8 border-charcoal bg-charcoal text-whiteBG">
            Reserve a Table
          </button>
          <button className="border-2 rounded py-4 px-8 border-duckyOrange bg-duckyOrange text-whiteBG">
            Order Online
          </button>
        </div>
      </div>

      <figure className=" relative h-full w-full ">
        <Image
          className=" object-cover"
          src="/images/shareables_birds_eye.webp"
          alt="Winter Patio View"
          fill
        />
      </figure>
    </section>
  );
}
