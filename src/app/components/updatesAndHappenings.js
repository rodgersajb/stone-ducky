import Image from "next/image";
import Link from "next/link";
import FadeInImageContainer from "./fadeInImageContainer";

export default function UpdatesAndHappenings() {
    return (
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
            className="btn btn-richNavy w-full lg:w-1/3"
            aria-label="Read more about our blog"
          >
            <Link href="/blog">
              <span>Get in the Know</span>
            </Link>
          </button>
        </div>
      </section>
    );
}