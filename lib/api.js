// Define the GraphQL fields for Stone Ducky Blog posts
const POST_GRAPHQL_FIELDS = `
  sys {
    id
  }
  title
  slug
  thumbnail {
    url
    description
  }
  featuredImage {
    url
    description
  }
  body {
    json
  }
  seoMetaTitle
  seoMetaDescription
  tags
  summary
`;

// Generic function to perform GraphQL queries
async function fetchGraphQL(query, preview = false) {
  try {
    const response = await fetch(
      `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${
            preview
              ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
              : process.env.CONTENTFUL_ACCESS_TOKEN
          }`,
        },
        body: JSON.stringify({ query }),
      }
    );
    const data = await response.json();
    console.log("GraphQL Response:", data); // Log the response for debugging
    if (data.errors) {
      console.error("GraphQL Errors:", data.errors);
    }
    return data;
  } catch (error) {
    console.error("Fetch Error:", error);
    return null;
  }
}

// Extract blog post entries from the GraphQL response
function extractPostEntries(fetchResponse) {
  return fetchResponse?.data?.stoneDuckyBlogCollection?.items || [];
}

// Fetch all blog posts
export async function getAllPosts() {
  const query = `
    query {
      stoneDuckyBlogCollection(order: sys_publishedAt_DESC, limit: 10) {
        items {
          ${POST_GRAPHQL_FIELDS}
        }
      }
    }
  `;
  const response = await fetchGraphQL(query);
  return extractPostEntries(response);
}

// Fetch a single blog post by its slug
export async function getPost(slug, isDraftMode = false) {
  const query = `
    query {
      stoneDuckyBlogCollection(where: { slug: "${slug}" }, limit: 1, preview: ${isDraftMode}) {
        items {
          ${POST_GRAPHQL_FIELDS}
        }
      }
    }
  `;
  const response = await fetchGraphQL(query, isDraftMode);
  return extractPostEntries(response)[0] || null;
}
