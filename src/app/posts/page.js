import Image from "next/image";
import Link from "next/link";
import { getAllPosts } from "../../../lib/api";


export default async function Blog() {
  const posts = await getAllPosts();
  console.log(posts, "posts");

  return (
    <main className="flex flex-col gap-8">
      <header className="h-svh lg:h-dvh w-full relative">

        <Image src="/images/whales_houses_duck.webp" alt="A corner inside Stone Ducky restaurant with a whale, colorful houses and the Stone Ducky Logo displayed on the wall." fill className="object-cover" />
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
              />
              <div className="flex-1 p-6">
                <Link href={`/posts/${post.slug}`}>
                  <h3 className="text-2xl font-bold leading-tight text-duckyOrange py-4">
                    {post.title}
                  </h3>
                </Link>
                <article className="max-w-none text-zinc-500 mt-4 mb-2 text-sm dark:text-zinc-400">
                  {post.summary || "Read more about this topic!"}
                </article>
                <div className="flex justify-end">
                  <Link
                    className="inline-flex h-10 items-center justify-center text-sm font-medium"
                    href={`/posts/${post.slug}`}
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
