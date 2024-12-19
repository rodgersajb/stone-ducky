import { NextResponse } from "next/server";
import { createClient } from "contentful";

export async function GET() {
  try {
    const client = createClient({
      space: process.env.CONTENTFUL_SPACE_ID,
      environment: process.env.CONTENTFUL_ENVIRONMENT,
      accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
    });

    const response = await client.getEntries({
      content_type: process.env.CONTENTFUL_CONTENT_TYPE,
    });
    console.log(response, "API RESPONSE");
    return NextResponse.json(response);
  } catch (error) {
    console.error("Error fetching entries:", error);
    return NextResponse.json(
      { error: "Failed to fetch entries" },
      { status: 500 }
    );
  }
}
