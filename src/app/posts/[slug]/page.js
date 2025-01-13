import { getPost } from "../../../../lib/api";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export default async function PostPage({ params }) {
  const { slug } = await params;

  const post = await getPost(slug);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <article className="max-w-3xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-6">{post.title}</h1>
      {post.featuredImage && (
        <img
          src={post.featuredImage.url}
          alt={post.featuredImage.description || post.title}
          className="w-full h-auto rounded-lg mb-6"
        />
      )}
      <div className="prose prose-lg max-w-none">
        {post.body?.json
          ? documentToReactComponents(post.body.json)
          : "No content available for this post."}
      </div>
    </article>
  );
}

export const revalidate = 60; // Revalidate this page every 60 seconds
