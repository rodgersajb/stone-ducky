import Image from "next/image";
import Link from "next/link";
import { getAllPosts } from "../../../lib/api";

export default async function Blog() {
  const posts = await getAllPosts();

  return (
    <main className="flex flex-col gap-8">
      <header className="h-[40svh] lg:h-[60dvh] w-full relative flex flex-col items-center justify-center z-20 gap-4">
        <Image
          src="/images/whales_houses_duck.webp"
          alt="A corner inside Stone Ducky restaurant with a whale, colorful houses and the Stone Ducky Logo displayed on the wall."
          fill
          priority={true}
          className="object-cover -z-1 brightness-75"
        />
        <h1 className="z-10 lg:text-6xl text-4xl text-whiteBG">Ducky Blog</h1>
        <h3 className="z-10 lg:text-2xl text-xl text-whiteBG font-semibold">
          What to Do on the Southern Shore
        </h3>
      </header>
      <div className="space-y-12 flex items-center justify-end w-[95%] m-auto pb-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.sys.id}
              className="h-full flex flex-col rounded-lg shadow-lg overflow-hidden"
            >
              <Image
                alt={post.featuredImage?.description || post.title}
                className="aspect-[4/3] object-cover w-full"
                height="263"
                src={post.featuredImage.url}
                width="350"
                lazy="true"
              />
              <div className="flex-1 p-6">
                <h3 className="text-2xl font-bold leading-tight text-mutedOrange py-4">
                  {post.title}
                </h3>

                <article className="max-w-none text-zinc-500 mt-4 mb-2 text-sm dark:text-zinc-400">
                  {post.summary || "Read more about this topic!"}
                </article>
                <button
                  className="flex justify-end w-full"
                  aria-label={`Read more about ${post.title}`}
                >
                  <Link
                    className="inline-flex h-10 items-center justify-center text-md  text-coolGray font-semibold "
                    href={`/posts/${post.slug}`}
                  >
                    <span>Read More →</span>
                  </Link>
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
