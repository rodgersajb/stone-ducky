import { getPost } from "../../../../lib/api";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Image from "next/image";

export async function generateMetadata({ params }) {
  const { slug } = params;

  // Fetch the post data
  const post = await getPost(slug);

  if (!post) {
    return {
      title: "Post Not Found",
      description: "The post you are looking for does not exist.",
    };
  }

  // Return metadata using SEO fields and featured image
  return {
    title: post.seoMetaTitle || post.title,
    description: post.seoMetaDescription || post.summary,
    openGraph: {
      images: [
        {
          url: post.featuredImage?.url || "",
          alt: post.featuredImage?.description || post.title,
        },
      ],
    },
  };
}

export default async function PostPage({ params }) {
  const { slug } = params;

  // Fetching blog post data
  const post = await getPost(slug);
 

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <main>
     
      <header className="h-[40svh] lg:h-[40dvh] w-full relative flex flex-col items-center justify-center z-20 gap-4">
        <Image
          src="/images/whales_houses_duck.webp"
          alt="A corner inside Stone Ducky restaurant with a whale, colorful houses and the Stone Ducky Logo displayed on the wall."
          fill
          className="object-cover -z-1 brightness-75"
        />
      </header>

     
      <article className="max-w-3xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-6">{post.title}</h1>

        
        {post.featuredImage && (
          <Image
            src={post.featuredImage.url}
            alt={post.featuredImage.description || post.title}
            width={600}
            height={800}
            className="w-full h-auto rounded-lg mb-6"
          />
        )}

        <div className="prose prose-lg flex flex-col gap-4 max-w-none">
          {post.body?.json
            ? documentToReactComponents(post.body.json)
            : "No content available for this post."}
        </div>
      </article>
    </main>
  );
}

export const revalidate = 60; // Revalidate this page every 60 seconds
