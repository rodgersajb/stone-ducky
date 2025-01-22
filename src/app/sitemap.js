import { getAllPosts } from "../../lib/api";

export default async function sitemap() {
  //   const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
  const baseUrl = "https://stoneducky.ca";
  // Static pages
  const navLinks = [
    { label: "Menu", href: "/menu" },
    { label: "Group Bookings", href: "/groups" },
    { label: "Catering", href: "/catering" },
    { label: "Contact", href: "/contact" },
    { label: "Blog", href: "/posts" },
  ];

  const currentDate = new Date();

  const staticPages = navLinks.map((link) => ({
    url: `${baseUrl}${link.href}`,
    lastModified: currentDate,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  // Dynamic blog posts
  const posts = await getAllPosts();
  const blogPages = posts.map((post) => ({
    url: `${baseUrl}/posts/${post.slug}`,
    lastModified: currentDate,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticPages, ...blogPages];
}
